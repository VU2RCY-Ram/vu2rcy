// Phone apps for the kits. Ram's copy is from his YouTube descriptions;
// the other two apps' copy and logos are from their official sites and repos.

export type AppLink = { label: string; href: string; kind: "video" | "store" | "site" }

export type App = {
  slug: string
  name: string
  icon: string
  // true for apps Ram made himself.
  own: boolean
  // Empty until Ram sends details.
  description: string
  links: AppLink[]
}

export const apps: App[] = [
  {
    slug: "master-aprs-app",
    name: "MASTER-APRS",
    icon: "/catalogue/apps/master-aprs.jpg",
    own: true,
    // Ram's YouTube descriptions (videos xaoiJ7dbooA, FGi_cijZDdo).
    description:
      "My Android app for APRS. Send messages, beacons and status updates, and see them show up on aprs.fi.",
    links: [
      { label: "Watch video", href: "https://www.youtube.com/watch?v=xaoiJ7dbooA", kind: "video" },
      { label: "Watch short", href: "https://www.youtube.com/shorts/FGi_cijZDdo", kind: "video" },
    ],
  },
  {
    slug: "master-modem",
    name: "MASTER MODEM",
    icon: "/catalogue/apps/master-modem.jpg",
    own: true,
    description: "",
    links: [],
  },
  {
    slug: "aprsdroid",
    name: "APRSdroid",
    icon: "/catalogue/apps/aprsdroid.png",
    own: false,
    // aprsdroid.org, "What is APRSdroid?" and "Features".
    description:
      "Android app for APRS: report your position, see nearby stations and exchange messages. Connects over APRS-IS, an audio cable to your radio, or a Bluetooth TNC.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=org.aprsdroid.app", kind: "store" },
      { label: "Website", href: "https://aprsdroid.org/", kind: "site" },
    ],
  },
  {
    slug: "rattlegram",
    name: "Rattlegram",
    icon: "/catalogue/apps/rattlegram.png",
    own: false,
    // github.com/aicodix/rattlegram README.
    description:
      "Sends and receives short text messages as audio, up to 170 bytes in about a second.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.aicodix.rattlegram", kind: "store" },
      { label: "Source", href: "https://github.com/aicodix/rattlegram", kind: "site" },
    ],
  },
]
