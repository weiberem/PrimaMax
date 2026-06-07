import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS, LOCATION_SLUGS } from "../locations";

export function generateStaticParams() {
  return LOCATION_SLUGS.map((ort) => ({ ort }));
}

export function generateMetadata({
  params,
}: {
  params: { ort: string };
}): Metadata {
  const loc = LOCATIONS[params.ort];
  if (!loc) return {};
  const title = `Reinigung ${loc.name} – PrimaMax`;
  const desc = loc.description;
  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://primamax.ch/reinigung/${loc.slug}`,
    },
    openGraph: {
      title,
      description: desc,
      url: `https://primamax.ch/reinigung/${loc.slug}`,
      locale: "de_CH",
      type: "website",
    },
  };
}

export default function LocationPage({
  params,
}: {
  params: { ort: string };
}) {
  const loc = LOCATIONS[params.ort];
  if (!loc) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Reinigung ${loc.name}`,
    serviceType: "Reinigungsservice",
    provider: {
      "@type": "LocalBusiness",
      name: "PrimaMax",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Aenderbergstrasse 19",
        postalCode: "3800",
        addressLocality: "Matten bei Interlaken",
        addressCountry: "CH",
      },
      telephone: "+41779732071",
    },
    areaServed: {
      "@type": "City",
      name: loc.name,
      "@id": `https://www.wikidata.org/wiki/${loc.name}`,
      address: {
        "@type": "PostalAddress",
        postalCode: loc.plz,
        addressLocality: loc.name,
        addressCountry: "CH",
      },
    },
    description: loc.description,
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary-700"
        >
          ← Zurück zur Website
        </Link>

        <header className="mt-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
            📍 {loc.plz} {loc.name} · Anfahrt {loc.travelTime}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Reinigung in {loc.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {loc.intro}
          </p>
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Unsere Leistungen in {loc.name}
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {loc.services.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary-200 bg-primary-50/60 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-900">
              Airbnb & Ferienwohnung in {loc.name}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-800">
              {loc.airbnbContext}
            </p>
            <a
              href="/#contact"
              className="btn-primary mt-6 inline-flex"
            >
              Anfrage für {loc.name}
            </a>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Anfahrt nach {loc.name}
          </h2>
          <p className="mt-3 text-slate-700">
            Wir starten von der Aenderbergstrasse 19 in Matten bei Interlaken.
            Nach {loc.name} sind wir innerhalb von {loc.travelTime} bei Ihnen.
            Da {loc.name} im Bödeli liegt, ist die Anfahrt bei normalen
            Reinigungseinsätzen{" "}
            <strong className="text-primary-700">kostenlos inklusive</strong> –
            sofern die Mindestdauer eingehalten wird.
          </p>
          {loc.landmarks.length > 0 && (
            <p className="mt-3 text-sm text-slate-600">
              <strong>Quartiere und Lagen, die wir gut kennen:</strong>{" "}
              {loc.landmarks.join(", ")}.
            </p>
          )}
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Jetzt unverbindlich anfragen
          </h2>
          <p className="mt-2 text-slate-600">
            Wir melden uns innert weniger Stunden zurück – oft noch am selben
            Tag.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/#contact" className="btn-primary">
              Online-Formular
            </a>
            <a href="tel:+41779732071" className="btn-secondary">
              📞 +41 77 973 20 71
            </a>
            <a
              href={`https://wa.me/41779732071?text=${encodeURIComponent(
                `Hallo PrimaMax, ich hätte eine Anfrage für ${loc.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </section>

        <section className="mt-16 border-t border-slate-200 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Weitere Standorte im Bödeli
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {LOCATION_SLUGS.filter((s) => s !== loc.slug).map((slug) => (
              <Link
                key={slug}
                href={`/reinigung/${slug}`}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700 hover:border-primary-400 hover:text-primary-700"
              >
                Reinigung {LOCATIONS[slug].name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
