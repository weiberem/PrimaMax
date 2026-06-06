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
        <p className="mt-2 text-sm text-slate-500">
          {t.legal.lastUpdatedLabel}: {t.legal.lastUpdatedValue}
        </p>

        <div className="mt-8 max-w-2xl space-y-8 text-slate-700">
          <Section title={t.legal.providerLabel}>
            <address className="not-italic leading-relaxed">
              {t.legal.providerBody.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </Section>

          <Section title={t.legal.contactLabel}>
            <p className="leading-relaxed">
              {lang === "de" ? "Telefon / WhatsApp" : "Phone / WhatsApp"}:{" "}
              <a
                href="tel:+41779732071"
                className="text-primary-700 hover:underline"
              >
                +41 77 973 20 71
              </a>
              <br />
              {lang === "de" ? "E-Mail" : "Email"}:{" "}
              <a
                href="mailto:info@primamax.ch"
                className="text-primary-700 hover:underline"
              >
                info@primamax.ch
              </a>
              <br />
              {lang === "de" ? "Web" : "Web"}:{" "}
              <a
                href="https://primamax.ch"
                className="text-primary-700 hover:underline"
              >
                primamax.ch
              </a>
            </p>
          </Section>

          <Section title={t.legal.legalFormLabel}>
            <p className="leading-relaxed">{t.legal.legalFormBody}</p>
          </Section>

          <Section title={t.legal.vatLabel}>
            <p className="leading-relaxed">{t.legal.vatBody}</p>
          </Section>

          <Section title={t.legal.responsibleLabel}>
            <p className="leading-relaxed">{t.legal.responsibleBody}</p>
          </Section>

          <Section title={t.legal.disclaimerLabel}>
            <p className="leading-relaxed">{t.legal.disclaimerBody}</p>
          </Section>

          <Section title={t.legal.linkDisclaimerLabel}>
            <p className="leading-relaxed">{t.legal.linkDisclaimerBody}</p>
          </Section>

          <Section title={t.legal.copyrightLabel}>
            <p className="leading-relaxed">{t.legal.copyrightBody}</p>
          </Section>

          <Section title={t.legal.applicableLawLabel}>
            <p className="leading-relaxed">{t.legal.applicableLawBody}</p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
