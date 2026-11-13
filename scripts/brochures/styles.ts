// Print CSS for the brochures and manuals. Colours are the site's own
// Tailwind shades (globals.css): teal-600/700/900/50/100, amber-500/100.
export const baseCss = `
:root {
  --teal-50: #f0fdfa;
  --teal-100: #ccfbf1;
  --teal-600: #0d9488;
  --teal-700: #0f766e;
  --teal-900: #134e4a;
  --amber-100: #fef3c7;
  --amber-500: #f59e0b;
  --ink: #171717;
  --muted: #525252;
  --line: #d4d4d4;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  font-family: "Plus Jakarta Sans", sans-serif;
  color: var(--ink);
  background: #fff;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
svg.icon { width: 100%; height: 100%; display: block; }

.brand { display: flex; justify-content: space-between; align-items: center;
  font-size: 9pt; font-weight: 700; letter-spacing: 0.08em; color: var(--teal-700); }
.brand .site { font-weight: 600; letter-spacing: 0.02em; color: var(--muted); }
.eyebrow { font-size: 10pt; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--teal-700); }
h1 { font-size: 34pt; font-weight: 800; line-height: 1.05; letter-spacing: -0.01em; }
h2 { font-size: 12pt; font-weight: 800; color: var(--teal-900); margin-bottom: 3mm; }
.rule { height: 1.2mm; width: 22mm; background: var(--amber-500); border-radius: 1mm; }

.photo { background: var(--teal-50); border: 0.3mm solid var(--teal-100);
  border-radius: 4mm; display: flex; align-items: center; justify-content: center;
  overflow: hidden; }
.photo img { max-width: 100%; max-height: 100%; object-fit: contain; display: block; }

.feature { display: flex; gap: 3.5mm; align-items: flex-start; }
.feature + .feature { border-top: 0.3mm solid var(--line); padding-top: 2.6mm; margin-top: 2.6mm; }
.feature .badge { flex: none; width: 10mm; height: 10mm; border-radius: 50%;
  background: var(--teal-900); color: #fff; padding: 2.4mm; }
.feature .title { font-size: 10.5pt; font-weight: 700; }
.feature .text { font-size: 9.5pt; color: var(--muted); line-height: 1.35; }

.highlights { display: grid; grid-template-columns: repeat(4, 1fr);
  background: var(--teal-900); color: #fff; border-radius: 4mm; padding: 5mm 3mm; }
.highlight { text-align: center; padding: 0 3mm; }
.highlight + .highlight { border-left: 0.3mm solid rgba(255,255,255,0.25); }
.highlight .ico { width: 9mm; height: 9mm; margin: 0 auto 2mm; color: var(--amber-500); }
.highlight .title { font-size: 10pt; font-weight: 700; }
.highlight .text { font-size: 8.5pt; line-height: 1.35; opacity: 0.9; margin-top: 1mm; }

.goodfor { display: flex; gap: 2.5mm; flex-wrap: wrap; align-items: center; }
.goodfor .label { font-size: 10pt; font-weight: 800; color: var(--teal-900); margin-right: 1mm; }
.chip { display: inline-flex; align-items: center; gap: 1.5mm; font-size: 9pt; font-weight: 600;
  background: var(--amber-100); border: 0.3mm solid var(--amber-500); border-radius: 10mm;
  padding: 1.2mm 3mm; }
.chip .ico { width: 4mm; height: 4mm; color: var(--teal-900); }

.steps { list-style: none; counter-reset: step; }
.steps li { counter-increment: step; position: relative; padding-left: 8.5mm;
  font-size: 9.5pt; line-height: 1.4; }
.steps li + li { margin-top: 2.2mm; }
.steps li::before { content: counter(step); position: absolute; left: 0; top: 0;
  width: 5.6mm; height: 5.6mm; border-radius: 50%; background: var(--teal-600); color: #fff;
  font-size: 8.5pt; font-weight: 700; display: flex; align-items: center; justify-content: center; }

.network { border: 0.4mm dashed var(--teal-600); border-radius: 3mm; padding: 3mm 4mm;
  background: var(--teal-50); }
.network .head { font-size: 8.5pt; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--teal-700); margin-bottom: 1.5mm; }
.network dl { display: grid; grid-template-columns: auto 1fr; gap: 1mm 4mm; font-size: 9.5pt; }
.network dt { color: var(--muted); }
.network dd { font-weight: 700; font-family: ui-monospace, Consolas, monospace; }

.contact { display: flex; gap: 4mm; align-items: center; border: 0.4mm solid var(--teal-900);
  border-radius: 4mm; padding: 4mm; }
.contact .qr { flex: none; width: 27mm; height: 27mm; }
.contact .qr svg { width: 100%; height: 100%; display: block; }
.contact .lead { font-size: 11pt; font-weight: 800; color: var(--teal-900); }
.contact .sub { font-size: 8.5pt; color: var(--muted); margin-bottom: 2mm; }
.contact .line { display: flex; align-items: center; gap: 2mm; font-size: 9.5pt; font-weight: 600; }
.contact > div:last-child { min-width: 0; }
.contact .line > :last-child { overflow-wrap: anywhere; }
.contact .line + .line { margin-top: 1.2mm; }
.contact .line .ico { width: 4mm; height: 4mm; color: var(--teal-700); flex: none; }

.note { background: var(--amber-100); border-left: 1.5mm solid var(--amber-500);
  border-radius: 2mm; padding: 3mm 4mm; font-size: 9.5pt; line-height: 1.4; }
figure img { width: 100%; max-height: 105mm; object-fit: contain; border: 0.3mm solid var(--line);
  border-radius: 2mm; display: block; }
figcaption { font-size: 8.5pt; color: var(--muted); margin-top: 1.5mm; }
`

// One fixed A4 sheet; render.tsx fails if the content spills past it.
export const brochureCss = `
@page { size: A4; margin: 0; }
.sheet { width: 210mm; height: 297mm; padding: 12mm 14mm 10mm; overflow: hidden;
  display: flex; flex-direction: column; gap: 5mm; }
.intro { font-size: 12pt; line-height: 1.45; color: var(--muted); max-width: 165mm; }
.main { display: grid; grid-template-columns: 84mm 1fr; gap: 7mm; align-items: stretch; }
.main .photo { min-height: 84mm; padding: 4mm; }
.bottom { display: grid; grid-template-columns: 1fr 92mm; gap: 7mm; margin-top: auto; }
.bottom .network { margin-top: 3mm; }
.footer { border-top: 0.3mm solid var(--line); padding-top: 2.5mm; }
`

// Manuals flow across pages, so margins come from @page instead.
export const manualCss = `
@page { size: A4; margin: 12mm 14mm; }
.doc { display: flex; flex-direction: column; gap: 6mm; }
.subtitle { font-size: 12pt; line-height: 1.45; color: var(--muted); }
.top { display: grid; grid-template-columns: 70mm 1fr; gap: 7mm; align-items: center; }
.top .photo { height: 62mm; padding: 4mm; }
.doc .steps li { font-size: 10.5pt; }
.doc .steps li + li { margin-top: 3mm; }
.keep { break-inside: avoid; }
`
