import type { Metadata } from "next";
import { NewspaperIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/product-grid";
import { ALL_BROCHURES_PDF } from "@/lib/data/brochures";
import { getNewProducts, products } from "@/lib/data/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "Amateur radio kits I build and offer: APRS trackers, MMDVM, LoRa ground stations and more.",
});

export default function ProductsPage() {
  return (
    <div
      id="products-page"
      className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10"
    >
      <div
        id="products-header"
        className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
          <p className="mt-2 text-muted-foreground">
            {products.length} kits I build and offer. Get in touch to ask about
            building one.
          </p>
        </div>
        <Button
          id="view-all-brochures"
          variant="outline"
          className="self-start sm:self-auto"
          nativeButton={false}
          render={
            <a
              href={ALL_BROCHURES_PDF}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <NewspaperIcon />
          View all brochures
        </Button>
      </div>

      <ProductGrid products={getNewProducts()} />
    </div>
  );
}
