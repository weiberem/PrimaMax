import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES, ARTICLE_SLUGS } from "../articles";

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://primamax.ch/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://primamax.ch/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      locale: "de_CH",
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "de-CH",
    author: {
      "@type": "Organization",
      name: "PrimaMax",
      url: "https://primamax.ch",
    },
    publisher: {
      "@type": "Organization",
      name: "PrimaMax",
      logo: {
        "@type": "ImageObject",
        url: "https://primamax.ch/logo.svg",
      },
    },
    mainEntityOfPage: `https://primamax.ch/blog/${article.slug}`,
  };

  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="container-x py-16 sm:py-20 lg:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary-700"
        >
          ← Alle Artikel
        </Link>

        <header className="mt-4 max-w-3xl">
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
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {article.intro}
          </p>
        </header>

        <div className="mt-12 max-w-3xl space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                {section.heading}
              </h2>
              {section.body.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 text-base leading-relaxed text-slate-700"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-2xl bg-primary-50 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-slate-800">
              {article.conclusion}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/#contact" className="btn-primary">
                Anfrage stellen
              </a>
              <a
                href="https://wa.me/41779732071"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </section>
        </div>

        {others.length > 0 && (
          <section className="mt-16 max-w-3xl border-t border-slate-200 pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Weitere Artikel
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="rounded-xl border border-slate-200 p-4 transition hover:border-primary-400 hover:shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {a.title}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {a.readingMinutes} min Lesezeit
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
