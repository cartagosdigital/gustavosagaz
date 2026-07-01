"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Lang } from "@/data/cases";
import { htmlLangTag } from "@/lib/i18n";

const STORAGE_KEY = "lang";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "pt";
}

// Reads the initial language from the URL (?lang=) or localStorage without
// useSearchParams, which would force the whole tree to client-render on
// prerendered routes.
function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (isLang(fromStorage)) return fromStorage;
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // One-time hydration from browser storage/URL after mount, since the
    // server-rendered default ("en") must match the client's first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(readInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLangTag[lang];
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    const params = new URLSearchParams(window.location.search);
    params.set("lang", next);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
