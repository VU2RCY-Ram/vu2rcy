"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { RadioTowerIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/shack", label: "Shack" },
  { href: "/about", label: "About" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header
      id="site-header"
      className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          id="site-logo"
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
        >
          <RadioTowerIcon className="size-5 text-primary" />
          VU2RCY
        </Link>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className="hidden md:flex md:items-center md:gap-1"
        >
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Button
          id="header-browse-products-cta"
          nativeButton={false}
          render={<Link href="/products" />}
          className="hidden sm:inline-flex"
        >
          Browse Products
        </Button>
      </div>
    </header>
  )
}
