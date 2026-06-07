export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  intro: string;
  sections: { heading: string; body: string[] }[];
  conclusion: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "endreinigung-checkliste",
    title: "Endreinigung in der Schweiz: Checkliste, was die Verwaltung wirklich prüft",
    description:
      "Die wichtigsten Punkte einer Endreinigung mit Abnahmegarantie – damit Sie Ihre Mietkaution vollständig zurückbekommen.",
    date: "2026-05-07",
    readingMinutes: 6,
    intro:
      "Wer in der Schweiz eine Wohnung übergibt, kennt die Anspannung: Die Verwaltung kommt, prüft, und entscheidet ob die Mietkaution vollständig zurückkommt – oder nicht. Wir erklären, worauf wirklich geschaut wird, und wie eine professionelle Endreinigung mit Abnahmegarantie funktioniert.",
    sections: [
      {
        heading: "Was die Verwaltung kontrolliert",
        body: [
          "Schweizer Liegenschaftsverwaltungen folgen meist einem standardisierten Protokoll. Geprüft werden Küche (inkl. Backofen, Kühlschrank, Steamer), Bad (Kalk, Fugen, Silikon, Spiegel, Lüftung), alle Fenster inklusive Rahmen und Storen, Böden, Schränke innen und aussen, Heizkörper, Lüftungsgitter und Lichtkörper.",
          "Häufige Streitpunkte: vergessene Storen, Kalk im Duschbereich, Speisereste im Backofen, Staub auf Heizkörperrippen.",
        ],
      },
      {
        heading: "Abnahmegarantie – was bedeutet das?",
        body: [
          "Eine seriöse Reinigungsfirma kommt kostenlos zurück, falls die Verwaltung Mängel beanstandet. Diese Garantie sollte schriftlich auf der Offerte stehen und sich auf die übliche Wohnungsübergabe beziehen.",
          "Wichtig: Die Garantie gilt nur, wenn die Wohnung im Zustand der Reinigungsabnahme bleibt – also nicht zwischendurch wieder bewohnt wird.",
        ],
      },
      {
        heading: "Was kostet eine Endreinigung im Bödeli?",
        body: [
          "Für eine 3.5-Zimmer-Wohnung im Bödeli rechnen wir typischerweise zwischen CHF 400 und CHF 600 – inklusive Backofen, Fenster, Storen und allen Standard-Punkten. Faktoren: Grösse, Zustand, Anzahl Fenster, Lage des Reinigungsbedarfs.",
          "Ein verbindliches Angebot machen wir nach einer kurzen Besichtigung – oder anhand Ihrer Angaben per WhatsApp / Telefon.",
        ],
      },
      {
        heading: "Praxistipp: Termin früh genug planen",
        body: [
          "Buchen Sie die Endreinigung idealerweise 2 Wochen vor der Übergabe. So bleibt Spielraum für Nacharbeiten oder kleinere Korrekturen, und Sie geraten nicht in Zeitdruck.",
        ],
      },
    ],
    conclusion:
      "Eine professionelle Endreinigung mit Abnahmegarantie spart Nerven, Zeit – und oft auch Geld. Unverbindliche Anfrage einfach per WhatsApp +41 77 973 20 71 oder online.",
  },
  {
    slug: "airbnb-wechselreinigung",
    title: "Airbnb-Reinigung im Bödeli: Hotel-Standard zwischen Gästen",
    description:
      "Was Airbnb-Hosts wissen sollten: schnelle Wechsel, frische Wäsche, top Bewertungen – und wie wir das im Bödeli umsetzen.",
    date: "2026-05-07",
    readingMinutes: 5,
    intro:
      'Wer eine Ferienwohnung im Bödeli vermietet, weiss: Die Bewertung steht und fällt mit der Sauberkeit. „Spotlessly clean" ist eines der häufigsten Lob-Stichworte – und „dusty / messy" eines der häufigsten Negativsignale. Wir erklären, wie professionelle Wechselreinigung funktioniert.',
    sections: [
      {
        heading: "Der Standard für 5-Sterne-Bewertungen",
        body: [
          'Eine professionelle Airbnb-Reinigung umfasst nicht nur „durchwischen". Es geht um Hotel-Standard: frisch bezogene Betten, sanitärrein geputztes Bad, geleerte Mülleimer, aufgefüllte Verbrauchsmaterialien (Toilettenpapier, Spülmittel, Salz/Pfeffer), gewischte Oberflächen inklusive Lichtschalter und Türgriffe.',
          'Plus: kurze Sichtprüfung („Foto-Check") – passt alles, wie es im Listing dargestellt ist? Sind Handtücher gestapelt, ist die Küche aufgeräumt?',
        ],
      },
      {
        heading: "Wechselzeiten im Bödeli",
        body: [
          "In Interlaken sind Wechsel oft 11–15 Uhr (Checkout 11, Checkin 15). Das gibt 4 Stunden für komplette Reinigung – machbar, aber knapp. Wir empfehlen Hosts, einen Puffer von 30 Minuten einzuplanen, falls eine Reinigung länger dauert.",
          "Wir koordinieren mit mehreren Hosts gleichzeitig und planen die Wechsel-Reihenfolge effizient.",
        ],
      },
      {
        heading: "Bettwäsche und Handtücher",
        body: [
          "Wir bringen frische Bettwäsche und Handtücher mit – auf Wunsch auch in eurem Set (wir holen das schmutzige mit). So spart der Host Logistik und Lagerplatz.",
        ],
      },
      {
        heading: "Was kostet Wechselreinigung?",
        body: [
          "Pauschale auf Anfrage, abhängig von Wohnungsgrösse und Häufigkeit. Bei regelmässiger Zusammenarbeit gibt es feste Sätze. Stundensatz Basis: ab CHF 50/h.",
        ],
      },
    ],
    conclusion:
      "Hosts, die uns regelmässig buchen, gewinnen Zeit für das Wichtigere: Gäste-Service. Bei Interesse einfach kurz schreiben – wir besprechen Wechsel-Rhythmus, Wäsche-Logistik und Pauschalen.",
  },
  {
    slug: "gore-tex-reparieren",
    title: "Gore-Tex selbst reparieren oder reparieren lassen?",
    description:
      "Outdoor-Reparatur am richtigen Ort: was DIY taugt, wann sich professionelle Hilfe lohnt, und welche Materialien wir verwenden.",
    date: "2026-05-07",
    readingMinutes: 5,
    intro:
      "Ein Riss in der Goretex-Jacke, ein gebrochener Reissverschluss am Schlafsack, ein gerissener Daunen-Steg – Outdoor-Ausrüstung ist teuer und gut wert, repariert statt ersetzt zu werden. Aber: nicht jeder Schaden eignet sich für DIY.",
    sections: [
      {
        heading: "Was Sie selbst reparieren können",
        body: [
          "Kleinere Löcher (bis ca. 1 cm) in Gore-Tex lassen sich mit Reparaturflicken (Tear-Aid, Goretex-Patches) sauber verschliessen. Wichtig: Stoff trocken und sauber halten, Flicken grosszügig zuschneiden, gut andrücken.",
          "Reissverschluss-Schieber können oft mit etwas Geschick erneuert werden – die Zähne hingegen nicht. Dann wird's professionell.",
        ],
      },
      {
        heading: "Wann es sich lohnt, uns zu fragen",
        body: [
          "Bei längeren Rissen, bei Schäden an Membranen, bei Daunenjacken (Federspeicher öffnen sich beim Nähen sonst), bei Spezialnähten (wasserdicht abgeklebt), bei Schlafsäcken – hier braucht es Spezialmaterial und Erfahrung.",
          "Wir arbeiten mit Original-Reparaturband, einer Industrienähmaschine und kennen die Materialien aus Outdoor-Klassikern (Mammut, Patagonia, Arc'teryx, Mountain Hardwear).",
        ],
      },
      {
        heading: "Abholung und Lieferung im Bödeli",
        body: [
          "Im gesamten Bödeli holen wir Ihre Outdoor-Ausrüstung kostenlos ab – damit Sie nicht extra anreisen müssen. Reparatur dauert je nach Aufwand 3–10 Tage.",
        ],
      },
      {
        heading: "Was kostet eine professionelle Reparatur?",
        body: [
          "Ab CHF 45/h für Outdoor-/Spezialreparaturen. Eine typische Reparatur an einer Gore-Tex-Jacke liegt zwischen CHF 30 und CHF 90, eine Daunenjacke zwischen CHF 50 und CHF 120 – wir geben vor Beginn eine Schätzung.",
        ],
      },
    ],
    conclusion:
      "Reparieren statt wegwerfen – das schont Budget und Umwelt. Wir holen ab, reparieren mit dem richtigen Material und bringen zurück. Anfrage einfach per WhatsApp +41 77 973 20 71.",
  },
  {
    slug: "regelmaessige-reinigung-kosten",
    title: "Wohnung wöchentlich putzen lassen: Was kostet das wirklich?",
    description:
      "Transparente Kostenübersicht für regelmässige Reinigung – wöchentlich, alle zwei Wochen oder monatlich.",
    date: "2026-05-07",
    readingMinutes: 4,
    intro:
      "Eine regelmässige Reinigung im Haushalt verschafft Lebensqualität – aber was kostet das eigentlich? Wir rechnen es transparent vor.",
    sections: [
      {
        heading: "Stundensatz und typischer Aufwand",
        body: [
          "Unterhaltsreinigung kostet ab CHF 45/h. Für eine 4-Zimmer-Wohnung rechnen wir typischerweise mit 2.5–3.5 Stunden pro Einsatz – inkl. Küche, Bad, Wohnräume, Staubsaugen und Wischen.",
          "Macht: CHF 110–160 pro Einsatz.",
        ],
      },
      {
        heading: "Wöchentlich vs. monatlich",
        body: [
          'Wöchentlich: kleinerer Aufwand pro Termin, immer „sauber genug". Geschätzt CHF 110/Woche = CHF 440/Monat.',
          "Alle zwei Wochen: oft optimaler Mittelweg, CHF 220/Monat.",
          "Monatlich: höherer Aufwand (4–5 h), aber günstiger insgesamt. Geschätzt CHF 200/Monat.",
        ],
      },
      {
        heading: "Was im Stundensatz enthalten ist",
        body: [
          "Standard-Reinigungsmittel und Tücher sind im Stundensatz inklusive. Wenn Sie eigene Produkte bevorzugen (z.B. Allergie, Bio), verwenden wir gerne diese.",
          "Anfahrt im Bödeli ist kostenlos – ausserhalb gilt CHF 0.70/km gemäss Schweizer Spesenansatz.",
        ],
      },
      {
        heading: "Steuerlich abziehbar?",
        body: [
          "Haushaltshilfe ist im Kanton Bern beschränkt steuerlich abziehbar (z.B. bei Pflege oder Berufsausübung). Wir stellen ordentliche Rechnungen aus – Sie können diese in der Steuererklärung beilegen.",
        ],
      },
    ],
    conclusion:
      "Regelmässige Reinigung muss nicht teuer sein – und gibt Ihnen Zeit für das Wesentliche. Für ein konkretes Angebot einfach kurz beschreiben (Wohnung, Häufigkeit, Wünsche), wir rechnen transparent.",
  },
];

export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);
