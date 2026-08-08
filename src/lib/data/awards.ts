// Award certificate images are real files from the operator's own public
// GitHub repo (github.com/VU2RCY-Ram/Awards, "EPC" folder) — the same
// source the old site's pages/api/listFiles.js pulled from. Not checked
// into this repo (roughly 1,200 images), so fetched at build/request time
// and served directly from raw.githubusercontent.com (see next.config.ts's
// images.remotePatterns).
const OWNER = "VU2RCY-Ram"
const REPO = "Awards"
const BRANCH = "main"
const DIR = "EPC"

export type AwardImage = {
  name: string
  url: string
  // Filenames are award-program codes (e.g. "IARA-GOLD300", issuer
  // "YB6DXC") assigned by the awarding club, not prose — shown as-is
  // (hyphens turned to spaces) rather than invented into "friendly" names,
  // since we don't actually know what most of these abbreviations expand
  // to and shouldn't guess.
  label: string
  issuer: string
}

function parseAward(filename: string): { label: string; issuer: string } {
  const base = filename.replace(/^VU2RCY-/, "").replace(/\.jpe?g$/i, "")
  const lastUnderscore = base.lastIndexOf("_")
  if (lastUnderscore === -1) {
    return { label: base.replace(/-/g, " "), issuer: "" }
  }
  return {
    label: base.slice(0, lastUnderscore).replace(/-/g, " "),
    issuer: base.slice(lastUnderscore + 1),
  }
}

export async function getAwardImages(): Promise<AwardImage[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`,
      { next: { revalidate: 86400 } }
    )
    if (!res.ok) return []

    const data = (await res.json()) as {
      tree?: { path: string; type: string }[]
    }

    return (data.tree ?? [])
      .filter(
        (entry) =>
          entry.type === "blob" &&
          entry.path.startsWith(`${DIR}/`) &&
          /\.jpe?g$/i.test(entry.path)
      )
      .map((entry) => {
        const name = entry.path.slice(DIR.length + 1)
        const { label, issuer } = parseAward(name)
        return {
          name,
          url: `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${entry.path}`,
          label,
          issuer,
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  } catch {
    return []
  }
}
