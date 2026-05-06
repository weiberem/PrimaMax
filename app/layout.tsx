import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimaMax – Reinigung, Haushaltshilfe & Nähservice im Bödeli",
  description:
    "PrimaMax ist Ihr zuverlässiger Partner für Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der Region Interlaken/Bödeli. Lokal, sorgfältig, professionell.",
  keywords: [
    "Reinigung Interlaken",
    "Haushaltshilfe Bödeli",
    "Nähservice Interlaken",
    "Putzfrau Interlaken",
    "Endreinigung Bödeli",
    "Hauswart Interlaken",
    "PrimaMax",
  ],
  openGraph: {
    title: "PrimaMax – Reinigung, Haushaltshilfe & Nähservice im Bödeli",
    description:
      "Ihr zuverlässiger Partner für Sauberkeit und Pflege im Bödeli.",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
