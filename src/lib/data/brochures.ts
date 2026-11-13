// Brochure and manual content by product slug; see docs/brochures.md.
// Facts come from Ram's brochures (2026-11-09); never invent a field.

// Every icon is a lucide icon name. Keep to this list so all brochures share
// one icon set; add a name here (and check it exists in lucide-react) first.
export const BROCHURE_ICONS = [
  "Activity",
  "BatteryFull",
  "Building2",
  "CalendarDays",
  "CircleCheck",
  "Clock",
  "CloudSun",
  "Cpu",
  "Factory",
  "FlaskConical",
  "Gauge",
  "Globe",
  "GraduationCap",
  "Hash",
  "House",
  "MapPin",
  "MessageSquareText",
  "MessagesSquare",
  "Monitor",
  "Plug",
  "RadioTower",
  "Settings",
  "ShieldCheck",
  "Siren",
  "Smartphone",
  "Tent",
  "Timer",
  "Usb",
  "Users",
  "WifiOff",
  "Wifi",
  "Zap",
] as const

export type BrochureIcon = (typeof BROCHURE_ICONS)[number]

export type BrochureItem = { icon: BrochureIcon; title: string; text: string }

export type SetupNetwork = {
  name: string
  password?: string
  address: string
}

export type Brochure = {
  slug: string
  // Short line under the product name, e.g. "APRS USB dongle".
  kind: string
  // One or two sentences, at most ~160 characters.
  intro: string
  // 4-6 rows next to the photo.
  features: BrochureItem[]
  // Exactly 4 tiles in the highlight strip.
  highlights: [BrochureItem, BrochureItem, BrochureItem, BrochureItem]
  // Optional "Good for" row, at most 6 entries.
  goodFor?: { icon: BrochureIcon; label: string }[]
  network?: SetupNetwork
  // 3-4 short steps for the brochure.
  quickSteps: string[]
  manual: {
    subtitle: string
    // 4-6 full steps for the manual.
    steps: string[]
    // Real screenshot of the device's own config page, personal values redacted.
    screenshot?: { src: string; caption: string }
    note?: string
  }
}

const MASTER_APRS_WX_NETWORK: SetupNetwork = {
  name: "MASTER-APRS Wx",
  password: "mastersetup",
  address: "192.168.4.1",
}

export const brochures: Brochure[] = [
  {
    slug: "master-aprs",
    kind: "APRS USB dongle for a fixed station",
    intro:
      "Plug it into 5V USB, connect it to Wi-Fi, and it beacons your station to the APRS network around the clock.",
    features: [
      { icon: "House", title: "APRS icon", text: "Pick the icon your station shows on the map." },
      { icon: "Hash", title: "APRS SSID", text: "Choose the SSID for your station." },
      { icon: "Wifi", title: "Wi-Fi connectivity", text: "Easy Wi-Fi setup and a reliable connection." },
      { icon: "MessageSquareText", title: "Beacon text", text: "Set your own beacon message." },
      { icon: "Plug", title: "5V DC power", text: "Works on 5V DC from any USB port." },
    ],
    highlights: [
      { icon: "Usb", title: "Plug and play", text: "Just plug it in and get started." },
      { icon: "RadioTower", title: "Pre-set for APRS", text: "Ready for APRS operation." },
      { icon: "ShieldCheck", title: "Runs 24/7", text: "Built for stable, continuous use." },
      { icon: "Zap", title: "Low power", text: "Low consumption, high performance." },
    ],
    network: MASTER_APRS_WX_NETWORK,
    quickSteps: [
      "Plug it into 5V USB. It starts its own setup Wi-Fi.",
      "Connect your phone to it and open 192.168.4.1.",
      "Enter your Wi-Fi, callsign, SSID, icon and beacon text.",
      "Tap Save & Reboot. It starts beaconing.",
    ],
    manual: {
      subtitle: "Wi-Fi built in, beacons your position to APRS-IS around the clock.",
      steps: [
        "Power on the MASTER-APRS dongle. It creates its own setup Wi-Fi network using the details above.",
        "Connect your phone to that network, then open 192.168.4.1 in a browser.",
        "Enter your home Wi-Fi name and password so it can get online.",
        "Enter your callsign and an APRS-ID (for example, 3 forms N0CALL-3), plus your APRS-IS passcode.",
        "Pick an APRS icon and, if you'd like, set a custom beacon comment.",
        "Tap Save & Reboot. It connects and starts beaconing your position to aprs.fi.",
      ],
      screenshot: {
        src: "/catalogue/products/portal/master-aprs-portal.png",
        caption: "The configuration page at 192.168.4.1.",
      },
      note: "Not showing up on aprs.fi yet? Give it a couple of minutes, then search for your callsign with its APRS-ID.",
    },
  },
  {
    slug: "master-aprs-weather-station",
    kind: "Wi-Fi APRS weather station",
    intro:
      "Sends real-time temperature, humidity and pressure to the APRS-IS network. Easy to configure, easy to use.",
    features: [
      { icon: "Wifi", title: "Wi-Fi enabled", text: "Connects to your Wi-Fi network and APRS-IS." },
      { icon: "CloudSun", title: "Weather reporting", text: "Temperature, humidity and pressure." },
      { icon: "Globe", title: "APRS-IS compatible", text: "Works with popular APRS-IS servers." },
      { icon: "Monitor", title: "Web configuration", text: "Set it up from any web browser." },
      { icon: "Activity", title: "Live status", text: "Check connection, signal and weather." },
      { icon: "Timer", title: "Beacon interval", text: "Set how often it beacons." },
    ],
    highlights: [
      { icon: "RadioTower", title: "Automatic beacon", text: "Beacons at the interval you set." },
      { icon: "MapPin", title: "Fixed location", text: "Home, base station or remote site." },
      { icon: "Gauge", title: "Real-time data", text: "Live weather on APRS." },
      { icon: "CircleCheck", title: "Easy control", text: "Send a beacon, check status, change settings." },
    ],
    network: MASTER_APRS_WX_NETWORK,
    quickSteps: [
      "Connect to the MASTER-APRS Wx Wi-Fi.",
      "Open 192.168.4.1 in a browser.",
      "Enter Wi-Fi, APRS details, location, icon and interval.",
      "Tap Save & Reboot and you're on APRS.",
    ],
    manual: {
      subtitle: "Sends live temperature, humidity and pressure to the APRS network over Wi-Fi.",
      steps: [
        "Power on the unit. It creates its own setup Wi-Fi network using the details above.",
        "Connect your phone to that network, then open 192.168.4.1 in a browser.",
        "Enter your home Wi-Fi name and password so the station can get online.",
        "Enter your callsign and an APRS-ID (for example, 14 forms VU2RCY-14), plus your APRS-IS passcode, location, icon and beacon interval.",
        "Tap Save & Reboot. The station connects and starts beaconing your position and weather data to aprs.fi.",
      ],
      screenshot: {
        src: "/catalogue/products/portal/master-aprs-weather-station-portal.png",
        caption: "The configuration page at 192.168.4.1. Send Beacon, Status and Save Default Config are on the same page.",
      },
      note: "Not showing up on aprs.fi yet? Give it a couple of minutes, then search for your callsign with its APRS-ID (for example VU2RCY-14).",
    },
  },
  {
    slug: "lora-chat",
    kind: "Long-range text chat over LoRa",
    intro:
      "Chat between LoRa units over long distance from your phone's browser. No internet, no SIM, just LoRa.",
    features: [
      { icon: "RadioTower", title: "Long range", text: "UHF 433MHz for extended range." },
      { icon: "MessagesSquare", title: "Simple chat page", text: "Easy messaging between LoRa units." },
      { icon: "BatteryFull", title: "Built-in battery", text: "2000mAh, rechargeable." },
      { icon: "Plug", title: "5V charging", text: "Charges from a 5V DC input." },
      { icon: "ShieldCheck", title: "Reliable", text: "Direct point-to-point link between units." },
    ],
    highlights: [
      { icon: "WifiOff", title: "No internet", text: "No SIM card or network needed." },
      { icon: "RadioTower", title: "Long range", text: "LoRa on UHF 433MHz." },
      { icon: "Zap", title: "Low power", text: "Runs on its built-in battery." },
      { icon: "ShieldCheck", title: "High reliability", text: "Unit to unit, nothing in between." },
    ],
    goodFor: [
      { icon: "Tent", label: "Outdoors" },
      { icon: "Users", label: "Events" },
      { icon: "MapPin", label: "Remote areas" },
      { icon: "Siren", label: "Emergencies" },
    ],
    network: { name: "LoRa_CHAT_A", password: "12345678", address: "192.168.4.1" },
    quickSteps: [
      "Connect your phone to the LoRa_CHAT_A Wi-Fi.",
      "Open 192.168.4.1 in any browser.",
      "Type your message and tap Send.",
    ],
    manual: {
      subtitle: "Point-to-point chat over LoRa. No internet, no SIM card.",
      steps: [
        "Turn on the LoRa CHAT unit and wait a few seconds for its Wi-Fi to start.",
        "On your phone, open Wi-Fi settings and connect to LoRa_CHAT_A using the password above.",
        "Open your phone's browser and go to 192.168.4.1. The LoRa Chat page opens.",
        "Type your message and tap Send. It's carried over LoRa to the other unit, and replies show up on the same page.",
      ],
      note: "This Wi-Fi network is created by the unit itself, so the chat works without an internet connection.",
    },
  },
  {
    slug: "master-clock",
    kind: "NTP Wi-Fi digital clock",
    intro:
      "Gets accurate time from NTP servers over Wi-Fi and shows it on a clear LCD. Set it up once and it stays on time.",
    features: [
      { icon: "Wifi", title: "Wi-Fi enabled", text: "Connects to your Wi-Fi network." },
      { icon: "Globe", title: "NTP time sync", text: "Gets accurate time from NTP servers." },
      { icon: "Clock", title: "12/24 hour format", text: "Displays time in 12-hour format with AM/PM." },
      { icon: "CalendarDays", title: "Date and weekday", text: "Date, month, year and day of the week." },
      { icon: "Settings", title: "Easy configuration", text: "Wi-Fi setup portal, no coding needed." },
    ],
    highlights: [
      { icon: "CircleCheck", title: "Plug and play", text: "Runs from USB power." },
      { icon: "Smartphone", title: "No app required", text: "Set up from any browser." },
      { icon: "Clock", title: "Always accurate", text: "Syncs itself over the internet." },
      { icon: "Zap", title: "Low power", text: "Low power consumption." },
    ],
    goodFor: [
      { icon: "Building2", label: "Office" },
      { icon: "GraduationCap", label: "Schools" },
      { icon: "FlaskConical", label: "Labs" },
      { icon: "Factory", label: "Factories" },
      { icon: "House", label: "Home" },
      { icon: "Cpu", label: "Projects" },
    ],
    network: { name: "Clock-Config", address: "192.168.4.1" },
    quickSteps: [
      "Power it from USB.",
      "Connect to the Clock-Config Wi-Fi.",
      "Open 192.168.4.1, enter your Wi-Fi and save.",
      "It syncs the time and shows it on the LCD.",
    ],
    manual: {
      subtitle: "Connect it to Wi-Fi once and it keeps accurate time on its own.",
      steps: [
        "Power on the clock from USB. On first use, it starts its own setup Wi-Fi network.",
        "On your phone or computer, connect to the Clock-Config Wi-Fi network.",
        "Open a browser and go to 192.168.4.1 if the setup page doesn't open on its own.",
        "Select your home or office Wi-Fi network, enter its password, then save.",
        "The clock reconnects and syncs the time automatically. No further setup needed.",
      ],
      note: "To switch it to a different Wi-Fi network later, power-cycle the clock and repeat these steps.",
    },
  },
]

export function getBrochure(slug: string) {
  return brochures.find((b) => b.slug === slug)
}
