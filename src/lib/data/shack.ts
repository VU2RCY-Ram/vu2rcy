export type EquipmentSpec = {
  label: string
  value: string
}

export type Equipment = {
  slug: string
  name: string
  description: string
  image?: string
  specs?: EquipmentSpec[]
  whatsapp?: boolean
}

export type ShackCategory = {
  slug: string
  name: string
  description: string
  items: Equipment[]
}

// Ported from the legacy vu2rcy.com site's /shack/* pages (data and images
// only, from OLD_CODE_BASE — not its styling/layout). This is the
// operator's own station equipment, shown for reference — not for sale, and
// deliberately kept on its own routes (/shack, /shack/[category]) separate
// from src/lib/data/products.ts (the kits VU2RCY actually offers).
export const shackCategories: ShackCategory[] = [
  {
    slug: "antennas",
    name: "Antennas",
    description:
      "Antennas I've built and put up over the years, each tuned and matched for a specific band rather than bought off the shelf.",
    items: [
      {
        slug: "ground-plane",
        name: "Ground Plane",
        description: "6m ground plane antenna",
        image: "/catalogue/antennas/ground-plane.jpg",
        specs: [
          { label: "Materials", value: "Aluminium" },
          { label: "Frequency range", value: "52-54 MHz" },
          { label: "Resonant frequency", value: "52 MHz" },
          { label: "Gain", value: "2.5 dB" },
          { label: "Radiation pattern", value: "Circular" },
          { label: "Polarization", value: "Linear vertical polarization" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "2 MHz" },
          { label: "Front-to-back ratio", value: "" },
          { label: "Power handling", value: "100 Watts" },
          { label: "Radials", value: "1.42 m" },
          { label: "Vertical", value: "1.42 m" },
        ],
        whatsapp: true,
      },
      {
        slug: "6-element-beam",
        name: "6 Element Beam",
        description: "HF 6 element beam",
        image: "/catalogue/antennas/6-element-beam.jpg",
        specs: [
          { label: "Materials", value: "Aluminium" },
          { label: "Frequency range", value: "14 MHz - 30 MHz" },
          { label: "Resonant frequency", value: "21 MHz" },
          { label: "Gain", value: "6 dBi" },
          { label: "Radiation pattern", value: "Directional" },
          { label: "Polarization", value: "Horizontal" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "Good" },
          { label: "Front-to-back ratio", value: "20 dB" },
          { label: "Power handling", value: "100 Watts" },
          { label: "Dimensions", value: "" },
        ],
        whatsapp: true,
      },
      {
        slug: "dish-antenna",
        name: "Dish Antenna",
        description: "QO-100 6 feet dish antenna",
        image: "/catalogue/antennas/dish-antenna.jpg",
        specs: [
          { label: "Materials", value: "Mild Steel" },
          { label: "Frequency range", value: "2400.050 - 2400.300 MHz" },
          { label: "Resonant frequency", value: "Good" },
          { label: "Gain", value: "Good" },
          { label: "Radiation pattern", value: "Directional" },
          { label: "Polarization", value: "" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "Full Band" },
          { label: "Front-to-back ratio", value: "" },
          { label: "Power handling", value: "20 W" },
          { label: "Dimensions", value: "6 Feet" },
        ],
      },
      {
        slug: "yagi-satellite",
        name: "Yagi (Satellite)",
        description: "UHF & VHF Yagi satellite antenna",
        image: "/catalogue/antennas/yagi-satellite.jpg",
        specs: [
          { label: "Materials", value: "Aluminium" },
          { label: "Frequency range", value: "144MHz & 435MHz" },
          { label: "Resonant frequency", value: "" },
          { label: "Gain", value: "Good" },
          { label: "Radiation pattern", value: "Directional" },
          { label: "Polarization", value: "" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "Good" },
          { label: "Front-to-back ratio", value: "" },
          { label: "Power handling", value: "10 W" },
          { label: "Dimensions", value: "" },
        ],
        whatsapp: true,
      },
      {
        slug: "10-element-yagi",
        name: "10 Element Yagi",
        description: "10 element Yagi for UHF",
        image: "/catalogue/antennas/10-element-yagi.jpg",
        specs: [
          { label: "Materials", value: "Aluminium" },
          { label: "Frequency range", value: "14 MHz - 30 MHz" },
          { label: "Resonant frequency", value: "21 MHz" },
          { label: "Gain", value: "6 dBi" },
          { label: "Radiation pattern", value: "Directional" },
          { label: "Polarization", value: "Vertical" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "300 kHz" },
          { label: "Front-to-back ratio", value: "20 dB" },
          { label: "Power handling", value: "100 Watts" },
          { label: "Dimensions", value: "5m (L) x 2m (W) x 1m (H)" },
        ],
      },
      {
        slug: "uhf-slimjim",
        name: "UHF SlimJim",
        description: "UHF SlimJim antenna",
        image: "/catalogue/antennas/uhf-slimjim.jpg",
        specs: [
          { label: "Materials", value: "Aluminium" },
          { label: "Frequency range", value: "14 MHz - 30 MHz" },
          { label: "Resonant frequency", value: "21 MHz" },
          { label: "Gain", value: "6 dBi" },
          { label: "Radiation pattern", value: "Directional" },
          { label: "Polarization", value: "Vertical" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "300 kHz" },
          { label: "Front-to-back ratio", value: "20 dB" },
          { label: "Power handling", value: "100 Watts" },
          { label: "Dimensions", value: "5m (L) x 2m (W) x 1m (H)" },
        ],
        whatsapp: true,
      },
      {
        slug: "uhf-vertical",
        name: "UHF Vertical",
        description: "UHF vertical antenna",
        image: "/catalogue/antennas/uhf-vertical.jpg",
        specs: [
          { label: "Materials", value: "Aluminium" },
          { label: "Frequency range", value: "14 MHz - 30 MHz" },
          { label: "Resonant frequency", value: "21 MHz" },
          { label: "Gain", value: "6 dBi" },
          { label: "Radiation pattern", value: "Directional" },
          { label: "Polarization", value: "Vertical" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "300 kHz" },
          { label: "Front-to-back ratio", value: "20 dB" },
          { label: "Power handling", value: "100 Watts" },
          { label: "Dimensions", value: "5m (L) x 2m (W) x 1m (H)" },
        ],
        whatsapp: true,
      },
      {
        slug: "yagi",
        name: "Yagi",
        description: "General purpose Yagi antenna",
        image: "/catalogue/antennas/yagi.jpg",
        specs: [
          { label: "Materials", value: "Aluminium" },
          { label: "Frequency range", value: "14 MHz - 30 MHz" },
          { label: "Resonant frequency", value: "21 MHz" },
          { label: "Gain", value: "6 dBi" },
          { label: "Radiation pattern", value: "Directional" },
          { label: "Polarization", value: "Vertical" },
          { label: "SWR", value: "1.5" },
          { label: "Impedance", value: "50 ohms" },
          { label: "Bandwidth", value: "300 kHz" },
          { label: "Front-to-back ratio", value: "20 dB" },
          { label: "Power handling", value: "100 Watts" },
          { label: "Dimensions", value: "5m (L) x 2m (W) x 1m (H)" },
        ],
      },
    ],
  },
  {
    slug: "aprs",
    name: "APRS",
    description:
      "My APRS setup: a custom station built around a TNC, GPS unit and VHF transceiver, for real-time position and packet data on the APRS network.",
    items: [
      {
        slug: "aprs-weather-station",
        name: "APRS Weather Station",
        description: "Automatic Packet Reporting System weather station",
        image: "/catalogue/aprs/aprs-weather-station.jpg",
        specs: [
          { label: "Purpose", value: "Sending weather data to APRS server" },
          { label: "Sensor", value: "Weather sensor" },
        ],
        whatsapp: true,
      },
      {
        slug: "kenwood-tm-d7",
        name: "Kenwood TM-D7",
        description: "144 / 430 MHz FM dual bander",
        image: "/catalogue/aprs/kenwood-tm-d7.jpg",
        specs: [
          { label: "Purpose", value: "APRS" },
          { label: "Power output", value: "6W" },
        ],
      },
      {
        slug: "yaesu-2600m-tnc",
        name: "Yaesu 2600M + TNC",
        description: "Yaesu 2600M with Terminal Node Controller",
        image: "/catalogue/aprs/yaesu-2600m-tnc.jpg",
        specs: [
          { label: "Purpose", value: "APRS digipeater 144.390MHz" },
          { label: "Connectivity", value: "Ethernet" },
          { label: "Power output", value: "50W" },
        ],
      },
    ],
  },
  {
    slug: "hf",
    name: "HF",
    description:
      "My HF setup is the core of the shack — an ICOM IC-706 MK2G, IC-718 and IC-700, run through a Digiface Pro for DX contacts and contests.",
    items: [
      {
        slug: "icom-ic-706mk2g",
        name: "Icom IC-706MK2G",
        description: "HF/VHF/UHF all-mode transceiver",
        image: "/catalogue/hf/icom-ic-706mk2g.jpg",
        specs: [
          { label: "Purpose", value: "Voice and digital modes in HF/VHF/UHF" },
          { label: "HF frequency", value: "1.8MHz - 30MHz all mode" },
          { label: "VHF frequency", value: "144MHz - 146MHz all mode" },
          { label: "UHF frequency", value: "434MHz - 438MHz all mode" },
          { label: "Using with", value: "Digiface Pro for all digital modes" },
          { label: "HF antenna", value: "6 element Yagi with rotator (Yaesu G-800DXA)" },
          { label: "HF antenna", value: "End-fed 160m to 10m" },
          { label: "VHF antenna", value: "5 element Yagi for 50MHz" },
          { label: "Power output", value: "HF: 100W, VHF: 50W, UHF: 25W" },
        ],
      },
      {
        slug: "icom-ic-718",
        name: "Icom IC-718",
        description: "HF all-mode transceiver (stand-by rig)",
        image: "/catalogue/hf/icom-ic-718.jpg",
        specs: [
          { label: "Purpose", value: "Voice and digital modes in HF" },
          { label: "HF frequency", value: "1.8MHz - 30MHz all mode" },
          { label: "Using with", value: "Digiface Pro for all digital modes" },
          { label: "HF antenna", value: "End-fed homebrew antenna 160m to 10m" },
          { label: "HF antenna", value: "Homebrew dipole 40m and 20m" },
          { label: "Power output", value: "HF: 100W" },
        ],
      },
    ],
  },
  {
    slug: "vhf-uhf",
    name: "VHF/UHF",
    description:
      "Built up over years of refinement: a Kenwood TM-V71V and MMDVM transceivers, used for local communication, satellite tracking and VHF/UHF contests.",
    items: [
      {
        slug: "alinco-dr-dm500",
        name: "Alinco DR-DM500",
        description: "VHF and UHF",
        image: "/catalogue/vhf-uhf/alinco-dr-dm500.jpeg",
        specs: [
          { label: "Purpose", value: "FM voice and DMR" },
          { label: "VHF/UHF antenna", value: "Vertical diamond 510X" },
          { label: "VHF antenna", value: "Homebrew element Yagi" },
          { label: "Power output", value: "VHF: 50W, UHF: 25W" },
        ],
      },
    ],
  },
  {
    slug: "digital-mode",
    name: "Digital Modes",
    description:
      "Digital modes I use in the shack, from FT8 to PSK31 — different ways of getting a signal through when conditions or power don't favor plain voice.",
    items: [
      {
        slug: "alinco-dj-md5",
        name: "Alinco DJ-MD5",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/alinco-dj-md5.jpg",
      },
      {
        slug: "alinco-dr-dm500",
        name: "Alinco DR-DM500",
        description: "VHF and UHF",
        image: "/catalogue/digital-mode/alinco-dr-dm500.jpeg",
        specs: [
          { label: "Purpose", value: "FM voice and DMR" },
          { label: "VHF/UHF antenna", value: "Vertical diamond 510X" },
          { label: "VHF antenna", value: "Homebrew element Yagi" },
          { label: "Power output", value: "VHF: 50W, UHF: 25W" },
        ],
      },
      {
        slug: "droid-star",
        name: "Droid Star",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/droid-star.png",
      },
      {
        slug: "peanut",
        name: "Peanut",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/peanut.jpg",
      },
      {
        slug: "usrp",
        name: "USRP",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/generic-digital-mode.jpeg",
      },
      {
        slug: "dv-switch",
        name: "DV Switch",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/dv-switch.jpg",
      },
      {
        slug: "blue-dv",
        name: "Blue DV",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/blue-dv.png",
      },
      {
        slug: "vara",
        name: "VARA",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/vara.jpg",
      },
      {
        slug: "hf-jtdx-wsjt",
        name: "HF JTDX / WSJT",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/hf-jtdx-wsjt.jpg",
      },
      {
        slug: "server-gateway-reflector",
        name: "Server / Gateway / Reflector",
        description: "DMR VHF/UHF handy",
        image: "/catalogue/digital-mode/generic-digital-mode.jpeg",
      },
    ],
  },
  {
    slug: "my-equipment",
    name: "My Equipment",
    description:
      "The radios in my shack, each bought or built for a different purpose — HF, VHF/UHF, satellite work, digital modes.",
    items: [
      {
        slug: "power-supply-13-8v-35a",
        name: "Power Supply",
        description: "13.8V 35A power supply",
        image: "/catalogue/my-equipment/power-supply-13-8v-35a.jpg",
        specs: [
          { label: "Purpose", value: "Power supply for rig" },
          { label: "Input voltage", value: "220V AC" },
          { label: "Output voltage", value: "13.8V 35A" },
        ],
      },
      {
        slug: "power-supply-axiom",
        name: "Power Supply (Axiom)",
        description: "Axiom 13.8V power supply",
        image: "/catalogue/my-equipment/power-supply-axiom-13-8v.jpg",
        specs: [
          { label: "Purpose", value: "Power supply for rig" },
          { label: "Input voltage", value: "220V AC" },
          { label: "Output voltage", value: "13.8V 15A" },
        ],
      },
      {
        slug: "alinco-dj-md5",
        name: "Alinco DJ-MD5",
        description: "Analog and DMR VHF/UHF handy",
        image: "/catalogue/my-equipment/alinco-dj-md5.jpg",
        specs: [
          { label: "Purpose", value: "Analog and DMR VHF/UHF" },
          { label: "Output power", value: "5W" },
        ],
      },
      {
        slug: "baofeng-uv-5r",
        name: "Baofeng UV-5R",
        description: "VHF/UHF handy",
        image: "/catalogue/my-equipment/baofeng-uv-5r.jpg",
        specs: [
          { label: "Purpose", value: "Analog VHF/UHF" },
          { label: "Output power", value: "1W (low), 5W (high)" },
        ],
      },
      {
        slug: "diamond-sx-1100",
        name: "Diamond SX-1100",
        description: "Testing instrument",
        image: "/catalogue/my-equipment/diamond-sx-1100.jpg",
        specs: [
          { label: "Purpose", value: "Power and SWR meter" },
          { label: "Testing range", value: "1GHz" },
        ],
      },
      {
        slug: "icom-handy-ic-t90a",
        name: "Icom Handy IC-T90A",
        description: "Handheld radio",
        image: "/catalogue/my-equipment/icom-handy-ic-t90a.jpg",
        specs: [
          { label: "Purpose", value: "50MHz handy with FM" },
          { label: "Power", value: "5W" },
        ],
      },
      {
        slug: "icom-ic-7000",
        name: "Icom IC-7000",
        description: "HF/VHF/UHF all-mode transceiver",
        image: "/catalogue/my-equipment/icom-ic-7000.jpg",
        specs: [
          { label: "Purpose", value: "HF/VHF/UHF all mode all band (stand-by rig)" },
          { label: "VHF/UHF antenna", value: "Vertical diamond 510X" },
          { label: "VHF antenna", value: "Homebrew 9 element Yagi" },
          { label: "Power output", value: "HF: 100W, VHF: 50W, UHF: 25W" },
        ],
      },
      {
        slug: "alinco-dr-md-500",
        name: "Alinco DR-MD 500",
        description: "VHF/UHF analog and DMR transceiver",
        image: "/catalogue/my-equipment/alinco-dr-md-500.jpg",
        specs: [
          { label: "Purpose", value: "Analog and digital communication / DXing" },
          { label: "Antenna", value: "Vertical" },
          { label: "Power output", value: "50W" },
        ],
      },
      {
        slug: "icom-ic-718",
        name: "Icom IC-718",
        description: "HF all-mode transceiver",
        image: "/catalogue/my-equipment/icom-ic-718.jpg",
        specs: [
          { label: "Purpose", value: "HF all-mode transceiver (standby rig)" },
          { label: "Antenna", value: "Homebrewed" },
          { label: "Power output", value: "HF: 100W" },
        ],
      },
      {
        slug: "baofeng-uv-5r-2",
        name: "Baofeng UV-5R",
        description: "VHF and UHF handy",
        image: "/catalogue/my-equipment/baofeng-uv-5r-2.jpg",
        specs: [
          { label: "Purpose", value: "R&D / APRS" },
          { label: "Power output", value: "1W (low), 5W (high)" },
        ],
      },
      {
        slug: "kenwood-ps-30",
        name: "Kenwood PS-30",
        description: "Power supply",
        image: "/catalogue/my-equipment/kenwood-ps-30.jpg",
        specs: [
          { label: "Purpose", value: "Power supply for rig" },
          { label: "Input voltage", value: "220V AC" },
          { label: "Output voltage", value: "13.8V 35A" },
        ],
      },
      {
        slug: "kenwood-t60",
        name: "Kenwood T60",
        description: "50MHz all mode transceiver",
        image: "/catalogue/my-equipment/kenwood-t60.jpg",
        specs: [
          { label: "Purpose", value: "6M DXing" },
          { label: "Antenna", value: "Vertical and 5 element Yagi" },
          { label: "Power output", value: "90W" },
        ],
      },
      {
        slug: "kenwood-th-d7",
        name: "Kenwood TH-D7",
        description: "144 / 430 MHz FM dual bander",
        image: "/catalogue/my-equipment/kenwood-th-d7.jpg",
        specs: [
          { label: "Purpose", value: "APRS" },
          { label: "Power output", value: "6W" },
        ],
      },
      {
        slug: "kenwood-tm-v71",
        name: "Kenwood TM-V71",
        description: "VHF/UHF transceiver",
        image: "/catalogue/my-equipment/kenwood-tm-v71.jpg",
        specs: [
          { label: "Purpose", value: "FM communication" },
          { label: "Power output", value: "10W (low), 25W (medium), 50W (high)" },
        ],
      },
      {
        slug: "network-transceiver",
        name: "Network Transceiver (Homebrewed)",
        description: "Networking device",
        image: "/catalogue/my-equipment/network-transceiver.jpg",
        specs: [
          { label: "Purpose", value: "Digital multi-mode communication" },
          { label: "Working", value: "Via internet" },
        ],
      },
      {
        slug: "vhf-uhf-swr-meter",
        name: "VHF/UHF SWR Meter",
        description: "SWR measurement",
        image: "/catalogue/my-equipment/vhf-uhf-swr-meter.jpg",
        specs: [
          { label: "Purpose", value: "Online RF analyzer" },
          { label: "Power", value: "Up to 50W" },
        ],
      },
      {
        slug: "workman-swr-power-meter",
        name: "Workman SWR & Power Meter",
        description: "SWR and power measurement",
        image: "/catalogue/my-equipment/workman-swr-power-meter.jpg",
        specs: [
          { label: "Purpose", value: "Online RF analyzer" },
          { label: "Power", value: "Up to 100W" },
        ],
      },
      {
        slug: "wouxun-vhf-uhf-handy",
        name: "Wouxun VHF/UHF Handy",
        description: "Handheld radio",
        image: "/catalogue/my-equipment/wouxun-vhf-uhf-handy.jpg",
        specs: [
          { label: "Purpose", value: "R&D / APRS testing" },
          { label: "Power", value: "1W (low), 5W (high)" },
        ],
      },
      {
        slug: "yaesu-fp-757hp",
        name: "Yaesu FP-757HP",
        description: "Power supply",
        image: "/catalogue/my-equipment/yaesu-fp-757hp.jpg",
        specs: [
          { label: "Purpose", value: "Power supply for rig" },
          { label: "Input voltage", value: "220V AC" },
          { label: "Output voltage", value: "13.8V 30A" },
        ],
      },
      {
        slug: "yaesu-ft-847",
        name: "Yaesu FT-847",
        description: "HF/VHF/UHF all-mode transceiver",
        image: "/catalogue/my-equipment/yaesu-ft-847.jpg",
        specs: [
          { label: "Purpose", value: "LEO satellite communication" },
          { label: "Antenna", value: "VHF & UHF Yagi" },
        ],
      },
    ],
  },
  {
    slug: "projects",
    name: "Projects",
    description:
      "Smaller builds and one-off projects around the shack — interfaces, adapters, and other things I've put together rather than bought.",
    items: [
      {
        slug: "cat-interface",
        name: "CAT Interface",
        description: "Computer-Aided Transceiver interface",
        image: "/catalogue/projects/cat-interface.jpg",
        specs: [
          { label: "Purpose", value: "Rig control" },
          { label: "Connection", value: "USB computer to rig CAT connection" },
          { label: "Used", value: "For digital mode and rig control with software" },
        ],
        whatsapp: true,
      },
      {
        slug: "cw-interface",
        name: "CW Interface",
        description: "Continuous Wave interface with DB-9 connector",
        image: "/catalogue/projects/cw-interface.jpg",
        specs: [
          { label: "Purpose", value: "CW receiving and transmission" },
          { label: "Connection", value: "USB computer to rig CW connection" },
          { label: "Used", value: "For CW receiving and transmission with software and keyboard" },
        ],
        whatsapp: true,
      },
      {
        slug: "mmdvm",
        name: "MMDVM",
        description: "Multi-Mode Digital Voice Modem",
        image: "/catalogue/projects/mmdvm.jpg",
        specs: [
          { label: "Purpose", value: "Multi-mode digital voice communication" },
          { label: "Connection", value: "WiFi & controlled by VHF/UHF rig" },
          { label: "Antenna", value: "VHF/UHF MMDVM antenna" },
          { label: "Power output", value: "VHF/UHF: 100mW" },
        ],
        whatsapp: true,
      },
      {
        slug: "mmdvm-blue",
        name: "MMDVM Blue",
        description: "Blue-colored Multi-Mode Digital Voice Modem",
        image: "/catalogue/projects/mmdvm-blue.jpg",
        specs: [
          { label: "Purpose", value: "Multi-mode digital voice communication" },
          { label: "Connection", value: "WiFi & controlled by VHF/UHF rig" },
          { label: "Antenna", value: "VHF/UHF MMDVM antenna" },
          { label: "Power output", value: "VHF/UHF: 100mW" },
        ],
        whatsapp: true,
      },
      {
        slug: "power-supply",
        name: "Power Supply",
        description: "General power supply (4 terminals)",
        image: "/catalogue/projects/power-supply.jpg",
        specs: [
          { label: "Purpose", value: "Power distribution for multi rig" },
          { label: "Input voltage", value: "220V AC" },
          { label: "Output voltage", value: "13.8V 30A" },
        ],
      },
      {
        slug: "raspberry-pi-setup",
        name: "Raspberry Pi Setup",
        description: "Setup for Raspberry Pi",
        image: "/catalogue/projects/raspberry-pi-setup.jpg",
        specs: [
          { label: "Purpose", value: "Simultaneously using multiple Raspberry Pi for various projects" },
          { label: "Used", value: "Ham-Pi, AllStar Link, USRP" },
          { label: "Interfaces", value: "Mobile / Monitor" },
        ],
        whatsapp: true,
      },
      {
        slug: "uhf-handheld-antenna",
        name: "UHF Handheld Antenna",
        description: "UHF handheld radio antenna",
        image: "/catalogue/projects/uhf-handheld-antenna.jpg",
        specs: [
          { label: "Purpose", value: "Receiving and transmitting to satellite with handy" },
        ],
        whatsapp: true,
      },
      {
        slug: "usrp-master",
        name: "USRP Master",
        description: "Universal Software Radio Peripheral master",
        image: "/catalogue/projects/usrp-master.jpg",
        specs: [
          { label: "Purpose", value: "Working for multi digital mode" },
          { label: "Used", value: "Software USRP" },
          { label: "Interfaces", value: "Mobile with DV switch software / Monitor" },
        ],
        whatsapp: true,
      },
      {
        slug: "voltage-power-reader",
        name: "Voltage & Current Reader",
        description: "Device for reading voltage and current",
        image: "/catalogue/projects/voltage-power-reader.jpg",
        specs: [
          { label: "Used", value: "Power connection for less than 10A instrument" },
        ],
      },
    ],
  },
]

export function getShackCategory(slug: string) {
  return shackCategories.find((category) => category.slug === slug)
}

export function getShackCategoryCount() {
  return shackCategories.reduce((sum, category) => sum + category.items.length, 0)
}

export function getEquipmentItem(categorySlug: string, itemSlug: string) {
  const category = getShackCategory(categorySlug)
  if (!category) return undefined

  const item = category.items.find((entry) => entry.slug === itemSlug)
  if (!item) return undefined

  return { item, category }
}
