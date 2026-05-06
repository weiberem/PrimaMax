export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="container-x py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-700 font-bold">
              P
            </span>
            <span className="text-lg font-semibold tracking-tight">
              PrimaMax
            </span>
          </div>
          <p className="mt-3 text-sm text-primary-100/90 max-w-sm">
            Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten in der
            Region Interlaken / Bödeli – mit Sorgfalt und Herzblut.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Schnellzugriff
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Leistungen</a></li>
            <li><a href="#pricing" className="hover:text-white">Preise</a></li>
            <li><a href="#calculator" className="hover:text-white">Preisrechner</a></li>
            <li><a href="#booking" className="hover:text-white">Buchung</a></li>
            <li><a href="#contact" className="hover:text-white">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Impressum
          </h4>
          {/* TODO: Replace with real Impressum / legal information */}
          <div className="mt-3 text-sm text-primary-100/85 leading-relaxed">
            PrimaMax<br />
            Bödeli, Schweiz<br />
            E-Mail: info@primamax.ch<br />
            <span className="text-primary-200/70">
              Vollständiges Impressum folgt.
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-100/80">
          <span>© {year} PrimaMax. Alle Rechte vorbehalten.</span>
          <span>Erstellt mit Sorgfalt im Bödeli.</span>
        </div>
      </div>
    </footer>
  );
}
