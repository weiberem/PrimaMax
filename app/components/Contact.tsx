"use client";

import { useState } from "react";
import WhatsAppButton, { WHATSAPP_PHONE_PLACEHOLDER } from "./WhatsAppButton";

// TODO: Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
const CONTACT_EMAIL = "info@primamax.ch";

const SERVICES = [
  "Reinigung",
  "Endreinigung",
  "Haushaltshilfe",
  "Nähservice",
  "Hauswartsarbeiten (bald)",
  "Anderes / Beratung",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
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
        setErrorMsg(
          "Das Formular konnte leider nicht gesendet werden. Bitte schreiben Sie uns direkt per E-Mail oder WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Verbindungsfehler. Bitte schreiben Sie uns direkt per E-Mail oder WhatsApp."
      );
    }
  };

  return (
    <section id="contact" className="section bg-primary-50/40">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">Kontakt</h2>
          <p className="section-subtitle">
            Schreiben Sie uns – wir melden uns in der Regel innerhalb von 24
            Stunden zurück. Schnell und unkompliziert geht es per WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 items-start">
          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="input"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="label" htmlFor="contact">
                  Telefon oder E-Mail
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  className="input"
                  placeholder="Telefon oder E-Mail"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="service">
                  Leistung
                </label>
                <select
                  id="service"
                  name="service"
                  className="input"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Bitte wählen …
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label" htmlFor="datetime">
                  Wunschtermin (Datum / Uhrzeit)
                </label>
                <input
                  id="datetime"
                  name="datetime"
                  className="input"
                  placeholder="z.B. 14.05.2026, vormittags"
                />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="message">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="input min-h-[140px] resize-y"
                placeholder="Beschreiben Sie kurz Ihr Anliegen …"
              />
            </div>

            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
            </button>

            {status === "success" && (
              <div className="rounded-lg border border-primary-200 bg-primary-50 p-4 text-sm text-primary-800">
                Vielen Dank für Ihre Anfrage! Wir melden uns so bald wie
                möglich bei Ihnen.
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
                  <div className="text-xs uppercase tracking-wide text-slate-500">Telefon / WhatsApp</div>
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
                  <div className="text-xs uppercase tracking-wide text-slate-500">E-Mail</div>
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
                  <div className="text-xs uppercase tracking-wide text-slate-500">Einsatzgebiet</div>
                  <div className="text-slate-800 font-medium">
                    Bödeli & Umgebung
                  </div>
                  <div className="text-xs text-slate-500">
                    Interlaken · Matten · Unterseen · Wilderswil · Bönigen · Ringgenberg
                  </div>
                </div>
              </div>
            </div>

            <WhatsAppButton
              className="w-full"
              label="Direkt per WhatsApp schreiben"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
