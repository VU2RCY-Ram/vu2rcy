import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ShackCategory } from "@/lib/data/shack"

export function ShackCategoryCard({ category }: { category: ShackCategory }) {
  return (
    <Link
      href={`/shack/${category.slug}`}
      id={`shack-category-${category.slug}`}
      className="block h-full"
    >
      <Card className="h-full transition-shadow hover:shadow-md hover:shadow-primary/10">
        <CardHeader>
          <CardTitle className="text-lg hover:text-primary">
            {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          {category.description}
        </CardContent>
        <CardFooter className="justify-between text-sm font-medium text-primary">
          <span>{category.items.length} items</span>
          <ArrowRightIcon className="size-4" />
        </CardFooter>
      </Card>
    </Link>
  )
}
