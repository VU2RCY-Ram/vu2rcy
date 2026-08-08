import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  CirclePlayIcon,
  FileTextIcon,
  MessageCircleIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/products/product-image";
import { getProductBySlug, products } from "@/lib/data/products";
import { WHATSAPP_LINK } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return pageMetadata({
    title: product.name,
    description: product.tagline,
    image: product.detailImage ?? product.image,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div
      id="product-detail-page"
      className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10"
    >
      <Link
        href="/products"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeftIcon className="size-4" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ProductImage
          variant="hero"
          src={product.detailImage ?? product.image}
          alt={product.name}
          className="rounded-xl"
        />

        <div>
          {product.isNew && (
            <span className="inline-flex items-center rounded-full bg-brand-amber px-2.5 py-0.5 text-xs font-medium text-brand-amber-foreground">
              New
            </span>
          )}
          <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-2 text-muted-foreground">{product.tagline}</p>

          {(product.whatsapp || product.userManual || product.youtubeVideo) && (
            <div
              id="product-actions"
              className="mt-6 flex flex-wrap gap-3 border-t pt-6"
            >
              {product.whatsapp && (
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
                  Enquire about this kit
                </Button>
              )}
              {product.userManual && (
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={
                    <a
                      href={product.userManual}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <FileTextIcon />
                  User manual
                </Button>
              )}
              {product.youtubeVideo && (
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={
                    <a
                      href={product.youtubeVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <CirclePlayIcon />
                  Watch video
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {product.content && (
        <div className="mt-8 max-w-2xl space-y-4 border-t pt-6">
          {product.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {(!product.userManual || !product.youtubeVideo) && (
        <p
          id="product-coming-soon"
          className={
            product.content
              ? "mt-4 max-w-2xl text-xs text-muted-foreground"
              : "mt-8 max-w-2xl border-t pt-6 text-xs text-muted-foreground"
          }
        >
          {!product.userManual && !product.youtubeVideo
            ? "A user manual and video for this kit are coming soon."
            : !product.userManual
              ? "A user manual for this kit is coming soon."
              : "A video for this kit is coming soon."}
        </p>
      )}
    </div>
  );
}
