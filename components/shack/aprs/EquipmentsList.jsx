import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/APRS/aprsWeatherStation.jpg",
      name: "APRS Weather Station",
      description: "Automatic Packet Reporting System Weather Station",
      metrics: [
        {
          displayName: "purpose",
          description: "Sending weather data to APRS server",
        },
        {
          displayName: "Sensor",
          description: "weather sensor",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/APRS/kenwoodTm-d7.jpg",
      name: "Kenwood TM-D7",
      description: "144 / 430 MHz FM Dual Bander",
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
      contactForImpedance: false,
    },
    {
      imgSrc: "/APRS/yaesu2600m+tnc.jpg",
      name: "Yaesu 2600M + TNC",
      description: "Yaesu 2600M with Terminal Node Controller",
      metrics: [
        {
          displayName: "purpose",
          description: "APRS digipeater 144.390Mhz",
        },
        {
          displayName: "Connectivity",
          description: "Ethernet ",
        },
        {
          displayName: "Power output",
          description: "50W",
        },
      ],
      contactForImpedance: false,
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
