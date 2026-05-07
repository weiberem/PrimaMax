"use client";

import { useLang } from "../i18n/LanguageProvider";
import {
  WHATSAPP_PHONE_PLACEHOLDER,
  buildWhatsAppLink,
} from "./WhatsAppButton";

export default function StickyMobileCta() {
  const { t, lang } = useLang();
  const callHref = `tel:${WHATSAPP_PHONE_PLACEHOLDER.replace(/\s/g, "")}`;
  const waHref = buildWhatsAppLink(
    WHATSAPP_PHONE_PLACEHOLDER,
    lang === "de"
      ? "Hallo PrimaMax, ich hätte eine Anfrage."
      : "Hello PrimaMax, I have a request."
  );
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur md:hidden no-print">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={callHref}
          aria-label={lang === "de" ? "Anrufen" : "Call"}
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary-600 px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-2.55a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1z" />
          </svg>
          {lang === "de" ? "Anrufen" : "Call"}
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-whatsapp px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:brightness-110"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9z" />
          </svg>
          WhatsApp
        </a>
        <a
          href="#contact"
          aria-label={t.nav.cta}
          className="inline-flex items-center justify-center gap-1 rounded-full border border-primary-300 bg-white px-3 py-2.5 text-sm font-medium text-primary-700 hover:bg-primary-50"
        >
          {t.nav.cta}
        </a>
      </div>
    </div>
  );
}
