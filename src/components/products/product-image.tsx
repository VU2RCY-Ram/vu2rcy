import Image from "next/image"
import { PackageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function ProductImage({
  src,
  alt,
  className,
  sizes,
  variant = "card",
}: {
  src?: string
  alt?: string
  className?: string
  sizes?: string
  // "card" (default): used inside grid cards, which are full-width on a
  // single-column mobile layout — a square box there would be as tall as
  // the card is wide (~360px), dwarfing the title/description below it.
  // Capped to a fixed height on mobile, square again from `sm` up where
  // the multi-column grid already keeps cards narrow.
  // "hero": full square at every breakpoint — for detail pages, where the
  // image is the page's main content, not one of many cards in a list.
  variant?: "card" | "hero"
}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden bg-muted text-muted-foreground",
        variant === "card" ? "h-48 sm:aspect-square sm:h-auto" : "aspect-square",
        className
      )}
    >
      {src ? (
        // object-contain, not object-cover: source photos range from tall
        // phone-portrait shots to wide landscape ones (see CLAUDE.md
        // "Image display"). Cropping to fill a fixed box risks cutting off
        // part of the actual product; showing the whole photo letterboxed
        // is more honest for reference photography than a cropped subject.
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes={sizes ?? "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"}
          className="object-contain p-2"
        />
      ) : (
        <PackageIcon className="size-10" strokeWidth={1.5} />
      )}
    </div>
  )
}
