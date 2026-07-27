"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { languages, getLanguage } from "@/lib/i18n";
import { useLang } from "./LanguageProvider";

export function LanguageSwitcher({ variant = "bar" }: { variant?: "bar" | "block" }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = getLanguage(lang);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  if (variant === "block") {
    // Full-width grid for mobile menu
    return (
      <div className="rounded-xl border border-navy/10 bg-mist p-3">
        <p className="mb-2 flex items-center gap-2 px-1 text-xs font-bold uppercase tracking-wide text-navy">
          <Globe className="h-3.5 w-3.5" /> Language
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                l.code === lang ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy/5"
              }`}
            >
              <span aria-hidden="true">{l.flag}</span>
              <span className="truncate">{l.label}</span>
              {l.code === lang && <Check className="ml-auto h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[0.78rem] font-semibold text-white/90 transition-colors hover:text-gold"
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        <span aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full z-[120] mt-2 max-h-80 w-48 overflow-auto rounded-xl border border-navy/10 bg-white p-1.5 text-ink shadow-[0_20px_50px_-20px_rgba(9,27,99,0.4)]"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  l.code === lang ? "bg-navy text-white" : "hover:bg-mist"
                }`}
              >
                <span aria-hidden="true" className="text-base">{l.flag}</span>
                <span className="flex-1">
                  <span className="font-semibold">{l.label}</span>
                  <span className={`ml-1.5 text-xs ${l.code === lang ? "text-white/70" : "text-ink/45"}`}>
                    {l.english}
                  </span>
                </span>
                {l.code === lang && <Check className="h-4 w-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
