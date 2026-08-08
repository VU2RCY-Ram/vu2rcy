import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

import { EquipmentGrid } from "@/components/shack/equipment-grid";
import { getShackCategory, shackCategories } from "@/lib/data/shack";
import { pageMetadata } from "@/lib/seo";

type ShackCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return shackCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: ShackCategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getShackCategory(slug);

  if (!category) {
    return { title: "Not found" };
  }

  const firstItemImage = category.items.find((item) => item.image)?.image;

  return pageMetadata({
    title: `${category.name} | Shack`,
    description: category.description,
    image: firstItemImage,
  });
}

export default async function ShackCategoryPage({
  params,
}: ShackCategoryPageProps) {
  const { category: slug } = await params;
  const category = getShackCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div
      id="shack-category-page"
      className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10"
    >
      <Link
        href="/shack"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeftIcon className="size-4" />
        Back to shack
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          {category.name}
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {category.description}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {category.items.length} items
        </p>
      </div>

      <EquipmentGrid items={category.items} categorySlug={category.slug} />
    </div>
  );
}
