import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";
import StructuredData from "./components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://primamax.ch"),
  title: {
    default:
      "PrimaMax – Reinigung, Haushaltshilfe & Nähservice auf dem Bödeli",
    template: "%s · PrimaMax",
  },
  description:
    "PrimaMax ist Ihr zuverlässiger Partner für Reinigung, Endreinigung, Airbnb-Wechselreinigung, Haushaltshilfe und Nähservice in der Region Interlaken / Bödeli. Lokal, sorgfältig, persönlich.",
  applicationName: "PrimaMax",
  keywords: [
    "Reinigung Interlaken",
    "Reinigung Bödeli",
    "Haushaltshilfe Bödeli",
    "Haushaltshilfe Interlaken",
    "Nähservice Interlaken",
    "Putzfrau Interlaken",
    "Endreinigung Bödeli",
    "Airbnb Reinigung Interlaken",
    "Ferienwohnung Reinigung Bödeli",
    "Hauswart Interlaken",
    "Matten bei Interlaken",
    "Unterseen Reinigung",
    "Wilderswil Reinigung",
    "PrimaMax",
  ],
  authors: [{ name: "PrimaMax" }],
  creator: "PrimaMax",
  publisher: "PrimaMax",
  alternates: {
    canonical: "https://primamax.ch",
    languages: {
      "de-CH": "https://primamax.ch",
      en: "https://primamax.ch",
    },
  },
  openGraph: {
    title: "PrimaMax – Reinigung, Haushaltshilfe & Nähservice auf dem Bödeli",
    description:
      "Ihr zuverlässiger Partner für Sauberkeit und Pflege auf dem Bödeli – Region Interlaken.",
    url: "https://primamax.ch",
    siteName: "PrimaMax",
    locale: "de_CH",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimaMax – Reinigung, Haushaltshilfe & Nähservice",
    description: "Ihr zuverlässiger Partner auf dem Bödeli.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-white">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
