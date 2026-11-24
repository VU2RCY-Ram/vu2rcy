import { getProductBySlug, type Product } from "./products"

// Ram's HFI 2026 poster kits in order, then MASTER-APRS PRO and MASTER-CW LINK.
// Dates and venue confirmed by Ram 2026-11-17; no stall number was given.
export const hamfestKits = {
  event: "Hamfest India 2026",
  dates: "28-29 Nov 2026",
  venue: "NITK Surathkal, Mangaluru",
  // Card hides after the last day, in India time.
  endsAt: "2026-11-29T23:59:59+05:30",
  slugs: [
    "lora-chat",
    "master-aprs-weather-station",
    "master-clock",
    "master-aprs",
    "master-aprs-igate-rx",
    "master-aprs-tracker-2",
    "master-aprs-tracker-3",
    "master-aprs-pro-2",
    "master-cw-link",
  ],
}

export function getHamfestKits(): Product[] {
  return hamfestKits.slugs.map((slug) => {
    const product = getProductBySlug(slug)
    if (!product) throw new Error(`hamfest-kits: no product with slug ${slug}`)
    return product
  })
}

export function isHamfestKitsLive(now = new Date()) {
  return now.getTime() < new Date(hamfestKits.endsAt).getTime()
}
