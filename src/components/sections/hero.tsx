import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="border-b bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Amateur radio kits I build and offer
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          APRS trackers, MMDVM builds, LoRa ground stations and more,
          designed and tested for fellow operators. Curious about my
          station? Take a look inside my shack.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<Link href="/products" />}>
            Browse products
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/shack" />}
          >
            Explore the shack
          </Button>
        </div>
      </div>
    </section>
  )
}
