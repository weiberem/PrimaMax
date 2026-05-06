"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Pricing() {
  const { t } = useLang();
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.pricing.items.map((item) => (
            <article
              key={item.service}
              className="reveal flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.service}
                </h3>
                {"comingSoon" in item && item.comingSoon && (
                  <span className="inline-flex shrink-0 items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    {t.pricing.comingSoon}
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-sm text-slate-600">{item.shortDesc}</p>

              <div className="mt-4 rounded-lg bg-primary-50 px-3 py-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-primary-700">
                    {t.pricing.priceLabel}
                  </span>
                  <span className="text-lg font-bold text-primary-800">
                    {item.price}
                  </span>
                </div>
                <div className="mt-0.5 flex items-baseline justify-between gap-2 text-xs text-primary-700/80">
                  <span>{t.pricing.minLabel}</span>
                  <span>{item.min}</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.pricing.includesLabel}
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                  {item.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {"pickup" in item && item.pickup && (
                <div className="mt-4 rounded-lg border border-primary-200 bg-primary-50/60 px-3 py-2 text-xs text-primary-800">
                  <span className="font-semibold">
                    {t.pricing.pickupLabel}:
                  </span>{" "}
                  {item.pickup}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="reveal mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">
            {t.pricing.travelTitle}
          </h3>
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
