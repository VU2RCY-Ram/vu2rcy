"use client"

import { useEffect, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Button for a kit without a detail page yet; shows a short toast instead.
export function ComingSoonTrigger({
  name,
  className,
  children,
}: {
  name: string
  className?: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => setOpen(false), 3500)
    return () => clearTimeout(t)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("cursor-pointer text-left", className)}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            id="coming-soon-toast"
            role="status"
            className="fixed inset-x-4 bottom-20 z-50 mx-auto flex max-w-sm items-center gap-3 rounded-lg border-2 border-foreground/20 bg-background px-4 py-3 text-sm shadow-lg md:bottom-6"
          >
            <ClockIcon className="size-4 shrink-0 text-primary" aria-hidden />
            <span>
              <span className="font-medium">{name}</span>: details coming soon.
            </span>
          </div>,
          document.body,
        )}
    </>
  )
}
