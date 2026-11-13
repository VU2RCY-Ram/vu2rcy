import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The clock was renamed to MASTER-CLOCK (its case label); keep old links working.
  async redirects() {
    return [
      {
        source: "/products/ntp-wifi-digital-clock",
        destination: "/products/master-clock",
        permanent: true,
      },
      {
        source: "/catalogue/products/manuals/ntp-wifi-digital-clock-manual.pdf",
        destination: "/catalogue/products/manuals/master-clock-manual.pdf",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      // Award certificate images live in the operator's public
      // VU2RCY-Ram/Awards GitHub repo (see src/lib/data/awards.ts) — hosted
      // there rather than checked into this repo since it's ~1,200 images.
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/VU2RCY-Ram/Awards/**",
      },
    ],
  },
};

export default nextConfig;
