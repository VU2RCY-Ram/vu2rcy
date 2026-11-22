import Link from "next/link"
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon, MessageCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ComingSoonTrigger } from "@/components/products/coming-soon-trigger"
import { ProductImage } from "@/components/products/product-image"
import { WHATSAPP_LINK } from "@/lib/constants"
import { getHamfestKits, hamfestKits, isHamfestKitsLive } from "@/lib/data/hamfest-kits"
import type { Product } from "@/lib/data/products"

const whatsappText = `Hi, I'll be at ${hamfestKits.event} and would like to see your kits.`

function KitThumb({ product }: { product: Product }) {
  const body = (
    <>
      <ProductImage
        src={product.image}
        alt={product.name}
        sizes="200px"
        className="h-28 sm:aspect-auto sm:h-32"
      />
      <span className="block truncate px-3 py-2 text-sm font-medium group-hover:text-primary">
        {product.name}
      </span>
    </>
  )
  const box = "group block w-full overflow-hidden rounded-lg border bg-background"
  if (product.comingSoon) {
    return (
      <ComingSoonTrigger name={product.name} className={box}>
        {body}
      </ComingSoonTrigger>
    )
  }
  return (
    <Link href={`/products/${product.slug}`} className={box}>
      {body}
    </Link>
  )
}

// Home card for Hamfest India 2026; renders nothing after the event ends.
export function HamfestKits() {
  if (!isHamfestKitsLive()) return null
  const kits = getHamfestKits()

  return (
    <section id="hamfest-kits" className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-12">
      <div className="overflow-hidden rounded-2xl border-2 border-brand-amber bg-primary/5">
        <div className="flex flex-col gap-4 p-5 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center rounded-full bg-brand-amber px-3 py-1 text-xs font-bold tracking-wider text-brand-amber-foreground uppercase">
              {hamfestKits.event}
            </span>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Meet my kits at Hamfest
            </h2>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDaysIcon className="size-4 text-primary" aria-hidden />
                {hamfestKits.dates}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="size-4 text-primary" aria-hidden />
                {hamfestKits.venue}
              </span>
            </p>
            <p className="max-w-xl text-sm">
              I&apos;m bringing these kits for live demos. Drop by for a
              hands-on look, or message me before the event.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
            <Button
              id="hamfest-kits-whatsapp"
              size="lg"
              nativeButton={false}
              render={
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 bg-brand-amber px-6 text-base font-semibold text-brand-amber-foreground hover:bg-brand-amber/85"
            >
              <MessageCircleIcon />
              Message me on WhatsApp
            </Button>
            <Button
              id="hamfest-kits-products"
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/products" />}
              className="h-12 px-6 text-base"
            >
              View all products
              <ArrowRightIcon />
            </Button>
          </div>
        </div>

        <div id="hamfest-kits-peek" className="border-t bg-background px-5 py-4 sm:px-8">
          <Carousel opts={{ align: "start" }} className="sm:mx-12">
            <CarouselContent>
              {kits.map((product) => (
                <CarouselItem key={product.slug} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                  <KitThumb product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
