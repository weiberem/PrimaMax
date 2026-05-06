"use client";

import { useMemo, useState } from "react";
import {
  WHATSAPP_PHONE_PLACEHOLDER,
  buildWhatsAppLink,
} from "./WhatsAppButton";
import { useLang } from "../i18n/LanguageProvider";

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
  const { t } = useLang();
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
        setError(data.error ?? t.contact.errorNetwork);
      } else {
        setResult(data.estimate);
      }
    } catch {
      setError(t.contact.errorNetwork);
    } finally {
      setLoading(false);
    }
  };

  const whatsappHref = useMemo(() => {
    const summary = [
      t.calculator.whatsappIntro,
      services.length
        ? `${t.calculator.serviceSummaryPrefix}: ${services.join(", ")}`
        : null,
      area ? `${t.calculator.areaSummaryPrefix}: ${area} m²` : null,
      rooms ? `${t.calculator.roomsSummaryPrefix}: ${rooms}` : null,
      `${t.calculator.frequencySummaryPrefix}: ${frequency}`,
      description
        ? `${t.calculator.detailsSummaryPrefix}: ${description}`
        : null,
      result
        ? `\n${t.calculator.estimateSummaryPrefix}:\n${result.replace(/\*\*/g, "")}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");
    return buildWhatsAppLink(WHATSAPP_PHONE_PLACEHOLDER, summary);
  }, [services, area, rooms, frequency, description, result, t]);

  return (
    <section id="calculator" className="section bg-primary-50/40">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="section-title">{t.calculator.title}</h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
              <span aria-hidden>🧪</span>
              {t.calculator.comingSoonBadge}
            </span>
          </div>
          <p className="section-subtitle">{t.calculator.subtitle}</p>
          <p className="mt-3 max-w-2xl rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
            {t.calculator.betaNote}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 items-start">
          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5"
          >
            <div>
              <label className="label" htmlFor="desc">
                {t.calculator.descriptionLabel}
              </label>
              <textarea
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t.calculator.descriptionPlaceholder}
                className="input min-h-[120px] resize-y"
              />
            </div>

            <div>
              <span className="label">{t.calculator.servicesLabel}</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {t.calculator.services.map((s) => {
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
                  {t.calculator.areaLabel}
                </label>
                <input
                  id="area"
                  inputMode="numeric"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="85"
                  className="input"
                />
              </div>
              <div>
                <label className="label" htmlFor="rooms">
                  {t.calculator.roomsLabel}
                </label>
                <input
                  id="rooms"
                  inputMode="numeric"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="3.5"
                  className="input"
                />
              </div>
            </div>

            <div>
              <span className="label">{t.calculator.frequencyLabel}</span>
              <div className="flex flex-wrap gap-2">
                {t.calculator.frequencies.map((f) => {
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
              {loading ? t.calculator.submitting : t.calculator.submit}
            </button>
          </form>

          <div className="reveal lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 min-h-[180px]">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {t.calculator.resultLabel}
              </h3>
              {!result && !error && !loading && (
                <p className="mt-3 text-slate-500 text-sm">
                  {t.calculator.resultEmpty}
                </p>
              )}
              {loading && (
                <div className="mt-4 flex items-center gap-3 text-slate-600 text-sm">
                  <span className="inline-block h-3 w-3 rounded-full bg-primary-500 animate-pulse" />
                  {t.calculator.calculating}
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

            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
              {t.calculator.disclaimer}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              {t.calculator.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
