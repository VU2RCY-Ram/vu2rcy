import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, MessageCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/products/product-image";
import { getEquipmentItem, shackCategories } from "@/lib/data/shack";
import { pageMetadata } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";
import { getYoutubeEmbedUrl } from "@/lib/utils";

type EquipmentPageProps = {
  params: Promise<{ category: string; item: string }>;
};

export function generateStaticParams() {
  return shackCategories.flatMap((category) =>
    category.items.map((item) => ({
      category: category.slug,
      item: item.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: EquipmentPageProps): Promise<Metadata> {
  const { category: categorySlug, item: itemSlug } = await params;
  const found = getEquipmentItem(categorySlug, itemSlug);

  if (!found) {
    return { title: "Not found" };
  }

  return pageMetadata({
    title: `${found.item.name} | Shack`,
    description: found.item.description,
    image: found.item.image,
  });
}

export default async function EquipmentPage({ params }: EquipmentPageProps) {
  const { category: categorySlug, item: itemSlug } = await params;
  const found = getEquipmentItem(categorySlug, itemSlug);

  if (!found) {
    notFound();
  }

  const { item, category } = found;

  return (
    <div
      id="equipment-detail-page"
      className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10"
    >
      <Link
        href={`/shack/${category.slug}`}
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeftIcon className="size-4" />
        Back to {category.name}
      </Link>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ProductImage
          variant="hero"
          src={item.image}
          alt={item.name}
          className="rounded-xl"
        />

        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {item.name}
          </h1>
          <p className="mt-2 text-muted-foreground">{item.description}</p>

          {item.specs && item.specs.some((spec) => spec.value !== "") && (
            <dl className="mt-6 divide-y divide-border rounded-lg border text-sm">
              {item.specs
                .filter((spec) => spec.value !== "")
                .map((spec, i) => (
                  <div
                    key={`${spec.label}-${i}`}
                    className="flex justify-between gap-4 px-3 py-2"
                  >
                    <dt className="text-muted-foreground">{spec.label}</dt>
                    <dd className="text-right font-medium">{spec.value}</dd>
                  </div>
                ))}
            </dl>
          )}

          {item.whatsapp && (
            <div className="mt-6 border-t pt-6">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircleIcon />
                Ask a question
              </Button>
            </div>
          )}
        </div>
      </div>

      {item.youtubeVideo && (
        <div id="equipment-video" className="mt-8 max-w-2xl border-t pt-6">
          <div className="aspect-video overflow-hidden rounded-xl border">
            <iframe
              src={getYoutubeEmbedUrl(item.youtubeVideo)}
              title={`${item.name} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
