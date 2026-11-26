"use client"

import { useState, type ReactNode } from "react"
import { CirclePlayIcon, ClockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import wsrvLoader from "@/lib/image-loader"
import { cn } from "@/lib/utils"

// Button for a product without a detail page yet; opens its photo in a pop-up.
export function ComingSoonTrigger({
  name,
  image,
  video,
  className,
  children,
}: {
  name: string
  image?: string
  video?: string
  className?: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("cursor-pointer text-left", className)}
      >
        {children}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          id="coming-soon-dialog"
          className="max-w-2xl gap-3 p-3 sm:max-w-2xl sm:p-4"
        >
          <DialogTitle className="pr-8 text-lg">{name}</DialogTitle>
          {image && (
            // Plain <img> so the photo keeps its own aspect ratio.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={wsrvLoader({ src: image, width: 1200 })}
              alt={name}
              className="mx-auto max-h-[65vh] w-auto max-w-full rounded-lg"
            />
          )}
          <DialogDescription className="flex items-center justify-center gap-2 text-sm">
            <ClockIcon className="size-4 shrink-0 text-primary" aria-hidden />
            Details coming soon.
          </DialogDescription>
          {video && (
            <Button
              id="coming-soon-video"
              variant="outline"
              className="mx-auto"
              nativeButton={false}
              render={<a href={video} target="_blank" rel="noopener noreferrer" />}
            >
              <CirclePlayIcon />
              Watch video
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
