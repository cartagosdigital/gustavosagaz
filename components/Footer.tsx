"use client";

import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { profile, ui } from "@/data/cases";

export function Footer() {
  const { lang } = useLang();

  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {t(ui.nav.contact, lang)}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate">
              {t(profile.location, lang)}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-navy transition-colors hover:text-navy-dark"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy transition-colors hover:text-navy-dark"
            >
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              className="text-sm font-medium text-navy transition-colors hover:text-navy-dark"
            >
              {t(ui.hero.viewCv, lang)}
            </a>
          </div>
        </div>

        <p className="mt-12 text-xs text-slate">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
