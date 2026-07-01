"use client";

import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { profile, ui } from "@/data/cases";

export function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="border-t border-line bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          {t(ui.about.title, lang)}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate">{t(profile.intro, lang)}</p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate">
              {t(ui.about.skills, lang)}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-sm font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate">
              {t(ui.about.languages, lang)}
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate">{t(profile.languages, lang)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
