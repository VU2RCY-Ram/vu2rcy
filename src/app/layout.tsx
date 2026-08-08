import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/constants";

// Warm, rounded, soft-but-professional — see CLAUDE.md's Typography
// section for why this replaced Geist. Named distinctly from Tailwind's
// own `--font-sans` theme token (see globals.css) so the `@theme inline`
// mapping doesn't self-reference — that exact collision was the bug that
// silently made every previous screenshot render in the browser's
// fallback serif instead of the intended font.
const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Amateur radio kits, antennas and shack equipment from my station. I've been a ham radio enthusiast since 1988.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VU2RCY | Amateur Radio Kits & Projects",
    template: "%s | VU2RCY",
  },
  description: siteDescription,
  // Ported from the old site's _document.jsx meta keywords tag.
  keywords: [
    "ram",
    "ham",
    "radio",
    "VU2RCY",
    "satellite",
    "HF",
    "VHF",
    "UHF",
    "MMDVM",
    "APRS",
    "RMS",
    "homebrew",
    "equipment",
    "shack",
    "qrz",
    "qth",
    "qsl",
    "cq",
    "qrzcq",
    "logbook",
    "antenna",
  ],
  authors: [{ name: "M G Ramachandran (VU2RCY)" }],
  robots: { index: true, follow: true },
  verification: {
    // Ported from the old site so Search Console verification survives
    // if/when this deploys to vu2rcy.com.
    google: "9Ea5q_QyyDIDJlHRpDoi2buGhg-nAPOmID2U73VgMK0",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "VU2RCY",
    title: "VU2RCY | Amateur Radio Kits & Projects",
    description: siteDescription,
    locale: "en_US",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "VU2RCY | Amateur Radio Kits & Projects",
    description: siteDescription,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileTabBar />
      </body>
    </html>
  );
}
