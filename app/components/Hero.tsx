export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-white to-white" />
      <div className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-alpine-200/40 blur-3xl" />

      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 border border-primary-100 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            Region Interlaken / Bödeli
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
            Ihr zuverlässiger Partner für{" "}
            <span className="text-primary-600">Sauberkeit</span> und{" "}
            <span className="text-alpine-600">Pflege</span> im Bödeli
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            Reinigung, Haushaltshilfe, Nähservice und Hauswartsarbeiten – mit
            Sorgfalt und einem persönlichen Lächeln. Wir kümmern uns, damit Sie
            Zeit für das Wesentliche haben.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Jetzt anfragen
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#calculator" className="btn-secondary">
              Preis berechnen
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckIcon /> Lokal verwurzelt
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon /> Zuverlässig
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon /> Sorgfältig
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-alpine-100 shadow-xl">
            <svg
              className="absolute inset-0 h-full w-full opacity-90"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#cfe9e0" />
                  <stop offset="100%" stopColor="#f5f7f4" />
                </linearGradient>
                <linearGradient id="mtn1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2d7d6f" />
                  <stop offset="100%" stopColor="#1f4d47" />
                </linearGradient>
                <linearGradient id="mtn2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#82cdb7" />
                  <stop offset="100%" stopColor="#369583" />
                </linearGradient>
              </defs>
              <rect width="400" height="300" fill="url(#sky)" />
              <circle cx="320" cy="70" r="32" fill="#fde9c8" />
              <polygon points="0,220 80,120 160,200 240,90 320,180 400,140 400,300 0,300" fill="url(#mtn1)" />
              <polygon points="0,250 60,180 130,230 200,160 280,220 360,170 400,210 400,300 0,300" fill="url(#mtn2)" opacity="0.85" />
              <polygon points="60,120 80,90 100,120" fill="#ffffff" opacity="0.85" />
              <polygon points="220,90 240,55 260,90" fill="#ffffff" opacity="0.9" />
              <rect x="160" y="220" width="80" height="50" fill="#ffffff" rx="3" />
              <polygon points="160,220 200,190 240,220" fill="#a94f2d" />
              <rect x="185" y="240" width="14" height="30" fill="#246058" />
              <rect x="170" y="232" width="12" height="10" fill="#82cdb7" />
              <rect x="208" y="232" width="12" height="10" fill="#82cdb7" />
            </svg>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 backdrop-blur px-4 py-3 shadow-sm">
              <div className="text-sm font-semibold text-primary-700">
                Bödeli & Umgebung
              </div>
              <div className="text-xs text-slate-600">
                Interlaken · Matten · Unterseen · Wilderswil · Bönigen · Ringgenberg
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
