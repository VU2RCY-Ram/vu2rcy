# Brochures and user manuals

Each product with an entry in `src/lib/data/brochures.ts` gets two PDFs:

- a one-page A4 brochure at `products.ts`'s `brochure` path (`public/catalogue/products/brochures/<slug>.pdf`)
- a user manual at its `userManual` path (`public/catalogue/products/manuals/<slug>-manual.pdf`)

Whenever brochures are rendered, the script also rebuilds `vu2rcy-brochures.pdf` (every brochure, one per page). The "View all brochures" button on `/products` opens it (`ALL_BROCHURES_PDF` in `brochures.ts`).

## Render

```
npm run brochures                      # every product, both PDFs
npm run brochures -- lora-chat         # one product
npm run brochures -- --only brochure   # brochures only
npm run brochures -- --html            # write .html next to each PDF to preview in a browser
```

First run on a new machine: `npx playwright install chromium-headless-shell`.

The PDFs are committed. Re-render and commit them whenever `brochures.ts`, a product's name or photo, or the contact details in `constants.ts` change.

## How it works

`scripts/brochures/render.tsx` renders `templates.tsx` to static HTML with React, inlines the photo, screenshot and Plus Jakarta Sans font as data URIs, and prints it with Playwright's `page.pdf()`. The QR code opens WhatsApp with "Hi, I'm interested in <product>" plus "(saw your brochure)" or "(from the user manual)", so Ram can tell where an enquiry came from (`src/lib/contact.ts`).

The script stops with an error when:

- a slug has no product, or the product has no photo
- an icon is not in `BROCHURE_ICONS`
- a brochure has fewer than 4 or more than 6 features, or more than 6 "Good for" entries
- the brochure does not fit on one A4 page (trim the text in the data)

## Adding a product

1. Get the facts from Ram (his own brochure, the firmware, or a message). Nothing is invented.
2. Add an entry to `brochures` in `brochures.ts`. Keep `intro` under about 160 characters and exactly 4 `highlights`.
3. Set `brochure: "/catalogue/products/brochures/<slug>.pdf"` on the product in `products.ts`.
4. Run `npm run brochures -- <slug>`, open both PDFs, and check them.
