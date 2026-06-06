"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, type Dict, type Lang } from "./dictionary";

const STORAGE_KEY = "primamax_lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "de" || stored === "en") {
        setLangState(stored);
      } else if (typeof navigator !== "undefined") {
        const nav = navigator.language?.toLowerCase() ?? "";
        if (nav.startsWith("en")) setLangState("en");
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "de" ? "de-CH" : "en-CH";
    }
  }, [lang, hydrated]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "de",
      setLang: () => undefined,
      t: dictionaries.de,
    };
  }
  return ctx;
}
