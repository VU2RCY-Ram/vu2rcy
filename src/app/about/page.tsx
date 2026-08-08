import type { Metadata } from "next";
import Image from "next/image";
import {
  ExternalLinkIcon,
  MailIcon,
  MessageCircleIcon,
  RadioIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { WHATSAPP_LINK } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "I'm M G Ramachandran, VU2RCY — a licensed amateur radio operator in India since 1988, working HF, VHF/UHF, APRS, digital modes and satellite communication.",
  image: "/catalogue/about/vu2rcy-portrait.jpg",
});

const expertise = [
  "Radio Tech",
  "Antenna Design",
  "DXpeditions",
  "Propagation",
  "QRP Operations",
  "Digital Modes",
  "Contesting",
];

const licensedYear = 1988;

const connections = [
  {
    label: "Message on WhatsApp",
    href: WHATSAPP_LINK,
    icon: MessageCircleIcon,
    primary: true,
  },
  {
    label: "Email",
    href: "mailto:vu2rcy+social@gmail.com",
    icon: MailIcon,
    primary: false,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/vu2rcy",
    icon: ExternalLinkIcon,
    primary: false,
  },
  {
    label: "QRZ.com",
    href: "https://www.qrz.com/db/VU2RCY",
    icon: ExternalLinkIcon,
    primary: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/VU2RCY-RAM",
    icon: ExternalLinkIcon,
    primary: false,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/VU2RCY/",
    icon: ExternalLinkIcon,
    primary: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/VU2RCY/",
    icon: ExternalLinkIcon,
    primary: false,
  },
];

export default function AboutPage() {
  const yearsExperience = new Date().getFullYear() - licensedYear;

  return (
    <div id="about-page" className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
      <div
        id="about-intro"
        className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left"
      >
        <div className="size-32 shrink-0 overflow-hidden rounded-2xl border-2 border-foreground/20 sm:size-40">
          <Image
            src="/catalogue/about/vu2rcy-portrait.jpg"
            alt="M G Ramachandran, VU2RCY"
            width={320}
            height={320}
            className="size-full object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            M G Ramachandran
          </h1>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-muted-foreground sm:justify-start">
            <RadioIcon className="size-4 text-primary" />
            VU2RCY · Licensed Amateur Radio Operator
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            I&apos;ve been a ham radio operator since {licensedYear}. I
            started out as VU3MGR under India&apos;s Restricted Grade,
            limited to VHF and UHF, and later upgraded to the General Grade
            as VU2RCY, which added HF. Since then I&apos;ve explored a wide
            range of bands and modes, including satellite communication,
            and built a fair amount of my own gear along the way.
          </p>

          <div
            id="about-expertise"
            className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start"
          >
            {expertise.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div id="about-stats" className="flex flex-wrap justify-center gap-8 text-center sm:justify-start sm:text-left">
        <div>
          <p className="text-3xl font-semibold text-primary">
            {yearsExperience}
          </p>
          <p className="text-sm text-muted-foreground">Years of experience</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-primary">
            VU3MGR <span className="text-xl text-muted-foreground">→</span>{" "}
            VU2RCY
          </p>
          <p className="text-sm text-muted-foreground">License upgrade</p>
        </div>
      </div>

      <Separator className="my-8" />

      <div id="about-journey" className="max-w-2xl space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">My journey</h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          On HF I&apos;ve worked the full range, from 160m at 1.8MHz up to
          10m at 28MHz. VHF has kept me busy at 50MHz and 144MHz, and UHF at
          435MHz, mostly through a homebrew MMDVM hotspot I built for
          digital voice.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          I also run APRS on 144.390MHz, and I&apos;ve operated three
          Winlink RMS HF gateways: PACTOE-1, PACTOE-2 and PACTOE-3.
          Satellite communication rounds out the list.
        </p>
      </div>

      <Separator className="my-8" />

      <div id="about-connect" className="max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight">
          Get in touch
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          If you share the same interest in ham radio, or just want to
          talk shop, reach out on any of these.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {connections.map((connection) => (
            <Button
              key={connection.label}
              variant={connection.primary ? "default" : "outline"}
              nativeButton={false}
              render={
                <a
                  href={connection.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <connection.icon />
              {connection.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
