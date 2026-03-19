import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/hf/ic706.jpg",
      name: "Icom IC-706MK2G ",
      description: "HF/VHF/UHF All-Mode Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "voice and digital modes in HF/VHF/UHF",
        },
        {
          displayName: "HF frequency",
          description: " 1.8mhz - 30mhz all mode",
        },
        {
          displayName: "VHF frequency",
          description: " 144mhz - 146mhz all mode",
        },
        {
          displayName: "UHF frequency",
          description: " 434mhz - 438mhz all mode",
        },
        {
          displayName: "using with",
          description: "digiface pro for all digital mode",
        },
        {
          displayName: "HF antenna",
          description: "6 element yagi with rotator yaesu G-800DXA",
        },
        {
          displayName: "HF antenna",
          description: "endfeed 160m to 10m",
        },
        {
          displayName: "VHF antenna",
          description: "5 element yagi for 50mhz",
        },
        {
          displayName: "power output",
          description: "HF : 100W, VHF : 50W, UHF : 25W",
        },
      ],
    },
    // {
    //   imgSrc: "/hf/icomic-706mk2g.jpg",
    //   name: "Icom IC-706",
    //   description: "HF/VHF/UHF All-Mode Transceiver",
    //   metrics: [
    //     {
    //       displayName: "purpose",
    //       description: "satellite communication",
    //     },
    //     {
    //       displayName: "up converter",
    //       description: "dx patrol",
    //     },
    //     {
    //       displayName: "amplifier",
    //       description: "home made amplifier",
    //     },
    //     {
    //       displayName: "QO-100 antenna",
    //       description: "6ft dish with modified LNB",
    //     },
    //     {
    //       displayName: "using with",
    //       description: "analog and digiface pro for all digital mode",
    //     },
    //   ],
    // },
    {
      imgSrc: "/hf/icomic-718hfallmodetransceiver.jpg",
      name: "Icom IC-718",
      description: "HF All-Mode Transceiver (Stand by rig)",
      metrics: [
        {
          displayName: "purpose",
          description: "voice and digital modes in HF ",
        },
        {
          displayName: "HF frequency",
          description: " 1.8mhz - 30mhz all mode",
        },

        {
          displayName: "using with",
          description: "digiface pro for all digital mode",
        },
        {
          displayName: "HF antenna",
          description: "endfeed homebrew antenna 160m to 10m",
        },
        {
          displayName: "HF antenna",
          description: "homebrew dipole 40m and 20m",
        },
        {
          displayName: "power output",
          description: "HF : 100W",
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
