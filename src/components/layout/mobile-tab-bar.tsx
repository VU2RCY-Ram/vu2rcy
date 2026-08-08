"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HomeIcon, PackageIcon, RadioIcon, UserIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const tabs = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/products", label: "Products", icon: PackageIcon },
  { href: "/shack", label: "Shack", icon: RadioIcon },
  { href: "/about", label: "About", icon: UserIcon },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

// Always-visible bottom navigation for mobile — deliberately not a
// hamburger-triggered drawer. See CLAUDE.md's hard rule against porting
// the old site's click-to-expand mobile menu.
export function MobileTabBar() {
  const pathname = usePathname()

  return (
    <nav
      id="mobile-tab-bar"
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 md:hidden"
    >
      <div className="grid grid-cols-4">
        {tabs.map((tab) => {
          const active = isActive(pathname, tab.href)
          const Icon = tab.icon
          return (
            <Link
              key={tab.href}
              id={`mobile-tab-${tab.label.toLowerCase()}`}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="size-5" />
              {tab.label}
            </Link>
          )
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-background/95" />
    </nav>
  )
}
