"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Leistungen" },
  { href: "#about", label: "Über uns" },
  { href: "#pricing", label: "Preise" },
  { href: "#calculator", label: "Preisrechner" },
  { href: "#booking", label: "Buchung" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white font-bold">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-primary-700">
            PrimaMax
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-700 transition"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            Anfragen
          </a>
        </nav>

        <button
          aria-label="Menu öffnen"
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
                className="py-2 text-slate-700 hover:text-primary-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 text-sm"
            >
              Anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
