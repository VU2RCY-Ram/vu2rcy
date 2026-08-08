import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/lib/data/products"

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div
      id="products-grid"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
