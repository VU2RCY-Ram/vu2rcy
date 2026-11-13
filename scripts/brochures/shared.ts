// Helpers shared by the brochure and Hamfest poster renderers.
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

export const ROOT = path.resolve(__dirname, "../..")
export const PUBLIC = path.join(ROOT, "public")
const FONT_DIR = path.join(ROOT, "node_modules/@fontsource-variable/plus-jakarta-sans/files")
const MIME: Record<string, string> = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" }

export function dataUri(publicPath: string) {
  const file = path.join(PUBLIC, publicPath)
  if (!existsSync(file)) throw new Error(`Missing file: public${publicPath}`)
  const mime = MIME[path.extname(file).toLowerCase()]
  if (!mime) throw new Error(`Unsupported image type: ${publicPath}`)
  return `data:${mime};base64,${readFileSync(file).toString("base64")}`
}

export function fontCss() {
  return ["latin-ext", "latin"]
    .map((subset) => {
      const woff = readFileSync(path.join(FONT_DIR, `plus-jakarta-sans-${subset}-wght-normal.woff2`))
      return `@font-face { font-family: "Plus Jakarta Sans"; font-weight: 200 800;
        src: url(data:font/woff2;base64,${woff.toString("base64")}) format("woff2"); }`
    })
    .join("\n")
}
