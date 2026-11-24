import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/lib/data/products"

export function ProductGrid({
  products,
  id = "products-grid",
}: {
  products: Product[]
  id?: string
}) {
  return (
    <div
      id={id}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
