import type { Metadata } from "next";

import { ShackCategoryCard } from "@/components/shack/shack-category-card";
import { getShackCategoryCount, shackCategories } from "@/lib/data/shack";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shack",
  description:
    "A look inside my shack: antennas, radios and equipment across HF, VHF/UHF, APRS, digital modes and more.",
});

export default function ShackPage() {
  return (
    <div
      id="shack-page"
      className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10"
    >
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">My Shack</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A look inside my station. {getShackCategoryCount()} pieces of
          equipment across {shackCategories.length} categories, from
          antennas to digital modes, that I use day to day.
        </p>
      </div>

      <div
        id="shack-categories-grid"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {shackCategories.map((category) => (
          <ShackCategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
