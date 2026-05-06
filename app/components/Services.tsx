"use client";

import { useLang } from "../i18n/LanguageProvider";

const EMOJIS = ["🧽", "🏠", "🧺", "🪡", "🌱"];

export default function Services() {
  const { t, lang } = useLang();
  const services = t.services.items;
  const ctaLabel = lang === "de" ? "Anfragen →" : "Inquire →";
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s, idx) => (
            <article key={s.title} className="reveal card flex h-full flex-col">
              <div className="flex items-start justify-between">
                <div className="text-4xl">{EMOJIS[idx] ?? "✨"}</div>
                {"comingSoon" in s && s.comingSoon && (
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    {t.services.comingSoon}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`#contact?service=${encodeURIComponent(s.title)}`}
                className="mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-primary-700 hover:text-primary-800"
              >
                {ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
