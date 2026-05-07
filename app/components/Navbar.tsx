"use client";

import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageProvider";
import BrandMark from "./BrandMark";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links: {
    href: string;
    label: string;
    comingSoon?: boolean;
    beta?: boolean;
  }[] = [
    { href: "#services", label: t.nav.services },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
    { href: "#booking", label: t.nav.booking },
    { href: "#calculator", label: t.nav.calculator, beta: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3 sm:py-4">
        <a href="#top" className="flex h-10 items-center" aria-label="PrimaMax">
          <BrandMark variant="light" className="h-9 sm:h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-primary-700 transition"
            >
              {l.label}
              {l.comingSoon && (
                <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                  {t.nav.comingSoon}
                </span>
              )}
              {l.beta && (
                <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-700">
                  {t.nav.beta}
                </span>
              )}
            </a>
          ))}
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            {t.nav.cta}
          </a>
        </nav>

        <button
          aria-label={t.nav.openMenu}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="container-x flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-2 text-slate-700 hover:text-primary-700"
              >
                <span>{l.label}</span>
                {l.comingSoon && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                    {t.nav.comingSoon}
                  </span>
                )}
                {l.beta && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-700">
                    {t.nav.beta}
                  </span>
                )}
              </a>
            ))}
            <div className="mt-3">
              <LanguageSwitcher lang={lang} setLang={setLang} />
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 text-sm"
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({
  lang,
  setLang,
}: {
  lang: "de" | "en";
  setLang: (l: "de" | "en") => void;
}) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex overflow-hidden rounded-full border border-slate-200 text-xs"
    >
      <button
        type="button"
        onClick={() => setLang("de")}
        className={`px-2.5 py-1 font-medium transition ${
          lang === "de"
            ? "bg-primary-600 text-white"
            : "bg-white text-slate-600 hover:bg-slate-50"
        }`}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 font-medium transition ${
          lang === "en"
            ? "bg-primary-600 text-white"
            : "bg-white text-slate-600 hover:bg-slate-50"
        }`}
      >
        EN
      </button>
    </div>
  );
}
