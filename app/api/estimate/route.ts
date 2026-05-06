import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `Du bist ein freundlicher Preisrechner für PrimaMax, einen Reiniguns- und Haushaltshilfe-Service in der Region Interlaken/Bödeli, Schweiz. Basierend auf den Angaben des Kunden schätzt du den Preis in CHF. Preise: Reinigung ab CHF 45/h (mind. 2h), Haushaltshilfe ab CHF 40/h (mind. 2h), Nähservice ab CHF 35/h (mind. 1h), Outdoor-Nähen ab CHF 45/h. Anfahrt im Bödeli inklusive. Gib immer eine realistische Preisspanne an (z.B. 'CHF 90 – 135') und erkläre kurz warum. Antworte auf Deutsch. Sei freundlich und hilfsbereit. Format: Zuerst die Preisspanne fett, dann kurze Begründung in 2-3 Sätzen.`;

type Body = {
  description?: string;
  services?: string[];
  area?: string;
  rooms?: string;
  frequency?: string;
};

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Der Preisrechner ist momentan nicht verfügbar. Bitte kontaktieren Sie uns direkt.",
      },
      { status: 503 }
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const description = (body.description ?? "").trim().slice(0, 2000);
  const services = Array.isArray(body.services)
    ? body.services.filter((s) => typeof s === "string").slice(0, 10)
    : [];
  const area = (body.area ?? "").toString().trim().slice(0, 50);
  const rooms = (body.rooms ?? "").toString().trim().slice(0, 50);
  const frequency = (body.frequency ?? "").toString().trim().slice(0, 50);

  if (!description && services.length === 0) {
    return NextResponse.json(
      { error: "Bitte geben Sie zumindest eine Beschreibung oder Leistung an." },
      { status: 400 }
    );
  }

  const userMessage = [
    `Leistungen: ${services.length ? services.join(", ") : "(keine ausgewählt)"}`,
    area ? `Fläche: ${area} m²` : null,
    rooms ? `Anzahl Räume: ${rooms}` : null,
    frequency ? `Häufigkeit: ${frequency}` : null,
    description ? `\nBeschreibung des Kunden:\n${description}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const completion = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const text = completion.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    if (!text) {
      return NextResponse.json(
        { error: "Keine Schätzung erhalten. Bitte erneut versuchen." },
        { status: 502 }
      );
    }

    return NextResponse.json({ estimate: text });
  } catch (err) {
    console.error("Anthropic API error", err);
    return NextResponse.json(
      {
        error:
          "Der Preisrechner ist momentan nicht erreichbar. Bitte kontaktieren Sie uns direkt per WhatsApp oder Formular.",
      },
      { status: 502 }
    );
  }
}
