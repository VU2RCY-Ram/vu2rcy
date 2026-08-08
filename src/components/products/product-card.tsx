import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProductImage } from "@/components/products/product-image"
import type { Product } from "@/lib/data/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full transition-shadow hover:shadow-md hover:shadow-primary/10">
      <ProductImage src={product.image} alt={product.name} />
      <CardHeader>
        {product.isNew && (
          <div className="flex justify-end">
            <Badge className="bg-brand-amber text-brand-amber-foreground">
              New
            </Badge>
          </div>
        )}
        <CardTitle className="mt-1 text-base">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-primary hover:underline"
          >
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {product.tagline}
      </CardContent>
      <CardFooter className="justify-end">
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View details
        </Link>
      </CardFooter>
    </Card>
  )
}
