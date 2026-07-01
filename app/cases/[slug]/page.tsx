import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { t } from "@/lib/i18n";
import { cases } from "@/data/cases";
import type { Lang } from "@/data/cases";
import { CaseDetailView } from "@/components/CaseDetailView";

function resolveLang(value: string | string[] | undefined): Lang {
  return value === "pt" ? "pt" : "en";
}

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/cases/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const lang = resolveLang(searchParams.lang);
  const item = cases.find((c) => c.slug === slug);

  if (!item) return {};

  const title = t(item.title, lang);
  const description = t(item.summary, lang);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: item.url ? [`https://api.microlink.io/?url=${encodeURIComponent(item.url)}&screenshot=true&meta=false&embed=screenshot.url`] : undefined,
    },
  };
}

export default async function CaseDetailPage(props: PageProps<"/cases/[slug]">) {
  const { slug } = await props.params;
  const item = cases.find((c) => c.slug === slug);

  if (!item) notFound();

  return <CaseDetailView item={item} />;
}
