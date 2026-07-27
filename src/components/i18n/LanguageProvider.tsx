"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { defaultLang, getLanguage, languages, translate, type LangCode } from "@/lib/i18n";

type Ctx = {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx>({
  lang: defaultLang,
  setLang: () => {},
  t: (k) => k,
});

const COOKIE = "ace_lang";
const STORAGE = "ace_lang";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

function isValid(code: string | null | undefined): code is LangCode {
  return !!code && languages.some((l) => l.code === code);
}

function detectLanguage(): LangCode {
  // 1. Stored preference (cookie or localStorage)
  const stored = readCookie(COOKIE) || (typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE) : null);
  if (isValid(stored)) return stored;

  // 2. Browser language / region
  if (typeof navigator !== "undefined") {
    const candidates = [navigator.language, ...(navigator.languages || [])];
    for (const c of candidates) {
      const base = c.toLowerCase().split("-")[0];
      if (isValid(base)) return base;
    }
  }
  return defaultLang;
}

function applyDocumentLang(code: LangCode) {
  if (typeof document === "undefined") return;
  const l = getLanguage(code);
  document.documentElement.lang = code;
  document.documentElement.dir = l.dir;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(defaultLang);

  useEffect(() => {
    const detected = detectLanguage();
    setLangState(detected);
    applyDocumentLang(detected);
  }, []);

  const setLang = useCallback((code: LangCode) => {
    setLangState(code);
    applyDocumentLang(code);
    try {
      localStorage.setItem(STORAGE, code);
    } catch {
      /* ignore */
    }
    // 1 year cookie
    document.cookie = `${COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
  }, []);

  const t = useCallback((key: string) => translate(lang, key), [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
