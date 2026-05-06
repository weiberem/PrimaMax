"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Pricing() {
  const { t } = useLang();
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-primary-50 text-primary-800">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-sm font-semibold">
                  {t.pricing.headers.service}
                </th>
                <th className="px-4 sm:px-6 py-3 text-sm font-semibold">
                  {t.pricing.headers.price}
                </th>
                <th className="px-4 sm:px-6 py-3 text-sm font-semibold">
                  {t.pricing.headers.min}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {t.pricing.rows.map((r) => (
                <tr key={r.service} className="hover:bg-slate-50/60 transition">
                  <td className="px-4 sm:px-6 py-4 text-sm text-slate-800 font-medium">
                    <div className="flex flex-wrap items-center gap-2">
                      {r.service}
                      {"comingSoon" in r && r.comingSoon && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                          {t.pricing.comingSoon}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">
                    {r.price}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
                    {r.min}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="reveal mt-4 text-xs text-slate-500">{t.pricing.footnote}</p>
      </div>
    </section>
  );
}
