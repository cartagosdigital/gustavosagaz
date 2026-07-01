"use client";

import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { ui } from "@/data/cases";
import type { Case } from "@/data/cases";
import { LivePreview } from "@/components/LivePreview";

export function CaseDetailView({ item }: { item: Case }) {
  const { lang } = useLang();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate">
        {t(item.sector, lang)}
      </span>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
        {t(item.title, lang)}
      </h1>
      <p className="mt-3 text-base text-slate">{t(item.client, lang)}</p>

      {item.headline && (
        <p className="mt-6 text-lg font-semibold text-navy">{t(item.headline, lang)}</p>
      )}

      <p className="mt-6 text-lg leading-8 text-slate">{t(item.summary, lang)}</p>

      {item.url && <LivePreview url={item.url} title={t(item.title, lang)} lang={lang} />}

      {item.context && (
        <Section title={t(ui.detail.context, lang)}>
          <p className="text-base leading-7 text-slate">{t(item.context, lang)}</p>
        </Section>
      )}

      {item.challenge && (
        <Section title={t(ui.detail.challenge, lang)}>
          <p className="text-base leading-7 text-slate">{t(item.challenge, lang)}</p>
        </Section>
      )}

      {item.approach && item.approach.length > 0 && (
        <Section title={t(ui.detail.approach, lang)}>
          <ul className="space-y-3">
            {item.approach.map((step, i) => (
              <li key={i} className="flex gap-3 text-base leading-7 text-slate">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-navy" />
                <span>{t(step, lang)}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title={t(ui.detail.stack, lang)}>
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-sm font-medium text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
      </Section>

      {item.results && item.results.length > 0 && (
        <Section title={t(ui.detail.results, lang)}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {item.results.map((metric, i) => (
              <div key={i} className="rounded-xl border border-line p-4">
                <p className="text-xl font-semibold text-navy">{t(metric.value, lang)}</p>
                <p className="mt-1 text-xs leading-5 text-slate">{t(metric.label, lang)}</p>
              </div>
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-line pt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
