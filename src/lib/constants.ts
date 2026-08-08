const WHATSAPP_NUMBER = "7388407388"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

// The old site's domain (ported from next-sitemap.config.js's siteUrl).
// Override with NEXT_PUBLIC_SITE_URL if this deploys somewhere else first.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vu2rcy.com"

// Fallback Open Graph / Twitter image for any page that doesn't have a more
// specific photo of its own (a real, unstyled photo of the shack — not a
// screenshot of the old site's UI).
export const DEFAULT_OG_IMAGE = {
  url: "/vu2rcy-shack.jpg",
  width: 4000,
  height: 2250,
  alt: "The VU2RCY amateur radio shack",
}
