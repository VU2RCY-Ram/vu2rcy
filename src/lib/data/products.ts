export type Product = {
  slug: string
  name: string
  tagline: string
  image?: string
  detailImage?: string
  // Two or three short paragraphs, rendered as-is. Written in first person,
  // one per real fact worth mentioning — not a bolded benefits list. See
  // CLAUDE.md's Voice section: this replaced an intro/benefits/conclusion
  // shape that was, on inspection, close to verbatim AI-generated copy
  // from the old site (reused sentence templates across products, banned
  // vocabulary, the "Bold term: sentence" list format). The facts below
  // are real, ported from the old site; the wording is rewritten.
  content?: string[]
  whatsapp?: boolean
  isNew?: boolean
  // Internal-only ordering key for isNew products (not shown in any UI) —
  // ISO date string, ascending. Lets the "New products" carousel order be
  // controlled explicitly instead of relying on array position.
  addedAt?: string
  // Every product has a slot for both, even when empty. Use "" (not
  // undefined) when a manual/video isn't available yet — the detail page
  // hides the corresponding link whenever the string is empty, so leaving
  // these unset would be a silent content gap rather than a visible one.
  userManual: string
  youtubeVideo: string
}

// Ported from the legacy vu2rcy.com site's /products accordion — the kits
// VU2RCY actually builds and offers (data and images only, from
// OLD_CODE_BASE; not the old site's styling/layout). This is deliberately
// separate from src/lib/data/shack.ts (the operator's own station equipment,
// which is not for sale) — keep that separation, don't merge the two lists
// or their listing pages.
export const products: Product[] = [
  {
    slug: "master-aprs",
    name: "MASTER-APRS",
    tagline:
      "Compact USB APRS dongle for a fixed station — WiFi built in, beacons to APRS-IS around the clock.",
    image: "/catalogue/products/master-aprs.jpg",
    isNew: true,
    addedAt: "2026-08-06",
    whatsapp: true,
    userManual: "/catalogue/products/manuals/master-aprs-manual.pdf",
    youtubeVideo: "",
    content: [
      "This is my MASTER-APRS dongle: a USB-powered APRS station built for a fixed location. Plug it into a 5V USB source, connect it to WiFi, and it beacons your position and callsign to the APRS-IS network, so you show up on aprs.fi without any other hardware running.",
      "Setup happens entirely through a browser: pick your APRS icon and SSID, and set a custom beacon message. Once it's configured it's meant to just stay plugged in and running, not something you need to keep tending to.",
    ],
  },
  {
    slug: "master-aprs-weather-station",
    name: "MASTER-APRS Weather Station",
    tagline:
      "WiFi-enabled APRS weather station that beacons live temperature, humidity and pressure straight to aprs.fi.",
    image: "/catalogue/products/master-aprs-weather-station.jpg",
    isNew: true,
    addedAt: "2026-08-07",
    whatsapp: true,
    userManual: "/catalogue/products/manuals/master-aprs-weather-station-manual.pdf",
    youtubeVideo: "",
    content: [
      "This is my WiFi APRS weather station: it reads temperature, humidity and air pressure and beacons that alongside your station's position to the APRS-IS network, so your callsign shows up on aprs.fi with live weather attached.",
      "Setup is entirely through a browser: power it on, connect to the WiFi network it creates, and enter your home WiFi and APRS-IS details on the built-in configuration page. The onboard display shows your callsign, IP address and current readings, so you can confirm it's working without needing a computer.",
    ],
  },
  {
    slug: "aprs-tracker",
    name: "APRS Tracker",
    tagline:
      "Broadcasts GPS location via APRS for real-time tracking during outdoor activities and emergency response.",
    image: "/catalogue/products/aprs-tracker.jpg",
    detailImage: "/catalogue/products/aprs-tracker-detail.jpeg",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
    content: [
      "A small tracker that broadcasts GPS position over APRS, so you (or anyone tracking you) can watch it move in real time on aprs.fi. Useful for field days, hikes, or just knowing where a vehicle is.",
      "It runs on 5V, so an ordinary phone power bank keeps it going all day, and it reaches the internet over WiFi rather than needing its own SIM. The onboard display shows GPS lock, WiFi status and current speed — handy for confirming everything's working before you actually head out.",
    ],
  },
  {
    slug: "mmdvm",
    name: "MMDVM",
    tagline:
      "Multi-Mode Digital Voice Modem connecting DMR, D-STAR and C4FM digital voice modes to analog radio systems.",
    image: "/catalogue/products/mmdvm.jpg",
    detailImage: "/catalogue/products/mmdvm-detail.jpg",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
    content: [
      "MMDVM is what lets an ordinary analog radio talk to digital voice networks — DMR, D-STAR, C4FM — without needing a separate radio for each one. Link it into repeaters and reflector networks and your reach extends well past line-of-sight.",
      "It's software-driven, so it picks up new modes and networks as they show up instead of going obsolete. It's also just a good way to actually learn digital voice: switching between modes teaches you more in an afternoon than reading about it ever will.",
    ],
  },
  {
    slug: "lora",
    name: "LoRa Satellite Ground Station",
    tagline:
      "Communicates with LoRa satellites on the TinyGS network, for long-range, low-power data transmission useful in IoT and remote sensing.",
    image: "/catalogue/products/lora.jpeg",
    detailImage: "/catalogue/products/lora-detail.jpeg",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
    content: [
      "This is a ground station for TinyGS — a crowd-sourced, worldwide network of receivers that track LoRa satellites, high-altitude weather probes, and other small transmitters.",
      "It's built from cheap, easy-to-source modules, which is really the point of TinyGS: you don't need expensive ground equipment to contribute useful tracking data. The same LoRa hardware is also handy for low-power IoT and remote sensing projects beyond satellite tracking.",
    ],
  },
  {
    slug: "network-transceiver",
    name: "Network Transceiver",
    tagline:
      "Combines transmitter and receiver functions for network data communication over Ethernet, Wi-Fi or cellular.",
    image: "/catalogue/products/network-transceiver.jpg",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
  },
  {
    slug: "digiface-pro",
    name: "Digiface Pro",
    tagline:
      "Digital, CW and CAT indicators with CW, CAT, PC-mic, PC-speaker, SP-TRX, COM port and three USB ports.",
    image: "/catalogue/products/digiface-pro.jpg",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
  },
  {
    slug: "lora-aprs-igate-station",
    name: "LoRa APRS IGATE Station",
    tagline:
      "Integrates LoRa technology with APRS functionality, gatewaying LoRa data packets to APRS infrastructure.",
    image: "/catalogue/products/lora-aprs-igate-station.jpeg",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
  },
  {
    slug: "rig-control-cube",
    name: "Rig Control Cube (CAT Cable)",
    tagline:
      "CAT-cable interface for controlling and monitoring transceivers: frequency, mode and power output, from a computer.",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
  },
  {
    slug: "cw-interface",
    name: "CW Interface (Serial/USB)",
    tagline:
      "Serial and USB Morse code interface connecting paddles or keys to transceivers or computers.",
    whatsapp: true,
    userManual: "",
    youtubeVideo: "",
  },
  {
    slug: "lora-chat",
    name: "LoRa CHAT",
    tagline:
      "Point-to-point text chat over LoRa on UHF 433MHz — no internet connection or SIM card involved.",
    image: "/catalogue/products/lora-chat.jpg",
    isNew: true,
    addedAt: "2026-08-09",
    whatsapp: true,
    userManual: "/catalogue/products/manuals/lora-chat-manual.pdf",
    youtubeVideo: "",
    content: [
      "I built these as a pair of handheld units that let you chat over LoRa radio without an internet connection or a SIM card. Each one runs on a 2000mAh rechargeable battery and communicates over UHF at 433MHz for long range.",
      "To chat, connect your phone to the unit's own WiFi network and open its built-in page in a browser. Type a message and send it, and it goes out over LoRa to the other unit and shows up on their screen the same way.",
    ],
  },
  {
    slug: "ntp-wifi-digital-clock",
    name: "NTP WiFi Digital Clock",
    tagline:
      "WiFi clock that syncs itself to an internet time server, so it's always accurate without manual setting.",
    image: "/catalogue/products/ntp-wifi-digital-clock.jpg",
    isNew: true,
    addedAt: "2026-08-08",
    whatsapp: true,
    userManual: "/catalogue/products/manuals/ntp-wifi-digital-clock-manual.pdf",
    youtubeVideo: "",
    content: [
      "This is a small WiFi clock that gets its time from an internet NTP server instead of needing to be set by hand. Once it's connected, it keeps the date, time and weekday accurate on its own.",
      "Setup is a one-time WiFi connection through a browser page the clock hosts itself. After that it just runs, and if you ever move it to a different network, the same setup page brings it back online.",
    ],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

// Home page carousel order: isNew products first (oldest addedAt to
// newest), then every other product after, in catalogue order. Array.sort
// is stable, so non-isNew products keep their relative order untouched.
export function getNewProducts() {
  return [...products].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1
    if (!a.isNew && b.isNew) return 1
    if (a.isNew && b.isNew) {
      return (a.addedAt ?? "").localeCompare(b.addedAt ?? "")
    }
    return 0
  })
}
