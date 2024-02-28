import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const EquipmentsCard = ({ data, cardBackground }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className=" rounded-xl cursor-pointer overflow-hidden relative  ">
      {!showDetails && (
        <div
          className={`${cardBackground} card-content transition`}
          onClick={toggleDetails}
        >
          <div style={{ position: "relative" }}>
            <Image
              alt={data?.name || "test"}
              src={data?.imgSrc || ""}
              quality={85}
              loading="lazy"
              width={500}
              height={500}
            />
          </div>
          <CardContent>
            <Typography variant="h5" className="capitalize" component="div">
              {data?.name || "test"}
            </Typography>
            <Typography variant="body2">{data?.description}</Typography>
          </CardContent>
        </div>
      )}
      {showDetails && (
        <div
          className={`${cardBackground}   transition`}
          onClick={toggleDetails}
        >
          <CardContent>
            <div
              className={`${cardBackground} border inset-5 max-w-md mx-auto  rounded-xl overflow-hidden  p-6 mb-6`}
            >
              {data.name && (
                <h2 className="text-2xl font-semibold mb-4">{data.name}</h2>
              )}

              {data.materials && (
                <div className="mb-4">
                  <span className="font-semibold">Materials:</span>{" "}
                  {data.materials}
                </div>
              )}

              {data.metrics.map((ele, id) => {
                return (
                  <div className="mb-4" key={id}>
                    <span className="font-semibold">{ele.displayName}:</span>{" "}
                    {ele.description}
                  </div>
                );
              })}
              {data.contactForImpedance && (
                <a
                  href="https://wa.me/7388407388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex align-middle items-center font-jak sm:text-lg md:text-xl space-x-1 w-max p-2 font-extrabold"
                >
                  <BsWhatsapp className=" dark:text-[#ff339c] text-fuchsia-700 h-3 w-3 md:h-4 md:w-4 " />
                  <h5 className=" dark:text-[#ff339c] text-fuchsia-700">
                    Contact For Impedance
                  </h5>
                </a>
              )}
            </div>
          </CardContent>
        </div>
      )}
    </div>
  );
};

export default EquipmentsCard;
