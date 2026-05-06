"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "primamax_appointments";

type Appointment = {
  id: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  customer: string;
  service: string;
  address: string;
  notes: string;
};

const SERVICE_OPTIONS = [
  "Reinigung",
  "Endreinigung",
  "Airbnb / Ferienwohnung",
  "Haushaltshilfe",
  "Nähservice",
  "Anderes",
];

function ymd(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseYmd(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function fmtDateLong(s: string): string {
  const d = parseYmd(s);
  return d.toLocaleDateString("de-CH", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function loadAppointments(): Appointment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (a) => a && typeof a.id === "string" && typeof a.date === "string"
    );
  } catch {
    return [];
  }
}

function saveAppointments(list: Appointment[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

function newId(): string {
  return `a_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

const MONTH_NAMES_DE = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const WEEKDAYS_SHORT = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

export default function CalendarTab() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string>(ymd(today));
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [editing, setEditing] = useState<Appointment | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setAppointments(loadAppointments());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveAppointments(appointments);
  }, [appointments, hydrated]);

  const grid = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  const apptsByDate = useMemo(() => {
    const map = new Map<string, Appointment[]>();
    for (const a of appointments) {
      const arr = map.get(a.date) ?? [];
      arr.push(a);
      map.set(a.date, arr);
    }
    for (const arr of map.values()) {
      arr.sort((a, b) => a.startTime.localeCompare(b.startTime));
    }
    return map;
  }, [appointments]);

  const selectedAppointments = apptsByDate.get(selectedDate) ?? [];

  const upcoming = useMemo(() => {
    const todayStr = ymd(new Date());
    return [...appointments]
      .filter((a) => a.date >= todayStr)
      .sort(
        (a, b) =>
          a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime)
      )
      .slice(0, 5);
  }, [appointments]);

  function shiftMonth(delta: number) {
    let m = viewMonth + delta;
    let y = viewYear;
    while (m < 0) {
      m += 12;
      y -= 1;
    }
    while (m > 11) {
      m -= 12;
      y += 1;
    }
    setViewMonth(m);
    setViewYear(y);
  }

  function goToToday() {
    const t = new Date();
    setViewYear(t.getFullYear());
    setViewMonth(t.getMonth());
    setSelectedDate(ymd(t));
  }

  function openCreate() {
    setEditing({
      id: "",
      date: selectedDate,
      startTime: "09:00",
      endTime: "11:00",
      customer: "",
      service: SERVICE_OPTIONS[0],
      address: "",
      notes: "",
    });
    setShowForm(true);
  }

  function openEdit(a: Appointment) {
    setEditing({ ...a });
    setShowForm(true);
  }

  function save(a: Appointment) {
    if (!a.customer.trim()) return;
    if (a.id) {
      setAppointments((cur) => cur.map((x) => (x.id === a.id ? a : x)));
    } else {
      setAppointments((cur) => [...cur, { ...a, id: newId() }]);
    }
    setShowForm(false);
    setEditing(null);
    setSelectedDate(a.date);
    if (a.date) {
      const d = parseYmd(a.date);
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
    }
  }

  function remove(id: string) {
    if (!id) return;
    if (typeof window !== "undefined" && !window.confirm("Termin löschen?"))
      return;
    setAppointments((cur) => cur.filter((x) => x.id !== id));
    setShowForm(false);
    setEditing(null);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(320px,1fr)_minmax(300px,420px)]">
      <section className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
            aria-label="Vorheriger Monat"
          >
            ‹
          </button>
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-900">
              {MONTH_NAMES_DE[viewMonth]} {viewYear}
            </div>
            <button
              type="button"
              onClick={goToToday}
              className="text-[11px] text-primary-700 hover:underline"
            >
              Heute
            </button>
          </div>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
            aria-label="Nächster Monat"
          >
            ›
          </button>
        </div>

        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-medium uppercase tracking-wide text-slate-500">
          {WEEKDAYS_SHORT.map((w) => (
            <div key={w}>{w}</div>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7 gap-1">
          {grid.map((cell, i) => {
            const dateStr = ymd(cell.date);
            const isSelected = dateStr === selectedDate;
            const isToday = dateStr === ymd(today);
            const hasAppts = (apptsByDate.get(dateStr)?.length ?? 0) > 0;
            const inMonth = cell.inMonth;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedDate(dateStr)}
                className={`relative aspect-square rounded-lg text-sm transition ${
                  isSelected
                    ? "bg-primary-600 text-white shadow"
                    : isToday
                    ? "border-2 border-primary-500 bg-primary-50 text-primary-800"
                    : inMonth
                    ? "bg-white text-slate-700 hover:bg-slate-50"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                }`}
              >
                <span className="absolute left-1.5 top-1.5 text-[11px] sm:text-sm">
                  {cell.date.getDate()}
                </span>
                {hasAppts && (
                  <span
                    className={`absolute bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${
                      isSelected ? "bg-white" : "bg-primary-500"
                    }`}
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-slate-800">
              {fmtDateLong(selectedDate)}
            </h3>
            <button
              type="button"
              onClick={openCreate}
              className="btn-primary !py-1.5 !px-3 text-xs"
            >
              + Neuer Termin
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {selectedAppointments.length === 0 && (
              <p className="rounded-lg bg-slate-50 px-3 py-3 text-sm text-slate-500">
                Keine Termine an diesem Tag.
              </p>
            )}
            {selectedAppointments.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => openEdit(a)}
                className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-left transition hover:border-primary-400 hover:bg-primary-50/40"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-sm text-primary-700">
                    {a.startTime}
                    {a.endTime ? `–${a.endTime}` : ""}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-slate-500">
                    {a.service}
                  </span>
                </div>
                <div className="mt-0.5 text-sm font-medium text-slate-800">
                  {a.customer}
                </div>
                {a.address && (
                  <div className="text-xs text-slate-500">{a.address}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800">
            Nächste Termine
          </h3>
          {upcoming.length === 0 && (
            <p className="mt-2 text-sm text-slate-500">
              Keine bevorstehenden Termine.
            </p>
          )}
          <ul className="mt-2 divide-y divide-slate-100">
            {upcoming.map((a) => (
              <li key={a.id} className="py-2">
                <button
                  type="button"
                  onClick={() => {
                    const d = parseYmd(a.date);
                    setViewYear(d.getFullYear());
                    setViewMonth(d.getMonth());
                    setSelectedDate(a.date);
                  }}
                  className="block w-full text-left"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-medium text-primary-700">
                      {fmtDateLong(a.date)}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {a.startTime}
                    </span>
                  </div>
                  <div className="mt-0.5 text-sm text-slate-800">
                    {a.customer}
                  </div>
                  <div className="text-xs text-slate-500">{a.service}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          Termine werden lokal in diesem Browser gespeichert. Für synchronisierten
          Zugriff zwischen mehreren Geräten ist eine Server-Anbindung nötig.
        </div>
      </aside>

      {showForm && editing && (
        <AppointmentForm
          appointment={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSave={save}
          onDelete={editing.id ? () => remove(editing.id) : undefined}
        />
      )}
    </div>
  );
}

function buildMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  // Monday-first: Sunday=0 -> we want offset 6, otherwise (day-1)
  const dow = first.getDay();
  const offset = dow === 0 ? 6 : dow - 1;
  const start = new Date(year, month, 1 - offset);
  const cells: { date: Date; inMonth: boolean }[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    cells.push({ date: d, inMonth: d.getMonth() === month });
  }
  return cells;
}

function AppointmentForm({
  appointment,
  onClose,
  onSave,
  onDelete,
}: {
  appointment: Appointment;
  onClose: () => void;
  onSave: (a: Appointment) => void;
  onDelete?: () => void;
}) {
  const [a, setA] = useState<Appointment>(appointment);

  function update<K extends keyof Appointment>(k: K, v: Appointment[K]) {
    setA((cur) => ({ ...cur, [k]: v }));
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-t-2xl bg-white shadow-xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h3 className="text-base font-semibold text-slate-900">
            {a.id ? "Termin bearbeiten" : "Neuer Termin"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
            aria-label="Schliessen"
          >
            ✕
          </button>
        </div>
        <form
          className="space-y-4 px-4 py-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(a);
          }}
        >
          <div>
            <label className="label" htmlFor="appt-date">
              Datum
            </label>
            <input
              id="appt-date"
              type="date"
              required
              className="input"
              value={a.date}
              onChange={(e) => update("date", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label" htmlFor="appt-start">
                Von
              </label>
              <input
                id="appt-start"
                type="time"
                required
                className="input"
                value={a.startTime}
                onChange={(e) => update("startTime", e.target.value)}
              />
            </div>
            <div>
              <label className="label" htmlFor="appt-end">
                Bis
              </label>
              <input
                id="appt-end"
                type="time"
                className="input"
                value={a.endTime}
                onChange={(e) => update("endTime", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="label" htmlFor="appt-customer">
              Kunde
            </label>
            <input
              id="appt-customer"
              type="text"
              required
              className="input"
              placeholder="Name oder Familie"
              value={a.customer}
              onChange={(e) => update("customer", e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="appt-service">
              Leistung
            </label>
            <select
              id="appt-service"
              className="input"
              value={a.service}
              onChange={(e) => update("service", e.target.value)}
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label" htmlFor="appt-address">
              Adresse
            </label>
            <input
              id="appt-address"
              type="text"
              className="input"
              placeholder="Strasse, PLZ Ort"
              value={a.address}
              onChange={(e) => update("address", e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="appt-notes">
              Notizen
            </label>
            <textarea
              id="appt-notes"
              className="input min-h-[80px] resize-y"
              placeholder="Zugang, Material, Hinweise …"
              value={a.notes}
              onChange={(e) => update("notes", e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-between gap-2 pt-2">
            {onDelete ? (
              <button
                type="button"
                onClick={onDelete}
                className="rounded-full border border-red-200 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Löschen
              </button>
            ) : (
              <span />
            )}
            <div className="ml-auto flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary !py-2 !px-4 text-sm"
              >
                Abbrechen
              </button>
              <button
                type="submit"
                className="btn-primary !py-2 !px-4 text-sm"
                disabled={!a.customer.trim() || !a.date || !a.startTime}
              >
                Speichern
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
