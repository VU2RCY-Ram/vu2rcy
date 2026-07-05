const projectsData = [
  {
    slug: "aprs-weather-station",
    title: "APRS Weather Station",
    image: "/APRS/aprsWeatherStation.jpg",
    description:
      "A compact APRS weather station setup that captures local conditions and publishes weather telemetry through APRS infrastructure for real-time visibility.",
    tags: ["APRS", "Weather", "Telemetry"],
    sections: [
      {
        title: "Overview",
        content:
          "A compact APRS weather station setup that captures local conditions and publishes weather telemetry through APRS infrastructure for real-time visibility.",
      },
      {
        title: "Build",
        content:
          "Typical APRS weather builds combine a weather sensor suite (wind, temperature, humidity, pressure, rain), a controller, and an APRS encoder/TNC path to an iGate. The weather payload usually includes wind direction/speed, gust, temperature, rain counters, humidity, and barometric pressure fields before uplink.",
      },
      {
        title: "Notes",
        content:
          "Most APRS weather implementations keep timing predictable (for example fixed report intervals) and only publish fields that are available from the current sensor stack. Positionless weather frames and complete reports can both be used depending on whether GPS/location framing is needed.",
      },
    ],
    links: [
      { label: "APRSpedia Weather Field", url: "https://aprspedia.com/doku.php?id=aprs_protocols%3Ainformation_field%3Aweather_field" },
      { label: "APRS WX Notes", url: "https://www.aprs.org/APRS-docs/WX.TXT" },
    ],
  },
  {
    slug: "mmdvm-blue",
    title: "MMDVM Blue",
    image: "/projects/mmdvmblue.jpg",
    description:
      "Multi-mode digital voice modem build focused on reliable hotspot operation and clean integration for ham digital voice workflows.",
    tags: ["Digital Voice", "MMDVM"],
    sections: [
      {
        title: "Overview",
        content:
          "Multi-mode digital voice modem build focused on reliable hotspot operation and clean integration for ham digital voice workflows.",
      },
      {
        title: "Integration",
        content:
          "The hotspot chain is Raspberry Pi + MMDVM modem board + software stack (commonly Pi-Star and MMDVMHost). A standard integration flow sets callsign, radio ID, frequency, modem profile, and then enables target modes like DMR, D-Star, YSF, P25, or NXDN based on station needs.",
      },
      {
        title: "Notes",
        content:
          "Cross-mode operation can bridge otherwise separate ecosystems (examples include YSF2DMR and YSF2P25). In practice, stability improves after modem calibration, BER checks, and regular firmware/software updates so the host and network gateways stay compatible.",
      },
    ],
    links: [
      { label: "MMDVMHost Repository", url: "https://github.com/sfowlr/MMDVMHost" },
      { label: "Pi-Star Intro Guide", url: "https://mckinneyarc.org/wp-content/uploads/2019/03/intro-to-pi-star-marc.pdf" },
    ],
  },
  {
    slug: "bench-power-supply",
    title: "Bench Power Supply",
    image: "/projects/powerSupply.jpg",
    description:
      "A practical bench power setup designed for shack experiments, stable outputs, and easy monitoring during prototyping sessions.",
    tags: [],
    sections: [
      {
        title: "Overview",
        content:
          "A regulated bench power supply built for ham-radio lab use, APRS tracker prototyping, and day-to-day shack electronics testing.",
      },
      {
        title: "Power Rails",
        content:
          "Provides clean and stable output rails suitable for low-voltage APRS boards, microcontrollers, and RF accessory modules used in experiments.",
      },
      {
        title: "Ham/APRS Use Cases",
        content:
          "Used to power APRS weather modules, packet radio interface circuits, and bench diagnostics before final station deployment.",
      },
      {
        title: "Protection",
        content:
          "Recommended safety layers for shack supplies include current limiting, overload cutoff, and over-voltage protection. For transceiver reliability, operators often size output current with headroom (around 25 to 30 percent above expected draw) so voltage remains stable during transmit peaks.",
      },
      {
        title: "Notes",
        content:
          "Linear supplies are usually preferred when minimum RF noise is critical, while modern ham-grade switching supplies are selected when efficiency and compact size matter. Final selection is usually a trade-off between noise floor, weight, thermal behavior, and operating duty cycle.",
      },
    ],
    links: [
      { label: "Ham Power Supply Basics", url: "https://samlexamerica.com/best-ac-dc-power-supply-for-your-ham-radio-setup/" },
      { label: "Linear vs Switching (Ham)", url: "https://shack-in-a-rack.com/pages/switching-vs-linear-power-supplies-for-ham-radio-pros-cons" },
    ],
  },
];

export default projectsData;
