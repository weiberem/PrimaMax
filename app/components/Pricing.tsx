type Row = {
  service: string;
  price: string;
  min: string;
  note?: string;
  comingSoon?: boolean;
};

const rows: Row[] = [
  { service: "Reinigung", price: "ab CHF 45/h", min: "min. 2 h" },
  { service: "Haushaltshilfe", price: "ab CHF 40/h", min: "min. 2 h" },
  { service: "Nähservice (einfach)", price: "ab CHF 35/h", min: "min. 1 h" },
  { service: "Nähservice (Outdoor / Spezial)", price: "ab CHF 45/h", min: "min. 1 h" },
  { service: "Gartenarbeit / Umgebung", price: "ab CHF 50/h", min: "min. 2 h", comingSoon: true },
  { service: "Malerarbeiten", price: "ab CHF 55/h", min: "min. 3 h", comingSoon: true },
  { service: "Treppenhausreinigung", price: "Pauschale nach Objekt", min: "—", comingSoon: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">Transparente Preise</h2>
          <p className="section-subtitle">
            Faire Konditionen, keine versteckten Kosten. Alle Preise verstehen
            sich inklusive Anfahrt im Bödeli. Einsätze ausserhalb des Bödelis
            auf Anfrage.
          </p>
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-primary-50 text-primary-800">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-sm font-semibold">Leistung</th>
                <th className="px-4 sm:px-6 py-3 text-sm font-semibold">Preis</th>
                <th className="px-4 sm:px-6 py-3 text-sm font-semibold">Mindestdauer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {rows.map((r) => (
                <tr key={r.service} className="hover:bg-slate-50/60 transition">
                  <td className="px-4 sm:px-6 py-4 text-sm text-slate-800 font-medium">
                    <div className="flex flex-wrap items-center gap-2">
                      {r.service}
                      {r.comingSoon && (
                        <span className="inline-flex items-center rounded-full bg-alpine-100 px-2 py-0.5 text-[11px] font-medium text-alpine-700">
                          Bald verfügbar
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{r.price}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">{r.min}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="reveal mt-4 text-xs text-slate-500">
          Anfahrt innerhalb des Bödelis (Interlaken, Matten, Unterseen,
          Wilderswil, Bönigen, Ringgenberg) inklusive. Ausserhalb auf Anfrage.
        </p>
      </div>
    </section>
  );
}
