import { Hero } from "@/components/sections/hero";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { Testimonials } from "@/components/sections/testimonials";
import { getNewProducts } from "@/lib/data/products";
import { testimonials } from "@/lib/data/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCarousel products={getNewProducts()} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
