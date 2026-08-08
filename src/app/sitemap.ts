import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { products } from "@/lib/data/products";
import { shackCategories } from "@/lib/data/shack";

// Generated at build time (Next.js's native sitemap.ts convention) —
// replaces the old site's next-sitemap package + postbuild script, which
// doesn't apply to the App Router.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/shack`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/homebrew`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/awards`,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const shackRoutes: MetadataRoute.Sitemap = shackCategories.map(
    (category) => ({
      url: `${SITE_URL}/shack/${category.slug}`,
      changeFrequency: "weekly",
      priority: 0.6,
    })
  );

  const equipmentRoutes: MetadataRoute.Sitemap = shackCategories.flatMap(
    (category) =>
      category.items.map((item) => ({
        url: `${SITE_URL}/shack/${category.slug}/${item.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.5,
      }))
  );

  return [
    ...staticRoutes,
    ...productRoutes,
    ...shackRoutes,
    ...equipmentRoutes,
  ];
}
