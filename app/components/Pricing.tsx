"use client";

import { useLang } from "../i18n/LanguageProvider";

const ICONS: { emoji: string; tone: "blue" | "sky" | "indigo" | "slate" }[] = [
  { emoji: "🧽", tone: "blue" }, // Reinigung
  { emoji: "✨", tone: "indigo" }, // Endreinigung
  { emoji: "🏠", tone: "sky" }, // Airbnb
  { emoji: "🧺", tone: "blue" }, // Haushaltshilfe
  { emoji: "🪡", tone: "indigo" }, // Nähservice einfach
  { emoji: "🧵", tone: "sky" }, // Nähservice Outdoor
  { emoji: "🌿", tone: "slate" }, // Gartenarbeit
  { emoji: "🎨", tone: "slate" }, // Malerarbeiten
  { emoji: "🪜", tone: "slate" }, // Treppenhausreinigung
];

const TONE_CLASSES: Record<string, string> = {
  blue: "bg-primary-100 text-primary-700",
  sky: "bg-sky-100 text-sky-700",
  indigo: "bg-indigo-100 text-indigo-700",
  slate: "bg-slate-100 text-slate-600",
};

export default function Pricing() {
  const { t } = useLang();
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.pricing.items.map((item, idx) => {
            const icon = ICONS[idx] ?? ICONS[0];
            return (
              <article
                key={item.service}
                className="reveal relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {"comingSoon" in item && item.comingSoon && (
                  <span className="absolute right-4 top-4 inline-flex shrink-0 items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    {t.pricing.comingSoon}
                  </span>
                )}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start gap-3 pr-20">
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl ${TONE_CLASSES[icon.tone]}`}
                      aria-hidden
                    >
                      {icon.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold leading-snug text-slate-900">
                        {item.service}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.shortDesc}
                  </p>

                  <div className="mt-auto pt-4">
                    <div className="rounded-lg bg-primary-50 px-3 py-2.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                          {t.pricing.priceLabel}
                        </span>
                        <span className="text-base font-bold text-primary-800">
                          {item.price}
                        </span>
                      </div>
                      <div className="mt-0.5 flex items-baseline justify-between gap-2 text-xs text-primary-700/80">
                        <span>{t.pricing.minLabel}</span>
                        <span>{item.min}</span>
                      </div>
                    </div>

                    {"pickup" in item && item.pickup && (
                      <div className="mt-3 flex items-center gap-2 rounded-lg border border-primary-200 bg-primary-50/60 px-3 py-2 text-xs text-primary-800">
                        <span aria-hidden>🚐</span>
                        <span>{item.pickup}</span>
                      </div>
                    )}
                  </div>
                </div>

                <details className="group border-t border-slate-100">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:px-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {t.pricing.includesLabel}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400 transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <ul className="space-y-1.5 px-5 pb-5 pt-1 text-sm text-slate-700 sm:px-6 sm:pb-6">
                    {item.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700"
              aria-hidden
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2V9z" />
              </svg>
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              {t.pricing.travelTitle}
            </h3>
          </div>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.pricing.travelRules.map((rule) => (
              <li
                key={rule.label}
                className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 text-sm ${
                  "positive" in rule && rule.positive
                    ? "border-primary-200 bg-white"
                    : "border-amber-200 bg-amber-50/50"
                }`}
              >
                <span
                  className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    "positive" in rule && rule.positive
                      ? "bg-primary-100 text-primary-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                  aria-hidden
                >
                  {"positive" in rule && rule.positive ? "✓" : "i"}
                </span>
                <div>
                  <div className="font-medium text-slate-800">{rule.label}</div>
                  <div className="text-slate-600">{rule.value}</div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">{t.pricing.travelNote}</p>
        </div>
      </div>
    </section>
  );
}
