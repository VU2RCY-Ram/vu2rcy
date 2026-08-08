import type { Metadata } from "next";

import { ProductGrid } from "@/components/products/product-grid";
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
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
        <p className="mt-2 text-muted-foreground">
          {products.length} kits I build and offer. Get in touch to ask about
          building one.
        </p>
      </div>

      <ProductGrid products={getNewProducts()} />
    </div>
  );
}
