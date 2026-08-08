import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

// Generated at build time — ported the old site's robots.txt rules
// (allow all, point at the sitemap and host) to Next's native robots.ts
// convention.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
