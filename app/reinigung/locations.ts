export type Location = {
  slug: string;
  name: string;
  plz: string;
  description: string;
  landmarks: string[];
  travelTime: string;
  population: string;
  intro: string;
  services: string[];
  airbnbContext: string;
};

export const LOCATIONS: Record<string, Location> = {
  interlaken: {
    slug: "interlaken",
    name: "Interlaken",
    plz: "3800",
    description:
      "Reinigung, Haushaltshilfe und Nähservice in Interlaken – mit Sorgfalt vom Höheweg bis zum Bahnhof Ost.",
    landmarks: ["Höheweg", "Bahnhof Ost", "Höhematte", "Casino-Quartier"],
    travelTime: "5 Minuten",
    population: "rund 5'700 Einwohner",
    intro:
      "Als zentraler Tourismus-Hub im Berner Oberland hat Interlaken besondere Anforderungen: regelmässige Wechselreinigungen für Ferienwohnungen, Endreinigungen bei Mieterwechseln am Höheweg, Büroreinigung im Bahnhofs-Quartier. Wir kennen die Region, die Strassen und die Erwartungen.",
    services: [
      "Wohnungsreinigung in Mehrfamilienhäusern entlang dem Höheweg und im Beauregard-Quartier",
      "Endreinigung mit Abnahmegarantie für Wohnungen und kleinere Geschäftsräume",
      "Wechselreinigung von Ferienwohnungen und Airbnb-Objekten im Stadtzentrum",
      "Büroreinigung für KMUs rund um den Bahnhof Ost",
    ],
    airbnbContext:
      "Interlaken ist die Airbnb-Hochburg im Bödeli. Wir reinigen für mehrere Hosts wöchentlich Ferienwohnungen – Wechsel zwischen Gästen mit frischer Bettwäsche und Hotelstandard innert 3–4 Stunden.",
  },
  matten: {
    slug: "matten",
    name: "Matten bei Interlaken",
    plz: "3800",
    description:
      "Reinigungsservice und Haushaltshilfe in Matten bei Interlaken – direkt bei Ihnen vor der Tür.",
    landmarks: ["Aenderbergstrasse", "Schulhaus Matten", "Tellspiele", "Hauptstrasse"],
    travelTime: "direkt vor Ort",
    population: "rund 4'200 Einwohner",
    intro:
      "Matten ist unser Heimatort. Wir wohnen und arbeiten hier seit Jahren und kennen die Quartiere, die Genossenschafts-Liegenschaften und die typischen Bedürfnisse der Bewohner:innen. Anfahrt? Null – wir kommen aus der Aenderbergstrasse 19.",
    services: [
      "Wohnungsreinigung in Wohnüberbauungen rund um die Hauptstrasse",
      "Treppenhausreinigung in Mehrfamilienhäusern",
      "Endreinigung bei Mieterwechseln (mit Garantie der Übergabe)",
      "Haushaltshilfe für ältere Bewohner:innen",
    ],
    airbnbContext:
      "Matten beherbergt viele ruhige Ferienwohnungen abseits des Touristen-Trubels. Wir bieten Wechselreinigung und Kontrollservice für Hosts, die nicht selbst vor Ort sind.",
  },
  unterseen: {
    slug: "unterseen",
    name: "Unterseen",
    plz: "3800",
    description:
      "Reinigung und Haushaltshilfe in Unterseen – vom historischen Stadtkern bis zur Aare-Promenade.",
    landmarks: ["Stadthaus Unterseen", "Aare-Promenade", "Schloss Unterseen", "Untere Gasse"],
    travelTime: "5 Minuten",
    population: "rund 5'600 Einwohner",
    intro:
      "Unterseen mit seinem historischen Kern stellt besondere Ansprüche an Sorgfalt – ältere Wohnungen mit Holzböden, Stuckaturen, schmalen Treppenhäusern. Wir wissen wo Vorsicht und Erfahrung gefragt sind.",
    services: [
      "Wohnungsreinigung in historischen Liegenschaften der Unteren Gasse",
      "Endreinigung mit Rücksicht auf Originalsubstanz",
      "Regelmässige Unterhaltsreinigung",
      "Nähservice mit Abholung vor Ort",
    ],
    airbnbContext:
      "Charmante Ferienwohnungen im Altstadtbereich – wir reinigen schonend mit Blick auf Holzparkett und alte Fliesen.",
  },
  wilderswil: {
    slug: "wilderswil",
    name: "Wilderswil",
    plz: "3812",
    description:
      "Reinigung in Wilderswil – Eingangstor zum Lauterbrunnental und Schynige Platte.",
    landmarks: ["Bahnhof Wilderswil", "Schynige Platte Bahn", "Hauptstrasse", "Saxetenstrasse"],
    travelTime: "8 Minuten",
    population: "rund 2'500 Einwohner",
    intro:
      "Wilderswil ist Ausgangspunkt für viele Wanderer und Touristen – Chalets, Ferienhäuser, B&Bs mit hohem Reinigungsbedarf. Wir koordinieren regelmässige Termine mit Gastgeber:innen.",
    services: [
      "Chalet- und Ferienhaus-Reinigung",
      "Endreinigung mit Abnahmegarantie",
      "Wechselreinigung für B&Bs",
      "Outdoor-Nähservice mit kostenloser Abholung (auch Bergschuhe, Rucksäcke, Zelte)",
    ],
    airbnbContext:
      "Wilderswil ist beliebt bei Wandertouristen – wir übernehmen den Wechsel zwischen Gästen mit Hotel-Standard und kümmern uns auch um Outdoor-Wäsche (Schlafsäcke, Funktionskleidung).",
  },
  boenigen: {
    slug: "boenigen",
    name: "Bönigen",
    plz: "3806",
    description:
      "Reinigung in Bönigen am Brienzersee – wir kommen direkt zu Ihnen.",
    landmarks: ["Seestrasse", "Restaurant Seiler", "Bönigen Pier"],
    travelTime: "10 Minuten",
    population: "rund 2'400 Einwohner",
    intro:
      "Bönigen direkt am Brienzersee ist Heimat vieler Seehäuser und Ferienwohnungen mit Seeblick. Wir reinigen sorgfältig auch bei besonderer Möblierung und Holzelementen.",
    services: [
      "Reinigung von Seehäusern und Ferienwohnungen",
      "Endreinigung",
      "Haushaltshilfe für ältere Bewohner:innen",
      "Regelmässige Unterhaltsreinigung",
    ],
    airbnbContext:
      "Seenahe Ferienwohnungen mit hoher Buchungsfrequenz – wir koordinieren schnelle Wechsel auch am Wochenende.",
  },
  ringgenberg: {
    slug: "ringgenberg",
    name: "Ringgenberg",
    plz: "3852",
    description:
      "Reinigungsservice in Ringgenberg – auf der Sonnenseite des Brienzersees.",
    landmarks: ["Burgruine Ringgenberg", "Hauptstrasse", "Goldswil"],
    travelTime: "12 Minuten",
    population: "rund 2'700 Einwohner",
    intro:
      "Ringgenberg liegt malerisch über dem Brienzersee. Wir kommen zuverlässig auch in Hanglagen und kennen die Liegenschaften zwischen Hauptstrasse und Burgruine.",
    services: [
      "Wohnungsreinigung",
      "Endreinigung mit Abnahmegarantie",
      "Haushaltshilfe",
      "Wechselreinigung für Ferienwohnungen mit Seeblick",
    ],
    airbnbContext:
      "Ringgenberg bietet ruhige Ferienunterkünfte abseits des Trubels – wir betreuen mehrere Hosts regelmässig.",
  },
};

export const LOCATION_SLUGS = Object.keys(LOCATIONS);
