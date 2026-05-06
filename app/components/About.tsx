// TODO: Replace placeholder with real photos and bio text
export default function About() {
  return (
    <section id="about" className="section bg-primary-50/40">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">Über uns</h2>
          <p className="section-subtitle">
            Lernen Sie uns kennen – wir stellen uns bald persönlich vor.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 items-start">
          <div className="reveal lg:col-span-2 grid grid-cols-2 gap-4">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] flex items-center justify-center rounded-2xl border-2 border-dashed border-primary-300 bg-white text-primary-600"
              >
                <div className="text-center px-4">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
                  </div>
                  <p className="text-sm font-medium">Portrait folgt</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal lg:col-span-3 space-y-5">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-primary-100">
              <h3 className="text-xl font-semibold text-primary-700">
                Ein lokales Paar – mit Herz und Verstand
              </h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Hier finden Sie schon bald unsere persönliche Geschichte: Wer
                wir sind, warum wir tun, was wir tun, und was uns mit dem
                Bödeli verbindet. Wir freuen uns darauf, uns Ihnen
                vorzustellen.
              </p>
              <p className="mt-3 text-slate-600 italic">
                „Lernen Sie uns kennen – wir stellen uns bald persönlich vor.“
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Lokal", "Diskret", "Sorgfältig", "Zuverlässig", "Persönlich"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-primary-300 bg-white/60 p-6 text-sm text-slate-600">
              Hier folgt in Kürze ein persönlicher Beschrieb von uns als
              Inhabern – inklusive Foto, Werdegang und unseren Werten.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
