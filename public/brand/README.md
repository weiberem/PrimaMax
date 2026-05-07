# Brand Assets

Hier kommen die fertigen Markenmaterialien hin – Visitenkarten, Social-Media-Vorlagen, Druckdaten. Diese Dateien werden **nicht direkt auf der Website verwendet** (dafür sind `/public/logo-*` und `/public/images/` zuständig), sondern dienen als zentrale Ablage für Print, Social Media und E-Mail-Signaturen.

## Empfohlene Dateien

| Datei | Zweck |
|---|---|
| `business-card-front.png` | Visitenkarte Vorderseite (dunkelblau) |
| `business-card-back.png` | Visitenkarte Rückseite (mit Adresse) |
| `story.png` | Instagram/Facebook-Story-Template (1080×1920) |
| `banner-wide.jpg` | Wide-Banner für Social Media / E-Mail-Header |
| `og-image.jpg` | Open-Graph-Bild (1200×630) – falls statisch statt dynamisch |
| `letterhead.png` | Briefkopf für Word/PDF-Dokumente |

## Logo-Dateien (für die Website)

Diese gehören NICHT in `/brand/`, sondern direkt unter `/public/`:

| Datei | Verwendet in |
|---|---|
| `/public/logo-light.svg` (oder `.png`) | Navbar, Rechnungen, helle Bereiche |
| `/public/logo-dark.svg` (oder `.png`) | Footer, dunkle Bereiche |

Solange diese Dateien fehlen, verwendet die Website automatisch den Text-Fallback („P" + „PrimaMax").

## Hero-Hintergrund

Falls du ein Hero-Banner als Hintergrund willst:

1. Datei nach `/public/images/hero/hero-banner.jpg` legen
2. In `app/lib/images.ts` den Pfad eintragen: `hero: "/images/hero/hero-banner.jpg"`
3. Push → live

Die Hero-Komponente legt automatisch einen weissen Verlauf darüber, damit der Text lesbar bleibt.
