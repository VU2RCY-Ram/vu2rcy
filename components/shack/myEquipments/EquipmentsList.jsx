import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/my_equipments/13.8v35aPowerSuply.jpg",
      name: "Power Supply",
      description: "13.8V 35A Power Supply",
      metrics: [
        {
          displayName: "purpose",
          description: "Power suply for rig",
        },
        {
          displayName: "input Voltage",
          description: "220V AC",
        },
        {
          displayName: "output Voltage",
          description: "13.8V 35A",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/13.8vPowerSuply.jpg",
      name: "Power Supply",
      description: "Axiom 13.8V Power Supply",
      metrics: [
        {
          displayName: "purpose",
          description: "Power supply for rig",
        },
        {
          displayName: "input Voltage",
          description: "220V AC",
        },
        {
          displayName: "output Voltage",
          description: "13.8V 15A",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/alincoDj-md5DmrVhf-uhfHandy.jpg",
      name: "Alinco DJ-MD5",
      description: "Analog and DMR VHF/UHF Handy",
      metrics: [
        {
          displayName: "purpose",
          description: "Analog and DMR VHF/UHF",
        },
        {
          displayName: "Output power",
          description: "5W",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/baofengUv-5rVhf-uhfHandy.jpg",
      name: "Baofeng UV-5R",
      description: "VHF/UHF Handy",
      metrics: [
        {
          displayName: "purpose",
          description: "Analog VHF/UHF",
        },
        {
          displayName: "Output power",
          description: "1w (low) 5W (high)",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/dimendSx-1100(1).jpg",
      name: "Diamond SX-1100",
      description: "Testing Instrument",
      metrics: [
        {
          displayName: "purpose",
          description: "Power and SWR meter",
        },
        {
          displayName: "Testing range",
          description: "1Ghz",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/icomHandy.jpg",
      name: "Icom Handy IC-T90A",
      description: "Handheld Radio",
      metrics: [
        {
          displayName: "Purpose",
          description: "50Mhz handy with FM",
        },
        {
          displayName: "Power",
          description: "5W",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/icomIc-7000.jpg",
      name: "Icom IC-7000",
      description: "HF/VHF/UHF All-Mode Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "HF/VHF/UHF all mode all band (stand by rig)",
        },
        {
          displayName: "VHF/UHF Antenna",
          description: "vertical diamond 510X ",
        },
        {
          displayName: "VHF Antenna",
          description: "homebrew 9 element yagi",
        },
        {
          displayName: "Power output",
          description: "HF : 100W VHF : 50W, UHF : 25W ",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/icomIc-7000Hf-vhf-uhfAllModeTransceiver.jpg",
      name: "ALINCO DR-MD 500",
      description: "VHF/UHF Analog and DMR Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "Analog and digital communication/DXing",
        },

        {
          displayName: "Antenna",
          description: "Vertical",
        },
        {
          displayName: "Power output",
          description: " 50W ",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/icomIc-718HfAllModeTransceiver.jpg",
      name: "Icom IC-718",
      description: "HF All-Mode Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "HF All-Mode Transceiver (standby Rig)",
        },

        {
          displayName: "Antenna",
          description: "Homebrewed",
        },
        {
          displayName: "Power output",
          description: "HF : 100W",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/img_20231209_125138.jpg",
      name: "Baofeng UV-5R",
      description: "VHF and UHF handy",
      metrics: [
        {
          displayName: "purpose",
          description: "R & D / APRS",
        },

        {
          displayName: "Power output",
          description: "1W (low), 5W(high)",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/kenwoodPs-30PowerSuply.jpg",
      name: "Kenwood PS-30",
      description: "Power Supply",
      metrics: [
        {
          displayName: "purpose",
          description: "Power suply for rig",
        },
        {
          displayName: "input Voltage",
          description: "220V AC",
        },
        {
          displayName: "output Voltage",
          description: "13.8V 35A",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/kenwoodT60.jpg",
      name: "Kenwood T60",
      description: "50 Mhz all mode transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "6M Dxing",
        },
        {
          displayName: "Antenna",
          description: "Vertical and 5 Element Yagi",
        },
        {
          displayName: "Power output",
          description: "90W",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/kenwoodTm-d7.jpg",
      name: "Kenwood TH-D7",
      description: "144 / 430 MHz FM Dual Bander  ",
      metrics: [
        {
          displayName: "purpose",
          description: "APRS",
        },

        {
          displayName: "Power output",
          description: "6W",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/kenwoodTm-v71Vhf-uhfTransceiver.jpg",
      name: "Kenwood TM-V71",
      description: "VHF/UHF Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "FM Communication",
        },

        {
          displayName: "Power output",
          description: "10W(low) 25W(Medium) 50W(high)",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/networkTransceiver.jpg",
      name: "Network Transceiver (Homebrewed)",
      description: "Networking Device",
      metrics: [
        {
          displayName: "purpose",
          description: "Digital Multi mode communication",
        },
        {
          displayName: "Working",
          description: "Via internet",
        },
      ],
    },

    {
      imgSrc: "/my_equipments/vhf-uhfSwrMeter.jpg",
      name: "VHF/UHF SWR Meter",
      description: "SWR Measurement",
      metrics: [
        {
          displayName: "purpose",
          description: "On Line RF analyzer",
        },
        {
          displayName: "Power",
          description: "upto 50W",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/workmanSwr&powerMeter.jpg",
      name: "Workman SWR & Power Meter",
      description: "SWR and Power Measurement",
      metrics: [
        {
          displayName: "purpose",
          description: "On Line RF analyzer",
        },
        {
          displayName: "Power",
          description: "upto 100W",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/wouxunVhf-uhfHandy.jpg",
      name: "Wouxun VHF/UHF Handy",
      description: "Handheld Radio",
      metrics: [
        {
          displayName: "purpose",
          description: "R & D / APRS testing",
        },
        {
          displayName: "Power",
          description: "1W(Low) 5W(High)",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/yaesuFp-757hp.jpg",
      name: "Yaesu FP-757HP",
      description: "Power Supply",
      metrics: [
        {
          displayName: "purpose",
          description: "Power suply for rig",
        },
        {
          displayName: "input Voltage",
          description: "220V AC",
        },
        {
          displayName: "output Voltage",
          description: "13.8V 30A",
        },
      ],
    },
    {
      imgSrc: "/my_equipments/yaesuFt-847Hf-vhf-uhfAllModeTransceiver.jpg",
      name: "Yaesu FT-847",
      description: "HF/VHF/UHF All-Mode Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "LEO satellite communication",
        },
        {
          displayName: "Antenna",
          description: "VHF & UHF yagi",
        },
      ],
    },
  ];

  const [load, setLoad] = useState(false);
  useEffect(() => setLoad(true), []);
  const cardBackground = "shack-card";
  return (
    <div>
      {load && (
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {data.map((ele, id) => (
            <div
              key={id}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.67rem)] xl:w-[calc(25%-1.125rem)] max-w-md"
            >
              <EquipmentsCard data={ele} cardBackground={cardBackground} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EquipmentsList;
