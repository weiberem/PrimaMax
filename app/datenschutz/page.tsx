"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function DatenschutzPage() {
  const { t, lang } = useLang();
  return (
    <main className="min-h-screen bg-white">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary-700"
        >
          ← {lang === "de" ? "Zurück zur Website" : "Back to website"}
        </a>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t.legal.privacyTitle}
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          {t.legal.privacyLastUpdated}: 06.05.2026
        </p>

        <div className="mt-8 max-w-2xl space-y-6 text-slate-700">
          {t.legal.privacySections.map((s) => (
            <section key={s.title}>
              <h2 className="text-base font-semibold uppercase tracking-wide text-slate-900">
                {s.title}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section>
            <h2 className="text-base font-semibold uppercase tracking-wide text-slate-900">
              {t.legal.privacyContactLabel}
            </h2>
            <p className="mt-2 leading-relaxed">
              {t.legal.privacyContactBody}
              <br />
              <a
                href="mailto:info@primamax.ch"
                className="text-primary-700 hover:underline"
              >
                info@primamax.ch
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
