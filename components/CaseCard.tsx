import Link from "next/link";
import { t } from "@/lib/i18n";
import type { Case, Lang } from "@/data/cases";

export function CaseCard({ item, lang }: { item: Case; lang: Lang }) {
  return (
    <Link
      href={`/cases/${item.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-slate">
        {t(item.sector, lang)}
      </span>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink group-hover:text-navy">
        {t(item.title, lang)}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate">{t(item.client, lang)}</p>

      {item.headline && (
        <p className="mt-4 text-sm font-semibold text-navy">{t(item.headline, lang)}</p>
      )}

      <p className="mt-3 flex-1 text-sm leading-6 text-slate">{t(item.summary, lang)}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.stack.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-slate"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
