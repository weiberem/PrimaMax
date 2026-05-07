import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="container-x flex min-h-screen items-center justify-center py-16">
        <div className="max-w-lg text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-3xl">
            🧭
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-3 text-slate-600">
            Diese Seite existiert nicht (mehr). Vielleicht hilft Ihnen einer
            der folgenden Links weiter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Zur Startseite
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Kontakt
            </Link>
            <Link href="/#services" className="btn-secondary">
              Leistungen
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
