import React, { useState, useEffect } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { useRouter } from "next/router";
const AccordionItem = ({ data, active, setActive, id, imageUrl, toUrl }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(active === id);

  useEffect(() => {
    setIsOpen(active === id);
  }, [active]);

  const toggleAccordion = () => {
    if (active === id) {
      setActive(-1);
    } else setActive(id);
  };

  return (
    <div
      className="landing-panel mb-4 shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_16px_rgba(57,255,20,0.15)] dark:hover:shadow-[0_0_16px_rgba(57,255,20,0.2)]"
      onClick={() => {
        if (toUrl !== "") {
          router.push(toUrl);
        }
      }}
    >
      <div
        className={`flex justify-between items-center p-2 px-4 ${
          toUrl !== "" ? "cursor-pointer" : ""
        } transition-all duration-300 ease-out`}
      >
        <h2 className="landing-h2 font-medium text-lg transition-colors duration-300 ease-out">
          {data.title}
        </h2>

        <span
          className="duration-300 border border-slate-300 dark:border-[#39ff14]/40 p-2 rounded-lg cursor-pointer text-amber-600 dark:text-[#39ff14] hover:bg-amber-500/10 dark:hover:bg-[#39ff14]/10 transition-colors"
          onClick={(e) => {
            toggleAccordion();
            e.stopPropagation();
          }}
        >
          <BsCaretDownFill
            className={`duration-300 transform ${isOpen ? "rotate-180" : ""}  `}
          />
        </span>
      </div>
      <div
        className={`overflow-hidden cursor-pointer transition-all duration-300 
  ${isOpen ? "max-h-[5000px]" : "max-h-0"}
  `}
      >
        <div className="p-4 pb-5 border-t border-slate-200 dark:border-[#39ff14]/25">
          <div className="flex flex-col md:flex-row justify-center">
            {imageUrl !== "" && (
              <div className="md:w-1/2 rounded-sm p-2">
                <img
                  src={imageUrl}
                  className=" w-full rounded-lg md:max-w-none md:h-auto"
                  alt={data.title}
                />
              </div>
            )}

            <div className="md:w-1/2 p-2 landing-body">{data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
