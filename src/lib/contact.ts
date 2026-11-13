import { SITE_URL, WHATSAPP_LINK } from "./constants"

// Where the enquiry came from, so Ram can tell which channel worked.
export type EnquirySource = "site" | "brochure" | "manual"

const SOURCE_NOTE: Record<EnquirySource, string> = {
  site: "",
  brochure: " (saw your brochure)",
  manual: " (from the user manual)",
}

// WhatsApp link that opens with "Hi, I'm interested in <name>" already typed.
// The product URL makes WhatsApp show a preview card of the kit.
export function productWhatsappLink(
  product: { name: string; slug: string },
  source: EnquirySource = "site",
) {
  const text = `Hi, I'm interested in ${product.name}${SOURCE_NOTE[source]}. ${SITE_URL}/products/${product.slug}`
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`
}
