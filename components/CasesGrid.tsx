"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { cases, categories, categoryLabels, ui } from "@/data/cases";
import type { Category } from "@/data/cases";
import { CaseCard } from "@/components/CaseCard";

export function CasesGrid() {
  const { lang } = useLang();
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? cases : cases.filter((c) => c.category === active)),
    [active]
  );

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-center gap-2">
        <FilterButton active={active === "all"} onClick={() => setActive("all")}>
          {t(ui.filters.all, lang)}
        </FilterButton>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={active === category}
            onClick={() => setActive(category)}
          >
            {t(categoryLabels[category], lang)}
          </FilterButton>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <CaseCard key={item.slug} item={item} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-navy bg-navy text-white"
          : "border-line text-slate hover:border-navy hover:text-navy"
      }`}
    >
      {children}
    </button>
  );
}
