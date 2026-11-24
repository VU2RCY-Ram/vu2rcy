// Brochure and manual content by product slug; see docs/brochures.md.
// Facts come from Ram's brochures (2026-11-09); never invent a field.

// Every icon is a lucide icon name. Keep to this list so all brochures share
// one icon set; add a name here (and check it exists in lucide-react) first.
export const BROCHURE_ICONS = [
  "Activity",
  "BatteryFull",
  "Building2",
  "Cable",
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
  "Keyboard",
  "MapPin",
  "MessageSquareText",
  "MessagesSquare",
  "Monitor",
  "Plug",
  "Radio",
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

// Text in manual blocks may use **bold** for labels and button names.
export type ManualBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; caption: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "network"; network: SetupNetwork }
  | { type: "flow"; steps: { title: string; text: string }[] }
  | { type: "callout"; title: string; text: string }
  | { type: "fine"; text: string }

export type ManualSection = { title: string; blocks: ManualBlock[] }

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
  // 3-4 short steps for the brochure; leave out when Ram hasn't given any.
  quickSteps?: string[]
  // Signal path from Ram's own diagram, shown when there are no quick steps.
  howItWorks?: { flow: { icon: BrochureIcon; label: string }[]; note?: string }
  // Leave out when there are no setup steps yet; then only the brochure renders.
  manual?: {
    subtitle: string
    // 4-6 full steps for the manual.
    steps?: string[]
    // Long manuals: Ram's own sections, kept close to his wording.
    sections?: ManualSection[]
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
  // From Ram's posters (2026-11-17 12:40); setup Wi-Fi from tracker firmware v2.
  {
    slug: "master-aprs-tracker-2",
    kind: "GPS APRS tracker for your VHF radio",
    intro:
      "Plugs into your VHF radio and beacons your GPS position over APRS. Set it up from your phone over Wi-Fi.",
    features: [
      { icon: "MapPin", title: "Built-in GPS", text: "Accurate location tracking." },
      { icon: "Wifi", title: "Web configuration", text: "Easy setup over Wi-Fi." },
      { icon: "Settings", title: "Your settings", text: "Callsign, SSID, path, interval and comment." },
      { icon: "Timer", title: "Automatic beaconing", text: "Adjustable interval and smart beaconing." },
      { icon: "Activity", title: "1200 bps AFSK", text: "AX.25 APRS, with manual TX and channel busy detection." },
    ],
    highlights: [
      { icon: "Radio", title: "Most VHF radios", text: "Handheld, mobile and base." },
      { icon: "BatteryFull", title: "2000 mAh battery", text: "Built in and rechargeable." },
      { icon: "Usb", title: "USB-C charging", text: "Charger built in." },
      { icon: "Zap", title: "Charge light", text: "Red while charging, blue when full." },
    ],
    network: { name: "APRS-Tracker", password: "12345678", address: "192.168.4.1" },
    quickSteps: [
      "Connect the cable to your radio, tune to the APRS frequency and turn squelch on.",
      "Switch it on, join its Wi-Fi and open 192.168.4.1 to enter your callsign and settings.",
      "Tap Save Settings. Once the GPS light is steady, it beacons.",
    ],
    // Ram's MA-T2 user manual (2026-11-22), wording kept as he wrote it.
    manual: {
      subtitle: "MA-T2. GPS-based VHF APRS tracker. Wi-Fi web configuration only, no Bluetooth.",
      sections: [
        {
          title: "1. Introduction",
          blocks: [
            { type: "p", text: "MASTER-APRS MA-T2 is a portable GPS-based VHF APRS tracker. It reads position data from its GPS receiver, creates APRS position packets and sends them over the configured VHF frequency. The built-in Wi-Fi access point provides a local web page for changing station and beacon settings." },
            { type: "h3", text: "What it does" },
            {
              type: "list",
              items: [
                "Reads GPS position information and displays whether a valid GPS fix is available on the web status page.",
                "Creates 1200-baud AFSK APRS packets using AX.25 framing.",
                "Sends automatic APRS beacons at the configured interval.",
                "Provides a manual **TX NOW** action from the web configuration page.",
                "Allows the operator to change frequency, callsign, SSID, destination, path, beacon interval, comment and squelch setting.",
                "Provides quick frequency selection with **SET 144.390** and a **REBOOT** action.",
              ],
            },
            { type: "h3", text: "What it is not" },
            { type: "p", text: "This firmware is a GPS APRS tracker/transmitter. It is not described as a KISS TNC, APRS receiver/decoder, Internet Gateway or digipeater. The manual does not claim those functions for this software build." },
            { type: "h3", text: "Items and preparation" },
            {
              type: "list",
              items: [
                "MASTER-APRS MA-T2 unit with its rechargeable battery.",
                "Suitable VHF antenna for the selected operating frequency.",
                "A phone, tablet or computer with Wi-Fi and a web browser.",
                "A suitable USB charging supply and cable.",
                "A valid amateur-radio callsign and permission to operate on the selected frequency.",
              ],
            },
            { type: "h3", text: "Radio operation" },
            { type: "p", text: "The firmware defaults to 144.390 MHz and allows the frequency field to be changed within the software's configured range. Use only the APRS frequency and operating conditions permitted in your location and by your licence. Confirm the selected frequency and antenna before transmitting." },
            { type: "callout", title: "Connectivity · Wi-Fi web configuration only", text: "This MA-T2 model has no Bluetooth connection. Configure it by joining its MASTER-APRS Wi-Fi network and opening the local web page." },
          ],
        },
        {
          title: "2. Battery, Charging and Indicators",
          blocks: [
            { type: "h3", text: "Rechargeable battery" },
            { type: "p", text: "The tracker is specified with a built-in 2000 mAh rechargeable battery and an integrated charging circuit. Charge the unit through its charging connector using a suitable regulated USB supply. Do not use a damaged cable, damaged charger or damaged unit." },
            { type: "h3", text: "Charging indicator" },
            { type: "table", head: ["Indicator colour", "Meaning"], rows: [["Red", "Battery is charging."], ["Blue", "Battery is fully charged."]] },
            { type: "h3", text: "Front status LEDs" },
            {
              type: "table",
              head: ["Label", "Colour", "Indication"],
              rows: [
                ["Tx", "Blue", "Transmission activity / beacon status."],
                ["GPS", "Green", "GPS status. Wait for a valid fix before sending a position beacon."],
                ["PWR", "Red", "Unit power status."],
              ],
            },
            { type: "h3", text: "Charging and battery care" },
            {
              type: "list",
              items: [
                "Charge on a stable, dry, well-ventilated surface.",
                "Keep the unit away from high temperatures, direct flame and moisture.",
                "Disconnect the charger when charging is complete.",
                "Stop using the unit if the battery enclosure becomes unusually hot, swollen or damaged.",
              ],
            },
            { type: "fine", text: "Note: Battery capacity is a nominal product specification. Actual operating time depends on transmit interval, radio activity, GPS reception, Wi-Fi use and battery condition." },
          ],
        },
        {
          title: "3. First-Time Wi-Fi Setup",
          blocks: [
            { type: "p", text: "The tracker creates its own Wi-Fi access point. Use this local network to open the configuration page; an internet connection is not required just to edit settings." },
            { type: "network", network: { name: "MASTER-APRS", password: "mastersetup", address: "http://192.168.4.1/" } },
            {
              type: "list",
              items: [
                "Switch on the tracker and wait for it to start.",
                "Open Wi-Fi settings on your phone, tablet or computer.",
                "Select **MASTER-APRS** and enter the password **mastersetup**.",
                "If your device says “No internet”, remain connected to this network.",
                "Open a web browser and manually enter **http://192.168.4.1**/.",
                "The page title should show **MASTER-APRS Configuration**.",
              ],
            },
            { type: "h3", text: "Configuration page fields" },
            {
              type: "table",
              head: ["Field", "Purpose"],
              rows: [
                ["Frequency MHz", "Sets the VHF operating frequency. Factory default: 144.390 MHz. The software accepts values from 134.0 to 174.0 MHz; actual operation depends on the fitted radio and legal band permissions."],
                ["Callsign", "Enter the operator's licensed callsign. The supplied code has a default callsign; replace it with your own before transmitting."],
                ["SSID", "APRS station SSID number, from 0 to 15. The code default is 1."],
                ["Destination", "APRS destination address. Factory default: APRS."],
                ["Path", "Digipeater path. Factory default: WIDE1-1,WIDE2-1. Use a path appropriate to your local APRS network."],
                ["Beacon interval (ms)", "Time between automatic beacons. Factory default: 60000 ms (60 seconds); the page enforces a minimum of 5000 ms."],
                ["Comment", "Text appended to the APRS position report. Factory default: MASTER-APRS MA-T2"],
                ["Squelch (0–8)", "Radio squelch setting. Factory default: 4."],
              ],
            },
            { type: "callout", title: "Important", text: "There is no Bluetooth pairing or Bluetooth app connection. All setup and configuration are through Wi-Fi and the web browser." },
          ],
        },
        {
          title: "4. Saving and Operating the Tracker",
          blocks: [
            { type: "h3", text: "Save Configuration" },
            { type: "p", text: "After changing the fields, select **SAVE CONFIGURATION**. The settings are stored in the unit's non-volatile configuration memory and the radio is reconfigured using the saved frequency and squelch setting." },
            { type: "h3", text: "SET 144.390" },
            { type: "p", text: "Select **SET 144.390** to set both transmit and receive frequency values to 144.390 MHz. This action also stores the frequency setting." },
            { type: "h3", text: "GPS status" },
            { type: "p", text: "The web status panel reports GPS as **VALID** when the GPS position is valid, or **NO FIX** when a valid position is not available. Place the unit where the GPS antenna has a clear view of the sky and allow time for a fix." },
            { type: "h3", text: "TX NOW" },
            { type: "p", text: "Select **TX NOW** to request an immediate APRS packet transmission. The tracker keys the radio, sends the 1200-baud AFSK packet and then returns to receive/idle state. Make sure the correct callsign, frequency, antenna and GPS fix are in place before using this control." },
            { type: "h3", text: "Automatic beaconing" },
            { type: "p", text: "The tracker sends a beacon when the configured interval has elapsed. The factory interval in this source is 60000 milliseconds (one minute). You can change it in the configuration page; the minimum accepted value is 5000 milliseconds." },
            { type: "h3", text: "REBOOT" },
            { type: "p", text: "Select **REBOOT** to restart the tracker. Wait for the Wi-Fi access point to return, then reconnect and reopen the configuration page if needed." },
            { type: "h3", text: "Important GPS warning for this software version" },
            { type: "p", text: "The supplied source can still build a position packet when GPS has no valid fix, using placeholder zero coordinates. For safe operation, wait until the status page shows **GPS: VALID** before pressing TX NOW or relying on automatic beacons. Check the first transmitted report on your APRS monitoring application to confirm that the displayed position is correct." },
            { type: "h3", text: "Packet format" },
            { type: "p", text: "This firmware sends APRS packets using 1200-baud AFSK and AX.25 framing." },
          ],
        },
        {
          title: "5. Troubleshooting and Safe Operation",
          blocks: [
            { type: "h3", text: "MASTER-APRS Wi-Fi network is not visible" },
            { type: "p", text: "Switch the tracker off and on, wait for startup, and refresh the Wi-Fi list. Move the phone close to the unit and confirm the battery is charged." },
            { type: "h3", text: "Configuration page does not open" },
            { type: "p", text: "Connect to the MASTER-APRS Wi-Fi network first. Enter http://192.168.4.1/ manually in the browser address bar. Do not use a search-engine search for the address." },
            { type: "h3", text: "GPS shows NO FIX" },
            { type: "p", text: "Move outdoors or to a location with a clear sky view. Keep the tracker stationary while the GPS acquires satellites. Do not send a position beacon until GPS shows VALID." },
            { type: "h3", text: "No APRS packet appears on the air" },
            { type: "p", text: "Confirm the frequency, callsign and SSID, antenna connection, beacon interval and radio coverage. Check that the transmitter is permitted to operate on the selected frequency." },
            { type: "h3", text: "TX NOW works but the reported position is wrong" },
            { type: "p", text: "Wait for GPS VALID, allow the GPS position to settle, then send a test beacon and inspect the position on an APRS monitoring application." },
            { type: "h3", text: "Radio does not respond or frequency does not change" },
            { type: "p", text: "Save the settings again, confirm the frequency is within the software's accepted range and restart the unit. If the problem continues, contact product support." },
            { type: "h3", text: "Settings appear to be lost" },
            { type: "p", text: "Enter the settings again and select SAVE CONFIGURATION. Avoid removing power while a save/restart operation is in progress." },
            { type: "h3", text: "Battery does not charge" },
            { type: "p", text: "Try a known-good regulated USB charger and cable. Check the charging connector for damage. Stop charging if the unit becomes unusually hot or the battery appears swollen." },
            { type: "h3", text: "Operating and safety checklist" },
            {
              type: "list",
              items: [
                "Use a valid licensed callsign and the correct SSID.",
                "Use only a frequency permitted for your station and location.",
                "Connect a suitable VHF antenna before transmitting.",
                "Confirm GPS VALID and verify the transmitted position.",
                "Choose a sensible beacon interval; avoid unnecessarily frequent transmissions.",
                "Do not open the enclosure or modify the battery or charging circuit.",
                "Keep the unit dry and protect it from impact and excessive heat.",
              ],
            },
            { type: "fine", text: "This manual is based on the supplied tracker software and the product information provided for the unit. Actual radio performance, battery runtime and GPS accuracy depend on operating conditions and the production hardware." },
          ],
        },
      ],
    },
  },
  // Brochure from Ram's poster (2026-11-17 12:42).
  {
    slug: "master-aprs-igate-rx",
    kind: "Receive-only APRS iGate",
    intro:
      "Receives 1200-baud AFSK APRS packets from a VHF radio, decodes them, and forwards them to APRS-IS over Wi-Fi.",
    features: [
      { icon: "Activity", title: "1200 baud AFSK", text: "Receives APRS packets from your radio." },
      { icon: "Cpu", title: "AX.25 decoding", text: "Decodes the packets it receives." },
      { icon: "Globe", title: "APRS-IS over Wi-Fi", text: "Forwards received packets to APRS-IS." },
      { icon: "Monitor", title: "Web configuration", text: "Easy Wi-Fi setup from a browser." },
      { icon: "CircleCheck", title: "Status lights", text: "Wi-Fi, DCD and Rx indicators." },
      { icon: "Plug", title: "5V DC", text: "Runs on a 5V DC supply." },
    ],
    highlights: [
      { icon: "Radio", title: "VHF radio in", text: "Receives from your VHF radio." },
      { icon: "Wifi", title: "Wi-Fi", text: "Straight to APRS-IS." },
      { icon: "RadioTower", title: "Receive only", text: "Listens and forwards." },
      { icon: "Cable", title: "Audio cable", text: "Works with a suitable audio connection cable." },
    ],
    howItWorks: {
      flow: [
        { icon: "Radio", label: "VHF radio" },
        { icon: "Cpu", label: "MASTER-APRS IGATE-Rx" },
        { icon: "Wifi", label: "Wi-Fi" },
        { icon: "Globe", label: "APRS-IS" },
      ],
      note: "Works with VHF radios using a suitable audio connection cable.",
    },
    // Ram's IGATE-Rx user manual (2026-11-22), wording kept as he wrote it.
    manual: {
      subtitle: "Receive-only APRS Internet Gateway. Receives 1200-baud AFSK APRS packets from a VHF radio, decodes AX.25 frames and forwards eligible packets to APRS-IS through Wi-Fi.",
      sections: [
        {
          title: "1. About the iGate",
          blocks: [
            { type: "p", text: "MASTER-APRS IGATE-Rx is a receive-only VHF APRS gateway. It listens to packet audio from a VHF radio, decodes valid 1200-baud AFSK / AX.25 packets, and sends eligible packets to the APRS-IS internet network using your Wi-Fi connection." },
            { type: "p", text: "**Important:** The unit does not transmit APRS packets over the VHF radio. It is RF receive-only. If a valid APRS-IS login and location are configured, the software can also send the iGate's own position beacon to APRS-IS over the internet; this is not an RF transmission." },
            { type: "h3", text: "How the system works" },
            {
              type: "flow",
              steps: [
                { title: "VHF radio", text: "Receives APRS RF packets" },
                { title: "IGATE-Rx", text: "AFSK + AX.25 decode" },
                { title: "Wi-Fi", text: "Internet connection" },
                { title: "APRS-IS", text: "Packet network" },
              ],
            },
            { type: "h3", text: "What you need" },
            {
              type: "list",
              items: [
                "MASTER-APRS IGATE-Rx unit.",
                "A regulated 5V DC power supply and suitable power cable.",
                "A VHF radio capable of receiving 1200-baud APRS packet audio.",
                "A suitable radio audio cable matched to the radio connector and audio level.",
                "A 2.4 GHz Wi-Fi network with internet access.",
                "Your amateur-radio callsign and corresponding APRS-IS passcode if you want packets gated to APRS-IS.",
              ],
            },
            { type: "h3", text: "Compatibility and safety" },
            { type: "p", text: "The iGate works with many VHF radios that provide an accessible speaker/audio output. Radio connectors and audio levels vary, so use the correct cable or adapter for the specific radio. A radio PTT connection is not required for packet reception. Use a clean, regulated 5V DC supply. Never apply 5V power to the audio input or connect a high-power speaker output directly unless the cable/interface is designed for a safe level." },
          ],
        },
        {
          title: "2. First-Time Setup",
          blocks: [
            { type: "h3", text: "Step 1 — Power on" },
            { type: "p", text: "Connect the unit to a regulated 5V DC supply. The three front indicators briefly illuminate during startup. Allow the unit time to start its setup Wi-Fi network." },
            { type: "h3", text: "Step 2 — Connect to setup Wi-Fi" },
            { type: "network", network: { name: "APRS-iGate", password: "12345678", address: "http://192.168.4.1" } },
            {
              type: "list",
              items: [
                "Open Wi-Fi settings on your phone, tablet or computer.",
                "Select APRS-iGate and enter the password above.",
                "If your device says “No internet”, stay connected; this is the local setup connection.",
                "Open a browser and enter http://192.168.4.1 in the address bar.",
              ],
            },
            { type: "h3", text: "Step 3 — Enter home Wi-Fi" },
            { type: "p", text: "On the Settings page, enter the name (SSID) and password of the Wi-Fi network that has internet access. The setup access point remains available while the unit also connects to your home Wi-Fi." },
            { type: "h3", text: "Step 4 — Enter APRS-IS details" },
            {
              type: "table",
              head: ["Setting", "What to enter"],
              rows: [
                ["Callsign", "Your own amateur-radio callsign, without the SSID suffix."],
                ["SSID", "APRS station SSID number; the supplied default is 10."],
                ["APRS-IS passcode", "Enter the valid passcode for your callsign to enable packet gating. -1 leaves the login unverified, so packets are not gated."],
                ["Server", "Default: rotate.aprs2.net. The page also mentions asia.aprs2.net."],
                ["Port", "Default: 14580."],
              ],
            },
          ],
        },
        {
          title: "3. Configuration and Normal Operation",
          blocks: [
            { type: "h3", text: "Location and position beacon" },
            { type: "p", text: "The software uses manually entered coordinates; this model does not obtain its location from a GPS receiver. Enter latitude and longitude in decimal degrees. Use a negative value for south latitude or west longitude. Example format: 12.97160 and 77.59460. Coordinates 0,0 disable the position beacon." },
            { type: "h3", text: "Beacon settings" },
            {
              type: "list",
              items: [
                "**Beacon comment:** Short description included with the iGate position beacon.",
                "**Beacon interval:** Set from 5 to 120 minutes; default is 20 minutes.",
                "**Symbol table / overlay and symbol code:** Defaults are R and &. Leave unchanged unless you know the APRS symbol you intend to use.",
              ],
            },
            { type: "h3", text: "Save settings" },
            { type: "p", text: "Select **Save & Restart**. Settings are stored and the unit restarts. Reconnect to setup Wi-Fi if necessary and reopen http://192.168.4.1. If the Wi-Fi password field is left empty, the saved password is kept unchanged." },
            { type: "h3", text: "Status dashboard" },
            { type: "p", text: "The main page refreshes automatically and shows Wi-Fi connection and signal strength, APRS-IS connection and login verification, audio level, packets heard / gated, and a recent packet log with the reason when a packet was not gated." },
            { type: "h3", text: "LED indicator guide" },
            {
              type: "table",
              head: ["Indicator", "Behaviour", "Meaning"],
              rows: [
                ["WiFi / Network", "Slow brief blink", "Home Wi-Fi has not been configured."],
                ["WiFi / Network", "About 1 blink/sec", "Connecting to configured Wi-Fi."],
                ["WiFi / Network", "Fast blink (about 4 Hz)", "Wi-Fi connected; APRS-IS login not verified."],
                ["WiFi / Network", "Steady on", "Wi-Fi connected and APRS-IS login verified."],
                ["DCD", "On during packet audio", "Packet-like audio detected; not proof of a decoded packet."],
                ["Rx", "Brief flash", "A valid APRS packet has been decoded."],
              ],
            },
          ],
        },
        {
          title: "4. Controls and Troubleshooting",
          blocks: [
            { type: "h3", text: "Manual beacon and reset button" },
            { type: "p", text: "A short press of the setup button requests an immediate position beacon to APRS-IS. This requires a valid configured location and a verified APRS-IS connection. It does not cause an RF transmission. Holding the button for more than 5 seconds clears saved settings and restarts the unit. You must configure Wi-Fi and station details again after a factory reset." },
            { type: "h3", text: "Troubleshooting" },
            { type: "h4", text: "Setup Wi-Fi is not visible" },
            { type: "p", text: "Power-cycle the unit and wait for startup. Move your phone or computer close to the unit and refresh the Wi-Fi list. Confirm stable 5V power." },
            { type: "h4", text: "Cannot open configuration page" },
            { type: "p", text: "Connect to APRS-iGate, then enter http://192.168.4.1 in the browser address bar." },
            { type: "h4", text: "Home Wi-Fi does not connect" },
            { type: "p", text: "Check the Wi-Fi name and password. Confirm 2.4 GHz Wi-Fi is enabled on the router and the unit is within range." },
            { type: "h4", text: "APRS-IS is not verified" },
            { type: "p", text: "Check internet access, callsign spelling, SSID, APRS-IS passcode, server and port. A passcode of -1 does not authorize packet gating." },
            { type: "h4", text: "DCD lights but Rx does not flash" },
            { type: "p", text: "Check that the radio is receiving 1200-baud AFSK APRS. Adjust radio volume gradually and inspect Audio level on the dashboard. DCD indicates audio activity, not successful AX.25 decoding." },
            { type: "h4", text: "No packets are heard" },
            { type: "p", text: "Confirm the radio is tuned to the correct local APRS frequency, is receiving the correct packet mode, squelch is suitable, and the audio cable is connected correctly." },
            { type: "h4", text: "Packets are heard but not gated" },
            { type: "p", text: "Check that APRS-IS is connected and verified. The software also rejects internet-originated, NOGATE/RFONLY, query, third-party and recent duplicate packets." },
            { type: "h3", text: "Important operating notes" },
            {
              type: "list",
              items: [
                "This is an RF receive-only iGate. It does not transmit or digipeat packets over the radio.",
                "Only valid, eligible packets are forwarded; not every received signal will decode or be gated.",
                "A configured position beacon is sent over the internet to APRS-IS, not through the VHF radio.",
                "Use the correct audio cable for your radio. Connector wiring and audio levels vary.",
                "Keep the unit dry, ventilated and away from excessive heat.",
              ],
            },
            { type: "fine", text: "This manual reflects the operating features in the supplied iGate software. Radio compatibility depends on using the correct audio cable/interface and a suitable signal level." },
          ],
        },
      ],
    },
  },
  {
    slug: "master-cw-link",
    kind: "Morse terminal for 2 m FM",
    intro:
      "Send and receive Morse code over an ordinary 2 m FM radio. Type to send, and read the other station as clean text.",
    features: [
      { icon: "MessageSquareText", title: "Automatic decoder", text: "Shows received CW as text and estimates the sender's speed." },
      { icon: "Activity", title: "Tone tracking", text: "Locks onto any tone from 400 to 1200 Hz." },
      { icon: "Keyboard", title: "Keyboard sending", text: "Live as you type, or a whole line at a time." },
      { icon: "Smartphone", title: "Phone or PC control", text: "Web page over Wi-Fi. No app to install." },
      { icon: "Hash", title: "8 memory buttons", text: "For CQ, reports and sign-offs." },
      { icon: "BatteryFull", title: "Battery powered", text: "Charges from any 5 V USB-C charger." },
    ],
    highlights: [
      { icon: "Radio", title: "2 m FM", text: "MCW over an ordinary FM transceiver." },
      { icon: "Gauge", title: "5-40 WPM", text: "Tone 400-1200 Hz, soft keying." },
      { icon: "Timer", title: "TX time-out", text: "Stops after 2 minutes of continuous PTT." },
      { icon: "Monitor", title: "OLED display", text: "128 × 64, sent and received text." },
    ],
    network: { name: "CW-VU2RCY", password: "cw123456", address: "192.168.4.1" },
    quickSteps: [
      "Charge it from a 5 V USB-C charger.",
      "With the switch at OFF, plug the radio cable into the top Transceiver jack.",
      "Switch on and join the CW-VU2RCY Wi-Fi.",
      "Open 192.168.4.1, enter your callsign and press Save.",
    ],
    // Ram's MASTER-CW LINK user manual (2026-11-24), wording kept close to his.
    manual: {
      subtitle: "Send and receive Morse code (CW) over an ordinary 2 m FM transceiver, from a phone or PC web page over Wi-Fi, or from a keyboard plugged into the unit.",
      sections: [
        {
          title: "1. Introduction",
          blocks: [
            { type: "p", text: "The MASTER-CW LINK lets you send and receive Morse code (CW) over an ordinary 2 m FM transceiver. It keys the radio's PTT, sends a clean audio tone (MCW) into the microphone input, and decodes incoming CW from the speaker audio into text." },
            { type: "p", text: "You can operate it two ways: from a phone or PC web page over Wi-Fi, or from a keyboard plugged into the unit. It runs from its internal rechargeable battery and charges from any 5 V USB-C charger. Received and sent text is shown on the built-in OLED display and on the web page." },
            { type: "h3", text: "Main features" },
            {
              type: "list",
              items: [
                "Automatic CW decoder with speed tracking (shows the other station's approximate WPM)",
                "Automatic tone tracking (AFC) from 400 to 1200 Hz",
                "Keyboard sending in Live mode (each key sent as typed) or Line mode (Enter sends)",
                "8 programmable memory buttons, saved permanently; {CALL} is replaced by your callsign",
                "Prosigns <AR> <SK> <BT> <KN> and more",
                "Adjustable speed 5–40 WPM, tone 400–1200 Hz, TX level, PTT lead and hang times",
                "2-minute transmit time-out protection",
                "Every transmission starts a new red **TX>** line, received text appears on **RX>** lines",
                "All settings stored in memory and kept after power off",
              ],
            },
          ],
        },
        {
          title: "2. Getting to know the unit",
          blocks: [
            { type: "p", text: "The front panel has three indicators and the display. All connectors and the power switch are on the **left side**: the **top** jack goes to the radio (**Transceiver**), the **bottom** jack goes to the **Keyboard**." },
            { type: "h3", text: "Front panel" },
            { type: "image", src: "/catalogue/products/master-cw-link.jpg", caption: "Front panel" },
            {
              type: "table",
              head: ["Part", "Meaning"],
              rows: [
                ["Tx LED (amber)", "Lights while the radio is keyed (transmitting)"],
                ["Rx LED (green)", "Lights while a CW tone is being received"],
                ["PWR LED (red)", "Unit is switched on"],
                ["Display", "See the display layout below"],
              ],
            },
            { type: "h3", text: "Left side panel (top to bottom)" },
            { type: "image", src: "/catalogue/products/master-cw-link-side.jpg", caption: "Left side panel" },
            {
              type: "table",
              head: ["Part", "Label", "Use"],
              rows: [
                ["Slide switch", "ON / OFF", "Switches the unit on and off"],
                ["Top jack", "Transceiver", "Radio interface cable to your 2 m FM transceiver: speaker audio in, microphone audio out, PTT, ground"],
                ["Bottom jack", "Keyboard", "Keyboard cable"],
                ["Indicator", "CHARGING", "Lights while the internal battery is charging"],
                ["USB-C socket", "DC 5V", "Charging from a 5 V USB charger"],
              ],
            },
            { type: "h3", text: "Display layout" },
            {
              type: "table",
              head: ["Line", "Shows", "Example"],
              rows: [
                ["1", "Your callsign, sending speed, tone", "VU2RCY 25w 800Hz"],
                ["2", "Web address of the unit, speed of the received station", "192.168.4.1 ~25w"],
                ["3", "Bar graph of received tone strength", "—"],
                ["4–5", "Latest received and sent text", "CALL VU2RCY | RX ~25"],
                ["6", "Text you are typing or still waiting to be sent (> = Live mode, : = Line mode)", ">"],
              ],
            },
            { type: "p", text: "At switch-on the Tx and Rx LEDs light for half a second as a lamp test." },
            { type: "h3", text: "Cautions" },
            {
              type: "list",
              items: [
                "Plug or unplug the keyboard only with the unit switched off.",
                "Check that the Transceiver cable is wired for your radio model before transmitting.",
                "Do not swap the two jacks: the top one is always the Transceiver, the bottom one always the Keyboard.",
              ],
            },
          ],
        },
        {
          title: "3. Getting started",
          blocks: [
            { type: "network", network: { name: "CW-VU2RCY", password: "cw123456", address: "http://192.168.4.1" } },
            {
              type: "list",
              ordered: true,
              items: [
                "Charge the unit fully before first use: connect a 5 V USB-C charger to the **DC 5V** socket. The **CHARGING** light shows charging is in progress.",
                "With the switch at OFF, plug the radio cable into the top **Transceiver** jack and the keyboard into the bottom **Keyboard** jack.",
                "Set the radio to the 2 m FM simplex frequency you will use, with a medium volume.",
                "Slide the switch to **ON**. The red **PWR** LED lights and the display shows the start-up screen, then your callsign.",
                "On your phone or PC, join the Wi-Fi network **CW-VU2RCY**, password **cw123456**.",
                "Open a browser at **http://192.168.4.1**. The control page appears.",
                "Enter your callsign under **Settings** and press **Save**.",
                "Press **TUNE 10s** and adjust **TX level** until the transmitted tone sounds clean on a second receiver.",
                "Listen to a CW signal. The green **Rx** LED lights with each tone and the decoded text appears on **RX>** lines.",
              ],
            },
            { type: "p", text: "**Using your home Wi-Fi (optional):** enter your home network name and password under Settings, press Save, then Reboot. The unit stays reachable on its own network and also joins your home network. The display then shows the home IP address; you can also use **http://cw.local**." },
          ],
        },
        {
          title: "4. Web control page",
          blocks: [
            { type: "p", text: "The web page has three panels: the live text window, the sending panel and Settings." },
            { type: "h3", text: "Live text window" },
            {
              type: "list",
              items: [
                "**RX / TX** pill: turns red **TX** while transmitting.",
                "**TONE / no tone** pill: turns green while a CW tone is detected.",
                "Info line: received level, detected tone frequency (Hz) and the other station's speed (WPM).",
                "Signal bar: strength of the received tone.",
                "Text window: sent text on red **TX>** lines, received text on **RX>** lines. **Clear** empties the window.",
                "“to send:” shows text still waiting in the send queue.",
              ],
            },
            { type: "h3", text: "Sending panel" },
            {
              type: "list",
              items: [
                "Type in the box and press **Enter** to send the line.",
                "Tick **Live typing** to send each character as you type; Enter then sends a word space.",
                "**Esc** or **STOP** cancels everything still waiting to be sent.",
                "**TUNE 10s** sends a steady tone for 10 seconds, for level setting.",
                "**Memory buttons M1–M8**: click to send. See section 6.",
              ],
            },
          ],
        },
        {
          title: "5. Keyboard operation",
          blocks: [
            { type: "p", text: "A keyboard on the bottom **Keyboard** jack lets you operate without a phone or PC. The bottom line of the display shows what you are typing: **>** in Live mode (text waiting to be sent), **:** in Line mode (text being typed)." },
            {
              type: "list",
              items: [
                "**Live mode:** each key is sent as you type it. Enter sends a word space.",
                "**Line mode:** type a whole line, then press Enter to send it. A line starting with **/** is a command (section 8).",
                "Type prosigns with angle brackets, for example <AR> (Shift + comma, A, R, Shift + full stop).",
              ],
            },
            {
              type: "table",
              head: ["Key", "Function"],
              rows: [
                ["Letters, numbers, punctuation", "Sent in Morse"],
                ["Enter", "Send line (Line mode) / word space (Live mode)"],
                ["Backspace or Delete", "Remove the last character not yet sent"],
                ["Esc", "STOP – cancel all unsent text"],
                ["F1 – F7", "Send memories M1 – M7"],
                ["Shift + F1", "Send memory M8"],
                ["F8", "Switch Live / Line mode"],
                ["F9", "Speed – 1 WPM"],
                ["F10", "Speed + 1 WPM"],
                ["F11", "Tone – 50 Hz"],
                ["Shift + F11", "Tone + 50 Hz"],
                ["F12", "Save settings"],
              ],
            },
            { type: "p", text: "Changes made with F8–F11 are lost at power off unless you press **F12** to save." },
          ],
        },
        {
          title: "6. Memory buttons",
          blocks: [
            { type: "p", text: "Eight memories hold ready-made messages of up to 99 characters. {CALL} inside a memory is replaced by your callsign when sent." },
            {
              type: "table",
              head: ["Memory", "Default label", "Default text"],
              rows: [
                ["M1", "CQ", "CQ CQ CQ DE {CALL} {CALL} {CALL} K"],
                ["M2", "QRZ?", "QRZ? DE {CALL} K"],
                ["M3", "5NN", "UR 5NN 5NN"],
                ["M4", "AR", "<AR>"],
                ["M5", "KN", "<KN>"],
                ["M6", "73 SK", "TU 73 <SK>"],
                ["M7", "DE", "DE {CALL}"],
                ["M8", "M8", "(empty)"],
              ],
            },
            { type: "p", text: "**To edit a memory:** on the web page, right-click the button (PC) or press and hold it (phone). Change the label and text, then press **Save**. **Clear** empties both fields. Memories are saved permanently at once." },
          ],
        },
        {
          title: "7. Settings",
          blocks: [
            { type: "p", text: "Open the Settings panel on the web page, change values, and press **Save**. Settings are stored permanently. Wi-Fi changes take effect after **Reboot**." },
            {
              type: "table",
              head: ["Setting", "Range", "Default", "Purpose"],
              rows: [
                ["Callsign", "up to 11 characters", "VU2RCY", "Used in {CALL} and /CQ"],
                ["Speed (WPM)", "5 – 40", "18", "Sending speed"],
                ["Tone Hz", "400 – 1200", "800", "Transmitted tone and sidetone"],
                ["RX auto tone (AFC)", "ON / OFF", "ON", "ON: decodes any tone 400–1200 Hz. OFF: only your set tone"],
                ["Key mode", "Straight / Iambic A / Iambic B", "Iambic B", "For the optional Morse key or paddle"],
                ["Swap paddles", "No / Yes", "No", "Exchanges dit and dah"],
                ["PTT lead ms", "0 – 1000", "300", "Delay from PTT on to first tone, lets the radio settle"],
                ["PTT hang ms", "0 – 5000", "600", "Time PTT stays on after the last tone"],
                ["TX level", "10 – 127", "90", "Audio level into the radio microphone"],
                ["RX min level", "0 – 500", "20", "Ignores received audio below this level (noise)"],
                ["PS/2 keyboard", "Live / Line", "Live", "Keyboard sending mode"],
                ["Radio SQL pin", "Ignore / Low = open / High = open", "Ignore", "Uses the radio's squelch line to block noise"],
                ["Home Wi-Fi SSID / password", "—", "blank", "Join your home network"],
                ["Wi-Fi name (this unit)", "up to 32 characters", "CW-VU2RCY", "Name of the unit's own network"],
                ["AP password", "8+ characters", "cw123456", "Password of the unit's own network"],
              ],
            },
            { type: "p", text: "**Factory default** resets all settings and memories and restarts the unit. Afterwards, reconnect to **CW-VU2RCY** with password **cw123456**." },
          ],
        },
        {
          title: "8. Commands",
          blocks: [
            { type: "p", text: "Type these in the web send box, or on the keyboard in Line mode. Commands are not case-sensitive." },
            {
              type: "table",
              head: ["Command", "Action"],
              rows: [
                ["/HELP", "Show the command list"],
                ["/STATUS", "Show all current settings and IP address"],
                ["/WPM n", "Speed 5–40"],
                ["/TONE n", "Tone 400–1200 Hz"],
                ["/AFC ON or OFF", "Automatic RX tone tracking"],
                ["/MODE S, A or B", "Straight key, Iambic A, Iambic B"],
                ["/SWAP", "Swap paddles"],
                ["/LEAD ms, /HANG ms", "PTT lead and hang times"],
                ["/LEVEL n", "TX level 10–127"],
                ["/SQL n", "RX minimum level 0–500"],
                ["/SQLPIN 0, 1 or 2", "Ignore / Low = open / High = open"],
                ["/CALL xxx", "Set callsign"],
                ["/CQ", "Send a standard CQ call"],
                ["/M1 … /M8", "Send a memory"],
                ["/TUNE s", "Steady tone for 1–60 seconds (default 10)"],
                ["/DEBUG", "Show live receive measurements twice a second"],
                ["/STOP", "Cancel sending"],
                ["/SAVE", "Save settings permanently"],
                ["/DEFAULT", "Factory default and restart"],
              ],
            },
            { type: "p", text: "Settings changed by command are lost at power off unless you use **/SAVE** (or F12, or Save on the web page)." },
          ],
        },
        {
          title: "9. Protection and behaviour",
          blocks: [
            {
              type: "list",
              items: [
                "**Time-out:** transmission stops automatically after 2 minutes of continuous PTT. Release the key and clear the queue to transmit again.",
                "**Key priority:** touching the Morse key or paddle while text is sending cancels the remaining text.",
                "**New TX line:** each new transmission starts a fresh red TX> line, so your messages are easy to find.",
                "The decoder pauses during transmit and resumes after PTT releases.",
              ],
            },
          ],
        },
        {
          title: "10. Troubleshooting",
          blocks: [
            {
              type: "table",
              head: ["Problem", "Check"],
              rows: [
                ["Cannot find the Wi-Fi network", "Wait 10 seconds after power on. If the name or password was changed, type /DEFAULT on the keyboard in Line mode and press Enter."],
                ["Page does not open", "Use http://192.168.4.1 while joined to the unit's network. Turn off mobile data on the phone."],
                ["No decoding, green LED never lights", "Raise radio volume. Lower RX min level. Check AFC is ON. Set Radio SQL pin to Ignore."],
                ["Random letters from noise", "Raise RX min level, or use the Radio SQL pin setting."],
                ["First character cut off on air", "Increase PTT lead time."],
                ["PTT drops between words", "Increase PTT hang time."],
                ["Distorted transmitted tone", "Lower TX level."],
                ["Keyboard does nothing", "Switch off, push the keyboard plug fully into the bottom Keyboard jack, switch on."],
                ["“TX buffer full”", "Wait for the queue to send, or press STOP."],
                ["“TX time-out”", "Release the key; transmission was over 2 minutes."],
                ["PWR LED does not light", "Check the ON/OFF switch. Charge the battery from the DC 5V socket."],
              ],
            },
          ],
        },
        {
          title: "11. Specifications",
          blocks: [
            {
              type: "table",
              head: ["Item", "Value"],
              rows: [
                ["Mode", "MCW (tone-keyed CW) over 2 m FM"],
                ["Sending speed", "5 – 40 WPM"],
                ["Tone", "400 – 1200 Hz, 5 ms soft keying edges"],
                ["Receive tone tracking", "400 – 1200 Hz in 100 Hz steps"],
                ["Transmit time-out", "2 minutes"],
                ["Memories", "8 × 99 characters"],
                ["Send queue", "about 1000 characters"],
                ["Control", "Wi-Fi web page, keyboard"],
                ["Connectors", "Transceiver jack, Keyboard jack, DC 5V USB-C"],
                ["Indicators", "Tx, Rx, PWR, CHARGING"],
                ["Display", "128 × 64 OLED"],
                ["Power", "Internal rechargeable battery, charged at 5 V via USB-C"],
                ["Default Wi-Fi", "CW-VU2RCY, password cw123456, http://192.168.4.1"],
              ],
            },
          ],
        },
      ],
    },
  },
]

// Every brochure in one PDF, linked from /products.
export const ALL_BROCHURES_PDF = "/catalogue/products/brochures/vu2rcy-brochures.pdf"

export function getBrochure(slug: string) {
  return brochures.find((b) => b.slug === slug)
}
