import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PrimaMax – Reinigung, Haushaltshilfe & Nähservice",
    short_name: "PrimaMax",
    description:
      "Ihr zuverlässiger Partner für Reinigung, Haushaltshilfe und Nähservice auf dem Bödeli.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait",
    lang: "de-CH",
    dir: "ltr",
    categories: ["business", "lifestyle"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
