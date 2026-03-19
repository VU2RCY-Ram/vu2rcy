import ContactForImpedance from "@/components/ContactForImpedance";
import EquipmentDetailsModal from "@/components/EquipmentDetailsModal";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

const EquipmentsCard = ({ data, cardBackground }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const detailsContent = (
    <>
      {data.materials && (
        <div className="mb-4">
          <span className="font-semibold text-slate-700 dark:text-slate-200">Materials:</span>{" "}
          <span className="landing-body">{data.materials}</span>
        </div>
      )}
      {data.metrics?.map((ele, id) => (
        <div className="mb-4" key={id}>
          <span className="font-semibold capitalize text-slate-700 dark:text-slate-200">{ele.displayName}:</span>{" "}
          <span className="landing-body capitalize">{ele.description}</span>
        </div>
      ))}
      {data.contactForImpedance && <ContactForImpedance />}
    </>
  );

  return (
    <>
      <div
        className={`${cardBackground} rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:border-amber-500/30 dark:hover:border-[#39ff14]/30`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-square w-full">
          <Image
            alt={data?.name || "equipment"}
            src={data?.imgSrc || ""}
            quality={85}
            loading="lazy"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent>
          <Typography variant="h5" className="font-console capitalize text-slate-700 dark:text-slate-200" component="div">
            {data?.name || "test"}
          </Typography>
          <Typography variant="body2" className="text-justify text-slate-600 dark:text-slate-300">{data?.description}</Typography>
        </CardContent>
      </div>
      <EquipmentDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={data?.name}
        imageSrc={data?.imgSrc}
      >
        {detailsContent}
      </EquipmentDetailsModal>
    </>
  );
};

export default EquipmentsCard;
