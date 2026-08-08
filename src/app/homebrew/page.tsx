import type { Metadata } from "next";
import {
  AudioWaveformIcon,
  CpuIcon,
  GlobeIcon,
  LayersIcon,
  MapPinIcon,
  RadioIcon,
  Share2Icon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Modes",
  description:
    "The radio and digital modes I work, from Morse code to DMR, D-STAR and APRS.",
});

const modes = [
  {
    name: "Morse Code (CW)",
    icon: AudioWaveformIcon,
    description:
      "The original digital mode: on/off keying of a continuous-wave carrier, sent and read by ear.",
  },
  {
    name: "XLX Reflectors",
    icon: Share2Icon,
    description:
      "Servers that link repeaters and hotspots across different digital voice networks together, so operators on different systems can talk to each other.",
  },
  {
    name: "D-STAR",
    icon: RadioIcon,
    description:
      "A digital voice protocol with its own reflector network for linking repeaters over the internet for wider reach.",
  },
  {
    name: "MMDVM",
    icon: CpuIcon,
    description:
      "A multi-mode digital voice modem that lets one radio talk to DMR, D-STAR and C4FM networks instead of needing a separate radio for each.",
  },
  {
    name: "APRS",
    icon: MapPinIcon,
    description:
      "Automatic Packet Reporting System: broadcasts real-time position and short text messages over VHF, picked up by other stations and internet gateways.",
  },
  {
    name: "EchoLink",
    icon: GlobeIcon,
    description:
      "Links a radio station to the internet over VoIP, so it can reach other stations and repeaters worldwide, not just ones in range.",
  },
  {
    name: "DMR",
    icon: LayersIcon,
    description:
      "Digital Mobile Radio: a digital voice standard that fits two conversations into the channel space one analog FM signal would use.",
  },
];

export default function HomebrewPage() {
  return (
    <div
      id="homebrew-page"
      className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10"
    >
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Modes</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          These are the radio and digital modes I use on air, from
          century-old Morse code to modern digital voice.
        </p>
      </div>

      <div
        id="homebrew-modes-grid"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {modes.map((mode) => (
          <Card
            key={mode.name}
            id={`mode-${mode.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            <CardHeader>
              <mode.icon className="size-6 text-primary" />
              <CardTitle className="mt-2 text-base">{mode.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {mode.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
