"use client";

import { useMemo, useState } from "react";
import {
  WHATSAPP_PHONE_PLACEHOLDER,
  buildWhatsAppLink,
} from "./WhatsAppButton";
import { useLang } from "../i18n/LanguageProvider";

type Category = "cleaning" | "household" | "sewing";
type CleaningVariant = "unterhalt" | "end" | "airbnb";
type HouseholdVariant = "umfassend" | "buegeln";
type SewingVariant = "einfach" | "outdoor";

type ApiResponse = { estimate?: string; error?: string };

function renderEstimate(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-primary-700">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function PriceCalculator() {
  const { t } = useLang();

  const [category, setCategory] = useState<Category>("cleaning");

  // Cleaning state
  const [cleaningVariant, setCleaningVariant] =
    useState<CleaningVariant>("unterhalt");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [cleaningExtras, setCleaningExtras] = useState<string[]>([]);
  const [beds, setBeds] = useState("");

  // Household state
  const [householdVariant, setHouseholdVariant] =
    useState<HouseholdVariant>("umfassend");
  const [householdTasks, setHouseholdTasks] = useState<string[]>([]);
  const [householdHours, setHouseholdHours] = useState("3");
  const [shirts, setShirts] = useState("");
  const [pants, setPants] = useState("");
  const [bedding, setBedding] = useState("");

  // Sewing state
  const [sewingVariant, setSewingVariant] =
    useState<SewingVariant>("einfach");
  const [sewingTasks, setSewingTasks] = useState<string[]>([]);
  const [sewingCount, setSewingCount] = useState("1");
  const [sewingMaterial, setSewingMaterial] = useState("");

  // Common
  const [frequency, setFrequency] = useState("einmalig");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const showFrequency = !(
    category === "cleaning" && cleaningVariant === "end"
  ) && !(category === "sewing");

  function toggleArrayItem(
    arr: string[],
    setArr: (a: string[]) => void,
    item: string
  ) {
    setArr(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
  }

  const summary = useMemo(() => {
    const lines: string[] = [];
    if (category === "cleaning") {
      lines.push(`Kategorie: Reinigung`);
      lines.push(
        `Variante: ${t.calculator.cleaning.variants[cleaningVariant]}`
      );
      if (area) lines.push(`Fläche: ${area} m²`);
      if (rooms) lines.push(`Räume: ${rooms}`);
      if (cleaningVariant === "end" && cleaningExtras.length) {
        lines.push(`Zusätze: ${cleaningExtras.join(", ")}`);
      }
      if (cleaningVariant === "airbnb" && beds) {
        lines.push(`Anzahl Betten: ${beds}`);
      }
    } else if (category === "household") {
      lines.push(`Kategorie: Haushaltshilfe`);
      lines.push(
        `Variante: ${t.calculator.household.variants[householdVariant]}`
      );
      if (householdVariant === "umfassend") {
        if (householdTasks.length)
          lines.push(`Aufgaben: ${householdTasks.join(", ")}`);
        if (householdHours)
          lines.push(`Stunden pro Einsatz: ${householdHours}`);
      } else {
        const wash: string[] = [];
        if (shirts) wash.push(`${shirts} Hemden`);
        if (pants) wash.push(`${pants} Hosen/Röcke`);
        if (bedding) wash.push(`${bedding} Bettwäsche-Sets`);
        if (wash.length) lines.push(`Wäsche/Bügeln: ${wash.join(", ")}`);
      }
    } else if (category === "sewing") {
      lines.push(`Kategorie: Nähservice`);
      lines.push(`Variante: ${t.calculator.sewing.variants[sewingVariant]}`);
      if (sewingTasks.length)
        lines.push(`Arbeiten: ${sewingTasks.join(", ")}`);
      if (sewingCount) lines.push(`Anzahl Stücke: ${sewingCount}`);
      if (sewingMaterial) lines.push(`Material: ${sewingMaterial}`);
      lines.push(`Hinweis: Kostenloser Abholservice im Bödeli.`);
    }
    if (showFrequency) lines.push(`Häufigkeit: ${frequency}`);
    if (description) lines.push(`\nDetails: ${description}`);
    return lines.join("\n");
  }, [
    t,
    category,
    cleaningVariant,
    area,
    rooms,
    cleaningExtras,
    beds,
    householdVariant,
    householdTasks,
    householdHours,
    shirts,
    pants,
    bedding,
    sewingVariant,
    sewingTasks,
    sewingCount,
    sewingMaterial,
    frequency,
    description,
    showFrequency,
  ]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const services: string[] = [];
      if (category === "cleaning") {
        services.push(
          cleaningVariant === "end"
            ? "Endreinigung"
            : cleaningVariant === "airbnb"
            ? "Airbnb / Ferienwohnung"
            : "Reinigung"
        );
      } else if (category === "household") {
        services.push(
          householdVariant === "buegeln"
            ? "Bügeln / Wäsche"
            : "Haushaltshilfe"
        );
      } else if (category === "sewing") {
        services.push(
          sewingVariant === "outdoor"
            ? "Nähservice (Outdoor)"
            : "Nähservice (einfach)"
        );
      }

      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: summary,
          services,
          area: category === "cleaning" ? area : "",
          rooms: category === "cleaning" ? rooms : "",
          frequency: showFrequency ? frequency : "einmalig",
        }),
      });
      const data = (await res.json()) as ApiResponse;
      if (!res.ok || !data.estimate) {
        setError(
          data.error ??
            "Der Preisrechner ist momentan nicht erreichbar. Bitte kontaktieren Sie uns direkt."
        );
      } else {
        setResult(data.estimate);
      }
    } catch {
      setError(
        "Verbindungsfehler. Bitte kontaktieren Sie uns direkt per WhatsApp oder Formular."
      );
    } finally {
      setLoading(false);
    }
  }

  const whatsappHref = useMemo(() => {
    const lines = [t.calculator.whatsappIntro, summary];
    if (result)
      lines.push(
        `\n${t.calculator.estimateSummaryPrefix}:\n${result.replace(/\*\*/g, "")}`
      );
    return buildWhatsAppLink(WHATSAPP_PHONE_PLACEHOLDER, lines.join("\n"));
  }, [t, summary, result]);

  return (
    <section id="calculator" className="section bg-primary-50/40">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="section-title">{t.calculator.title}</h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
              <span aria-hidden>🧪</span>
              {t.calculator.comingSoonBadge}
            </span>
          </div>
          <p className="section-subtitle">{t.calculator.subtitle}</p>
          <p className="mt-3 max-w-2xl rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
            {t.calculator.betaNote}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 items-start">
          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 rounded-2xl bg-white p-5 sm:p-7 shadow-sm border border-slate-200 space-y-6"
          >
            {/* Category selector */}
            <div>
              <span className="label">{t.calculator.categoryLabel}</span>
              <div className="grid grid-cols-3 gap-2">
                {(["cleaning", "household", "sewing"] as Category[]).map(
                  (c) => {
                    const active = category === c;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCategory(c)}
                        className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                          active
                            ? "border-primary-600 bg-primary-600 text-white shadow-sm"
                            : "border-slate-300 bg-white text-slate-700 hover:border-primary-400"
                        }`}
                      >
                        {t.calculator.categories[c]}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Cleaning fields */}
            {category === "cleaning" && (
              <>
                <ChipGroup
                  label={t.calculator.cleaning.variantLabel}
                  options={[
                    {
                      value: "unterhalt",
                      label: t.calculator.cleaning.variants.unterhalt,
                    },
                    {
                      value: "end",
                      label: t.calculator.cleaning.variants.end,
                    },
                    {
                      value: "airbnb",
                      label: t.calculator.cleaning.variants.airbnb,
                    },
                  ]}
                  value={cleaningVariant}
                  onChange={(v) => setCleaningVariant(v as CleaningVariant)}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="area">
                      {t.calculator.cleaning.areaLabel}
                    </label>
                    <input
                      id="area"
                      inputMode="numeric"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder={t.calculator.cleaning.areaPlaceholder}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="rooms">
                      {t.calculator.cleaning.roomsLabel}
                    </label>
                    <input
                      id="rooms"
                      inputMode="decimal"
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      placeholder={t.calculator.cleaning.roomsPlaceholder}
                      className="input"
                    />
                  </div>
                </div>

                {cleaningVariant === "end" && (
                  <CheckboxGroup
                    label={t.calculator.cleaning.extrasLabel}
                    options={t.calculator.cleaning.extras}
                    value={cleaningExtras}
                    onChange={setCleaningExtras}
                  />
                )}

                {cleaningVariant === "airbnb" && (
                  <div>
                    <label className="label" htmlFor="beds">
                      {t.calculator.cleaning.bedsLabel}
                    </label>
                    <input
                      id="beds"
                      inputMode="numeric"
                      value={beds}
                      onChange={(e) => setBeds(e.target.value)}
                      placeholder="z.B. 4"
                      className="input"
                    />
                  </div>
                )}
              </>
            )}

            {/* Household fields */}
            {category === "household" && (
              <>
                <ChipGroup
                  label={t.calculator.household.variantLabel}
                  options={[
                    {
                      value: "umfassend",
                      label: t.calculator.household.variants.umfassend,
                    },
                    {
                      value: "buegeln",
                      label: t.calculator.household.variants.buegeln,
                    },
                  ]}
                  value={householdVariant}
                  onChange={(v) => setHouseholdVariant(v as HouseholdVariant)}
                />

                {householdVariant === "umfassend" && (
                  <>
                    <CheckboxGroup
                      label={t.calculator.household.tasksLabel}
                      options={t.calculator.household.tasks}
                      value={householdTasks}
                      onChange={setHouseholdTasks}
                    />
                    <div>
                      <label className="label" htmlFor="hh-hours">
                        {t.calculator.household.hoursLabel}
                      </label>
                      <select
                        id="hh-hours"
                        className="input"
                        value={householdHours}
                        onChange={(e) => setHouseholdHours(e.target.value)}
                      >
                        {["2", "3", "4", "5", "6", "8"].map((h) => (
                          <option key={h} value={h}>
                            {h} h
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                {householdVariant === "buegeln" && (
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="label" htmlFor="shirts">
                        {t.calculator.household.shirtsLabel}
                      </label>
                      <input
                        id="shirts"
                        inputMode="numeric"
                        value={shirts}
                        onChange={(e) => setShirts(e.target.value)}
                        className="input"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="pants">
                        {t.calculator.household.pantsLabel}
                      </label>
                      <input
                        id="pants"
                        inputMode="numeric"
                        value={pants}
                        onChange={(e) => setPants(e.target.value)}
                        className="input"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="bedding">
                        {t.calculator.household.beddingLabel}
                      </label>
                      <input
                        id="bedding"
                        inputMode="numeric"
                        value={bedding}
                        onChange={(e) => setBedding(e.target.value)}
                        className="input"
                        placeholder="0"
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Sewing fields */}
            {category === "sewing" && (
              <>
                <ChipGroup
                  label={t.calculator.sewing.variantLabel}
                  options={[
                    {
                      value: "einfach",
                      label: t.calculator.sewing.variants.einfach,
                    },
                    {
                      value: "outdoor",
                      label: t.calculator.sewing.variants.outdoor,
                    },
                  ]}
                  value={sewingVariant}
                  onChange={(v) => {
                    setSewingVariant(v as SewingVariant);
                    setSewingTasks([]);
                  }}
                />

                <CheckboxGroup
                  label={t.calculator.sewing.tasksLabel}
                  options={
                    sewingVariant === "outdoor"
                      ? t.calculator.sewing.tasksOutdoor
                      : t.calculator.sewing.tasksEinfach
                  }
                  value={sewingTasks}
                  onChange={setSewingTasks}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="sewing-count">
                      {t.calculator.sewing.countLabel}
                    </label>
                    <input
                      id="sewing-count"
                      inputMode="numeric"
                      value={sewingCount}
                      onChange={(e) => setSewingCount(e.target.value)}
                      className="input"
                    />
                  </div>
                  {sewingVariant === "outdoor" && (
                    <div>
                      <label className="label" htmlFor="sewing-material">
                        {t.calculator.sewing.materialLabel}
                      </label>
                      <select
                        id="sewing-material"
                        className="input"
                        value={sewingMaterial}
                        onChange={(e) => setSewingMaterial(e.target.value)}
                      >
                        <option value="">—</option>
                        {t.calculator.sewing.materials.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <div className="rounded-lg border border-primary-200 bg-primary-50/60 px-3 py-2 text-xs text-primary-800">
                  ✨ {t.calculator.sewing.pickupNote}
                </div>
              </>
            )}

            {/* Frequency (only when relevant) */}
            {showFrequency && (
              <ChipGroup
                label={t.calculator.frequencyLabel}
                options={t.calculator.frequencies}
                value={frequency}
                onChange={setFrequency}
                small
              />
            )}

            {/* Free description */}
            <div>
              <label className="label" htmlFor="desc">
                {t.calculator.descriptionLabel}
              </label>
              <textarea
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t.calculator.descriptionPlaceholder}
                className="input min-h-[90px] resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? t.calculator.submitting : t.calculator.submit}
            </button>
          </form>

          <div className="reveal lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 min-h-[200px]">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {t.calculator.resultLabel}
              </h3>
              {!result && !error && !loading && (
                <p className="mt-3 text-sm text-slate-500">
                  {t.calculator.resultEmpty}
                </p>
              )}
              {loading && (
                <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
                  <span className="inline-block h-3 w-3 rounded-full bg-primary-500 animate-pulse" />
                  {t.calculator.calculating}
                </div>
              )}
              {error && (
                <p className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </p>
              )}
              {result && (
                <div className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
                  {renderEstimate(result)}
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
              {t.calculator.disclaimer}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              {t.calculator.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
  small,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  small?: boolean;
}) {
  return (
    <div>
      <span className="label">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={`rounded-full border ${small ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-sm"} transition ${
                active
                  ? "border-primary-600 bg-primary-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-primary-400"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CheckboxGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  function toggle(item: string) {
    onChange(value.includes(item) ? value.filter((x) => x !== item) : [...value, item]);
  }
  return (
    <div>
      <span className="label">{label}</span>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {options.map((opt) => {
          const active = value.includes(opt);
          return (
            <label
              key={opt}
              className={`flex cursor-pointer select-none items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                active
                  ? "border-primary-600 bg-primary-50 text-primary-800"
                  : "border-slate-300 bg-white text-slate-700 hover:border-primary-400"
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={active}
                onChange={() => toggle(opt)}
              />
              <span
                className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                  active
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-slate-300 bg-white"
                }`}
                aria-hidden
              >
                {active && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <span>{opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
