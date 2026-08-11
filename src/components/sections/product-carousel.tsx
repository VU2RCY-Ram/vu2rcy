import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/lib/data/products"

export function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <section id="new-products" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            New products
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Kits I build and offer. Get in touch if you&apos;d like one
            built.
          </p>
        </div>
        <Link
          href="/products"
          className="hidden shrink-0 text-sm font-medium text-primary hover:underline sm:inline"
        >
          View all products
        </Link>
      </div>

      <Carousel opts={{ align: "start" }} className="sm:mx-16">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.slug}
              className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  )
}
