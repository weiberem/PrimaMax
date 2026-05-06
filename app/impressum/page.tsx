"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function ImpressumPage() {
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
          {t.legal.impressumTitle}
        </h1>

        <div className="mt-8 max-w-2xl space-y-6 text-slate-700">
          <section>
            <h2 className="text-base font-semibold uppercase tracking-wide text-slate-900">
              {t.legal.providerLabel}
            </h2>
            <p className="mt-2 leading-relaxed">
              PrimaMax<br />
              Aenderbergstrasse 19<br />
              3800 Matten bei Interlaken<br />
              Schweiz
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold uppercase tracking-wide text-slate-900">
              {t.legal.contactLabel}
            </h2>
            <p className="mt-2 leading-relaxed">
              E-Mail:{" "}
              <a
                href="mailto:info@primamax.ch"
                className="text-primary-700 hover:underline"
              >
                info@primamax.ch
              </a>
              <br />
              Web:{" "}
              <a
                href="https://primamax.ch"
                className="text-primary-700 hover:underline"
              >
                primamax.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold uppercase tracking-wide text-slate-900">
              {t.legal.responsibleLabel}
            </h2>
            <p className="mt-2 leading-relaxed">
              {t.legal.responsibleBody}
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold uppercase tracking-wide text-slate-900">
              {t.legal.disclaimerLabel}
            </h2>
            <p className="mt-2 leading-relaxed">{t.legal.disclaimerBody}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold uppercase tracking-wide text-slate-900">
              {t.legal.copyrightLabel}
            </h2>
            <p className="mt-2 leading-relaxed">{t.legal.copyrightBody}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
