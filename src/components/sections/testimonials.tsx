import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/lib/data/testimonials"

function initials(name: string) {
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section id="testimonials" className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          What operators are saying
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Feedback from hams who&apos;ve built and used my kits.
        </p>

        <Carousel opts={{ align: "start" }} className="mt-6 sm:mx-12">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full transition-shadow hover:shadow-md hover:shadow-primary/10">
                  <CardContent className="flex h-full flex-col">
                    <p className="text-sm text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-4">
                      <Avatar>
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          {initials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-muted-foreground">
                          {testimonial.callsign}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
