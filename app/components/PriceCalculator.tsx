"use client";

import { useMemo, useState } from "react";
import {
  WHATSAPP_PHONE_PLACEHOLDER,
  buildWhatsAppLink,
} from "./WhatsAppButton";

const SERVICE_OPTIONS = [
  "Reinigung",
  "Endreinigung",
  "Haushaltshilfe",
  "Bügeln / Wäsche",
  "Nähservice (einfach)",
  "Nähservice (Outdoor)",
];

const FREQUENCIES = [
  { value: "einmalig", label: "Einmalig" },
  { value: "woechentlich", label: "Wöchentlich" },
  { value: "monatlich", label: "Monatlich" },
];

type ApiResponse = { estimate?: string; error?: string };

function renderEstimate(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-primary-700">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function PriceCalculator() {
  const [description, setDescription] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [frequency, setFrequency] = useState("einmalig");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleService = (s: string) => {
    setServices((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]
    );
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, services, area, rooms, frequency }),
      });
      const data = (await res.json()) as ApiResponse;
      if (!res.ok || !data.estimate) {
        setError(
          data.error ??
            "Der Preisrechner ist momentan nicht erreichbar. Bitte kontaktieren Sie uns direkt."
        );
      } else {
        setResult(data.estimate);
      }
    } catch {
      setError(
        "Verbindungsfehler. Bitte kontaktieren Sie uns direkt per WhatsApp oder Formular."
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappHref = useMemo(() => {
    const summary = [
      "Hallo PrimaMax, ich interessiere mich für eine Offerte.",
      services.length ? `Leistungen: ${services.join(", ")}` : null,
      area ? `Fläche: ${area} m²` : null,
      rooms ? `Räume: ${rooms}` : null,
      `Häufigkeit: ${frequency}`,
      description ? `Details: ${description}` : null,
      result ? `\nGenerierte Schätzung:\n${result.replace(/\*\*/g, "")}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    return buildWhatsAppLink(WHATSAPP_PHONE_PLACEHOLDER, summary);
  }, [services, area, rooms, frequency, description, result]);

  return (
    <section id="calculator" className="section bg-primary-50/40">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">KI-Preisrechner</h2>
          <p className="section-subtitle">
            Beschreiben Sie kurz, was Sie brauchen – wir schätzen Ihnen
            unverbindlich eine Preisspanne. Schnell, einfach und transparent.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 items-start">
          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5"
          >
            <div>
              <label className="label" htmlFor="desc">
                Was brauchen Sie?
              </label>
              <textarea
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="z.B. Endreinigung 3.5-Zimmer-Wohnung in Matten, mit Backofen und Fenstern …"
                className="input min-h-[120px] resize-y"
              />
            </div>

            <div>
              <span className="label">Leistungen</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICE_OPTIONS.map((s) => {
                  const active = services.includes(s);
                  return (
                    <label
                      key={s}
                      className={`cursor-pointer select-none rounded-lg border px-3 py-2 text-sm transition ${
                        active
                          ? "bg-primary-600 border-primary-600 text-white"
                          : "bg-white border-slate-300 text-slate-700 hover:border-primary-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={active}
                        onChange={() => toggleService(s)}
                      />
                      {s}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="area">
                  Fläche (m²)
                </label>
                <input
                  id="area"
                  inputMode="numeric"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="z.B. 85"
                  className="input"
                />
              </div>
              <div>
                <label className="label" htmlFor="rooms">
                  Anzahl Räume / Zimmer
                </label>
                <input
                  id="rooms"
                  inputMode="numeric"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="z.B. 3.5"
                  className="input"
                />
              </div>
            </div>

            <div>
              <span className="label">Häufigkeit</span>
              <div className="flex flex-wrap gap-2">
                {FREQUENCIES.map((f) => {
                  const active = frequency === f.value;
                  return (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setFrequency(f.value)}
                      className={`rounded-full border px-4 py-1.5 text-sm transition ${
                        active
                          ? "bg-primary-600 border-primary-600 text-white"
                          : "bg-white border-slate-300 text-slate-700 hover:border-primary-400"
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Berechne …" : "Preis schätzen lassen"}
            </button>
          </form>

          <div className="reveal lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 min-h-[180px]">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Ergebnis
              </h3>
              {!result && !error && !loading && (
                <p className="mt-3 text-slate-500 text-sm">
                  Füllen Sie das Formular aus, um eine unverbindliche
                  Preisspanne zu erhalten.
                </p>
              )}
              {loading && (
                <div className="mt-4 flex items-center gap-3 text-slate-600 text-sm">
                  <span className="inline-block h-3 w-3 rounded-full bg-primary-500 animate-pulse" />
                  Berechne Ihre Schätzung …
                </div>
              )}
              {error && (
                <p className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </p>
              )}
              {result && (
                <div className="mt-3 text-slate-800 text-sm whitespace-pre-wrap leading-relaxed">
                  {renderEstimate(result)}
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-orange-300 bg-orange-50 p-4 text-sm text-orange-900">
              ⚠️ Dies ist ein automatisch generierter Schätzpreis. Die
              tatsächlichen Kosten können abweichen. Bitte kontaktieren Sie uns
              für ein verbindliches Angebot.
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              Jetzt anfragen via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
