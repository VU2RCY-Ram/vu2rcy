import { SITE_URL } from "@/lib/constants"

type LoaderProps = { src: string; width: number; quality?: number }

// Resizes through wsrv.nl, a free image service, because Vercel's Hobby plan
// caps image transformations at 5,000 a month (the awards page alone passes it).
export default function wsrvLoader({ src, width, quality }: LoaderProps) {
  const isLocal = src.startsWith("/")
  // wsrv.nl can't reach dev or preview builds, so local files load as-is there.
  if (isLocal && process.env.NODE_ENV !== "production") return src
  // Preview builds have NODE_ENV=production too; only the live site resizes them.
  if (isLocal && process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") return src

  const url = isLocal ? `${SITE_URL}${src}` : src
  const params = new URLSearchParams({
    url,
    w: String(width),
    q: String(quality ?? 75),
    output: "webp",
    we: "",
  })
  return `https://wsrv.nl/?${params}`
}
