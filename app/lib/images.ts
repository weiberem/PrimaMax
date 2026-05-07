/**
 * Bilder-Konfiguration.
 *
 * Sobald ein Bild in /public/images/... abgelegt ist, hier den Pfad eintragen.
 * Komponenten verwenden den Wert automatisch und blenden den Bereich ein.
 * `null` = nicht aktiv, Komponente nutzt Fallback (SVG / Farbflächen).
 */

export type Images = {
  hero: string | null;
  services: {
    cleaning: string | null;
    airbnb: string | null;
    household: string | null;
    sewingBasic: string | null;
    sewingOutdoor: string | null;
  };
  gallery: { src: string; alt: string }[];
};

export const IMAGES: Images = {
  hero: null,
  services: {
    cleaning: null,
    airbnb: null,
    household: null,
    sewingBasic: null,
    sewingOutdoor: null,
  },
  gallery: [
    // Beispiel:
    // { src: "/images/gallery/badezimmer-vorher-nachher.jpg", alt: "Badezimmer vorher und nachher" },
  ],
};
