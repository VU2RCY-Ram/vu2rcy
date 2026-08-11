@AGENTS.md

# VU2RCY Catalogue Site

## Project

Revamp of [vu2rcy.com](https://vu2rcy.com) so the products VU2RCY actually
builds and offers are front-and-center, while the operator's own station
equipment ("the shack") stays clearly separate — mirroring the old site's
own navigation, which had **Products** and **Shack** as distinct top-level
sections. Do not merge them into one undifferentiated listing again: an
earlier revision unified everything into a single filterable catalogue and
that made shack equipment (not for sale) look like it was offered alongside
real products. It was reverted for exactly that reason.

**`OLD_CODE_BASE/vu2rcy/`** (the old Next.js 13 + MUI site, gitignored, its
own nested `.git`) was the data source used to port real content, specs,
and images into this project — **deleted 2026-08-09** after every product
and shack item was audited item-for-item against it (all 53 shack items
across 7 categories, all 10 original products, confirmed complete — see
`git log` around that date for the audit). It is not coming back; if a gap
turns up later, the source is `vu2rcy.com`'s live pages/API, not a local
checkout. The hard rule while it existed still applies to any future
old-site reference (screenshots, memory, live site): **never inherit its
functionality, interactions, or UI patterns** — not just its visual
styling. This means: no click-to-expand/accordion-reveal cards, no inline
"Show details" toggles that push surrounding layout around, no other
structural or interaction behavior lifted from the old codebase, even if
restyled with shadcn components. Design every interaction fresh, on its
own UX merits. (This was violated once already — `EquipmentCard`'s old
"Show specs" expand-in-place toggle was a straight port of the old site's
click-to-expand cards. Fixed; see "Information architecture" below for the
current pattern. Don't reintroduce it.)

**Hard rule: every meaningful section/component gets an `id="..."`.**
Sections (hero, product grid, category grid, footer nav, etc.) and
significant interactive components need a stable, kebab-case `id` — for
anchor links, analytics, and E2E test targeting. Add this as you touch
each component; retrofit older ones opportunistically rather than as a
separate pass.

**Hard rule: no made-up facts.** This site showcases real products and
real station equipment — specs, model numbers, prices, capabilities,
credentials, whatever. Every factual claim must trace back to a real
source (`OLD_CODE_BASE` while it existed, the `NewProducts/` staging
materials, vu2rcy.com live, or something the user states directly). If a
fact isn't available, say so and ask rather than filling the gap with a
plausible-sounding invention. This includes the **`humanize`** skill
(see "Voice" below): humanizing rewrites sentences for tone, it never
adds a claim, spec, or detail that wasn't already there.

## Information architecture

- **`/products`** + **`/products/[slug]`** — `src/lib/data/products.ts`,
  the 12 real kits: 10 from the old site's `/products` accordion (5 with
  long-form intro/benefits/conclusion write-ups, 5 unfinished — no image/
  content — kept as-is rather than dropped), plus 2 added later (LoRa CHAT,
  NTP WiFi Digital Clock) and 2 replaced in place, same slot/history:
  APRS IGATE Weather Station → MASTER-APRS Weather Station, and
  APRS IGATE Station → MASTER-APRS (the old site's generic "IGATE"
  name/description for the latter was wrong for the actual hardware —
  corrected from the real product photo and marketing one-pager, not
  guessed). Source: a `NewProducts/` staging folder of real product
  photos, marketing one-pagers, portal screenshots and manual PDFs/docx
  the user dropped at the repo root (gitignored, data-only like
  `OLD_CODE_BASE` — see `git log` on `products.ts` for what came from
  where). These are genuinely for sale; CTA text says so plainly
  ("Enquire about this kit"). `userManual` PDFs are **rebuilt**, not the
  original files verbatim — the originals were either a marketing
  one-pager (too busy/text-heavy to use as a card image) or a generic
  technical config reference (more than a "simple steps" manual needs).
  Rebuilt via an HTML template + Playwright's `page.pdf()` (see git
  history for the generator script): real cropped product photo + 4-5
  plain numbered steps + the actual WiFi/portal credentials + (where a
  real screenshot of the device's own config portal exists) that
  screenshot too, nothing invented. MASTER-APRS (the plain dongle)'s own
  config portal screenshot (`Screenshot APRS STATION NOCALL-3.png`) shows
  only placeholder values (N0CALL, XXXXXX) — its manual reuses the
  Weather Station's first-boot setup Wi-Fi network name/password
  ("MASTER-APRS Wx"/"mastersetup"), confirmed with the user rather than
  assumed, since the two are different physical products and it wasn't
  independently documented for the plain dongle. If
  more hardware manuals arrive in this shape, follow the same pattern
  rather than linking the raw source file.
- **`/shack`** (hub) + **`/shack/[category]`** + **`/shack/[category]/[item]`**
  — `src/lib/data/shack.ts`, the old site's 7 `/shack/*` equipment pages
  (Antennas, APRS, HF, VHF/UHF, Digital Modes, My Equipment's, Projects —
  ~53 items total with real specs). This is the operator's personal
  station gear, shown for reference — **not for sale**. Where an item's
  WhatsApp CTA is shown, it says "Ask a question", never anything implying
  availability or purchase. Each item has its own detail page (specs table
  + optional CTA), same shape as `/products/[slug]` — `EquipmentCard`
  links there rather than expanding in place (see the hard rule above).
- Real photos live under `public/catalogue/<category>/` — copied
  selectively from the old `public/` (only the ~56 files actually
  referenced by ported content, not the full 139MB folder, which also held
  unrelated legacy assets like the old `/work` portfolio and social icons).
- Testimonials (`src/lib/data/testimonials.ts`) are real — the old site
  never had a testimonials feature, so the first pass was placeholder text;
  replaced 2026-08-09 with real operator feedback (name, real callsign,
  quote) sent over WhatsApp. If more come in the same way, extend the
  array rather than inventing filler ones back in.
- **`/about`** — `src/app/about/page.tsx`, real bio ported from the old
  site's `pages/about.jsx` + `pages/index.jsx` + `components/Contact.jsx`
  (data-only, per the hard rule above — none of the old rainbow-gradient
  `CategoryCard`/`Contact` styling was carried over). Portrait photo copied
  from the old `public/VU2RCY.jpg` to
  `public/catalogue/about/vu2rcy-portrait.jpg`. Real contact links: WhatsApp
  (`WHATSAPP_LINK`), email (`vu2rcy+social@gmail.com`), X/Twitter, QRZ.com,
  GitHub, Facebook, Instagram — all sourced from the old site's `Contact.jsx`
  and `Footer.jsx`, not invented. "Years licensed" is computed from 1988
  (the old site's own baseline year) at render time, same as the old site's
  `about.jsx` did with `getUTCFullYear() - 1988`. Listed in the header nav,
  mobile tab bar, and footer quick links alongside Home/Products/Shack.
  The VU3MGR → VU2RCY callsign change is a **license upgrade**, not a
  rename — verified against India's WPC licensing rules: VU3 is the prefix
  for a Restricted Grade license (VHF/UHF only), VU2 for a General Grade
  license (adds HF privileges). The old site's copy never explained this,
  it just said "from VU3MGR to VU2RCY" — don't reintroduce that ambiguity;
  say explicitly what changed (grade/privileges), not just the callsign.
- **`/homebrew`** ("Modes") + **`/awards`** — `src/app/homebrew/page.tsx`,
  `src/app/awards/page.tsx`. Footer-only links (`SiteFooter`'s quick links)
  — deliberately **not** in `SiteHeader`/`MobileTabBar`, since they're
  secondary/reference content, not core catalogue navigation.
  - `/homebrew`: old site's `pages/homebrew.jsx` was a single-card rotating
    carousel with prev/next arrows — one of the interaction patterns the
    hard rule at the top of this file bans. Rebuilt as a plain responsive
    card grid (same pattern as the `/shack` hub's category grid) of the 7
    real modes named on the old page — Morse/CW, XLX Reflectors, D-STAR,
    MMDVM, APRS, EchoLink, DMR — with humanized one-sentence descriptions
    (the old copy had banned words like "seamlessly").
  - `/awards`: old site's `pages/awards.jsx` calls `GET /api/listFiles`,
    which proxies GitHub's contents API for `VU2RCY-Ram/Awards` (a public
    repo, `EPC` folder) — **1,191 real award-certificate images**, not
    empty; an earlier plain-text fetch of the live page missed this because
    the gallery is populated by client-side JS after load. Re-verified via
    `GET https://api.github.com/repos/VU2RCY-Ram/Awards/git/trees/main?recursive=1`
    (`truncated: false`, 1191 blobs under `EPC/`) before rebuilding — if
    this repo/folder ever changes, re-check truncation the same way rather
    than trusting the contents API alone (it silently caps at 1,000).
    `src/lib/data/awards.ts` fetches that tree at request time (revalidated
    daily) and serves images directly from `raw.githubusercontent.com` (see
    `next.config.ts`'s `images.remotePatterns`) rather than checking ~1,200
    images into this repo. Filenames are award-program codes assigned by
    the awarding club (e.g. `IARA-GOLD300`, issuer `YB6DXC`) — shown
    as-is (hyphens to spaces), not expanded into invented "friendly" names,
    since we don't actually know what most of these abbreviations stand
    for. Paginated server-side via `?page=` (24/page, ~50 pages) — no
    client JS pagination, no lightbox; each thumbnail links straight to its
    full-resolution image on `raw.githubusercontent.com`.

If more real content arrives, extend `products.ts` (offered kits) or
`shack.ts` (station equipment) — never blend an item into the wrong one just
because it's convenient; whether something is for sale is a real-world fact
about it, not a display choice.

## Stack

- **Next.js 16** (App Router, Turbopack by default — no `--turbopack` flags
  needed). See "Next.js version" note below before assuming anything about
  APIs from training data.
- **TypeScript**, **Tailwind CSS v4**
- **shadcn/ui** — `base-nova` preset, `neutral` base color, **light theme
  only** (no `ThemeProvider`/dark toggle wired up; `.dark` CSS variables
  exist in `globals.css` but are never applied)
- Package manager: **npm** (only one installed on this machine)

## Next.js version — read before writing app code

This project is on **Next.js 16.3.0**, which has real breaking changes vs.
older training data. Full docs are bundled in
`node_modules/next/dist/docs/`; the upgrade/breaking-changes summary is at
`node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`.
Things that bit us already:

- `params` and `searchParams` are **async** (`Promise`) in `page`/`layout`/
  `route` files — always `await` them. See
  `src/app/products/[slug]/page.tsx` or `src/app/shack/[category]/page.tsx`
  for the pattern.
- `next lint` is removed — `package.json`'s `lint` script runs the ESLint
  CLI directly (`eslint`).
- Turbopack is the default bundler for both `dev` and `build`; don't add
  `--turbopack` flags.

## shadcn/ui + Base UI gotcha

This shadcn setup uses `@base-ui/react` primitives (not Radix). `Button`,
`SheetClose`, etc. default to `nativeButton={true}` and warn loudly in the
console if you render them as a non-button via the `render` prop (e.g. a
`next/link` `<Link>`). Whenever composing one of these with `Link`, pass
`nativeButton={false}`:

```tsx
<Button nativeButton={false} render={<Link href="/products" />}>
  Browse Products
</Button>
```

Composition uses Base UI's `render` prop, not Radix's `asChild`.

## Structure

```
src/
  app/
    layout.tsx                  root layout: site-wide metadata (title template, OG/Twitter,
                                 keywords, verification) + SiteHeader/SiteFooter
    favicon.ico, icon.png,      file-based icon convention (Next auto-generates the <link>
    apple-icon.png              tags) — real logo assets ported from the old site's public/
    sitemap.ts                  build-time sitemap (native convention, see "SEO & metadata")
    robots.ts                   build-time robots.txt (same)
    page.tsx                     home: Hero, New Products carousel, Testimonials
    products/page.tsx             products grid (for-sale kits only)
    products/[slug]/page.tsx      product detail (long-form content + WhatsApp enquiry)
    shack/page.tsx                shack hub: category cards
    shack/[category]/page.tsx     equipment grid for one shack category
    shack/[category]/[item]/page.tsx  equipment detail (specs table + WhatsApp ask-a-question)
  components/
    layout/                      site-header.tsx (desktop nav), mobile-tab-bar.tsx (mobile —
                                  fixed bottom bar, always visible, NOT a click-to-expand
                                  menu — see the hard rule above), site-footer.tsx
    sections/                    hero.tsx, product-carousel.tsx, testimonials.tsx
    products/                    product-card.tsx, product-grid.tsx, product-image.tsx
                                  (ProductImage is generic — also used by shack equipment cards)
    shack/                       shack-category-card.tsx, equipment-card.tsx, equipment-grid.tsx
    ui/                          shadcn-generated primitives — don't hand-edit beyond
                                  targeted fixes (see the carousel.tsx lint-suppression, or
                                  card.tsx's border — shadcn's default was a 1px ring at 10%
                                  foreground opacity, effectively invisible; now a real
                                  `border-2 border-foreground/20` — for examples of justified
                                  ones)
  lib/
    constants.ts                 WHATSAPP_LINK, SITE_URL, DEFAULT_OG_IMAGE — shared by
                                  products, shack, and the metadata/sitemap/robots files
    seo.ts                       pageMetadata() helper — builds title/description/openGraph/
                                  twitter consistently (see "SEO & metadata")
    data/products.ts             real offered-kit data + getProductBySlug/getNewProducts
    data/shack.ts                real shack-equipment data, grouped by category +
                                  getShackCategory/getShackCategoryCount/getEquipmentItem
    data/testimonials.ts         placeholder testimonial data (no real data source yet)
    utils.ts                     shadcn `cn()` helper
```

## Image display

`ProductImage` (`components/products/product-image.tsx`) renders a real
photo via `next/image` when a `src` is given, falling back to a
placeholder icon block for the handful of items that never had a photo on
the old site (keep that fallback). It uses a **square `AspectRatio` box
with `object-contain`**, not `object-cover` — the real source photos range
from tall phone-portrait shots (ratio ~0.46) to wide landscape ones (ratio
~2.2), and cropping to fill a fixed box risks cutting off part of the
actual product in the frame. `object-contain` always shows the whole photo
(letterboxed inside the square), which is the honest choice for reference
photography where nothing was shot to a consistent ratio. Don't switch
back to `object-cover`/a wide box without re-checking the real image
dimensions in `public/catalogue/` first.

## Color palette

`globals.css`'s `:root` was pure grayscale (every shadcn token at zero
oklch chroma) until a deliberate teal-primary + amber-accent pass. The
values are Tailwind's own `teal-600`/`teal-100`/`teal-900`/`amber-500`
oklch shades (see the comment above `:root` in `globals.css`), not
invented hex codes:

- `--primary` / `--ring` → teal-600 / teal-500 (buttons, active nav state,
  focus rings, links-on-hover).
- `--accent` / `--accent-foreground` → teal-100 / teal-900 (subtle
  hover/active background for nav items — shadcn's `accent` slot is for
  UI chrome, not a marketing highlight color).
- `--brand-amber` / `--brand-amber-foreground` (new tokens, registered in
  the `@theme inline` block as `bg-brand-amber` etc.) → amber-500 for
  sparing use as a warm highlight (e.g. "New" badges) — not wired into any
  shadcn semantic slot, since none of them mean "secondary brand color."
- `.dark` block is untouched/unused (light-theme only per Stack above) —
  don't feel obligated to keep it in sync.

When styling a new component, reach for `text-primary`/`bg-primary`,
`hover:text-primary`, `hover:bg-accent`, and `focus-visible:ring-ring`
(already the shadcn default) before reaching for a raw Tailwind color
utility — the goal is a site that visibly has a palette, not grayscale
with the occasional stray color.

## Typography

Body/heading font is **Plus Jakarta Sans** (`layout.tsx`, loaded as
`bodyFont` via `next/font/google`), chosen for a warm/rounded/soft feel
over Geist's more technical one. Monospace stays **Geist Mono** (barely
used — no code blocks on this site — so not worth swapping).

**Read this before touching fonts again.** Every screenshot taken during
this project up to 2026-08-08 was actually rendering in the *browser's
fallback serif*, not Geist — `globals.css`'s `@theme inline` block had
`--font-sans: var(--font-sans)`, a **circular reference** (invalid CSS; a
custom property can't resolve `var()` against itself even when another
rule elsewhere defines a value, so it silently computed to nothing and
every element fell through to the browser default). The font `next/font`
loads on `<html>` must be given its **own distinctly-named** CSS variable
(here, `--font-plus-jakarta-sans`), and `--font-sans` in `@theme inline`
must point *at that name*, not at itself — this is the same pattern
shadcn's own generated code uses (`--font-sans: var(--font-geist-sans)`)
for exactly this reason. If a font ever renders wrong again, check this
mapping first before assuming it's a loading/FOUT issue.

## SEO & metadata

Ported from the old site's `_document.jsx` (which held all its metadata
globally — no page ever set its own description/keywords/OG tags). Static
routes export a `metadata` object; the two dynamic routes
(`products/[slug]`, `shack/[category]`) use `generateMetadata` since their
title/description/image depend on the route param — that split (static
`metadata` vs. `generateMetadata`) is Next's own recommended rule, not a
per-project choice.

- **`SITE_URL`** (`lib/constants.ts`) — ported from the old
  `next-sitemap.config.js`'s `siteUrl`. Feeds `metadataBase` in the root
  layout plus `sitemap.ts`/`robots.ts`; override via `NEXT_PUBLIC_SITE_URL`
  if this deploys somewhere other than vu2rcy.com first.
- **`pageMetadata()`** (`lib/seo.ts`) — use this for any new page's
  `metadata`/`generateMetadata` return value instead of hand-writing
  `openGraph`/`twitter`. Next **shallow-merges** metadata per route
  segment: a page that sets its own `openGraph` or `twitter` object
  replaces that whole object rather than merging into the root layout's,
  so a page that forgets to repeat `twitter.card` silently loses it. The
  helper repeats what needs repeating so call sites don't have to think
  about it.
- **`title`** uses `title.template: "%s | VU2RCY"` on the root layout —
  page-level titles are the short form (`"Products"`, product name,
  `` `${category.name} | Shack` ``), never the full `"X | VU2RCY"` string
  (the template adds that suffix automatically; hardcoding it too would
  double it up).
- **`keywords`** — ported verbatim from the old `<meta name="keywords">`
  tag, kept only at the root layout (the old site never varied them
  per-page either).
- **`verification.google`** — ported verbatim (Search Console token tied
  to the vu2rcy.com domain).
- **OG/Twitter image** — `DEFAULT_OG_IMAGE` is a real, unstyled photo of
  the shack (`public/vu2rcy-shack.jpg`), used as the fallback. The old
  site's actual `Banner.png` was **not** ported as-is because it's a
  screenshot of the old site's own dark-themed UI baked into the image
  (nav bar, old branding) — using it would violate the "no old styling"
  rule even though it's technically an image asset. Product pages use
  their own photo when they have one; shack category pages use the first
  item's photo.
- **Sitemap/robots** — the old site used the `next-sitemap` npm package
  with a `postbuild` script writing static XML/txt into `public/`; that's
  a Pages Router-era pattern. This app uses Next's native
  `app/sitemap.ts` / `app/robots.ts` file convention instead — generated
  at build time with no extra dependency or build step. If a route is
  added, add it to `sitemap.ts` too (nothing does this automatically).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (also type-checks)
- `npm run lint` — ESLint

## Voice

**VU2RCY is a person (a licensed amateur radio operator), not a store, brand,
or place** — the callsign is how hams refer to that individual (e.g. "worked
VU2RCY on 20m"). Body copy is written in **first person** ("I build and
offer", "my shack", "my station"), matching how the old site's own bio and
`/shack/*` pages were actually written ("My Projects", "My Equipment's").
Third-person "VU2RCY" is fine only as an identity mark — the header/footer
logo, `<title>` tags, copyright line — never inside a sentence describing
what's offered or shown. Avoid negative/defensive framing too (e.g. don't
write "not a store" or "not for sale" in user-facing copy) — the
Products/Shack route split and absence of pricing/purchase language already
make the distinction; stating it defensively reads poorly.

Run the **`humanize`** skill (`.claude/skills/humanize/`) over any new
title, meta description, heading, or other user-facing copy before calling
it done — it catches AI-writing tells (em dash overuse, "stands as a
testament to...", rule-of-three padding, filler phrases) that are easy to
produce without noticing.

**This applies to ported content too, not just copy written fresh for
this app.** The "`OLD_CODE_BASE` is a data source only" rule (top of this
file) means *facts* — specs, model numbers, what a product actually does —
must come from there and can't be invented. It does not mean the old
site's prose is exempt from `humanize`. On inspection, the old site's
`/products` long-form write-ups were themselves close to verbatim
AI-generated copy: the same "X represents a significant advancement...
— [list of three]" sentence template reused across two different
products, every single product using the "Bold term: explanation
sentence" benefits-list format, banned words throughout ("seamlessly"
6+ times, "innovative" 3+, "robust," "groundbreaking"). Several of
`shack.ts`'s category descriptions had the same problem (generic
filler like "Embark on a journey of experimentation and creativity...").
Both were rewritten in place — same facts, human sentences, no bolded
list skeleton — see `products.ts`'s `Product.content` (now `string[]`
paragraphs, not an `{intro, benefits[], conclusion}` shape) and the
`shack.ts` category `description` fields. When porting further content,
read it against the `humanize` checklist before treating it as finished,
the same as anything written from scratch.

## Conventions

- Keep the site light-theme only; don't add a dark-mode toggle unless asked.
- Keep Products and Shack as separate routes/data/components (see
  "Information architecture" above) — don't reintroduce a merged catalogue
  or a shared "category" filter across both.
- The WhatsApp CTA (`WHATSAPP_LINK` in `lib/constants.ts`,
  `wa.me/7388407388`, ported from the old site's "Contact For Impedance"
  link) only renders when an item's `whatsapp` field is true — preserve
  that per-item toggle. CTA copy differs by context: "Enquire about this
  kit" on `/products`, "Ask a question" on `/shack/*` — never old-site
  jargon like "Contact for impedance" verbatim, and never wording that
  implies shack equipment is available for purchase.
- Every `Product` has `userManual` and `youtubeVideo` fields (required
  `string`, not optional — use `""` rather than omitting them when a
  product doesn't have one yet). The detail page only renders the "User
  manual" / "Watch video" buttons when the corresponding string is
  non-empty. When real URLs arrive for these, treat them the same as any
  other product content: real data from the user, never invented.
- Mobile-first: below `md`, primary nav is the fixed bottom `MobileTabBar`
  (always visible — see the hard rule above), not a drawer/hamburger.
  `<main>`'s content needs no extra bottom padding since `SiteFooter`
  already carries `pb-16 md:pb-0` so the last real content isn't hidden
  behind the fixed bar; if a page renders something after the footer,
  check that too. Verify new sections at a ~390px viewport, not just
  desktop.
- `ProductGrid`/`EquipmentGrid` are **1 column on mobile**
  (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`) — that's the
  wanted layout, not a bug. What looked like a grid problem earlier was
  actually `ProductImage`: a square box scales with card width, so a
  full-width mobile card made the image alone ~358px tall, pushing the
  title/description/CTA below the fold. Fixed at the image, not the grid:
  `ProductImage` takes a `variant` prop — `"card"` (the default, used by
  `ProductCard`/`EquipmentCard`) caps the image to a fixed height on
  mobile and only goes square from `sm` up where the multi-column grid
  already keeps cards narrow; `"hero"` (used by both detail pages) stays
  square at every breakpoint since there it's the page's main content, not
  one of many cards in a list. If a new place renders `ProductImage`,
  pick the variant that matches — don't reach for a 2-column mobile grid
  as a workaround for a tall image again.
- Any row of 2+ cards that can appear on a single line (new products,
  testimonials, etc.) should be a `Carousel` (see `ProductCarousel`), not
  a plain grid — a static grid of 3+ cards stacks fully vertically on
  mobile and costs a lot of scroll for not much content per screen. This
  bit `Testimonials`, which was built as a grid with no particular reason
  and has since been converted.
- Give every meaningful section/component a stable, kebab-case `id`
  (`id="site-header"`, `id="hero"`, `id="products-grid"`,
  `id="equipment-detail-page"`, etc. — see examples throughout `src/`).
  This is the hard rule above in practice, not a separate checklist.
- Section/page vertical padding runs `py-6 sm:py-10` (page wrappers) or
  `py-10 sm:py-12` (home page sections between the header and footer) —
  not `py-16`/`py-24`. The original scaffold used marketing-site-scale
  spacing throughout; it read as excessive on a catalogue site where the
  point is getting to the content, not a spacious landing-page feel.
  Matching header/body-copy margins (`mb-4`–`mb-6` rather than `mb-8`)
  went along with it. Keep new sections consistent with this scale rather
  than defaulting to shadcn/Tailwind's typical marketing-site spacing.
