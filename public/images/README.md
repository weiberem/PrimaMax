# Bilder-Verzeichnis

Hier kommen alle Bilder der Website rein. Die Struktur ist auf die Komponenten abgestimmt — sobald du eine Datei mit dem erwarteten Namen ablegst und in `app/lib/images.ts` aktivierst, wird sie automatisch verwendet.

## Struktur

```
public/images/
├── hero/         → Hero-Hintergrund
├── services/     → Pro Service eine Aktionsaufnahme (z.B. jemand putzt)
├── gallery/      → Galerie mit Vorher/Nachher oder Sympathie-Fotos
└── backgrounds/  → Optionale Section-Hintergründe
```

## Empfehlungen

- **Format**: JPG (Fotos), SVG (Grafiken). Vermeide PNG für Fotos.
- **Hero-Bild**: 1920×1080 oder 1600×900, scharf, gute Komposition.
- **Service-Bilder**: 800×600 oder 1200×800, möglichst quadratisch wirkend.
- **Galerie**: 1200×800 oder 1200×1200.
- **Komprimierung**: vor dem Hochladen mit [TinyJPG](https://tinyjpg.com) o.ä. komprimieren.
- **Echte Personen**: nur mit ausdrücklicher Zustimmung der gezeigten Personen / Kunden.

## Aktivieren

Nach dem Hinzufügen einer Datei in `app/lib/images.ts` den Pfad eintragen:

```ts
export const IMAGES = {
  hero: "/images/hero/main.jpg",      // statt null
  services: {
    cleaning: "/images/services/cleaning.jpg",
    // ...
  },
  gallery: [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
  ],
};
```

Komponenten erkennen automatisch, ob ein Bild vorhanden ist und blenden es ein.
