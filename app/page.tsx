import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CasesGrid } from "@/components/CasesGrid";
import { AboutSection } from "@/components/AboutSection";
import { t } from "@/lib/i18n";
import { profile } from "@/data/cases";
import type { Lang } from "@/data/cases";

function resolveLang(value: string | string[] | undefined): Lang {
  return value === "pt" ? "pt" : "en";
}

export async function generateMetadata(props: PageProps<"/">): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const lang = resolveLang(searchParams.lang);

  return {
    title: profile.name,
    description: t(profile.positioning, lang),
    openGraph: {
      title: profile.name,
      description: t(profile.positioning, lang),
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <CasesGrid />
      <AboutSection />
    </>
  );
}
