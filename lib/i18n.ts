import type { Lang, Loc } from "@/data/cases";

export function t(value: Loc | undefined, lang: Lang): string {
  if (!value) return "";
  return value[lang] ?? value.en;
}

export const LANGS: Lang[] = ["en", "pt"];

export const htmlLangTag: Record<Lang, string> = {
  en: "en",
  pt: "pt-PT",
};
