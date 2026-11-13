// Renders the A4 brochure and user manual PDFs from src/lib/data/brochures.ts.
// Usage: npm run brochures [-- <slug>...] [--only brochure|manual] [--html]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { renderToStaticMarkup } from "react-dom/server"
import QRCode from "qrcode"
import { chromium } from "playwright"
import { BROCHURE_ICONS, brochures, type Brochure } from "@/lib/data/brochures"
import { getProductBySlug } from "@/lib/data/products"
import { productWhatsappLink, type EnquirySource } from "@/lib/contact"
import { baseCss, brochureCss, manualCss } from "./styles"
import { BrochureDoc, ManualDoc, type Assets } from "./templates"

const ROOT = path.resolve(__dirname, "../..")
const PUBLIC = path.join(ROOT, "public")
const FONT_DIR = path.join(ROOT, "node_modules/@fontsource-variable/plus-jakarta-sans/files")
const MIME: Record<string, string> = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" }

type Kind = "brochure" | "manual"

function dataUri(publicPath: string) {
  const file = path.join(PUBLIC, publicPath)
  if (!existsSync(file)) throw new Error(`Missing file: public${publicPath}`)
  const mime = MIME[path.extname(file).toLowerCase()]
  if (!mime) throw new Error(`Unsupported image type: ${publicPath}`)
  return `data:${mime};base64,${readFileSync(file).toString("base64")}`
}

function fontCss() {
  // Latin + Latin Extended cover everything the data uses.
  return ["latin-ext", "latin"]
    .map((subset) => {
      const woff = readFileSync(path.join(FONT_DIR, `plus-jakarta-sans-${subset}-wght-normal.woff2`))
      return `@font-face { font-family: "Plus Jakarta Sans"; font-weight: 200 800;
        src: url(data:font/woff2;base64,${woff.toString("base64")}) format("woff2"); }`
    })
    .join("\n")
}

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
  const css = fontCss() + baseCss + (kind === "brochure" ? brochureCss : manualCss)
  const title = `${product.name} ${kind === "brochure" ? "brochure" : "user manual"}`
  return {
    product,
    title,
    page: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body>${body}</body></html>`,
  }
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
        const page = await browser!.newPage()
        await page.setContent(doc, { waitUntil: "load" })
        await page.evaluate(() => document.fonts.ready)
        if (kind === "brochure") {
          const spill = await page.evaluate(() => {
            const s = document.querySelector(".sheet") as HTMLElement
            return s.scrollHeight - s.clientHeight
          })
          if (spill > 1) throw new Error(`${b.slug}: brochure is ${spill}px taller than one A4 page; trim the data`)
        }
        await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true, tagged: true })
        await page.close()
        console.log(`pdf   ${path.relative(ROOT, out)}  (${title})`)
      }
    }
  } finally {
    await browser?.close()
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
