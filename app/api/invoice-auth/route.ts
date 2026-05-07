import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const expected = process.env.INVOICE_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "INVOICE_PASSWORD ist nicht gesetzt." },
      { status: 503 }
    );
  }

  let body: { password?: string };
  try {
    body = (await req.json()) as { password?: string };
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (typeof body.password !== "string" || body.password !== expected) {
    return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    config: {
      phone: process.env.COMPANY_PHONE ?? "",
      iban: process.env.COMPANY_IBAN ?? "",
      twint: process.env.COMPANY_TWINT ?? "",
      mwstExempt: process.env.MWST_EXEMPT === "true",
    },
  });
}
