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
    beta: "Beta",
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
      "Faire Konditionen, keine versteckten Kosten. Stundensätze inklusive Material wie Reinigungstücher und Grundprodukte.",
    priceLabel: "Preis",
    minLabel: "Mindestdauer",
    includesLabel: "Im Stundensatz enthalten",
    pickupLabel: "Abholservice",
    comingSoon: "Bald verfügbar",
    items: [
      {
        service: "Reinigung",
        shortDesc:
          "Wohnungs-, Haus- und Büroreinigung mit Auge fürs Detail.",
        includes: [
          "Staubsaugen, Wischen, Staubwischen",
          "Küche: Arbeitsflächen, Spüle, Fronten",
          "Bad & WC: Sanitär, Fugen, Spiegel",
          "Mülleimer leeren, Oberflächen desinfizieren",
        ],
        price: "ab CHF 45/h",
        min: "min. 2 h",
      },
      {
        service: "Endreinigung mit Abnahmegarantie",
        shortDesc:
          "Komplette Wohnungsübergabe – sauber bis in die Ecken, Abnahme garantiert.",
        includes: [
          "Tiefenreinigung Küche inkl. Backofen, Kühlschrank",
          "Bad: Kalkentfernung, Fugen, Armaturen",
          "Fenster innen + Rahmen + Storen",
          "Böden, Wände, Heizkörper, Lüftungsgitter",
          "Nachbesserung kostenlos bei Beanstandung",
        ],
        price: "Pauschale auf Anfrage",
        min: "nach Objekt",
      },
      {
        service: "Airbnb / Ferienwohnung Wechselreinigung",
        shortDesc:
          "Hotelstandard zwischen Gästewechseln – frisch, schnell, zuverlässig.",
        includes: [
          "Komplettreinigung der Wohnung",
          "Bettwäsche & Handtücher wechseln",
          "Küche & Bad sanitärrein",
          "Mülltrennung & Auffüllen Verbrauchsmaterial",
          "Foto-Check für Vermieter:in auf Wunsch",
        ],
        price: "ab CHF 50/h",
        min: "Pauschale auf Anfrage",
      },
      {
        service: "Haushaltshilfe",
        shortDesc:
          "Entlastung im Alltag – wir kümmern uns um das Drumherum.",
        includes: [
          "Wäsche waschen, aufhängen, zusammenlegen",
          "Bügeln & einfache Näharbeiten",
          "Einkaufen & Besorgungen im Bödeli",
          "Aufräumen & Ordnung halten",
          "Pflanzen giessen während Abwesenheit",
        ],
        price: "ab CHF 40/h",
        min: "min. 2 h",
      },
      {
        service: "Nähservice (einfach)",
        shortDesc:
          "Reparaturen, Änderungen und kleine Neuanfertigungen.",
        includes: [
          "Hosen & Röcke kürzen",
          "Reissverschluss ersetzen",
          "Knöpfe annähen, Risse flicken",
          "Vorhänge & Tischtücher",
        ],
        price: "ab CHF 35/h",
        min: "min. 1 h",
        pickup: "Kostenloser Abholservice im Bödeli",
      },
      {
        service: "Nähservice (Outdoor / Spezial)",
        shortDesc:
          "Gore-Tex, Daunen, technische Stoffe – mit dem richtigen Material und Know-how.",
        includes: [
          "Gore-Tex-Reparatur mit Spezialband",
          "Daunenjacken & Schlafsäcke",
          "Outdoorhosen, Gamaschen, Rucksäcke",
          "Spezialnähte & Verstärkungen",
        ],
        price: "ab CHF 45/h",
        min: "min. 1 h",
        pickup: "Kostenloser Abholservice im Bödeli",
      },
      {
        service: "Gartenarbeit / Umgebung",
        shortDesc:
          "Rund ums Haus und im Garten – saubere und gepflegte Umgebung.",
        includes: [
          "Rasenmähen & Rasenkanten",
          "Hecken schneiden",
          "Unkraut jäten, Beete pflegen",
          "Laubentfernung",
        ],
        price: "ab CHF 50/h",
        min: "min. 2 h",
        comingSoon: true as const,
      },
      {
        service: "Malerarbeiten",
        shortDesc: "Frische Farbe für innen – sauber abgedeckt und sauber gefinisht.",
        includes: [
          "Wände streichen / Tapezieren",
          "Decken weissen",
          "Türen & Rahmen",
          "Vorbereitung & Schutz der Möbel",
        ],
        price: "ab CHF 55/h",
        min: "min. 3 h",
        comingSoon: true as const,
      },
      {
        service: "Treppenhausreinigung",
        shortDesc: "Regelmässige oder einmalige Reinigung von Treppenhäusern.",
        includes: [
          "Treppenstufen & Geländer",
          "Eingangsbereich & Briefkästen",
          "Lift & Tasten desinfizieren",
          "Fenster im Treppenhaus",
        ],
        price: "Pauschale nach Objekt",
        min: "nach Objekt",
        comingSoon: true as const,
      },
    ],
    travelTitle: "Anfahrt – fair und transparent",
    travelRules: [
      {
        label: "Im Bödeli, Mindestdauer eingehalten",
        value: "Anfahrt inklusive",
        positive: true as const,
      },
      {
        label: "Im Bödeli, kürzer als Mindestdauer",
        value: "CHF 40 Anfahrtspauschale",
      },
      {
        label: "Ausserhalb Bödeli",
        value: "CHF 0.70/km (Hin- und Rückweg)",
      },
      {
        label: "Nähservice",
        value: "Kostenloser Abholservice im Bödeli",
        positive: true as const,
      },
    ],
    travelNote:
      "Bödeli umfasst: Interlaken, Matten, Unterseen, Wilderswil, Bönigen, Ringgenberg. Der Kilometeransatz von CHF 0.70 entspricht dem offiziellen Schweizer Spesenansatz.",
  },
  calculator: {
    title: "KI-Preisrechner",
    comingSoonBadge: "Beta-Version",
    betaNote:
      "Wir testen den Preisrechner gerade. Die Schätzung dient als Orientierung – das verbindliche Angebot machen wir nach Rücksprache.",
    subtitle:
      "Wählen Sie die gewünschte Leistung – wir fragen nur nach was wirklich relevant ist und schätzen Ihnen unverbindlich eine Preisspanne.",
    categoryLabel: "Was möchten Sie?",
    categories: {
      cleaning: "Reinigung",
      household: "Haushaltshilfe & Wäsche",
      sewing: "Nähservice",
    },
    cleaning: {
      variantLabel: "Art der Reinigung",
      variants: {
        unterhalt: "Unterhaltsreinigung",
        end: "Endreinigung / Umzug",
        airbnb: "Airbnb / Ferienwohnung",
      },
      areaLabel: "Fläche (m²)",
      areaPlaceholder: "z.B. 85",
      roomsLabel: "Räume / Zimmer",
      roomsPlaceholder: "z.B. 3.5",
      extrasLabel: "Zusätzlich",
      extras: ["Backofen", "Kühlschrank", "Fenster innen", "Storen / Lamellen"],
      bedsLabel: "Anzahl Betten",
    },
    household: {
      variantLabel: "Art der Hilfe",
      variants: {
        umfassend: "Haushaltshilfe (umfassend)",
        buegeln: "Nur Bügeln & Wäsche",
      },
      tasksLabel: "Aufgaben",
      tasks: ["Einkaufen", "Wäsche waschen", "Bügeln", "Aufräumen", "Pflanzen giessen"],
      hoursLabel: "Stunden pro Einsatz",
      shirtsLabel: "Hemden / Blusen",
      pantsLabel: "Hosen / Röcke",
      beddingLabel: "Bettwäsche-Sets",
    },
    sewing: {
      variantLabel: "Art",
      variants: {
        einfach: "Einfache Reparatur / Änderung",
        outdoor: "Outdoor / Spezial",
      },
      tasksLabel: "Was zu nähen?",
      tasksEinfach: [
        "Hose kürzen",
        "Reissverschluss ersetzen",
        "Knopf annähen",
        "Riss flicken",
        "Vorhang ändern",
        "Anderes",
      ],
      tasksOutdoor: [
        "Gore-Tex Reparatur",
        "Daunenjacke",
        "Outdoorhose",
        "Schlafsack",
        "Spezialnaht / Verstärkung",
        "Anderes",
      ],
      countLabel: "Anzahl Stücke",
      materialLabel: "Material (falls bekannt)",
      materials: ["Gore-Tex", "Daunen", "Polyester / Nylon", "Anderes / Unsicher"],
      pickupNote: "Mit kostenlosem Abholservice im Bödeli.",
    },
    frequencyLabel: "Häufigkeit",
    frequencies: [
      { value: "einmalig", label: "Einmalig" },
      { value: "woechentlich", label: "Wöchentlich" },
      { value: "alle_2_wochen", label: "Alle 2 Wochen" },
      { value: "monatlich", label: "Monatlich" },
    ],
    descriptionLabel: "Weitere Details (optional)",
    descriptionPlaceholder:
      "z.B. Zugangsdetails, Wünsche, gewünschter Termin …",
    submit: "Preis schätzen lassen",
    submitting: "Berechne …",
    resultLabel: "Ergebnis",
    resultEmpty:
      "Füllen Sie die Angaben aus, um eine unverbindliche Preisspanne zu erhalten.",
    calculating: "Berechne Ihre Schätzung …",
    disclaimer:
      "⚠️ Dies ist ein automatisch generierter Schätzpreis. Die tatsächlichen Kosten können abweichen. Bitte kontaktieren Sie uns für ein verbindliches Angebot.",
    whatsappCta: "Jetzt anfragen via WhatsApp",
    whatsappIntro: "Hallo PrimaMax, ich interessiere mich für eine Offerte.",
    estimateSummaryPrefix: "Generierte Schätzung",
  },
  booking: {
    title: "Verfügbarkeit & Buchung",
    subtitle:
      "Wählen Sie Ihren Wunschtermin – wir bestätigen schnellstmöglich. Kurzfristige Aufträge nehmen wir gerne direkt per Telefon oder WhatsApp entgegen.",
    inquiryOnlyBadge: "Aktuell auf Anfrage",
    inquiryOnlyTitle: "Termine vergeben wir aktuell persönlich",
    inquiryOnlyBody:
      "Bis Ende Mai läuft unsere Online-Direktbuchung noch nicht – wir koordinieren Ihren Termin lieber kurz persönlich, damit alles passt. Schreiben Sie uns auf WhatsApp oder rufen Sie an – wir melden uns sofort zurück.",
    inquiryOnlyContactCta: "Per Formular anfragen",
    dateLabel: "Datum",
    timeLabel: "Uhrzeit",
    durationLabel: "Voraussichtliche Dauer",
    durationOptions: [
      { value: "2", label: "ca. 2 Stunden" },
      { value: "3", label: "ca. 3 Stunden" },
      { value: "4", label: "ca. 4 Stunden" },
      { value: "6", label: "halber Tag" },
      { value: "8", label: "ganzer Tag" },
    ],
    serviceLabel: "Leistung",
    nameLabel: "Name",
    contactLabel: "Telefon oder E-Mail",
    addressLabel: "Adresse (optional)",
    notesLabel: "Hinweise (optional)",
    submit: "Termin anfragen",
    submitting: "Wird gesendet …",
    success: "Vielen Dank! Wir bestätigen Ihren Termin schnellstmöglich.",
    errorGeneric:
      "Senden hat nicht geklappt. Bitte rufen Sie uns kurz an oder schreiben Sie uns auf WhatsApp.",
    shortNoticeBadge: "Kurzfristig",
    shortNoticeTitle: "Innerhalb von 24 Stunden? Direkt anrufen oder schreiben.",
    shortNoticeBody:
      "Termine innerhalb der nächsten 24 Stunden nehmen wir gerne direkt per Telefon oder WhatsApp entgegen – so können wir am schnellsten reagieren.",
    callCta: "Jetzt anrufen",
    whatsappCta: "WhatsApp schreiben",
    friendlyHint:
      "Tipp: Kurzfristige Aufträge gerne direkt per Telefon oder WhatsApp – wir melden uns sofort.",
    selectedSummary: "Ihr Wunschtermin",
    minDateNote: "Online-Buchung ab frühestens 24 Stunden im Voraus möglich.",
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
    mapTitle: "Unser Einsatzgebiet",
    mapOpenInGoogle: "In Google Maps öffnen",
  },
  footer: {
    description:
      "Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der Region Interlaken / Bödeli – mit Sorgfalt und Herzblut.",
    quickAccess: "Schnellzugriff",
    legal: "Impressum",
    legalText: "Vollständiges Impressum folgt.",
    rights: "Alle Rechte vorbehalten.",
    madeWith: "Erstellt mit Sorgfalt auf dem Bödeli.",
    credit: "Design & Code",
    creditBrand: "RW WebSolutions",
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
    beta: "Beta",
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
      "Fair conditions, no hidden costs. Hourly rates include materials such as cleaning cloths and basic products.",
    priceLabel: "Price",
    minLabel: "Minimum duration",
    includesLabel: "Included in the hourly rate",
    pickupLabel: "Pickup service",
    comingSoon: "Coming soon",
    items: [
      {
        service: "Cleaning",
        shortDesc:
          "Apartment, house and office cleaning with attention to detail.",
        includes: [
          "Vacuuming, mopping, dusting",
          "Kitchen: counters, sink, cabinet fronts",
          "Bath & WC: sanitary, grout, mirrors",
          "Empty bins, disinfect surfaces",
        ],
        price: "from CHF 45/h",
        min: "min. 2 h",
      },
      {
        service: "Move-out cleaning with handover guarantee",
        shortDesc:
          "Complete handover-ready cleaning – clean to the corners, handover guaranteed.",
        includes: [
          "Deep clean of kitchen incl. oven, fridge",
          "Bathroom: limescale, grout, fittings",
          "Windows inside + frames + blinds",
          "Floors, walls, radiators, vents",
          "Free re-clean if landlord complains",
        ],
        price: "Flat rate on request",
        min: "depends on property",
      },
      {
        service: "Airbnb / holiday flat turnover cleaning",
        shortDesc:
          "Hotel standard between guest changeovers – fresh, fast, reliable.",
        includes: [
          "Full apartment cleaning",
          "Change bed linens & towels",
          "Sanitary-clean kitchen & bathroom",
          "Waste sorting & restocking consumables",
          "Photo-check for the host on request",
        ],
        price: "from CHF 50/h",
        min: "Flat rate on request",
      },
      {
        service: "Household help",
        shortDesc: "Daily relief – we take care of the surrounding tasks.",
        includes: [
          "Laundry: wash, hang, fold",
          "Ironing & simple sewing",
          "Shopping & errands within the Bödeli",
          "Tidying & keeping order",
          "Plant watering during your absence",
        ],
        price: "from CHF 40/h",
        min: "min. 2 h",
      },
      {
        service: "Sewing service (basic)",
        shortDesc:
          "Repairs, alterations and small custom items.",
        includes: [
          "Shorten trousers & skirts",
          "Replace zippers",
          "Sew on buttons, mend tears",
          "Curtains & tablecloths",
        ],
        price: "from CHF 35/h",
        min: "min. 1 h",
        pickup: "Free pickup service within the Bödeli",
      },
      {
        service: "Sewing service (outdoor / specialty)",
        shortDesc:
          "Gore-Tex, down, technical fabrics – with the right materials and know-how.",
        includes: [
          "Gore-Tex repair with seam tape",
          "Down jackets & sleeping bags",
          "Outdoor trousers, gaiters, backpacks",
          "Specialty seams & reinforcements",
        ],
        price: "from CHF 45/h",
        min: "min. 1 h",
        pickup: "Free pickup service within the Bödeli",
      },
      {
        service: "Garden / surroundings",
        shortDesc: "Around the house and garden – clean and well-kept.",
        includes: [
          "Lawn mowing & edges",
          "Hedge trimming",
          "Weeding, flowerbed care",
          "Leaf removal",
        ],
        price: "from CHF 50/h",
        min: "min. 2 h",
        comingSoon: true as const,
      },
      {
        service: "Painting work",
        shortDesc:
          "Fresh paint indoors – properly covered and properly finished.",
        includes: [
          "Wall painting / wallpapering",
          "Whitening ceilings",
          "Doors & frames",
          "Preparation & furniture protection",
        ],
        price: "from CHF 55/h",
        min: "min. 3 h",
        comingSoon: true as const,
      },
      {
        service: "Stairwell cleaning",
        shortDesc: "Regular or one-off cleaning of stairwells.",
        includes: [
          "Stairs & railings",
          "Entrance & mailboxes",
          "Lift & buttons disinfected",
          "Stairwell windows",
        ],
        price: "Flat rate per property",
        min: "depends on property",
        comingSoon: true as const,
      },
    ],
    travelTitle: "Travel – fair and transparent",
    travelRules: [
      {
        label: "Within the Bödeli, minimum duration met",
        value: "Travel included",
        positive: true as const,
      },
      {
        label: "Within the Bödeli, less than minimum",
        value: "CHF 40 travel flat rate",
      },
      {
        label: "Outside the Bödeli",
        value: "CHF 0.70/km (round trip)",
      },
      {
        label: "Sewing service",
        value: "Free pickup service within the Bödeli",
        positive: true as const,
      },
    ],
    travelNote:
      "Bödeli covers: Interlaken, Matten, Unterseen, Wilderswil, Bönigen, Ringgenberg. The CHF 0.70/km rate matches the official Swiss expense rate.",
  },
  calculator: {
    title: "AI price calculator",
    comingSoonBadge: "Beta version",
    betaNote:
      "We're currently testing the price calculator. The estimate serves as a rough orientation – we'll send a binding offer after a quick chat.",
    subtitle:
      "Pick the service you need – we only ask what's relevant and give you a non-binding price range.",
    categoryLabel: "What do you need?",
    categories: {
      cleaning: "Cleaning",
      household: "Household & laundry",
      sewing: "Sewing service",
    },
    cleaning: {
      variantLabel: "Type of cleaning",
      variants: {
        unterhalt: "Maintenance cleaning",
        end: "Move-out / move-in cleaning",
        airbnb: "Airbnb / holiday flat",
      },
      areaLabel: "Area (m²)",
      areaPlaceholder: "e.g. 85",
      roomsLabel: "Rooms",
      roomsPlaceholder: "e.g. 3.5",
      extrasLabel: "Additional",
      extras: ["Oven", "Fridge", "Windows inside", "Blinds / shutters"],
      bedsLabel: "Number of beds",
    },
    household: {
      variantLabel: "Type of help",
      variants: {
        umfassend: "Household help (full)",
        buegeln: "Ironing & laundry only",
      },
      tasksLabel: "Tasks",
      tasks: ["Shopping", "Laundry wash", "Ironing", "Tidying", "Plant watering"],
      hoursLabel: "Hours per visit",
      shirtsLabel: "Shirts / blouses",
      pantsLabel: "Trousers / skirts",
      beddingLabel: "Bedding sets",
    },
    sewing: {
      variantLabel: "Type",
      variants: {
        einfach: "Basic repair / alteration",
        outdoor: "Outdoor / specialty",
      },
      tasksLabel: "What needs sewing?",
      tasksEinfach: [
        "Shorten trousers",
        "Replace zipper",
        "Sew on buttons",
        "Mend tears",
        "Adjust curtain",
        "Other",
      ],
      tasksOutdoor: [
        "Gore-Tex repair",
        "Down jacket",
        "Outdoor trousers",
        "Sleeping bag",
        "Specialty seam / reinforcement",
        "Other",
      ],
      countLabel: "Number of pieces",
      materialLabel: "Material (if known)",
      materials: ["Gore-Tex", "Down", "Polyester / nylon", "Other / not sure"],
      pickupNote: "Includes free pickup service within the Bödeli.",
    },
    frequencyLabel: "Frequency",
    frequencies: [
      { value: "einmalig", label: "One-off" },
      { value: "woechentlich", label: "Weekly" },
      { value: "alle_2_wochen", label: "Every 2 weeks" },
      { value: "monatlich", label: "Monthly" },
    ],
    descriptionLabel: "Other details (optional)",
    descriptionPlaceholder:
      "e.g. access details, preferences, preferred date …",
    submit: "Get price estimate",
    submitting: "Calculating …",
    resultLabel: "Result",
    resultEmpty: "Fill in the details to get a non-binding price range.",
    calculating: "Calculating your estimate …",
    disclaimer:
      "⚠️ This is an automatically generated estimate. Actual costs may vary. Please contact us for a binding offer.",
    whatsappCta: "Inquire now via WhatsApp",
    whatsappIntro: "Hello PrimaMax, I'm interested in a quote.",
    estimateSummaryPrefix: "Generated estimate",
  },
  booking: {
    title: "Availability & booking",
    subtitle:
      "Pick your preferred date and time – we'll confirm as soon as possible. Short-notice requests are best handled directly by phone or WhatsApp.",
    inquiryOnlyBadge: "By inquiry only",
    inquiryOnlyTitle: "We currently arrange appointments personally",
    inquiryOnlyBody:
      "Until the end of May our direct online booking isn't live yet – we'd rather coordinate your appointment briefly in person so everything fits. Message us on WhatsApp or give us a call – we'll get back to you right away.",
    inquiryOnlyContactCta: "Send a request via form",
    dateLabel: "Date",
    timeLabel: "Time",
    durationLabel: "Estimated duration",
    durationOptions: [
      { value: "2", label: "approx. 2 hours" },
      { value: "3", label: "approx. 3 hours" },
      { value: "4", label: "approx. 4 hours" },
      { value: "6", label: "half a day" },
      { value: "8", label: "full day" },
    ],
    serviceLabel: "Service",
    nameLabel: "Name",
    contactLabel: "Phone or email",
    addressLabel: "Address (optional)",
    notesLabel: "Notes (optional)",
    submit: "Request appointment",
    submitting: "Sending …",
    success: "Thank you! We'll confirm your appointment as soon as possible.",
    errorGeneric:
      "Sending failed. Please call us briefly or message us on WhatsApp.",
    shortNoticeBadge: "Short notice",
    shortNoticeTitle:
      "Within the next 24 hours? Please call or message us directly.",
    shortNoticeBody:
      "We accept appointments within the next 24 hours directly via phone or WhatsApp – that way we can respond quickly.",
    callCta: "Call now",
    whatsappCta: "Message on WhatsApp",
    friendlyHint:
      "Tip: For short-notice requests, please reach us directly by phone or WhatsApp – we'll get back right away.",
    selectedSummary: "Your selected appointment",
    minDateNote: "Online booking is possible from 24 hours in advance.",
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
    mapTitle: "Our service area",
    mapOpenInGoogle: "Open in Google Maps",
  },
  footer: {
    description:
      "Cleaning, household help, sewing service and caretaker tasks in the Interlaken / Bödeli region – with care and dedication.",
    quickAccess: "Quick access",
    legal: "Legal notice",
    legalText: "Full legal notice to follow.",
    rights: "All rights reserved.",
    madeWith: "Made with care on the Bödeli.",
    credit: "Design & Code",
    creditBrand: "RW WebSolutions",
  },
};

export const dictionaries: Record<Lang, Dict> = { de, en };
