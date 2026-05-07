"use client";

import { useLang } from "../i18n/LanguageProvider";
import { IMAGES } from "../lib/images";

export default function Gallery() {
  const { lang } = useLang();
  const items = IMAGES.gallery;
  if (!items || items.length === 0) return null;

  return (
    <section id="gallery" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">
            {lang === "de" ? "Eindrücke" : "Impressions"}
          </h2>
          <p className="section-subtitle">
            {lang === "de"
              ? "Einblicke in unsere Arbeit auf dem Bödeli."
              : "A look at our work in the Bödeli."}
          </p>
        </div>

        <div className="reveal mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
