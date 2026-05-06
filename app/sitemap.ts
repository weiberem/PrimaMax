import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://primamax.ch";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#services`, lastModified: now, priority: 0.8 },
    { url: `${base}/#pricing`, lastModified: now, priority: 0.8 },
    { url: `${base}/#contact`, lastModified: now, priority: 0.7 },
    { url: `${base}/#about`, lastModified: now, priority: 0.6 },
    { url: `${base}/#booking`, lastModified: now, priority: 0.6 },
  ];
}
