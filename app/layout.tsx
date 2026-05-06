import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://primamax.ch"),
  title: "PrimaMax – Reinigung, Haushaltshilfe & Nähservice auf dem Bödeli",
  description:
    "PrimaMax ist Ihr zuverlässiger Partner für Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der Region Interlaken / Bödeli. Lokal, sorgfältig, professionell.",
  keywords: [
    "Reinigung Interlaken",
    "Haushaltshilfe Bödeli",
    "Nähservice Interlaken",
    "Putzfrau Interlaken",
    "Endreinigung Bödeli",
    "Airbnb Reinigung Interlaken",
    "Hauswart Interlaken",
    "PrimaMax",
  ],
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
      "Ihr zuverlässiger Partner für Sauberkeit und Pflege auf dem Bödeli.",
    url: "https://primamax.ch",
    siteName: "PrimaMax",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PrimaMax – Reinigung, Haushaltshilfe & Nähservice",
    description: "Ihr zuverlässiger Partner auf dem Bödeli.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
      <body className="min-h-screen bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
