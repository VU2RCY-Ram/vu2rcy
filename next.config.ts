import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
