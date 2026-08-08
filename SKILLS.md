# Skills & tooling used on this project

Reference for the AI-assistant tooling wired into this repo, and when to
reach for each.

## shadcn/ui

Component source lives in `src/components/ui/`, pulled from the shadcn
registry rather than an npm dependency — you own and can edit this code.

- Add a new component: `npx shadcn@latest add <component>`
- Reference docs (component list, theming, CLI, MCP server):
  https://ui.shadcn.com/llms.txt — a machine-readable index built for AI
  assistants, useful when you need the current component API or theming
  options instead of relying on training data (this project is on shadcn
  CLI v4 with the `base-nova` preset, `@base-ui/react` primitives, and
  `neutral` as the base color — see `components.json`).
- Config: `components.json` (aliases, base color, style preset).

## ui-ux-pro-max

Installed globally (`npm install -g ui-ux-pro-max-cli`) and registered as a
**project-level** Claude Code skill at `.claude/skills/`. The install also
registered five sub-skills — `design`, `design-system`, `brand`,
`banner-design`, `slides` — removed 2026-08-09 as unused/irrelevant to a
catalogue website (logo generation, corporate identity decks, social/ad
banners, HTML presentations — none of it applies here, and `design`/
`design-system` mostly duplicated `ui-styling` below). Kept `ui-styling`
(shadcn/Tailwind component work, directly used throughout this project)
alongside the core `ui-ux-pro-max` skill itself. It auto-activates on
UI/UX requests and provides design-system reasoning: color palettes, font
pairings, and style guidance tailored to the type of product/section being
built.

- Reach for it when: designing a new section from scratch, choosing a
  palette/type pairing for a new feature area, or wanting a second opinion
  on visual hierarchy.
- CLI entry point: `uipro` (e.g. `uipro init --ai claude` was used to
  install/register this).
- Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
  (unverified third-party package — installed with explicit user approval).

## Graphify

Installed via `pip install graphifyy` and registered as a **global**
(user-level, `~/.claude/skills/graphify`) Claude Code skill — it's available
in every project on this machine, not just this one. It builds a queryable
knowledge graph of a codebase via local, deterministic AST parsing (no LLM
calls, no API key needed for code-only extraction).

- Reach for it when: the legacy VU2RCY source is imported into this repo (or
  a sibling checkout) and you need to trace how the old `/products` and
  `/shack/projects` pages worked before porting behavior or content over.
  Less useful right now on this greenfield scaffold — there's little to
  graph yet.
- Usage: type `/graphify .` in the assistant to build the graph for the
  current directory. Produces `graph.html` (interactive viz),
  `GRAPH_REPORT.md`, and `graph.json`.
- The `graphify` executable isn't on `PATH` on this machine; if the `/graphify`
  skill doesn't resolve it, call it directly:
  `"/c/Users/G1/AppData/Local/Python/pythoncore-3.14-64/Scripts/graphify.exe"`
- Source: https://github.com/Graphify-Labs/graphify (unverified third-party
  package — installed with explicit user approval).

## humanize

Project-level Claude Code skill at `.claude/skills/humanize/` (added
directly, not installed via a package). An editing pass that catches
AI-writing tells — em dash overuse, empty "stands as a testament to..."
significance claims, rule-of-three padding, filler phrases, corporate-
neutral tone — and rewrites copy to sound like a person wrote it.

- Reach for it: **before finalizing any user-facing copy** — page titles,
  meta descriptions, headings, hero/CTA text, button labels. This is a
  standing convention for this project, not an occasional check (see
  CLAUDE.md's Voice section).
- Based on Wikipedia's "Signs of AI writing" (WikiProject AI Cleanup).

## typography-designer

Project-level Claude Code skill at `.claude/skills/typography-designer/`
(added directly, not installed via a package; sourced from
mcpmarket.com/tools/skills/typography-designer). Produces a structured
typography system on request: font families, a type scale (H1-H6, body,
small, caption), font weights, line heights, letter spacing, and
accessibility checks (WCAG AA contrast, minimum sizes, max line length,
responsive scaling).

- Reach for it when: picking fonts or a heading/body type scale for a new
  section, or auditing existing text sizing/line-height for readability.
  This project's body/heading font is **Plus Jakarta Sans** (`bodyFont` in
  `src/app/layout.tsx`, chosen over the scaffold default Geist for a
  warmer/rounder feel — see CLAUDE.md's Typography section, including a
  circular-CSS-variable bug that meant Geist never actually rendered before
  the switch), monospace stays Geist Mono, type scale is Tailwind's
  defaults otherwise — reach for this skill before changing any of that,
  rather than picking sizes ad hoc.

## Notes

- Both `ui-ux-pro-max` and `graphify` are unverified third-party tools, not
  published by Anthropic or shadcn. They were installed with explicit
  user sign-off. If either misbehaves, uninstall with
  `npm uninstall -g ui-ux-pro-max-cli` / `python -m pip uninstall graphifyy`
  and remove the corresponding `.claude/skills/` entries.
