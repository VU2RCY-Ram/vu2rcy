import Link from "next/link"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProductImage } from "@/components/products/product-image"
import type { Equipment } from "@/lib/data/shack"

export function EquipmentCard({
  item,
  categorySlug,
}: {
  item: Equipment
  categorySlug: string
}) {
  const href = `/shack/${categorySlug}/${item.slug}`

  return (
    <Card className="h-full transition-shadow hover:shadow-md hover:shadow-primary/10">
      <ProductImage src={item.image} alt={item.name} />
      <CardHeader>
        <CardTitle className="text-base">
          <Link href={href} className="hover:text-primary hover:underline">
            {item.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {item.description}
      </CardContent>
      <CardFooter className="justify-end">
        <Link
          href={href}
          className="text-sm font-medium text-primary hover:underline"
        >
          View details
        </Link>
      </CardFooter>
    </Card>
  )
}
