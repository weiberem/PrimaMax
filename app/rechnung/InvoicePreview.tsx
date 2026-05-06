"use client";

import type { Invoice, InvoiceConfig } from "./types";

type Props = {
  invoice: Invoice | null;
  config: InvoiceConfig;
};

function fmtCHF(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("de-CH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function fmtDate(s: string): string {
  if (!s) return "";
  // accept ISO or already-formatted German dates
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
  if (m) return `${m[3]}.${m[2]}.${m[1]}`;
  return s;
}

export default function InvoicePreview({ invoice, config }: Props) {
  if (!invoice) {
    return (
      <div className="invoice-preview-empty flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mb-4 text-slate-400"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 13h6M9 17h6M9 9h2" />
        </svg>
        <p className="font-medium">Noch keine Rechnung erstellt</p>
        <p className="mt-2 text-sm">
          Beschreiben Sie links was gemacht wurde – die Vorschau erscheint hier.
        </p>
      </div>
    );
  }

  const items = invoice.items ?? [];
  const c = invoice.customer ?? { name: "", address: "", city: "", zip: "" };

  return (
    <div className="invoice-document mx-auto w-full max-w-[820px] bg-white p-10 shadow-sm ring-1 ring-slate-200 print:shadow-none print:ring-0">
      <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="PrimaMax" className="h-10 w-auto" />
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
            RECHNUNG
          </h1>
          <dl className="mt-2 text-sm text-slate-600">
            <div className="flex gap-2">
              <dt className="font-medium">Rechnungsnr.:</dt>
              <dd>{invoice.invoice_number}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium">Datum:</dt>
              <dd>{fmtDate(invoice.date)}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium">Fällig bis:</dt>
              <dd>{fmtDate(invoice.due_date)}</dd>
            </div>
          </dl>
        </div>

        <div className="text-right text-sm text-slate-700">
          <div className="font-semibold text-slate-900">PrimaMax</div>
          <div>Region Interlaken / Bödeli</div>
          <div>info@primamax.ch</div>
          <div>primamax.ch</div>
          {config.phone && <div>Tel: {config.phone}</div>}
        </div>
      </div>

      <div className="mt-8">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Rechnungsempfänger
        </div>
        <div className="mt-2 text-sm text-slate-800">
          <div className="font-medium">{c.name || "—"}</div>
          {c.address && <div>{c.address}</div>}
          {(c.zip || c.city) && (
            <div>
              {c.zip} {c.city}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg ring-1 ring-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Leistung</th>
              <th className="px-4 py-2 text-right font-semibold">Stunden</th>
              <th className="px-4 py-2 text-right font-semibold">Ansatz</th>
              <th className="px-4 py-2 text-right font-semibold">Betrag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {items.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-center text-slate-400">
                  Keine Positionen
                </td>
              </tr>
            )}
            {items.map((it, idx) => (
              <tr key={idx} className="text-slate-800">
                <td className="px-4 py-2">{it.description}</td>
                <td className="px-4 py-2 text-right tabular-nums">
                  {Number.isFinite(it.hours) ? it.hours : "—"}
                </td>
                <td className="px-4 py-2 text-right tabular-nums">
                  CHF {fmtCHF(it.rate)}
                </td>
                <td className="px-4 py-2 text-right tabular-nums">
                  CHF {fmtCHF(it.total)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-slate-50 text-slate-900">
            <tr>
              <td colSpan={3} className="px-4 py-2 text-right font-medium">
                Zwischensumme
              </td>
              <td className="px-4 py-2 text-right font-medium tabular-nums">
                CHF {fmtCHF(invoice.subtotal)}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="px-4 py-3 text-right text-base font-bold">
                Total
              </td>
              <td className="px-4 py-3 text-right text-base font-bold tabular-nums">
                CHF {fmtCHF(invoice.total)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-8 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-medium text-slate-900">
          Bitte überweisen Sie den Betrag bis {fmtDate(invoice.due_date) || "—"} auf folgendes Konto:
        </p>
        <dl className="mt-2 grid grid-cols-[140px_1fr] gap-y-1">
          <dt className="text-slate-500">IBAN:</dt>
          <dd className="font-mono">{config.iban || "CH00 0000 0000 0000 0000 0"}</dd>
          <dt className="text-slate-500">Kontoinhaber:</dt>
          <dd>PrimaMax</dd>
          <dt className="text-slate-500">Zahlungsreferenz:</dt>
          <dd>{invoice.invoice_number}</dd>
        </dl>
      </div>

      {invoice.notes && (
        <div className="mt-4 text-sm text-slate-600">
          <span className="font-medium text-slate-800">Bemerkungen: </span>
          {invoice.notes}
        </div>
      )}

      <div className="mt-6 text-sm italic text-slate-600">
        Vielen Dank für Ihr Vertrauen in PrimaMax.
      </div>

      {config.mwstExempt && (
        <div className="mt-2 text-xs text-slate-500">
          Keine MWST, da Jahresumsatz unter CHF 100&apos;000.
        </div>
      )}

      {/* TODO: Add swiss-qr-bill library for real QR-Rechnung */}
      <div className="mt-10 border-t border-dashed border-slate-400 pt-6">
        <div className="grid grid-cols-[1fr_2fr] gap-6">
          <div className="rounded border border-slate-300 p-4 text-xs">
            <div className="font-semibold text-slate-700">Empfangsschein</div>
            <div className="mt-2 text-slate-500">Konto / Zahlbar an</div>
            <div className="font-mono text-slate-800">
              {config.iban || "CH00 0000 0000 0000 0000 0"}
            </div>
            <div className="text-slate-800">PrimaMax</div>
            <div className="mt-3 text-slate-500">Referenz</div>
            <div className="text-slate-800">{invoice.invoice_number}</div>
            <div className="mt-3 text-slate-500">Zahlbar durch</div>
            <div className="text-slate-800">{c.name || "—"}</div>
            <div className="text-slate-800">
              {c.zip} {c.city}
            </div>
            <div className="mt-4 flex items-end justify-between text-slate-500">
              <span>Währung</span>
              <span>Betrag</span>
            </div>
            <div className="flex items-end justify-between text-slate-800">
              <span>CHF</span>
              <span className="tabular-nums">{fmtCHF(invoice.total)}</span>
            </div>
          </div>

          <div className="rounded border border-slate-300 p-4 text-xs">
            <div className="font-semibold text-slate-700">Zahlteil</div>
            <div className="mt-2 flex gap-4">
              <div className="flex h-32 w-32 items-center justify-center rounded border border-dashed border-slate-400 text-center text-[10px] text-slate-500">
                QR-Code
                <br />
                (Platzhalter)
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <div className="text-slate-500">Währung / Betrag</div>
                  <div className="text-slate-800">
                    CHF {fmtCHF(invoice.total)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">Konto / Zahlbar an</div>
                  <div className="font-mono text-slate-800">
                    {config.iban || "CH00 0000 0000 0000 0000 0"}
                  </div>
                  <div className="text-slate-800">PrimaMax</div>
                </div>
                <div>
                  <div className="text-slate-500">Referenz</div>
                  <div className="text-slate-800">{invoice.invoice_number}</div>
                </div>
                <div>
                  <div className="text-slate-500">Zahlbar durch</div>
                  <div className="text-slate-800">{c.name || "—"}</div>
                  <div className="text-slate-800">
                    {c.zip} {c.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
