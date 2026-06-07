import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "./articles";

export const metadata: Metadata = {
  title: "Tipps & Wissen rund ums Reinigen – PrimaMax Blog",
  description:
    "Tipps zu Endreinigung, Airbnb-Wechsel, Outdoor-Reparatur und mehr – aus der Praxis von PrimaMax in der Region Interlaken / Bödeli.",
  alternates: { canonical: "https://primamax.ch/blog" },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary-700"
        >
          ← Zurück zur Website
        </Link>

        <header className="mt-4 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Tipps & Wissen
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Aus unserer Praxis im Bödeli: Wissenswertes rund um Reinigung,
            Endreinigung, Airbnb-Wechsel und Outdoor-Reparatur.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("de-CH", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{article.readingMinutes} min Lesezeit</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-900">
                {article.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {article.description}
              </p>
              <Link
                href={`/blog/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-primary-700 hover:text-primary-800"
              >
                Weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
