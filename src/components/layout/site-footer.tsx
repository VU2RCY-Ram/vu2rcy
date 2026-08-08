import Link from "next/link"
import { RadioTowerIcon } from "lucide-react"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="site-footer" className="border-t pb-16 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-start md:justify-start md:gap-16 lg:gap-24">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <RadioTowerIcon className="size-5 text-primary" />
            VU2RCY
          </div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            My amateur radio kits, antennas and homebrew projects.
          </p>
        </div>

        <div id="footer-quick-links">
          <span className="text-sm font-medium">Quick links</span>
          <div className="mt-2 flex gap-10 text-sm">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Products
              </Link>
              <Link
                href="/shack"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Shack
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/homebrew"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Modes
              </Link>
              <Link
                href="/awards"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Awards
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {year} VU2RCY. All rights reserved.
      </div>
    </footer>
  )
}
