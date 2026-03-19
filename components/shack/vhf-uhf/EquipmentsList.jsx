import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/uhf_vhf/AlincoDrDm500.jpeg",
      name: "Alinco DR-DM500",
      description: "VHF and UHF",
      metrics: [
        {
          displayName: "purpose",
          description: "FM voice and DMR",
        },
        {
          displayName: "VHF/UHF Antenna",
          description: "vertical diamond 510X ",
        },
        {
          displayName: "VHF Antenna",
          description: "homebrew  element yagi",
        },
        {
          displayName: "Power output",
          description: "VHF : 50W, UHF : 25W ",
        },
      ],
    },
  ];

  const { theme } = useTheme();
  const [cardBackground, setCardBackground] = useState("display-none");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (theme) {
      setCardBackground("shack-card");
      setLoad(true);
    }
  }, [theme]);
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
