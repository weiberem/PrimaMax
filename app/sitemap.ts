import type { MetadataRoute } from "next";
import { LOCATION_SLUGS } from "./reinigung/locations";
import { ARTICLES } from "./blog/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://primamax.ch";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#services`, lastModified: now, priority: 0.8 },
    { url: `${base}/#pricing`, lastModified: now, priority: 0.8 },
    { url: `${base}/#faq`, lastModified: now, priority: 0.7 },
    { url: `${base}/#contact`, lastModified: now, priority: 0.7 },
    { url: `${base}/#booking`, lastModified: now, priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...LOCATION_SLUGS.map((slug) => ({
      url: `${base}/reinigung/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...ARTICLES.map((article) => ({
      url: `${base}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/impressum`, lastModified: now, priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: now, priority: 0.3 },
  ];
}
