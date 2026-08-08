import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AwardIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getAwardImages } from "@/lib/data/awards";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Awards",
  description: "Award certificates earned over years of operating on air.",
});

const PAGE_SIZE = 24;

type AwardsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function AwardsPage({ searchParams }: AwardsPageProps) {
  const { page: pageParam } = await searchParams;
  const awards = await getAwardImages();

  const totalPages = Math.max(1, Math.ceil(awards.length / PAGE_SIZE));
  const page = Math.min(
    Math.max(1, Number(pageParam) || 1),
    totalPages
  );
  const pageItems = awards.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div
      id="awards-page"
      className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10"
    >
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Awards</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {awards.length > 0
            ? `${awards.length} award certificates I've earned over the years, issued by clubs and award managers across the digital modes community.`
            : "Award certificates earned over years of operating on air."}
        </p>
      </div>

      {pageItems.length > 0 ? (
        <>
          <div
            id="awards-grid"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {pageItems.map((award) => (
              <a
                key={award.name}
                href={award.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border-2 border-foreground/20 bg-card transition-shadow hover:shadow-md hover:shadow-primary/10"
              >
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-muted">
                  <Image
                    src={award.url}
                    alt={award.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-3">
                  <p className="truncate text-xs font-medium group-hover:text-primary">
                    {award.label}
                  </p>
                  {award.issuer && (
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {award.issuer}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {totalPages > 1 && (
            <div
              id="awards-pagination"
              className="mt-8 flex items-center justify-between gap-4"
            >
              {page <= 1 ? (
                <Button variant="outline" disabled>
                  <ChevronLeftIcon />
                  Previous
                </Button>
              ) : (
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={<Link href={`/awards?page=${page - 1}`} />}
                >
                  <ChevronLeftIcon />
                  Previous
                </Button>
              )}
              <span className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
              </span>
              {page >= totalPages ? (
                <Button variant="outline" disabled>
                  Next
                  <ChevronRightIcon />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={<Link href={`/awards?page=${page + 1}`} />}
                >
                  Next
                  <ChevronRightIcon />
                </Button>
              )}
            </div>
          )}
        </>
      ) : (
        <div
          id="awards-empty-state"
          className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-foreground/20 bg-muted/40 px-6 py-16 text-center text-muted-foreground"
        >
          <AwardIcon className="size-10" strokeWidth={1.5} />
          <p className="text-sm">No awards to show right now — check back soon.</p>
        </div>
      )}
    </div>
  );
}
