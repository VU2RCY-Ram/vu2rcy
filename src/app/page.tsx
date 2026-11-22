import { HamfestKits } from "@/components/sections/hamfest-kits";
import { Hero } from "@/components/sections/hero";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { Testimonials } from "@/components/sections/testimonials";
import { getNewProducts } from "@/lib/data/products";
import { testimonials } from "@/lib/data/testimonials";

// Re-check hourly so the Hamfest card drops off after the event.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <HamfestKits />
      <ProductCarousel products={getNewProducts()} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
