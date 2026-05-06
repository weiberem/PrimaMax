"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="container-x py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-700 font-bold">
              P
            </span>
            <span className="text-lg font-semibold tracking-tight">
              PrimaMax
            </span>
          </div>
          <p className="mt-3 text-sm text-primary-100/90 max-w-sm">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            {t.footer.quickAccess}
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-white">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">
                {t.nav.pricing}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                {t.nav.contact}
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-white">
                {t.nav.booking}
              </a>
            </li>
            <li>
              <a href="#calculator" className="hover:text-white">
                {t.nav.calculator}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            {t.footer.legal}
          </h4>
          {/* TODO: Replace with real Impressum / legal information */}
          <div className="mt-3 text-sm text-primary-100/85 leading-relaxed">
            PrimaMax<br />
            Aenderbergstrasse 19<br />
            3800 Matten bei Interlaken<br />
            E-Mail: info@primamax.ch<br />
            <span className="text-primary-200/70">{t.footer.legalText}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-100/80">
          <span>© {year} PrimaMax. {t.footer.rights}</span>
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{t.footer.madeWith}</span>
            <span aria-hidden className="opacity-60">·</span>
            <span className="text-primary-100/70">
              {t.footer.credit}:{" "}
              <span className="font-medium tracking-tight text-white/90">
                {t.footer.creditBrand}
              </span>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
