"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import InvoicePreview from "./InvoicePreview";
import type { ChatMessage, Invoice, InvoiceConfig } from "./types";

const STORAGE_PASSWORD = "primamax_invoice_password";
const STORAGE_COUNTER = "primamax_invoice_counter";

const INTRO_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Grüezi! Ich helfe Ihnen, eine Rechnung zu erstellen. Beschreiben Sie mir kurz, was gemacht wurde – z.B. Datum, Kunde, Adresse, erbrachte Leistungen mit Stundenanzahl. Ich frage nach was noch fehlt.",
};

function nextInvoiceNumber(): string {
  const year = new Date().getFullYear();
  let counter = 0;
  try {
    const raw = localStorage.getItem(STORAGE_COUNTER);
    if (raw) {
      const parsed = JSON.parse(raw) as { year?: number; n?: number };
      if (parsed.year === year && typeof parsed.n === "number") counter = parsed.n;
    }
  } catch {
    counter = 0;
  }
  const next = counter + 1;
  return `PM-${year}-${String(next).padStart(3, "0")}`;
}

function bumpInvoiceCounter(): void {
  const year = new Date().getFullYear();
  let counter = 0;
  try {
    const raw = localStorage.getItem(STORAGE_COUNTER);
    if (raw) {
      const parsed = JSON.parse(raw) as { year?: number; n?: number };
      if (parsed.year === year && typeof parsed.n === "number") counter = parsed.n;
    }
  } catch {
    counter = 0;
  }
  localStorage.setItem(
    STORAGE_COUNTER,
    JSON.stringify({ year, n: counter + 1 })
  );
}

function extractInvoiceJson(text: string): Invoice | null {
  const idx = text.indexOf("<<<INVOICE_JSON>>>");
  if (idx === -1) return null;
  const after = text.slice(idx + "<<<INVOICE_JSON>>>".length);
  const start = after.indexOf("{");
  if (start === -1) return null;
  let depth = 0;
  let end = -1;
  let inString = false;
  let escape = false;
  for (let i = start; i < after.length; i++) {
    const ch = after[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (ch === '"') inString = !inString;
    if (inString) continue;
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) return null;
  const json = after.slice(start, end);
  try {
    return JSON.parse(json) as Invoice;
  } catch {
    return null;
  }
}

function stripInvoiceMarker(text: string): string {
  const idx = text.indexOf("<<<INVOICE_JSON>>>");
  if (idx === -1) return text;
  return text.slice(0, idx).trim() || "Rechnung erstellt – siehe Vorschau rechts.";
}

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

  return <ChatAndPreview config={config} setConfig={setConfig} />;
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
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Rechnungs-Bereich
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

function ChatAndPreview({
  config,
  setConfig,
}: {
  config: InvoiceConfig;
  setConfig: (c: InvoiceConfig) => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([INTRO_MESSAGE]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [pendingInvoiceNumber, setPendingInvoiceNumber] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPendingInvoiceNumber(nextInvoiceNumber());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length]);

  // refresh config from server-side env (in case it wasn't returned at login)
  useEffect(() => {
    if (config.iban || config.phone) return;
    void (async () => {
      try {
        const password = sessionStorage.getItem(STORAGE_PASSWORD) ?? "";
        const res = await fetch("/api/invoice-auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.config) setConfig(data.config as InvoiceConfig);
        }
      } catch {
        /* ignore */
      }
    })();
  }, [config.iban, config.phone, setConfig]);

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || busy) return;
    const password = sessionStorage.getItem(STORAGE_PASSWORD);
    if (!password) {
      setError("Sitzung abgelaufen. Bitte Seite neu laden.");
      return;
    }
    const next: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/invoice-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          messages: next,
          invoiceNumber: pendingInvoiceNumber,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Fehler beim Senden.");
        return;
      }
      const reply = String(data.reply ?? "");
      const parsed = extractInvoiceJson(reply);
      const display = parsed ? stripInvoiceMarker(reply) : reply;
      setMessages([...next, { role: "assistant", content: display }]);
      if (parsed) {
        setInvoice(parsed);
        bumpInvoiceCounter();
        setPendingInvoiceNumber(nextInvoiceNumber());
      }
    } catch {
      setError("Netzwerkfehler.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    setMessages([INTRO_MESSAGE]);
    setInvoice(null);
    setError(null);
    setInput("");
    setPendingInvoiceNumber(nextInvoiceNumber());
  }

  const mailtoHref = useMemo(() => {
    if (!invoice) return "#";
    const subject = `Rechnung ${invoice.invoice_number} von PrimaMax`;
    const body =
      `Sehr geehrte Damen und Herren, anbei erhalten Sie unsere Rechnung Nr. ${invoice.invoice_number} ` +
      `vom ${invoice.date} über CHF ${invoice.total?.toFixed(2)}. ` +
      `Bitte überweisen Sie den Betrag bis ${invoice.due_date} auf das angegebene Konto. ` +
      `Bei Fragen stehen wir gerne zur Verfügung.\n\nFreundliche Grüsse,\nPrimaMax`;
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [invoice]);

  return (
    <main className="min-h-screen bg-slate-50 print:bg-white">
      <div className="no-print border-b border-slate-200 bg-white">
        <div className="container-x flex items-center justify-between py-3">
          <a
            href="/"
            className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary-700"
          >
            ← Zurück zur Website
          </a>
          <div className="text-sm font-semibold text-primary-700">
            PrimaMax · Rechnungen
          </div>
        </div>
      </div>

      <div className="container-x py-6 print:py-0">
        <div className="grid gap-6 lg:grid-cols-[minmax(320px,420px)_1fr]">
          {/* Chat */}
          <section className="no-print flex h-[80vh] min-h-[500px] flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
            <header className="border-b border-slate-200 px-4 py-3">
              <div className="text-sm font-semibold text-slate-800">
                Rechnungsassistent
              </div>
              <div className="text-xs text-slate-500">
                Nächste Nr.: {pendingInvoiceNumber || "—"}
              </div>
            </header>
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <ChatBubble key={i} message={m} />
              ))}
              {busy && (
                <ChatBubble
                  message={{
                    role: "assistant",
                    content: "…",
                  }}
                />
              )}
              <div ref={messagesEndRef} />
            </div>
            {error && (
              <div className="border-t border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                {error}
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send();
              }}
              className="border-t border-slate-200 p-3"
            >
              <div className="flex gap-2">
                <textarea
                  className="input min-h-[60px] resize-none"
                  placeholder="Was wurde gemacht? Kunde, Datum, Stunden …"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void send();
                    }
                  }}
                  disabled={busy}
                />
                <button
                  type="submit"
                  className="btn-primary self-stretch"
                  disabled={busy || !input.trim()}
                >
                  Senden
                </button>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                Enter = senden · Shift+Enter = neue Zeile
              </p>
            </form>
          </section>

          {/* Preview */}
          <section className="space-y-4">
            <div className="invoice-print-area">
              <InvoicePreview invoice={invoice} config={config} />
            </div>
            <div className="no-print flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                disabled={!invoice}
                className="btn-primary disabled:opacity-50"
              >
                PDF herunterladen
              </button>
              <a
                href={mailtoHref}
                className={`btn-secondary ${!invoice ? "pointer-events-none opacity-50" : ""}`}
              >
                Per E-Mail senden
              </a>
              <button
                type="button"
                onClick={reset}
                className="btn-secondary"
              >
                Neue Rechnung
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
          isUser
            ? "bg-primary-600 text-white"
            : "bg-slate-100 text-slate-800"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
