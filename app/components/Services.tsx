type Service = {
  emoji: string;
  title: string;
  description: string;
  bullets: string[];
  comingSoon?: boolean;
};

const services: Service[] = [
  {
    emoji: "🧽",
    title: "Reinigung",
    description:
      "Wohnungs-, Haus- und Büroreinigung – sorgfältig und mit Liebe zum Detail.",
    bullets: ["Endreinigung mit Abnahmegarantie", "Regelmässige Unterhaltsreinigung", "Einmalige Grundreinigung"],
  },
  {
    emoji: "🧺",
    title: "Haushaltshilfe",
    description:
      "Wir entlasten Sie im Alltag – damit mehr Zeit bleibt für das, was Ihnen wichtig ist.",
    bullets: ["Einkaufen & Besorgungen", "Bügeln & Wäschepflege", "Aufräumen & Ordnung halten"],
  },
  {
    emoji: "🪡",
    title: "Nähservice",
    description:
      "Vom kleinen Riss bis zur Spezialnaht – wir reparieren, ändern und nähen neu.",
    bullets: ["Kleiderreparaturen & Änderungen", "Outdoorbekleidung (z.B. Gore-Tex)", "Vorhänge, Tischtücher, Masken, Neuanfertigungen"],
  },
  {
    emoji: "🌱",
    title: "Hauswartsarbeiten",
    description:
      "Rund ums Haus und um die Liegenschaft – zuverlässig und gewissenhaft.",
    bullets: ["Rasenmähen & Umgebungspflege", "Treppenhausreinigung", "Malerarbeiten & Streichen"],
    comingSoon: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">Unsere Leistungen</h2>
          <p className="section-subtitle">
            Vier Bereiche, ein Versprechen: Sie können sich auf uns verlassen.
            Lokal verwurzelt im Bödeli – Anfahrt innerhalb der Region inklusive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="reveal card flex flex-col">
              <div className="flex items-start justify-between">
                <div className="text-4xl">{s.emoji}</div>
                {s.comingSoon && (
                  <span className="inline-flex items-center rounded-full bg-alpine-100 px-2.5 py-0.5 text-xs font-medium text-alpine-700">
                    Bald verfügbar
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
