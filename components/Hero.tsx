"use client";

import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { profile, ui } from "@/data/cases";

export function Hero() {
  const { lang } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-navy">
        {t(profile.location, lang)}
      </p>
      <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
        {t(profile.positioning, lang)}
      </p>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate">
        {t(profile.intro, lang)}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="/cv.pdf"
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
        >
          {t(ui.hero.viewCv, lang)}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-navy hover:text-navy"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-navy hover:text-navy"
        >
          {t(ui.hero.email, lang)}
        </a>
      </div>
    </section>
  );
}
