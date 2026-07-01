# Gustavo Sagaz — Case Studies

Bilingual (EN / PT-PT) case-studies portfolio. Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All bilingual copy lives in [`data/cases.ts`](data/cases.ts) — edit that file to add/change case studies,
profile info, or UI strings. No other file needs touching for a content update.

## Structure

- `data/cases.ts` — typed, bilingual data source (`Loc = { en, pt }`)
- `lib/i18n.ts` — `t()` helper + language constants
- `lib/lang-context.tsx` — client-side language provider (localStorage + `?lang=` URL sync)
- `components/` — Header, Hero, CasesGrid, CaseCard, CaseDetailView, LivePreview, AboutSection, Footer
- `app/page.tsx` — home (hero, filterable case grid, about, contact)
- `app/cases/[slug]/page.tsx` — case detail pages, statically generated per case

## Notes

- Language toggle defaults to EN, persists to `localStorage`, and reflects in the URL as `?lang=pt`.
- Web & Landing Page cases render a live screenshot preview via the [Microlink](https://microlink.io) API,
  linking out to the real site. This is a third-party rendering service — if a preview ever shows blank,
  it's typically that site not finishing its render in time for Microlink's headless capture, not a bug
  here; the fix is either to retry or swap in a manually captured screenshot for that case's `url`.
- `public/favicon.ico` is still the default Next.js icon — replace it with a real one before shipping.
- Hero/footer CV links point to `/cv.pdf`; drop your CV file into `public/cv.pdf` to make them work.

## Deploy

Deploy on [Vercel](https://vercel.com/new) — no environment variables required.
