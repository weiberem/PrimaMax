"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function FAQ() {
  const { t } = useLang();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="section bg-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-subtitle">{t.faq.subtitle}</p>
        </div>

        <div className="reveal mt-8 grid gap-3 sm:mt-10 lg:grid-cols-2">
          {t.faq.items.map((item, idx) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition open:shadow-md"
              {...(idx === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-5 py-4 text-left">
                <span className="text-base font-semibold text-slate-900">
                  {item.q}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-primary-600 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-700">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
