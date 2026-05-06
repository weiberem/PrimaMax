"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Trust() {
  const { t } = useLang();
  return (
    <section className="border-t border-slate-100 bg-white py-10 sm:py-14">
      <div className="container-x">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.trust.items.map((item) => (
            <div
              key={item.title}
              className="reveal flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
            >
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-xl"
                aria-hidden
              >
                {item.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
