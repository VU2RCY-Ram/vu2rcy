/* eslint-disable @next/next/no-img-element -- printed to PDF, not served by Next */
import * as Lucide from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Brochure, BrochureIcon, ManualBlock, ManualSection, SetupNetwork } from "@/lib/data/brochures"
import type { Product } from "@/lib/data/products"
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_DISPLAY } from "@/lib/constants"
import { dataUri } from "./shared"

const icons = Lucide as unknown as Record<string, LucideIcon>

function Icon({ name }: { name: BrochureIcon | "Phone" | "Mail" | "Globe" }) {
  const Svg = icons[name]
  if (!Svg) throw new Error(`Unknown lucide icon: ${name}`)
  return <Svg className="icon" strokeWidth={2} aria-hidden />
}

export type Assets = {
  photo: string // data URI
  screenshot?: string // data URI
  qrSvg: string // inline SVG markup
}

function Brand() {
  return (
    <div className="brand">
      <span>VU2RCY</span>
      <span className="site">{SITE_URL.replace(/^https?:\/\//, "")}</span>
    </div>
  )
}

function Network({ network, title }: { network?: SetupNetwork; title: string }) {
  if (!network) return null
  return (
    <div className="network keep">
      <div className="head">{title}</div>
      <dl>
        <dt>Wi-Fi</dt>
        <dd>{network.name}</dd>
        {network.password && (
          <>
            <dt>Password</dt>
            <dd>{network.password}</dd>
          </>
        )}
        <dt>Open</dt>
        <dd>{network.address}</dd>
      </dl>
    </div>
  )
}

// Renders **bold** spans inside manual text.
function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return <>{parts.map((t, i) => (i % 2 ? <strong key={i}>{t}</strong> : t))}</>
}

function Block({ block }: { block: ManualBlock }) {
  switch (block.type) {
    case "p":
      return <p className="para"><Rich text={block.text} /></p>
    case "h3":
      return <h3>{block.text}</h3>
    case "h4":
      return <h4>{block.text}</h4>
    case "list": {
      const items = block.items.map((t) => <li key={t}><Rich text={t} /></li>)
      return block.ordered ? <ol className="steps">{items}</ol> : <ul className="bullets">{items}</ul>
    }
    case "image":
      return (
        <figure className="keep">
          <img src={dataUri(block.src)} alt={block.caption} />
          <figcaption>{block.caption}</figcaption>
        </figure>
      )
    case "table":
      return (
        <table className="keep">
          <thead><tr>{block.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {block.rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j}><Rich text={c} /></td>)}</tr>
            ))}
          </tbody>
        </table>
      )
    case "network":
      return <Network network={block.network} title="Setup Wi-Fi network" />
    case "flow":
      return (
        <ol className="sysflow keep">
          {block.steps.map((st) => (
            <li key={st.title}><strong>{st.title}</strong><span>{st.text}</span></li>
          ))}
        </ol>
      )
    case "callout":
      return (
        <div className="callout keep">
          <div className="title">{block.title}</div>
          <Rich text={block.text} />
        </div>
      )
    case "fine":
      return <p className="fine"><Rich text={block.text} /></p>
  }
}

// Each heading travels with the block after it, so none ends a page alone.
function groupBlocks(blocks: ManualBlock[]) {
  const groups: ManualBlock[][] = []
  let pending: ManualBlock[] = []
  for (const b of blocks) {
    pending.push(b)
    if (b.type !== "h3" && b.type !== "h4") {
      groups.push(pending)
      pending = []
    }
  }
  if (pending.length) groups.push(pending)
  return groups
}

function Section({ section }: { section: ManualSection }) {
  const [first, ...rest] = groupBlocks(section.blocks)
  return (
    <section className="msec" id={`manual-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}>
      <div className="group">
        <h2>{section.title}</h2>
        {first?.map((b, i) => <Block block={b} key={i} />)}
      </div>
      {rest.map((g, i) => (
        <div className="group" key={i}>
          {g.map((b, j) => <Block block={b} key={j} />)}
        </div>
      ))}
    </section>
  )
}

// urlRow puts the product link on its own full-width row under the QR code.
function Contact({ product, assets, lead, urlRow = false }: { product: Product; assets: Assets; lead: string; urlRow?: boolean }) {
  const host = SITE_URL.replace(/^https?:\/\//, "")
  const url = (
    <div className="line">
      <span className="ico"><Icon name="Globe" /></span>
      <span>{host}/products/<wbr /><span className="slug">{product.slug}</span></span>
    </div>
  )
  return (
    <div className={urlRow ? "contact keep url-row" : "contact keep"}>
      <div className="qr" dangerouslySetInnerHTML={{ __html: assets.qrSvg }} />
      <div>
        <div className="lead">{lead}</div>
        <div className="sub">Scan the code to message me on WhatsApp.</div>
        <div className="line">
          <span className="ico"><Icon name="Phone" /></span>
          {WHATSAPP_DISPLAY}
        </div>
        <div className="line">
          <span className="ico"><Icon name="Mail" /></span>
          {CONTACT_EMAIL}
        </div>
        {!urlRow && url}
      </div>
      {urlRow && url}
    </div>
  )
}

export function BrochureDoc({ b, product, assets }: { b: Brochure; product: Product; assets: Assets }) {
  return (
    <main className="sheet" id="brochure">
      <Brand />
      <header>
        <div className="eyebrow">{b.kind}</div>
        <h1>{product.name}</h1>
        <div className="rule" style={{ margin: "3mm 0" }} />
        <p className="intro">{b.intro}</p>
      </header>

      <section className="main" id="brochure-features">
        <div className="photo">
          <img src={assets.photo} alt={product.name} />
        </div>
        <div>
          {b.features.map((f) => (
            <div className="feature" key={f.title}>
              <span className="badge"><Icon name={f.icon} /></span>
              <div>
                <div className="title">{f.title}</div>
                <div className="text">{f.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="highlights" id="brochure-highlights">
        {b.highlights.map((h) => (
          <div className="highlight" key={h.title}>
            <div className="ico"><Icon name={h.icon} /></div>
            <div className="title">{h.title}</div>
            <div className="text">{h.text}</div>
          </div>
        ))}
      </section>

      {b.goodFor && (
        <section className="goodfor" id="brochure-good-for">
          <span className="label">Good for</span>
          {b.goodFor.map((g) => (
            <span className="chip" key={g.label}>
              <span className="ico"><Icon name={g.icon} /></span>
              {g.label}
            </span>
          ))}
        </section>
      )}

      <section className="bottom" id="brochure-setup">
        <div>
          {b.quickSteps && (
            <>
              <h2>Quick setup</h2>
              <ol className="steps">
                {b.quickSteps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </>
          )}
          {!b.quickSteps && b.howItWorks && (
            <div className="how keep">
              <h2>How it works</h2>
              <ol className="flow">
                {b.howItWorks.flow.map((f) => (
                  <li className="chip" key={f.label}>
                    <span className="ico"><Icon name={f.icon} /></span>
                    {f.label}
                  </li>
                ))}
              </ol>
              {b.howItWorks.note && <p className="how-note">{b.howItWorks.note}</p>}
            </div>
          )}
          <Network network={b.network} title="Setup Wi-Fi" />
        </div>
        <Contact product={product} assets={assets} lead="Interested? Message me." urlRow />
      </section>

      <footer className="footer"><Brand /></footer>
    </main>
  )
}

export function ManualDoc({ b, product, assets }: { b: Brochure; product: Product; assets: Assets }) {
  const m = b.manual
  if (!m) throw new Error(`${b.slug}: no manual data`)
  return (
    <main className="doc" id="manual">
      <Brand />
      <section className="top" id="manual-header">
        <div className="photo">
          <img src={assets.photo} alt={product.name} />
        </div>
        <div>
          <div className="eyebrow">User manual</div>
          <h1>{product.name}</h1>
          <div className="rule" style={{ margin: "3mm 0" }} />
          <p className="subtitle">{m.subtitle}</p>
        </div>
      </section>

      {!m.sections && <Network network={b.network} title="Setup Wi-Fi network" />}

      {m.steps && (
        <section id="manual-steps">
          <h2>Setup</h2>
          <ol className="steps">
            {m.steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </section>
      )}

      {m.sections?.map((sec) => <Section section={sec} key={sec.title} />)}

      {m.screenshot && assets.screenshot && (
        <figure className="keep" id="manual-screenshot">
          <img src={assets.screenshot} alt={m.screenshot.caption} />
          <figcaption>{m.screenshot.caption}</figcaption>
        </figure>
      )}

      {m.note && <p className="note keep">{m.note}</p>}

      <Contact product={product} assets={assets} lead="Need help? Message me." />
    </main>
  )
}
