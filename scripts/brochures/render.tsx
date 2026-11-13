// Renders the A4 brochure and user manual PDFs from src/lib/data/brochures.ts.
// Usage: npm run brochures [-- <slug>...] [--only brochure|manual] [--html]
import { mkdirSync, writeFileSync } from "node:fs"
import path from "node:path"
import { renderToStaticMarkup } from "react-dom/server"
import QRCode from "qrcode"
import { chromium, type Browser } from "playwright"
import { ALL_BROCHURES_PDF, BROCHURE_ICONS, brochures, type Brochure } from "@/lib/data/brochures"
import { getProductBySlug } from "@/lib/data/products"
import { productWhatsappLink, type EnquirySource } from "@/lib/contact"
import { baseCss, brochureCss, manualCss } from "./styles"
import { BrochureDoc, ManualDoc, type Assets } from "./templates"
import { PUBLIC, ROOT, dataUri, fontCss } from "./shared"

type Kind = "brochure" | "manual"

function validate(b: Brochure) {
  const product = getProductBySlug(b.slug)
  if (!product) throw new Error(`${b.slug}: no product with this slug`)
  if (!product.image) throw new Error(`${b.slug}: product has no image`)
  const used = [...b.features, ...b.highlights, ...(b.goodFor ?? [])].map((i) => i.icon)
  const bad = used.filter((i) => !(BROCHURE_ICONS as readonly string[]).includes(i))
  if (bad.length) throw new Error(`${b.slug}: icons not in BROCHURE_ICONS: ${bad.join(", ")}`)
  if (b.features.length < 4 || b.features.length > 6) throw new Error(`${b.slug}: needs 4-6 features`)
  if ((b.goodFor?.length ?? 0) > 6) throw new Error(`${b.slug}: at most 6 goodFor entries`)
  return product
}

async function html(kind: Kind, b: Brochure) {
  const product = validate(b)
  const source: EnquirySource = kind
  const qrSvg = await QRCode.toString(productWhatsappLink(product, source), {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#134e4a", light: "#ffffff" },
  })
  const assets: Assets = {
    photo: dataUri(product.detailImage ?? product.image!),
    screenshot: b.manual.screenshot ? dataUri(b.manual.screenshot.src) : undefined,
    qrSvg,
  }
  const body =
    kind === "brochure"
      ? renderToStaticMarkup(<BrochureDoc b={b} product={product} assets={assets} />)
      : renderToStaticMarkup(<ManualDoc b={b} product={product} assets={assets} />)
  const title = `${product.name} ${kind === "brochure" ? "brochure" : "user manual"}`
  return { product, title, body, page: wrap(kind, title, body) }
}

function wrap(kind: Kind, title: string, body: string) {
  const css = fontCss() + baseCss + (kind === "brochure" ? brochureCss : manualCss)
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body>${body}</body></html>`
}

async function print(browser: Browser, doc: string, out: string, label: string, onePagePerSheet: boolean) {
  const page = await browser.newPage()
  await page.setContent(doc, { waitUntil: "load" })
  await page.evaluate(() => document.fonts.ready)
  if (onePagePerSheet) {
    const spill = await page.evaluate(() =>
      Math.max(...[...document.querySelectorAll<HTMLElement>(".sheet")].map((s) => s.scrollHeight - s.clientHeight)),
    )
    if (spill > 1) throw new Error(`${label}: a brochure is ${spill}px taller than one A4 page; trim the data`)
  }
  await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true, tagged: true })
  await page.close()
  console.log(`pdf   ${path.relative(ROOT, out)}  (${label})`)
}

function outPath(kind: Kind, slug: string, product: { brochure?: string; userManual: string }) {
  const target = kind === "brochure" ? product.brochure : product.userManual
  if (!target) throw new Error(`${slug}: products.ts has no ${kind === "brochure" ? "brochure" : "userManual"} path`)
  return path.join(PUBLIC, target)
}

async function main() {
  const args = process.argv.slice(2)
  const onlyIdx = args.indexOf("--only")
  const only = onlyIdx >= 0 ? (args[onlyIdx + 1] as Kind) : undefined
  const htmlOnly = args.includes("--html")
  const slugs = args.filter((a, i) => !a.startsWith("--") && !(onlyIdx >= 0 && i === onlyIdx + 1))
  const kinds: Kind[] = only ? [only] : ["brochure", "manual"]
  const picked = slugs.length ? brochures.filter((b) => slugs.includes(b.slug)) : brochures
  if (slugs.length && picked.length !== slugs.length) throw new Error(`Unknown slug in: ${slugs.join(", ")}`)

  const browser = htmlOnly ? undefined : await chromium.launch()
  try {
    for (const b of picked) {
      for (const kind of kinds) {
        const { product, page: doc, title } = await html(kind, b)
        const out = outPath(kind, b.slug, product)
        mkdirSync(path.dirname(out), { recursive: true })
        if (htmlOnly) {
          writeFileSync(out.replace(/\.pdf$/, ".html"), doc)
          console.log(`html  ${path.relative(ROOT, out.replace(/\.pdf$/, ".html"))}`)
          continue
        }
        await print(browser!, doc, out, title, kind === "brochure")
      }
    }
    // The combined PDF always holds every brochure, whatever slugs were picked.
    if (kinds.includes("brochure") && browser) {
      const bodies = await Promise.all(brochures.map((b) => html("brochure", b)))
      const doc = wrap("brochure", "VU2RCY brochures", bodies.map((r) => r.body).join(""))
      await print(browser, doc, path.join(PUBLIC, ALL_BROCHURES_PDF), "all brochures", true)
    }
  } finally {
    await browser?.close()
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
