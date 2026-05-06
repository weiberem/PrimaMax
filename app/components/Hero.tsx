"use client";

import { useLang } from "../i18n/LanguageProvider";
import {
  WHATSAPP_PHONE_PLACEHOLDER,
  buildWhatsAppLink,
} from "./WhatsAppButton";

export default function Hero() {
  const { t, lang } = useLang();
  const callHref = `tel:${WHATSAPP_PHONE_PLACEHOLDER.replace(/\s/g, "")}`;
  const waHref = buildWhatsAppLink(
    WHATSAPP_PHONE_PLACEHOLDER,
    lang === "de"
      ? "Hallo PrimaMax, ich hätte eine Anfrage."
      : "Hello PrimaMax, I have a request."
  );
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-white to-white" />
      <div className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-alpine-200/40 blur-3xl" />

      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 border border-primary-100 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            {t.hero.badge}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
            {t.hero.title1}{" "}
            <span className="text-primary-600">{t.hero.title2}</span>{" "}
            {t.hero.title3}{" "}
            <span className="text-primary-700">{t.hero.title4}</span>{" "}
            {t.hero.title5}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">{t.hero.subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={callHref}
              className="btn-secondary"
              aria-label={lang === "de" ? "Anrufen" : "Call"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-2.55a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1z" />
              </svg>
              {lang === "de" ? "Anrufen" : "Call"}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {t.hero.bullets.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckIcon /> {b}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-alpine-100 shadow-xl">
            <svg
              className="absolute inset-0 h-full w-full opacity-90"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dbeafe" />
                  <stop offset="100%" stopColor="#f8fafc" />
                </linearGradient>
                <linearGradient id="mtn1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#172554" />
                </linearGradient>
                <linearGradient id="mtn2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <rect width="400" height="300" fill="url(#sky)" />
              <circle cx="320" cy="70" r="32" fill="#ffffff" opacity="0.7" />
              <polygon points="0,220 80,120 160,200 240,90 320,180 400,140 400,300 0,300" fill="url(#mtn1)" />
              <polygon points="0,250 60,180 130,230 200,160 280,220 360,170 400,210 400,300 0,300" fill="url(#mtn2)" opacity="0.8" />
              <polygon points="60,120 80,90 100,120" fill="#ffffff" opacity="0.95" />
              <polygon points="220,90 240,55 260,90" fill="#ffffff" opacity="0.95" />
              <polygon points="300,150 320,125 340,150" fill="#ffffff" opacity="0.85" />
            </svg>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 backdrop-blur px-4 py-3 shadow-sm">
              <div className="text-sm font-semibold text-primary-700">
                {t.hero.region}
              </div>
              <div className="text-xs text-slate-600">{t.hero.regionList}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
