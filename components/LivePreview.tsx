import { t } from "@/lib/i18n";
import { ui } from "@/data/cases";
import type { Lang } from "@/data/cases";

export function LivePreview({ url, title, lang }: { url: string; title: string; lang: Lang }) {
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={screenshotUrl}
        alt={title}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top"
      />
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-sm font-medium text-ink">{new URL(url).hostname}</span>
        <span className="text-sm font-semibold text-navy group-hover:text-navy-dark">
          {t(ui.detail.visit, lang)} →
        </span>
      </div>
    </a>
  );
}
