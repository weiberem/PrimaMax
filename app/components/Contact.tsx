"use client";

import { useState } from "react";
import WhatsAppButton, { WHATSAPP_PHONE_PLACEHOLDER } from "./WhatsAppButton";
import { useLang } from "../i18n/LanguageProvider";

// TODO: Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
const CONTACT_EMAIL = "info@primamax.ch";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(t.contact.errorGeneric);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.contact.errorNetwork);
    }
  };

  return (
    <section id="contact" className="section bg-primary-50/40">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 items-start">
          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="name">
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="input"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div>
                <label className="label" htmlFor="contact">
                  {t.contact.contactLabel}
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  className="input"
                  placeholder={t.contact.contactPlaceholder}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="service">
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="service"
                  name="service"
                  className="input"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    {t.contact.servicePlaceholder}
                  </option>
                  {t.contact.services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label" htmlFor="datetime">
                  {t.contact.datetimeLabel}
                </label>
                <input
                  id="datetime"
                  name="datetime"
                  className="input"
                  placeholder={t.contact.datetimePlaceholder}
                />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="message">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="input min-h-[140px] resize-y"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? t.contact.submitting : t.contact.submit}
            </button>

            {status === "success" && (
              <div className="rounded-lg border border-primary-200 bg-primary-50 p-4 text-sm text-primary-800">
                {t.contact.success}
              </div>
            )}
            {status === "error" && errorMsg && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {errorMsg}
              </div>
            )}
          </form>

          <aside className="reveal lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-2.55a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1z"/></svg>
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">
                    {t.contact.phoneLabel}
                  </div>
                  <div className="text-slate-800 font-medium">
                    {WHATSAPP_PHONE_PLACEHOLDER}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">
                    {t.contact.emailLabel}
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-slate-800 font-medium hover:text-primary-700"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">
                    {t.contact.regionLabel}
                  </div>
                  <div className="text-slate-800 font-medium">
                    {t.contact.regionValue}
                  </div>
                  <div className="text-xs text-slate-500">{t.contact.regionList}</div>
                </div>
              </div>
            </div>

            <WhatsAppButton className="w-full" label={t.contact.whatsappCta} />

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {t.contact.mapTitle}
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/place/Interlaken,+Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-primary-700 hover:underline"
                >
                  {t.contact.mapOpenInGoogle} ↗
                </a>
              </div>
              <iframe
                title={t.contact.mapTitle}
                src="https://www.google.com/maps?q=Interlaken+B%C3%B6deli+Switzerland&z=12&output=embed"
                className="aspect-[4/3] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
