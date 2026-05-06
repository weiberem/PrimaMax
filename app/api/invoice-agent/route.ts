import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `Du bist ein hilfreicher Rechnungsassistent für PrimaMax, einen Reinigungsservice in der Region Interlaken. Du hilfst den Betreibern, professionelle Rechnungen zu erstellen. Wenn der Betreiber dir sagt was gemacht wurde, erstellst du eine strukturierte Rechnung. Du fragst nach was du brauchst: Kundenname, Adresse, Datum der Leistung, erbrachte Leistungen mit Stunden, allfällige Materialkosten. Du kannst Korrekturen entgegennehmen. Antworte immer auf Deutsch. Wenn du genug Infos hast, generierst du die Rechnung als JSON mit diesem Format:
{
  invoice_number: string (Format: PM-YYYY-NNN),
  date: string,
  due_date: string (30 Tage nach Rechnungsdatum),
  customer: { name, address, city, zip },
  items: [{ description, hours, rate, total }],
  subtotal: number,
  total: number,
  notes: string
}
Weise immer darauf hin wenn du eine Rechnung als JSON ausgibst, indem du es mit <<<INVOICE_JSON>>> markierst.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

type Body = {
  password?: string;
  messages?: ChatMessage[];
  invoiceNumber?: string;
};

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Der Rechnungsassistent ist momentan nicht verfügbar (kein API-Schlüssel)." },
      { status: 503 }
    );
  }

  const expected = process.env.INVOICE_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "INVOICE_PASSWORD ist nicht gesetzt." },
      { status: 503 }
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (typeof body.password !== "string" || body.password !== expected) {
    return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const sanitized: ChatMessage[] = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 8000) }))
    .slice(-30);

  if (sanitized.length === 0 || sanitized[sanitized.length - 1].role !== "user") {
    return NextResponse.json(
      { error: "Letzte Nachricht muss vom Benutzer stammen." },
      { status: 400 }
    );
  }

  const invoiceHint =
    typeof body.invoiceNumber === "string" && body.invoiceNumber.trim()
      ? `\n\nVerwende für die nächste Rechnung die Rechnungsnummer: ${body.invoiceNumber.trim()}.`
      : "";

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const completion = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1500,
      system: SYSTEM_PROMPT + invoiceHint,
      messages: sanitized,
    });

    const text = completion.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    if (!text) {
      return NextResponse.json(
        { error: "Keine Antwort erhalten. Bitte erneut versuchen." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("Invoice agent error", err);
    return NextResponse.json(
      { error: "Der Rechnungsassistent ist momentan nicht erreichbar." },
      { status: 502 }
    );
  }
}
