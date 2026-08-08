import type { Metadata } from "next";
import Link from "next/link";
import { SignalZeroIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Page not found",
  description: "This page doesn't exist.",
});

export default function NotFound() {
  return (
    <div
      id="not-found-page"
      className="mx-auto flex max-w-xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24"
    >
      <SignalZeroIcon className="size-10 text-primary" strokeWidth={1.5} />
      <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        Nothing on this frequency
      </h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist, or it&apos;s
        moved. Try one of these instead.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button nativeButton={false} render={<Link href="/" />}>
          Back to home
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/products" />}
        >
          Browse products
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/shack" />}
        >
          Explore the shack
        </Button>
      </div>
    </div>
  );
}
