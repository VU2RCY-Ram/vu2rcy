import Image from "next/image"
import { CirclePlayIcon, ClockIcon, ExternalLinkIcon, StoreIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { App, AppLink } from "@/lib/data/apps"

const linkIcon: Record<AppLink["kind"], typeof CirclePlayIcon> = {
  video: CirclePlayIcon,
  store: StoreIcon,
  site: ExternalLinkIcon,
}

export function AppCard({ app }: { app: App }) {
  return (
    <Card id={`app-${app.slug}`} className="h-full">
      <CardContent className="flex items-start gap-4">
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          width={64}
          height={64}
          className="size-16 shrink-0 rounded-2xl"
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{app.name}</h3>
            {app.own && (
              <Badge className="bg-brand-amber text-brand-amber-foreground">
                My app
              </Badge>
            )}
          </div>
          {app.description ? (
            <p className="mt-1 text-sm text-muted-foreground">{app.description}</p>
          ) : (
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <ClockIcon className="size-4 text-primary" aria-hidden />
              Details coming soon.
            </p>
          )}
        </div>
      </CardContent>
      {app.links.length > 0 && (
        <CardFooter className="mt-auto flex-wrap gap-2">
          {app.links.map((link) => {
            const Icon = linkIcon[link.kind]
            return (
              <Button
                key={link.href}
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<a href={link.href} target="_blank" rel="noopener noreferrer" />}
              >
                <Icon />
                {link.label}
              </Button>
            )
          })}
        </CardFooter>
      )}
    </Card>
  )
}
