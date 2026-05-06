export type Lang = "de" | "en";

export type Dict = typeof de;

export const de = {
  nav: {
    services: "Leistungen",
    pricing: "Preise",
    contact: "Kontakt",
    about: "Über uns",
    booking: "Buchung",
    calculator: "Preisrechner",
    cta: "Anfragen",
    comingSoon: "bald",
    openMenu: "Menü öffnen",
  },
  hero: {
    badge: "Region Interlaken / Bödeli",
    title1: "Ihr zuverlässiger Partner für",
    title2: "Sauberkeit",
    title3: "und",
    title4: "Pflege",
    title5: "im Bödeli",
    subtitle:
      "Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten – mit Sorgfalt und einem persönlichen Lächeln. Wir kümmern uns, damit Sie Zeit für das Wesentliche haben.",
    ctaPrimary: "Jetzt anfragen",
    ctaSecondary: "Preis berechnen",
    bullets: ["Lokal verwurzelt", "Zuverlässig", "Sorgfältig"],
    region: "Bödeli & Umgebung",
    regionList:
      "Interlaken · Matten · Unterseen · Wilderswil · Bönigen · Ringgenberg",
  },
  services: {
    title: "Unsere Leistungen",
    subtitle:
      "Mehrere Bereiche, ein Versprechen: Sie können sich auf uns verlassen. Lokal verwurzelt im Bödeli – Anfahrt innerhalb der Region inklusive.",
    comingSoon: "Bald verfügbar",
    items: [
      {
        title: "Reinigung",
        description:
          "Wohnungs-, Haus- und Büroreinigung – sorgfältig und mit Liebe zum Detail.",
        bullets: [
          "Endreinigung mit Abnahmegarantie",
          "Regelmässige Unterhaltsreinigung",
          "Einmalige Grundreinigung",
        ],
      },
      {
        title: "Airbnb / Ferienwohnung",
        description:
          "Schnelle und zuverlässige Reinigung zwischen Gästewechseln – frische Wäsche, Hotelstandard, alles bereit für die nächste Buchung.",
        bullets: [
          "Wechselreinigung zwischen Gästen",
          "Bettwäsche & Handtücher inklusive",
          "Kurzfristige Termine möglich",
        ],
      },
      {
        title: "Haushaltshilfe",
        description:
          "Wir entlasten Sie im Alltag – damit mehr Zeit bleibt für das, was Ihnen wichtig ist.",
        bullets: [
          "Einkaufen & Besorgungen",
          "Bügeln & Wäschepflege",
          "Aufräumen & Ordnung halten",
        ],
      },
      {
        title: "Nähservice",
        description:
          "Vom kleinen Riss bis zur Spezialnaht – wir reparieren, ändern und nähen neu.",
        bullets: [
          "Kleiderreparaturen & Änderungen",
          "Outdoorbekleidung (z.B. Gore-Tex)",
          "Vorhänge, Tischtücher, Neuanfertigungen",
        ],
      },
      {
        title: "Hauswartsarbeiten",
        description:
          "Rund ums Haus und um die Liegenschaft – zuverlässig und gewissenhaft.",
        bullets: [
          "Rasenmähen & Umgebungspflege",
          "Treppenhausreinigung",
          "Malerarbeiten & Streichen",
        ],
        comingSoon: true as const,
      },
    ],
  },
  about: {
    title: "Über uns",
    subtitle: "Lernen Sie uns kennen – wir stellen uns bald persönlich vor.",
    cardTitle: "Ein lokales Paar – mit Herz und Verstand",
    cardBody:
      "Hier finden Sie schon bald unsere persönliche Geschichte: Wer wir sind, warum wir tun, was wir tun, und was uns mit dem Bödeli verbindet. Wir freuen uns darauf, uns Ihnen vorzustellen.",
    cardQuote: '„Lernen Sie uns kennen – wir stellen uns bald persönlich vor."',
    tags: ["Lokal", "Diskret", "Sorgfältig", "Zuverlässig", "Persönlich"],
    placeholder:
      "Hier folgt in Kürze ein persönlicher Beschrieb von uns als Inhabern – inklusive Foto, Werdegang und unseren Werten.",
    portrait: "Portrait folgt",
  },
  pricing: {
    title: "Transparente Preise",
    subtitle:
      "Faire Konditionen, keine versteckten Kosten. Alle Preise verstehen sich inklusive Anfahrt im Bödeli. Einsätze ausserhalb des Bödelis auf Anfrage.",
    headers: { service: "Leistung", price: "Preis", min: "Mindestdauer" },
    comingSoon: "Bald verfügbar",
    rows: [
      { service: "Reinigung", price: "ab CHF 45/h", min: "min. 2 h" },
      {
        service: "Airbnb / Ferienwohnung Wechselreinigung",
        price: "ab CHF 50/h",
        min: "Pauschale auf Anfrage",
      },
      { service: "Haushaltshilfe", price: "ab CHF 40/h", min: "min. 2 h" },
      {
        service: "Nähservice (einfach)",
        price: "ab CHF 35/h",
        min: "min. 1 h",
      },
      {
        service: "Nähservice (Outdoor / Spezial)",
        price: "ab CHF 45/h",
        min: "min. 1 h",
      },
      {
        service: "Gartenarbeit / Umgebung",
        price: "ab CHF 50/h",
        min: "min. 2 h",
        comingSoon: true as const,
      },
      {
        service: "Malerarbeiten",
        price: "ab CHF 55/h",
        min: "min. 3 h",
        comingSoon: true as const,
      },
      {
        service: "Treppenhausreinigung",
        price: "Pauschale nach Objekt",
        min: "—",
        comingSoon: true as const,
      },
    ],
    footnote:
      "Anfahrt innerhalb des Bödelis (Interlaken, Matten, Unterseen, Wilderswil, Bönigen, Ringgenberg) inklusive. Ausserhalb auf Anfrage.",
  },
  calculator: {
    title: "KI-Preisrechner",
    comingSoonBadge: "Bald verfügbar",
    subtitle:
      "Beschreiben Sie kurz, was Sie brauchen – wir schätzen Ihnen unverbindlich eine Preisspanne. Schnell, einfach und transparent.",
    descriptionLabel: "Was brauchen Sie?",
    descriptionPlaceholder:
      "z.B. Endreinigung 3.5-Zimmer-Wohnung in Matten, mit Backofen und Fenstern …",
    servicesLabel: "Leistungen",
    services: [
      "Reinigung",
      "Endreinigung",
      "Airbnb / Ferienwohnung",
      "Haushaltshilfe",
      "Bügeln / Wäsche",
      "Nähservice (einfach)",
      "Nähservice (Outdoor)",
    ],
    areaLabel: "Fläche (m²)",
    roomsLabel: "Anzahl Räume / Zimmer",
    frequencyLabel: "Häufigkeit",
    frequencies: [
      { value: "einmalig", label: "Einmalig" },
      { value: "woechentlich", label: "Wöchentlich" },
      { value: "monatlich", label: "Monatlich" },
    ],
    submit: "Preis schätzen lassen",
    submitting: "Berechne …",
    resultLabel: "Ergebnis",
    resultEmpty:
      "Füllen Sie das Formular aus, um eine unverbindliche Preisspanne zu erhalten.",
    calculating: "Berechne Ihre Schätzung …",
    disclaimer:
      "⚠️ Dies ist ein automatisch generierter Schätzpreis. Die tatsächlichen Kosten können abweichen. Bitte kontaktieren Sie uns für ein verbindliches Angebot.",
    whatsappCta: "Jetzt anfragen via WhatsApp",
    whatsappIntro:
      "Hallo PrimaMax, ich interessiere mich für eine Offerte.",
    serviceSummaryPrefix: "Leistungen",
    areaSummaryPrefix: "Fläche",
    roomsSummaryPrefix: "Räume",
    frequencySummaryPrefix: "Häufigkeit",
    detailsSummaryPrefix: "Details",
    estimateSummaryPrefix: "Generierte Schätzung",
  },
  booking: {
    title: "Verfügbarkeit & Buchung",
    badge: "Bald verfügbar",
    heading: "Online-Buchung kommt bald",
    body: "Bald können Sie unsere Verfügbarkeiten online einsehen und direkt einen Termin buchen. Bis dahin kontaktieren Sie uns einfach per WhatsApp oder Formular.",
    contactCta: "Kontaktformular",
    whatsappCta: "WhatsApp schreiben",
    placeholder:
      "Hier erscheint demnächst unser Online-Kalender für direkte Terminbuchungen.",
  },
  contact: {
    title: "Kontakt",
    subtitle:
      "Schreiben Sie uns – wir melden uns in der Regel innerhalb von 24 Stunden zurück. Schnell und unkompliziert geht es per WhatsApp.",
    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    contactLabel: "Telefon oder E-Mail",
    contactPlaceholder: "Telefon oder E-Mail",
    serviceLabel: "Leistung",
    servicePlaceholder: "Bitte wählen …",
    services: [
      "Reinigung",
      "Endreinigung",
      "Airbnb / Ferienwohnung",
      "Haushaltshilfe",
      "Nähservice",
      "Hauswartsarbeiten (bald)",
      "Anderes / Beratung",
    ],
    datetimeLabel: "Wunschtermin (Datum / Uhrzeit)",
    datetimePlaceholder: "z.B. 14.05.2026, vormittags",
    messageLabel: "Nachricht",
    messagePlaceholder: "Beschreiben Sie kurz Ihr Anliegen …",
    submit: "Anfrage senden",
    submitting: "Wird gesendet …",
    success:
      "Vielen Dank für Ihre Anfrage! Wir melden uns so bald wie möglich bei Ihnen.",
    errorGeneric:
      "Das Formular konnte leider nicht gesendet werden. Bitte schreiben Sie uns direkt per E-Mail oder WhatsApp.",
    errorNetwork:
      "Verbindungsfehler. Bitte schreiben Sie uns direkt per E-Mail oder WhatsApp.",
    phoneLabel: "Telefon / WhatsApp",
    emailLabel: "E-Mail",
    regionLabel: "Einsatzgebiet",
    regionValue: "Bödeli & Umgebung",
    regionList:
      "Interlaken · Matten · Unterseen · Wilderswil · Bönigen · Ringgenberg",
    whatsappCta: "Direkt per WhatsApp schreiben",
  },
  footer: {
    description:
      "Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der Region Interlaken / Bödeli – mit Sorgfalt und Herzblut.",
    quickAccess: "Schnellzugriff",
    legal: "Impressum",
    legalText: "Vollständiges Impressum folgt.",
    rights: "Alle Rechte vorbehalten.",
    madeWith: "Erstellt mit Sorgfalt im Bödeli.",
  },
};

export const en: Dict = {
  nav: {
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    about: "About us",
    booking: "Booking",
    calculator: "Price calculator",
    cta: "Inquire",
    comingSoon: "soon",
    openMenu: "Open menu",
  },
  hero: {
    badge: "Interlaken / Bödeli region",
    title1: "Your reliable partner for",
    title2: "cleanliness",
    title3: "and",
    title4: "care",
    title5: "in the Bödeli",
    subtitle:
      "Cleaning, household help, sewing service and caretaker tasks – with care and a personal smile. We take care of things so you have time for what matters.",
    ctaPrimary: "Make an inquiry",
    ctaSecondary: "Calculate price",
    bullets: ["Locally rooted", "Reliable", "Thorough"],
    region: "Bödeli & surroundings",
    regionList:
      "Interlaken · Matten · Unterseen · Wilderswil · Bönigen · Ringgenberg",
  },
  services: {
    title: "Our services",
    subtitle:
      "Several areas, one promise: you can rely on us. Locally rooted in the Bödeli – travel within the region included.",
    comingSoon: "Coming soon",
    items: [
      {
        title: "Cleaning",
        description:
          "Apartment, house and office cleaning – meticulous and detail-oriented.",
        bullets: [
          "Move-out cleaning with handover guarantee",
          "Regular maintenance cleaning",
          "One-off deep cleaning",
        ],
      },
      {
        title: "Airbnb / holiday flat",
        description:
          "Fast and reliable cleaning between guest changeovers – fresh linens, hotel standard, ready for the next booking.",
        bullets: [
          "Turnover cleaning between guests",
          "Bed linens & towels included",
          "Short-notice appointments possible",
        ],
      },
      {
        title: "Household help",
        description:
          "We take pressure off your daily routine – so you have more time for what matters.",
        bullets: [
          "Shopping & errands",
          "Ironing & laundry care",
          "Tidying & keeping order",
        ],
      },
      {
        title: "Sewing service",
        description:
          "From a small tear to a specialty seam – we repair, alter and tailor.",
        bullets: [
          "Clothing repairs & alterations",
          "Outdoor wear (e.g. Gore-Tex)",
          "Curtains, tablecloths, custom items",
        ],
      },
      {
        title: "Caretaker tasks",
        description:
          "Around the house and the property – reliable and conscientious.",
        bullets: [
          "Lawn mowing & garden care",
          "Stairwell cleaning",
          "Painting & touch-ups",
        ],
        comingSoon: true as const,
      },
    ],
  },
  about: {
    title: "About us",
    subtitle: "Get to know us – we'll introduce ourselves in person soon.",
    cardTitle: "A local couple – with heart and mind",
    cardBody:
      "Soon you'll find our personal story here: who we are, why we do what we do, and what connects us to the Bödeli. We look forward to introducing ourselves.",
    cardQuote: '„Get to know us – we will introduce ourselves in person soon."',
    tags: ["Local", "Discreet", "Thorough", "Reliable", "Personal"],
    placeholder:
      "A personal description of us as the owners is coming soon – including photos, background and our values.",
    portrait: "Portrait coming",
  },
  pricing: {
    title: "Transparent prices",
    subtitle:
      "Fair conditions, no hidden costs. All prices include travel within the Bödeli. Assignments outside the Bödeli on request.",
    headers: { service: "Service", price: "Price", min: "Minimum duration" },
    comingSoon: "Coming soon",
    rows: [
      { service: "Cleaning", price: "from CHF 45/h", min: "min. 2 h" },
      {
        service: "Airbnb / holiday flat turnover cleaning",
        price: "from CHF 50/h",
        min: "Flat rate on request",
      },
      { service: "Household help", price: "from CHF 40/h", min: "min. 2 h" },
      {
        service: "Sewing service (basic)",
        price: "from CHF 35/h",
        min: "min. 1 h",
      },
      {
        service: "Sewing service (outdoor / specialty)",
        price: "from CHF 45/h",
        min: "min. 1 h",
      },
      {
        service: "Garden / surroundings",
        price: "from CHF 50/h",
        min: "min. 2 h",
        comingSoon: true as const,
      },
      {
        service: "Painting work",
        price: "from CHF 55/h",
        min: "min. 3 h",
        comingSoon: true as const,
      },
      {
        service: "Stairwell cleaning",
        price: "Flat rate per property",
        min: "—",
        comingSoon: true as const,
      },
    ],
    footnote:
      "Travel within the Bödeli (Interlaken, Matten, Unterseen, Wilderswil, Bönigen, Ringgenberg) is included. Outside on request.",
  },
  calculator: {
    title: "AI price calculator",
    comingSoonBadge: "Coming soon",
    subtitle:
      "Briefly describe what you need – we'll give you a non-binding price range. Fast, simple and transparent.",
    descriptionLabel: "What do you need?",
    descriptionPlaceholder:
      "e.g. move-out cleaning of a 3.5-room apartment in Matten, with oven and windows …",
    servicesLabel: "Services",
    services: [
      "Cleaning",
      "Move-out cleaning",
      "Airbnb / holiday flat",
      "Household help",
      "Ironing / laundry",
      "Sewing service (basic)",
      "Sewing service (outdoor)",
    ],
    areaLabel: "Area (m²)",
    roomsLabel: "Number of rooms",
    frequencyLabel: "Frequency",
    frequencies: [
      { value: "einmalig", label: "One-off" },
      { value: "woechentlich", label: "Weekly" },
      { value: "monatlich", label: "Monthly" },
    ],
    submit: "Get price estimate",
    submitting: "Calculating …",
    resultLabel: "Result",
    resultEmpty:
      "Fill in the form to get a non-binding price range.",
    calculating: "Calculating your estimate …",
    disclaimer:
      "⚠️ This is an automatically generated estimate. Actual costs may vary. Please contact us for a binding offer.",
    whatsappCta: "Inquire now via WhatsApp",
    whatsappIntro: "Hello PrimaMax, I'm interested in a quote.",
    serviceSummaryPrefix: "Services",
    areaSummaryPrefix: "Area",
    roomsSummaryPrefix: "Rooms",
    frequencySummaryPrefix: "Frequency",
    detailsSummaryPrefix: "Details",
    estimateSummaryPrefix: "Generated estimate",
  },
  booking: {
    title: "Availability & booking",
    badge: "Coming soon",
    heading: "Online booking coming soon",
    body: "Soon you'll be able to view our availabilities online and book an appointment directly. Until then please contact us via WhatsApp or our form.",
    contactCta: "Contact form",
    whatsappCta: "Message on WhatsApp",
    placeholder:
      "Our online calendar for direct bookings will appear here soon.",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Write to us – we typically respond within 24 hours. The fastest way is via WhatsApp.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    contactLabel: "Phone or email",
    contactPlaceholder: "Phone or email",
    serviceLabel: "Service",
    servicePlaceholder: "Please select …",
    services: [
      "Cleaning",
      "Move-out cleaning",
      "Airbnb / holiday flat",
      "Household help",
      "Sewing service",
      "Caretaker tasks (soon)",
      "Other / advice",
    ],
    datetimeLabel: "Preferred date / time",
    datetimePlaceholder: "e.g. 14 May 2026, morning",
    messageLabel: "Message",
    messagePlaceholder: "Briefly describe your request …",
    submit: "Send inquiry",
    submitting: "Sending …",
    success:
      "Thank you for your inquiry! We'll get back to you as soon as possible.",
    errorGeneric:
      "The form could not be sent. Please contact us directly by email or WhatsApp.",
    errorNetwork:
      "Connection error. Please contact us directly by email or WhatsApp.",
    phoneLabel: "Phone / WhatsApp",
    emailLabel: "Email",
    regionLabel: "Service area",
    regionValue: "Bödeli & surroundings",
    regionList:
      "Interlaken · Matten · Unterseen · Wilderswil · Bönigen · Ringgenberg",
    whatsappCta: "Message us directly on WhatsApp",
  },
  footer: {
    description:
      "Cleaning, household help, sewing service and caretaker tasks in the Interlaken / Bödeli region – with care and dedication.",
    quickAccess: "Quick access",
    legal: "Legal notice",
    legalText: "Full legal notice to follow.",
    rights: "All rights reserved.",
    madeWith: "Made with care in the Bödeli.",
  },
};

export const dictionaries: Record<Lang, Dict> = { de, en };
