# PrimaMax Website

Professionelle Website für **PrimaMax** – Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der Region Interlaken / Bödeli.

Gebaut mit **Next.js (App Router)**, **Tailwind CSS** und einem KI-Preisrechner via **Anthropic Claude**.

## Lokale Entwicklung

```bash
npm install
cp .env.example .env.local
# In .env.local den ANTHROPIC_API_KEY eintragen
npm run dev
```

Die Seite läuft anschliessend auf [http://localhost:3000](http://localhost:3000).

### Build & Start (Produktion)

```bash
npm run build
npm start
```

## Deployment auf Vercel

1. Repository auf [Vercel](https://vercel.com/new) importieren.
2. Framework Preset: **Next.js** (wird automatisch erkannt).
3. **Environment Variable** hinzufügen:
   - **Settings → Environment Variables**
   - Name: `ANTHROPIC_API_KEY`
   - Value: Ihr API-Key (siehe [console.anthropic.com](https://console.anthropic.com/))
   - Environment: **Production**, **Preview** und **Development** auswählen.
4. **Deploy** klicken.

Bei Änderung der Variable muss das Projekt einmalig neu deployt werden, damit der neue Wert übernommen wird.

### Eigene Domain anbinden

1. In Vercel: **Project → Settings → Domains → Add**.
2. Wunschdomain (z.B. `primamax.ch`) eingeben.
3. Den von Vercel angezeigten DNS-Eintrag (`A` oder `CNAME`) beim Domain-Provider hinterlegen.
4. Vercel verifiziert die Domain automatisch und stellt ein SSL-Zertifikat bereit.

## Konfiguration

### KI-Preisrechner

- API-Route: `app/api/estimate/route.ts`
- Modell: `claude-sonnet-4-20250514`
- Der API-Key wird ausschliesslich serverseitig über `process.env.ANTHROPIC_API_KEY` gelesen und niemals ans Frontend ausgeliefert.

### Kontaktformular (Formspree)

In `app/components/Contact.tsx`:

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
```

Anleitung:

1. Auf [formspree.io](https://formspree.io/) ein kostenloses Konto anlegen.
2. Ein neues Formular erstellen und die Endpoint-URL kopieren (Format: `https://formspree.io/f/abcdwxyz`).
3. Diese URL in `Contact.tsx` ersetzen und committen.
4. Im Formspree-Dashboard die Empfänger-E-Mail (z.B. `info@primamax.ch`) bestätigen.

### WhatsApp-Nummer

Platzhalter: `+41 XX XXX XX XX` (in `app/components/WhatsAppButton.tsx`, Konstante `WHATSAPP_PHONE_PLACEHOLDER`).

Ersetzen Sie diese Konstante durch die echte Nummer im internationalen Format. Sie wird automatisch sowohl im Floating-Button, in der Kontaktbox als auch im Preisrechner verwendet.

### Portrait-Fotos & Bio (Über uns)

In `app/components/About.tsx` ist ein `// TODO`-Kommentar markiert. So ersetzen Sie die Platzhalter:

1. Fotos in `public/images/` ablegen, z.B. `public/images/portrait-1.jpg` und `public/images/portrait-2.jpg`.
2. Die beiden Platzhalter-Boxen mit `<img>`- oder Next.js `<Image>`-Tags ersetzen, z.B.:

   ```tsx
   import Image from "next/image";
   <Image src="/images/portrait-1.jpg" alt="…" width={600} height={800} className="object-cover w-full h-full rounded-2xl" />
   ```
3. Den Beschreibungstext in der weissen Box durch Ihre persönliche Bio ersetzen.

### Online-Buchung (Cal.com / Calendly)

In `app/components/Booking.tsx` ist ein `// TODO`-Kommentar markiert. Beispiele:

**Cal.com Inline Embed:**

```bash
npm install @calcom/embed-react
```

```tsx
"use client";
import Cal from "@calcom/embed-react";

<Cal calLink="primamax/termin" style={{ width: "100%", height: "650px" }} />
```

**Calendly Inline Widget:**

```tsx
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/primamax/termin"
  style={{ minWidth: 320, height: 700 }}
/>
<script src="https://assets.calendly.com/assets/external/widget.js" async />
```

Den bestehenden Coming-Soon-Block in `Booking.tsx` durch den Embed ersetzen.

## Projektstruktur

```
app/
├── api/
│   └── estimate/route.ts     # Server-side Anthropic API Route
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx             # TODO: Foto- & Bio-Platzhalter
│   ├── Pricing.tsx
│   ├── PriceCalculator.tsx
│   ├── Booking.tsx           # TODO: Cal.com/Calendly-Embed
│   ├── Contact.tsx           # TODO: Formspree-Endpoint
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── RevealOnScroll.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## Sicherheit

- Der Anthropic API-Key wird **niemals** im Browser ausgeliefert. Aufrufe laufen über die Server-Route `/api/estimate`.
- Für produktive Nutzung empfiehlt sich zusätzlich Rate-Limiting (z.B. via Vercel Edge Middleware oder Upstash Ratelimit).

## Lizenz

© PrimaMax. Alle Rechte vorbehalten.
