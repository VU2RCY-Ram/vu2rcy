import type { Metadata } from "next"

import { DEFAULT_OG_IMAGE } from "@/lib/constants"

// Metadata's nested fields (openGraph, twitter) are shallowly overwritten,
// not merged, by whichever route segment defines them last — so a page that
// sets its own openGraph/twitter must repeat everything it wants to keep
// (e.g. twitter.card), not just the fields that differ from the root
// layout. This helper keeps that repetition in one place.
export function pageMetadata({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image?: string
}): Metadata {
  const images = [image ?? DEFAULT_OG_IMAGE.url]

  return {
    title,
    description,
    openGraph: { title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  }
}
