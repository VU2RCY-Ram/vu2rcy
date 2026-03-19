# VU2RCY Theme — Radio Console Aesthetic

This document captures the design language established by the navbar. Use it to maintain visual consistency across the site and when building new components.

---

## Design Concept

**Retro-technical meets modern precision.** The interface evokes a modernized radio console—frequency grids, phosphor displays, LED indicators, and RF-inspired accents blended with clean, production-grade UI. Identity reflects the journey from VU3MGR to VU2RCY and decades of experimentation since 1988.

---

## Color Palette

### Dark Mode

| Role | Hex / Value | Usage |
|------|-------------|--------|
| **Phosphor green** | `#39ff14` | Call sign, primary accent, LED glow |
| **Phosphor green (hover)** | `#00ff41` | Call sign hover state |
| **Amber** | `#fb923c` (amber-400) | Theme toggle, nav links, active states |
| **Signal blue** | `rgba(0, 212, 255, 0.08)` | Subtle border/shadow accent |
| **Panel background** | `rgba(10, 10, 18, 0.85)` | Main panel base |
| **Panel (scrolled)** | `rgba(10, 10, 18, 0.95)` | Panel when page scrolled |
| **Mobile panel** | `rgba(6, 6, 12, 0.98)` | Mobile dropdown |
| **Text primary** | `slate-300` | Nav links |
| **Text accent** | `amber-400` | Active/hover links |
| **Border** | `rgba(57, 255, 20, 0.2–0.35)` | Phosphor-tinted edges |

### Light Mode

| Role | Hex / Value | Usage |
|------|-------------|--------|
| **Teal accent** | `#0d9488` | Call sign, primary accent |
| **Teal (hover)** | `#0f766e` | Call sign hover |
| **Panel background** | `rgba(248, 250, 252, 0.9)` | Main panel |
| **Signal blue (light)** | `rgba(0, 82, 102, 0.2)` | Border accent |
| **Text primary** | `slate-600` | Nav links |
| **Text accent** | `teal-700` | Active/hover links |
| **Theme toggle** | `slate-700` | Icon color |

---

## Typography

- **Font family**: Share Tech Mono (`font-console` in Tailwind) for headings; Outfit (`font-out`) for body text
- **Call sign**: `text-xl sm:text-2xl`, `tracking-[0.25em]`, `font-semibold`
- **Nav links**: `text-sm`, `font-medium`, `tracking-wide`
- Avoid: Inter, Roboto, Arial, system-ui for headings/accents

### Landing Page Hierarchy
- **H1** (`landing-h1`): Share Tech Mono, `tracking-[0.2em]`, `text-lg` → `lg:text-3xl` — hero name
- **H2** (`landing-h2`): Share Tech Mono, `tracking-[0.12em]`, `text-base` → `md:text-xl` — section titles (Explore, Get in touch)
- **Subtitle** (`landing-subtitle`): Share Tech Mono, `tracking-[0.15em]`, amber accent — role/tagline
- **Body** (`landing-body`): Outfit, `text-justify`, `leading-relaxed` — paragraphs in panels

---

## Visual Elements

### Frequency Grid
- 24×24px grid overlay, 1px lines, low opacity (`0.03` light / `0.06` dark)
- **Navbar only**: Applied as subtle `backgroundImage` on nav-console panel
- **Landing panels**: No grid overlay — clean backgrounds only (grid caused visual clutter)

### Glows & Shadows
- **Call sign glow**: `text-shadow: 0 0 20px rgba(57, 255, 20, 0.4)`
- **Link glow (active)**: `text-shadow: 0 0 12px rgba(255, 176, 0, 0.35)`
- **Panel scroll state**: `box-shadow: 0 0 12px rgba(57, 255, 20, 0.08)`
- **nav-pulse**: 3s ease-in-out infinite, subtle phosphor box-shadow pulse

### Scanline (Optional)
- Class: `nav-scanline`
- Horizontal lines, 4px repeat
- Phosphor-tinted (`rgba(57, 255, 20, 0.03)`)
- 8s linear infinite animation

### Border & Radius
- `rounded-xl` for panels
- `rounded-lg` for buttons, mobile menu
- `rounded-md` for nav links
- Borders: phosphor green (dark) / teal-blue (light)

---

## Component Patterns

### Panel
- Semi-transparent dark background with backdrop blur
- Phosphor-green border
- Stronger contrast when scrolled (`nav-console-scrolled`)

### Links
- Default: slate-400/600
- Hover: amber-400 (dark) / teal-700 (light)
- Active: amber-400 + `nav-link-glow` (phosphor/teal background)

### Buttons
- **Theme toggle**: LED-style, amber icon, `hover:scale-110`
- **Hamburger**: Amber bars (dark) / slate (light), rounded

### Mobile Menu
- Slide-down panel (`max-h-0` ↔ `max-h-80`)
- `border-t` with amber/slate divider
- Same link styling as desktop

### Landing Page Panels
- Class: `landing-panel` — rounded-2xl, same border/background as nav
- Hero, Experience, Contact use `landing-panel` for consistency
- Section H2: "Explore", "Get in touch"
- Body text: `landing-body` + `w-full` + `text-justify` — full width, no empty space on right

### Card Content
- Body text: `text-justify` so both edges align and fill width
- Use `w-full` instead of `max-w-[90%]` to avoid empty right margin
- MUI `Typography variant="body2"`: add `className="text-justify"` for descriptions

### Footer
- No `margin-top` — sits flush with content above

### Shack Screens
- **Shack index**: Category cards use `landing-panel` with phosphor/amber hover states
- **Shack sub-pages** (antenna, aprs, hf, vhf-uhf, satellite, digitalMode, my-equipments, projects): `landing-h1` for page title, consistent container padding
- **Equipment cards**: `shack-card` class — theme-aware panel with phosphor border (dark) / teal border (light)
- **Breadcrumb**: Theme link colors — `text-slate-600 dark:text-slate-300`, hover `text-amber-600 dark:text-amber-400`

---

## Landing Page Spacing

- Hero top: `mt-6 sm:mt-8 md:mt-10`
- Section divider: `mt-10 sm:mt-12 md:mt-14`
- Experience: `mt-8 sm:mt-10 md:mt-12`; Contact: `mt-10 sm:mt-12 md:mt-14`; bottom: `mb-10 sm:mb-12`
- Container: `px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20`
- Panel padding: `p-5 sm:p-6 md:p-8`

---

## Tailwind Class Reference

| Use | Classes |
|-----|---------|
| Console font | `font-console` |
| Call sign | `nav-callsign` |
| Panel (default) | `nav-console` |
| Panel (scrolled) | `nav-console-scrolled` |
| Nav link | `nav-link` |
| Nav link active | `nav-link-active` |
| Link glow (behind active) | `nav-link-glow` |
| Theme button | `nav-theme-btn` |
| Hamburger | `nav-hamburger` |
| Mobile panel | `nav-mobile-panel` |
| Mobile link | `nav-mobile-link` |
| Mobile link active | `nav-mobile-active` |
| Pulse animation | `nav-console-glow` |
| Scanline effect | `nav-scanline` |
| Landing H1 | `landing-h1` |
| Landing H2 | `landing-h2` |
| Landing subtitle | `landing-subtitle` |
| Landing body | `landing-body` |
| Landing panel | `landing-panel` |
| Landing link | `landing-link` |

---

## Motion

- **Transitions**: `duration-300` to `duration-500`, `ease-out`
- **Hover scale**: `hover:scale-110` on theme toggle
- **Mobile menu**: `max-h-0`/`max-h-80` + `opacity-0`/`opacity-100`
- **Pulse**: 3s infinite, subtle box-shadow on phosphor

---

## Responsive Breakpoints

- Mobile-first; `md:` for desktop nav
- Navbar width: `92%` → `80%` (sm) → `85%` (md) → `72%` (lg) → `62%` (xl)
- `max-w-5xl` cap for navbar; `max-w-[75rem]` for page container
