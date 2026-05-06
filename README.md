# PrimaMax Website

Professionelle Website für **PrimaMax** – Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der Region Interlaken / Bödeli.

Gebaut mit **Next.js 14 (App Router)**, **Tailwind CSS**, KI-Funktionen via **Anthropic Claude** und Hosting auf **Vercel**.

---

## Funktionen

### Öffentliche Website (`/`)
- Hero, Trust-Block, Services, Preise (mit Anfahrt-Regeln), FAQ, Kontakt mit Karte, Buchung
- **Buchung**: Inquiry-only Modus bis 31.05.2026, danach automatisch Online-Direktbuchung mit 24h-Regel (kürzer = Telefon/WhatsApp-Fallback)
- **KI-Preisrechner (Beta)**: kontextabhängig je Service (Reinigung / Haushalt / Nähservice)
- **Zweisprachig** Deutsch / Englisch (Switcher in Navbar, persistiert in localStorage)
- **Mobile Sticky-CTA-Bar** mit Call / WhatsApp / Anfragen
- **SEO**: schema.org LocalBusiness + FAQ, dynamisches OG-Bild, Sitemap, Robots, Twitter-Cards, hreflang

### Operator-Bereich (`/rechnung`)
Passwort-geschützt (`INVOICE_PASSWORD`), Tabs:
- **Rechnungen**: Chat-basierter Rechnungsassistent (Claude) mit Live-Vorschau, PDF-Druck, Mailto, automatischer Nummerierung (`PM-YYYY-NNN`)
- **Kalender**: Monatsansicht, Termine erfassen / bearbeiten / löschen, lokal gespeichert (localStorage)

### Rechtliches
- `/impressum` – Anbieterkennzeichnung (Schweizer DSG-konform)
- `/datenschutz` – Datenschutzerklärung mit allen Drittdiensten

---

## Setup

### Lokal entwickeln

```bash
npm install
cp .env.example .env.local   # und Werte eintragen
npm run dev
```

Aufrufen: <http://localhost:3000>

### Environment Variables

In Vercel unter **Settings → Environment Variables** für **Production** setzen:

| Variable | Beschreibung | Beispiel |
|---|---|---|
| `ANTHROPIC_API_KEY` | API-Key für Claude (Preisrechner + Rechnungsassistent) | `sk-ant-...` |
| `INVOICE_PASSWORD` | Passwort für `/rechnung` (12 Zeichen empfohlen) | `rfVoJLxNZhOi` |
| `COMPANY_PHONE` | Telefon für Rechnungen | `+41 79 123 45 67` |
| `COMPANY_IBAN` | IBAN für Rechnungen | `CH00 0000 0000 0000 0000 0` |
| `MWST_EXEMPT` | Hinweis auf MWST-Befreiung anzeigen | `true` |

### Manuell zu setzende Werte im Code

Bevor live: in den folgenden Dateien Platzhalter ersetzen:

- `app/components/WhatsAppButton.tsx`: `WHATSAPP_PHONE_PLACEHOLDER` → echte Telefonnummer
- `app/components/Contact.tsx`: `FORMSPREE_ENDPOINT` → echte Formspree-URL
- `app/components/Booking.tsx`: `FORMSPREE_ENDPOINT` → echte Formspree-URL

---

## Domain & Deployment

- **Domain**: `primamax.ch` (verbunden via Vercel)
- **Auto-Deploy**: jeder Push auf `main` deployt automatisch
- **HTTPS** + Vercel CDN aktiv
- **Vercel Analytics + Speed Insights**: aktiviert (kein Cookie-Banner nötig)

### Vor Go-Live Checkliste
- [ ] Auto Renewal der Domain einschalten (Vercel → Domains)
- [ ] `www.primamax.ch` → Redirect auf `primamax.ch` einrichten
- [ ] Alle Env Vars in Vercel gesetzt
- [ ] Telefonnummer in `WhatsAppButton.tsx` eingetragen
- [ ] Formspree-Endpoint eingetragen
- [ ] Google Search Console: Domain hinzufügen, Sitemap einreichen
- [ ] Google Business Profile anlegen (lokales SEO)

---

## Roadmap

### Phase 2 (Backend, geplant)
- Supabase Backend mit Auth (zwei Operator-Konten)
- DB-Schema: `inquiries`, `jobs`, `invoices`, `appointments`, `operators`
- Anfragen-Inbox aller Web-Submissions im Operator-Bereich
- Auftrags-Status-Workflow (Neu → Bestätigt → Erledigt → Verrechnet)
- Geteilter Kalender (statt localStorage)
- WhatsApp-Paste-and-Parse über Claude

### Phase 3 (später)
- WhatsApp Business API Webhooks
- Online-Direktbuchung mit Operator-freigegebenen Slots
- Kundenkonten / Bestellhistorie

---

## Tech-Stack

- **Framework**: Next.js 14.2 (App Router, RSC)
- **Styling**: Tailwind CSS 3.4
- **AI**: Anthropic SDK 0.32
- **Hosting**: Vercel (Edge runtime für OG-Image)
- **Analytics**: Vercel Analytics + Speed Insights
- **Forms**: Formspree (vorerst, später Supabase)

## Struktur

```
app/
├── api/
│   ├── estimate/        # KI-Preisrechner endpoint
│   ├── invoice-agent/   # Rechnungs-Chat-Agent
│   └── invoice-auth/    # Operator-Login
├── components/          # React-Komponenten
├── i18n/                # DE/EN Dictionary + Provider
├── rechnung/            # Operator-Bereich (Rechnungen + Kalender)
├── impressum/
├── datenschutz/
├── layout.tsx           # Root layout, Metadata, Analytics
├── page.tsx             # Homepage
├── opengraph-image.tsx  # Dynamisches OG-Bild
├── sitemap.ts
├── manifest.ts
└── icon.svg             # Favicon
```

## Lizenz

© PrimaMax. Alle Rechte vorbehalten.
