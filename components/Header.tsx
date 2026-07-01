"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { profile, ui } from "@/data/cases";
import type { Lang } from "@/data/cases";

export function Header() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const isDetail = pathname.startsWith("/cases/");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-ink">
          {profile.name}
        </Link>

        {isDetail ? (
          <Link
            href="/"
            className="text-sm font-medium text-slate transition-colors hover:text-navy"
          >
            ← {t(ui.detail.back, lang)}
          </Link>
        ) : (
          <nav className="hidden items-center gap-8 sm:flex">
            <a href="#work" className="text-sm font-medium text-slate transition-colors hover:text-navy">
              {t(ui.nav.work, lang)}
            </a>
            <a href="#about" className="text-sm font-medium text-slate transition-colors hover:text-navy">
              {t(ui.nav.about, lang)}
            </a>
            <a href="#contact" className="text-sm font-medium text-slate transition-colors hover:text-navy">
              {t(ui.nav.contact, lang)}
            </a>
          </nav>
        )}

        <LangToggle lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="flex items-center rounded-full border border-line p-0.5 text-xs font-semibold">
      {(["en", "pt"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code ? "bg-navy text-white" : "text-slate hover:text-navy"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
