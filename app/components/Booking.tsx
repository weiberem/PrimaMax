"use client";

import { useLang } from "../i18n/LanguageProvider";

// TODO: Replace with Cal.com or Calendly embed when ready
export default function Booking() {
  const { t } = useLang();
  return (
    <section id="booking" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.booking.title}</h2>
        </div>

        <div className="reveal mt-8 rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 p-8 sm:p-12 text-white shadow-md overflow-hidden relative">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-primary-300/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                <span className="h-2 w-2 rounded-full bg-primary-200" />
                {t.booking.badge}
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">
                {t.booking.heading}
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed max-w-xl">
                {t.booking.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn-primary !bg-white !text-primary-700 hover:!bg-primary-50"
                >
                  {t.booking.contactCta}
                </a>
                <a
                  href="https://wa.me/41XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  {t.booking.whatsappCta}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-white/40 bg-white/10 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <p className="mt-3 text-sm text-white/85">{t.booking.placeholder}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
