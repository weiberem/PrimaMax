"use client";

import { useState } from "react";
import InvoicesTab from "./InvoicesTab";
import CalendarTab from "./CalendarTab";
import type { InvoiceConfig } from "./types";

const STORAGE_PASSWORD = "primamax_invoice_password";

type Tab = "invoices" | "calendar";

export default function RechnungClient() {
  const [authed, setAuthed] = useState(false);
  const [config, setConfig] = useState<InvoiceConfig>({
    phone: "",
    iban: "",
    mwstExempt: false,
  });

  if (!authed) {
    return (
      <LoginScreen
        onSuccess={(password, cfg) => {
          sessionStorage.setItem(STORAGE_PASSWORD, password);
          setConfig(cfg);
          setAuthed(true);
        }}
      />
    );
  }

  return <OperatorShell config={config} setConfig={setConfig} />;
}

function LoginScreen({
  onSuccess,
}: {
  onSuccess: (password: string, config: InvoiceConfig) => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/invoice-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Login fehlgeschlagen.");
        return;
      }
      onSuccess(password, data.config as InvoiceConfig);
    } catch {
      setError("Netzwerkfehler.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="container-x flex min-h-screen items-center justify-center py-12">
        <div className="w-full max-w-md">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary-700"
          >
            ← Zurück zur Website
          </a>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Operator-Bereich
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Bitte Passwort eingeben.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="label" htmlFor="pw">
                  Passwort
                </label>
                <input
                  id="pw"
                  type="password"
                  className="input"
                  autoFocus
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading || !password}
                className="btn-primary w-full disabled:opacity-60"
              >
                {loading ? "Prüfe …" : "Anmelden"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function OperatorShell({
  config,
  setConfig,
}: {
  config: InvoiceConfig;
  setConfig: (c: InvoiceConfig) => void;
}) {
  const [tab, setTab] = useState<Tab>("invoices");

  return (
    <main className="min-h-screen bg-slate-50 print:bg-white">
      <div className="no-print sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="container-x flex items-center justify-between gap-2 py-2 sm:py-3">
          <a
            href="/"
            className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-primary-700 sm:text-sm"
          >
            ← Website
          </a>
          <div className="text-xs font-semibold text-primary-700 sm:text-sm">
            PrimaMax · Operator
          </div>
        </div>
        <div className="container-x pb-2">
          <div
            role="tablist"
            aria-label="Bereich"
            className="flex w-full overflow-hidden rounded-full border border-slate-200 bg-slate-50 text-sm"
          >
            <TabButton
              active={tab === "invoices"}
              onClick={() => setTab("invoices")}
              label="Rechnungen"
              icon="📄"
            />
            <TabButton
              active={tab === "calendar"}
              onClick={() => setTab("calendar")}
              label="Kalender"
              icon="📅"
            />
          </div>
        </div>
      </div>

      <div className="container-x py-4 sm:py-6 print:py-0">
        {tab === "invoices" ? (
          <InvoicesTab config={config} setConfig={setConfig} />
        ) : (
          <CalendarTab />
        )}
      </div>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-1.5 px-3 py-2 font-medium transition ${
        active
          ? "bg-primary-600 text-white shadow-sm"
          : "text-slate-600 hover:text-primary-700"
      }`}
    >
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
