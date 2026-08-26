"use client"

import { useState } from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ProductImage } from "@/components/products/product-image"

export function ProductGallery({
  images,
  alt,
  className,
}: {
  images: string[]
  alt: string
  className?: string
}) {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Carousel
        id="product-gallery"
        opts={{ loop: true }}
        plugins={[autoplay]}
        className={className}
      >
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={src}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="block w-full cursor-zoom-in"
              >
                <ProductImage
                  variant="hero"
                  src={src}
                  alt={`${alt} photo ${i + 1}`}
                  className="rounded-xl"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      >
        <DialogContent className="max-w-2xl gap-0 p-2 sm:max-w-2xl">
          <DialogTitle className="pr-6 pb-2 text-lg">{alt}</DialogTitle>
          {openIndex !== null && (
            // Plain <img>, not next/image: the lightbox shows each photo at
            // its own natural aspect ratio (portrait or landscape) rather
            // than forcing it into ProductImage's square, letterboxed box —
            // next/image needs known width/height up front, which we don't
            // have per photo here.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={images[openIndex]}
              alt={`${alt} photo ${openIndex + 1}`}
              className="mx-auto max-h-[75vh] w-auto max-w-full rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
