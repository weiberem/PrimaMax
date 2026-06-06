"use client";

import { useMemo, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";
import {
  WHATSAPP_PHONE_PLACEHOLDER,
  buildWhatsAppLink,
} from "./WhatsAppButton";

// TODO: Replace with your real Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

const MIN_HOUR = 7;
const MAX_HOUR = 19;
const SHORT_NOTICE_HOURS = 24;

// Until this date (exclusive), online direct booking is disabled and the section
// shows an "inquiry only" card. Switches to the full booking form automatically afterwards.
const DIRECT_BOOKING_AVAILABLE_FROM = new Date("2026-06-01T00:00:00");

function isDirectBookingActive(): boolean {
  return Date.now() >= DIRECT_BOOKING_AVAILABLE_FROM.getTime();
}

type Status = "idle" | "submitting" | "success" | "error";

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function todayPlus(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function combine(date: string, time: string): Date | null {
  if (!date || !time) return null;
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  if (!y || !m || !d || isNaN(hh) || isNaN(mm)) return null;
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}

function isShortNotice(date: string, time: string): boolean {
  const target = combine(date, time);
  if (!target) return false;
  const cutoff = Date.now() + SHORT_NOTICE_HOURS * 60 * 60 * 1000;
  return target.getTime() < cutoff;
}

export default function Booking() {
  const { t, lang } = useLang();
  const minDate = todayPlus(1);
  const directBookingActive = isDirectBookingActive();

  const [date, setDate] = useState(todayPlus(2));
  const [time, setTime] = useState("09:00");
  const [duration, setDuration] = useState("3");
  const [service, setService] = useState(
    t.contact.services[0] ?? "Reinigung"
  );
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const shortNotice = isShortNotice(date, time);

  const hourOptions = useMemo(() => {
    const out: string[] = [];
    for (let h = MIN_HOUR; h <= MAX_HOUR; h++) {
      out.push(`${pad(h)}:00`);
      if (h < MAX_HOUR) out.push(`${pad(h)}:30`);
    }
    return out;
  }, []);

  const fmtDate = useMemo(() => {
    if (!date) return "";
    const d = new Date(`${date}T00:00:00`);
    return d.toLocaleDateString(lang === "de" ? "de-CH" : "en-CH", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [date, lang]);

  const whatsappMessage = useMemo(() => {
    const lines = [
      lang === "de"
        ? "Hallo PrimaMax, ich möchte gerne einen Termin buchen."
        : "Hello PrimaMax, I'd like to book an appointment.",
      `${t.booking.dateLabel}: ${fmtDate || date}`,
      `${t.booking.timeLabel}: ${time}`,
      `${t.booking.serviceLabel}: ${service}`,
      `${t.booking.durationLabel}: ${
        t.booking.durationOptions.find((o) => o.value === duration)?.label ??
        duration
      }`,
      address ? `${t.booking.addressLabel}: ${address}` : null,
      notes ? `${t.booking.notesLabel}: ${notes}` : null,
    ].filter(Boolean) as string[];
    return lines.join("\n");
  }, [
    lang,
    t,
    fmtDate,
    date,
    time,
    service,
    duration,
    address,
    notes,
  ]);

  const inquiryWhatsappMessage =
    lang === "de"
      ? "Hallo PrimaMax, ich möchte gerne einen Termin anfragen."
      : "Hello PrimaMax, I'd like to request an appointment.";
  const whatsappHref = buildWhatsAppLink(
    WHATSAPP_PHONE_PLACEHOLDER,
    directBookingActive ? whatsappMessage : inquiryWhatsappMessage
  );
  const callHref = `tel:${WHATSAPP_PHONE_PLACEHOLDER.replace(/\s/g, "")}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (shortNotice) return;
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const data = new FormData();
      data.append("type", "booking");
      data.append("date", date);
      data.append("time", time);
      data.append("duration", duration);
      data.append("service", service);
      data.append("name", name);
      data.append("contact", contact);
      data.append("address", address);
      data.append("notes", notes);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(t.booking.errorGeneric);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.booking.errorGeneric);
    }
  }

  return (
    <section id="booking" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.booking.title}</h2>
          <p className="section-subtitle">{t.booking.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* Booking form OR inquiry-only card */}
          <div className="reveal lg:col-span-3">
            {!directBookingActive ? (
              <InquiryOnlyCard
                badge={t.booking.inquiryOnlyBadge}
                title={t.booking.inquiryOnlyTitle}
                body={t.booking.inquiryOnlyBody}
                callHref={callHref}
                callLabel={t.booking.callCta}
                whatsappHref={whatsappHref}
                whatsappLabel={t.booking.whatsappCta}
                contactLabel={t.booking.inquiryOnlyContactCta}
                phone={WHATSAPP_PHONE_PLACEHOLDER}
              />
            ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200 sm:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label" htmlFor="b-date">
                    {t.booking.dateLabel}
                  </label>
                  <input
                    id="b-date"
                    type="date"
                    required
                    min={minDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="b-time">
                    {t.booking.timeLabel}
                  </label>
                  <select
                    id="b-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="input"
                    required
                  >
                    {hourOptions.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label" htmlFor="b-service">
                    {t.booking.serviceLabel}
                  </label>
                  <select
                    id="b-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="input"
                  >
                    {t.contact.services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="b-duration">
                    {t.booking.durationLabel}
                  </label>
                  <select
                    id="b-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="input"
                  >
                    {t.booking.durationOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Selected summary */}
              <div className="mt-5 rounded-xl bg-primary-50 px-4 py-3 text-sm">
                <div className="text-xs uppercase tracking-wide text-primary-700">
                  {t.booking.selectedSummary}
                </div>
                <div className="mt-1 font-medium text-slate-900">
                  {fmtDate} · {time}
                </div>
                <div className="text-slate-600">
                  {service} ·{" "}
                  {t.booking.durationOptions.find((o) => o.value === duration)
                    ?.label ?? ""}
                </div>
              </div>

              {shortNotice ? (
                <ShortNoticeCard
                  title={t.booking.shortNoticeTitle}
                  body={t.booking.shortNoticeBody}
                  badge={t.booking.shortNoticeBadge}
                  callHref={callHref}
                  callLabel={t.booking.callCta}
                  whatsappHref={whatsappHref}
                  whatsappLabel={t.booking.whatsappCta}
                  phone={WHATSAPP_PHONE_PLACEHOLDER}
                />
              ) : (
                <>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="label" htmlFor="b-name">
                        {t.booking.nameLabel}
                      </label>
                      <input
                        id="b-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="b-contact">
                        {t.booking.contactLabel}
                      </label>
                      <input
                        id="b-contact"
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="input"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="label" htmlFor="b-address">
                      {t.booking.addressLabel}
                    </label>
                    <input
                      id="b-address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="input"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="label" htmlFor="b-notes">
                      {t.booking.notesLabel}
                    </label>
                    <textarea
                      id="b-notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="input min-h-[100px] resize-y"
                    />
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      {t.booking.minDateNote}
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary disabled:opacity-60"
                    >
                      {status === "submitting"
                        ? t.booking.submitting
                        : t.booking.submit}
                    </button>
                  </div>

                  {status === "success" && (
                    <div className="mt-4 rounded-lg border border-primary-200 bg-primary-50 p-4 text-sm text-primary-800">
                      {t.booking.success}
                    </div>
                  )}
                  {status === "error" && errorMsg && (
                    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      {errorMsg}
                    </div>
                  )}
                </>
              )}
            </form>
            )}
          </div>

          {/* Side panel */}
          <aside className="reveal lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-6 text-white shadow-md">
              <h3 className="text-lg font-semibold">
                {t.booking.shortNoticeBadge}?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {t.booking.friendlyHint}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={callHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-primary-700 hover:bg-primary-50"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-2.55a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1z" />
                  </svg>
                  {t.booking.callCta}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9z" />
                  </svg>
                  {t.booking.whatsappCta}
                </a>
              </div>
              <div className="mt-3 text-xs text-white/70">
                {WHATSAPP_PHONE_PLACEHOLDER}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ShortNoticeCard({
  title,
  body,
  badge,
  callHref,
  callLabel,
  whatsappHref,
  whatsappLabel,
  phone,
}: {
  title: string;
  body: string;
  badge: string;
  callHref: string;
  callLabel: string;
  whatsappHref: string;
  whatsappLabel: string;
  phone: string;
}) {
  return (
    <div className="mt-5 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 sm:p-6">
      <span className="inline-flex items-center rounded-full bg-amber-200/70 px-2.5 py-0.5 text-xs font-medium text-amber-900">
        ⚡ {badge}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-amber-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-amber-900/90">{body}</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href={callHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-2.55a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1z" />
          </svg>
          {callLabel}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-medium text-white hover:brightness-110"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9z" />
          </svg>
          {whatsappLabel}
        </a>
      </div>
      <div className="mt-3 text-xs text-amber-900/70">{phone}</div>
    </div>
  );
}

function InquiryOnlyCard({
  title,
  body,
  badge,
  callHref,
  callLabel,
  whatsappHref,
  whatsappLabel,
  contactLabel,
  phone,
}: {
  title: string;
  body: string;
  badge: string;
  callHref: string;
  callLabel: string;
  whatsappHref: string;
  whatsappLabel: string;
  contactLabel: string;
  phone: string;
}) {
  return (
    <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 via-white to-white p-6 shadow-sm sm:p-8">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary-800">
        <span aria-hidden>✨</span>
        {badge}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-slate-900 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
        {body}
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-white shadow-sm hover:brightness-110"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9z" />
          </svg>
          {whatsappLabel}
        </a>
        <a
          href={callHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary-700"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-2.55a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1z" />
          </svg>
          {callLabel}
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-300 bg-white px-5 py-3 text-sm font-medium text-primary-700 hover:bg-primary-50"
        >
          {contactLabel}
        </a>
      </div>
      <div className="mt-4 text-xs text-slate-500">{phone}</div>
    </div>
  );
}
