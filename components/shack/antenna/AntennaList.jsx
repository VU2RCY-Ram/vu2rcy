import AntennaCard from "./AntennaCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const AntennaList = () => {
  const antennaTypes = {
    DipoleAntenna: {
      displayName: "Dipole Antenna",
      description:
        "Simple T-shaped antenna with two equal segments, commonly used and versatile.",
    },
    YagiUdaAntenna: {
      displayName: "Yagi-Uda Antenna",
      description:
        "Directional antenna with multiple elements, providing gain and directivity.",
    },
    VerticalAntenna: {
      displayName: "Vertical Antenna",
      description:
        "Consists of a vertical radiator over a ground plane, efficient for local communications.",
    },
    LoopAntenna: {
      displayName: "Loop Antenna",
      description:
        "Closed circuit loop of wire or tubing, available in various sizes for different applications.",
    },
    WireAntenna: {
      displayName: "Wire Antenna",
      description:
        "Simple and cost-effective antenna, including random wire antennas and long wire antennas.",
    },
    LogPeriodicAntenna: {
      displayName: "Log-Periodic Antenna",
      description:
        "Wideband antenna with elements of varying lengths, covering a broad frequency range.",
    },
    G5RVAntenna: {
      displayName: "G5RV Antenna",
      description:
        "Multi-band dipole antenna designed for efficient performance on several ham radio bands.",
    },
    QuadAntenna: {
      displayName: "Quad Antenna",
      description:
        "Loop antenna with square or rectangular shapes, offering gain and directivity.",
    },
    InvertedVAntenna: {
      displayName: "Inverted V Antenna",
      description:
        "Dipole antenna with ends elevated to form a V shape, suitable for limited-space installations.",
    },
    JPoleAntenna: {
      displayName: "J-Pole Antenna",
      description:
        "Vertical or slanting dipole antenna with a matching section for compact and easy construction.",
    },
    GroundPlaneAntenna: {
      displayName: "Ground Plane Antenna",
      description:
        "Vertical radiator over a ground plane, enhancing antenna efficiency.",
    },
    RhombicAntenna: {
      displayName: "Rhombic Antenna",
      description:
        "High-gain wire antenna with diamond-shaped elements, directional for long-distance communication.",
    },
    VerticalDipoleAntenna: {
      displayName: "Vertical Dipole Antenna",
      description:
        "Similar to a dipole but with one element pointing up and the other down, used in various scenarios.",
    },
    MagneticLoopAntenna: {
      displayName: "Magnetic Loop Antenna",
      description:
        "Compact loop antenna with a tuning capacitor, suitable for limited-space environments.",
    },
  };

  const antennas = [
    {
      imgSrc: "/antenna/6mGpAntenna.jpg",
      name: "Ground plane",
      description: "6m ground plane antenna",
      materials: "Aluminum",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
      contactForImpedance: true,
    },
    {
      imgSrc: "/antenna/hf6ElementBeam.jpg",
      name: "6 Element beam",
      description: "HF 6 Element beam",
      materials: "copper",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
      contactForImpedance: true,
    },
    {
      imgSrc: "/antenna/qo-1006FeetDishAntenna.jpg",
      name: "Dish Antenna",
      description: "qo-100 6 Feet Dish Antenna",
      materials: "copper",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    // {
    //   imgSrc: "/antenna/slimjim2.jpg",
    //   name: "Slim Jim",
    //   description: "Slim jim antenna",
    //   materials: "copper",
    //   metrics: {
    //     frequencyRange: "14 MHz - 30 MHz",
    //     resonantFrequency: "21 MHz",
    //     gain: "6 dBi",
    //     radiationPattern: "Directional",
    //     polarization: "Vertical",
    //     swr: 1.5,
    //     impedance: "50 ohms",
    //     bandwidth: "300 kHz",
    //     frontToBackRatio: "20 dB",
    //     powerHandling: "100 Watts",
    //     dimensions: {
    //       length: "5 meters",
    //       width: "2 meters",
    //       height: "1 meter",
    //     },
    //   },
    // },
    {
      imgSrc: "/antenna/uhf-VhfYagiSatelliteAntenna.jpg",
      name: "Yagi",
      description: "UHF & VHF Yagi Satellite Antenna",
      materials: "copper",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
      contactForImpedance: true,
    },
    {
      imgSrc: "/antenna/uhf10elimentYagi.jpg",
      name: "10 Element Yagi",
      description: "10 Element Yagi for UHF",
      materials: "copper",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/uhfSlimJim.jpg",
      name: "UHF SlimJim",
      description: "UHF SlimJim Antenna",
      materials: "aluminum ",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
      contactForImpedance: true,
    },
    {
      imgSrc: "/antenna/uhfVertical.jpg",
      name: "UHF Vertical",
      description: "UHF Vertical Antenna",
      materials: "copper",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
      contactForImpedance: true,
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "Yagii",
      description: "Yagii",
      materials: "copper",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
  ];
  const [load, setLoad] = useState(false);
  useEffect(() => setLoad(true), []);
  const cardBackground = "shack-card";
  return (
    <div>
      {load && (
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {antennas.map((antenna, id) => (
            <div
              key={id}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.67rem)] xl:w-[calc(25%-1.125rem)] max-w-md"
            >
              <AntennaCard
                antenna={antenna}
                cardBackground={cardBackground}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AntennaList;
