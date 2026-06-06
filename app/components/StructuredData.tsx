const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://primamax.ch/#business",
  name: "PrimaMax",
  description:
    "Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der Region Interlaken / Bödeli – sorgfältig, lokal, persönlich.",
  url: "https://primamax.ch",
  logo: "https://primamax.ch/logo.svg",
  inLanguage: ["de-CH", "en-CH"],
  image: "https://primamax.ch/opengraph-image",
  email: "info@primamax.ch",
  telephone: "+41779732071",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aenderbergstrasse 19",
    postalCode: "3800",
    addressLocality: "Matten bei Interlaken",
    addressRegion: "BE",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.6863,
    longitude: 7.866,
  },
  areaServed: [
    { "@type": "City", name: "Interlaken" },
    { "@type": "City", name: "Matten bei Interlaken" },
    { "@type": "City", name: "Unterseen" },
    { "@type": "City", name: "Wilderswil" },
    { "@type": "City", name: "Bönigen" },
    { "@type": "City", name: "Ringgenberg" },
  ],
  priceRange: "CHF 35–55/h",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reinigung",
          description:
            "Wohnungs-, Haus- und Büroreinigung in der Region Interlaken / Bödeli.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "45",
          priceCurrency: "CHF",
          unitText: "h",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Endreinigung mit Abnahmegarantie",
          description: "Komplette Wohnungsübergabe sauber bis in die Ecken.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Airbnb / Ferienwohnung Wechselreinigung",
          description: "Hotelstandard zwischen Gästewechseln im Bödeli.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "50",
          priceCurrency: "CHF",
          unitText: "h",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Haushaltshilfe",
          description:
            "Einkaufen, Wäsche, Bügeln und Aufräumen im Bödeli.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "40",
          priceCurrency: "CHF",
          unitText: "h",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nähservice",
          description:
            "Reparaturen, Änderungen, Outdoor-Reparaturen mit kostenlosem Abholservice im Bödeli.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "35",
          priceCurrency: "CHF",
          unitText: "h",
        },
      },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+41779732071",
    email: "info@primamax.ch",
    areaServed: "CH",
    availableLanguage: ["de-CH", "en-CH"],
  },
  currenciesAccepted: "CHF",
  paymentAccepted: "Bank transfer (IBAN/QR-bill), Twint",
  sameAs: [],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
    />
  );
}
