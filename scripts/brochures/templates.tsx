/* eslint-disable @next/next/no-img-element -- printed to PDF, not served by Next */
import * as Lucide from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Brochure, BrochureIcon } from "@/lib/data/brochures"
import type { Product } from "@/lib/data/products"
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_DISPLAY } from "@/lib/constants"

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

function Network({ b, title }: { b: Brochure; title: string }) {
  if (!b.network) return null
  return (
    <div className="network keep">
      <div className="head">{title}</div>
      <dl>
        <dt>Wi-Fi</dt>
        <dd>{b.network.name}</dd>
        {b.network.password && (
          <>
            <dt>Password</dt>
            <dd>{b.network.password}</dd>
          </>
        )}
        <dt>Open</dt>
        <dd>{b.network.address}</dd>
      </dl>
    </div>
  )
}

function Contact({ product, assets, lead }: { product: Product; assets: Assets; lead: string }) {
  const host = SITE_URL.replace(/^https?:\/\//, "")
  return (
    <div className="contact keep">
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
        <div className="line">
          <span className="ico"><Icon name="Globe" /></span>
          <span>{host}/products/{product.slug}</span>
        </div>
      </div>
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
          <h2>Quick setup</h2>
          <ol className="steps">
            {b.quickSteps.map((s) => <li key={s}>{s}</li>)}
          </ol>
          <Network b={b} title="Setup Wi-Fi" />
        </div>
        <Contact product={product} assets={assets} lead="Interested? Message me." />
      </section>

      <footer className="footer"><Brand /></footer>
    </main>
  )
}

export function ManualDoc({ b, product, assets }: { b: Brochure; product: Product; assets: Assets }) {
  const m = b.manual
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

      <Network b={b} title="Setup Wi-Fi network" />

      <section id="manual-steps">
        <h2>Setup</h2>
        <ol className="steps">
          {m.steps.map((s) => <li key={s}>{s}</li>)}
        </ol>
      </section>

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
