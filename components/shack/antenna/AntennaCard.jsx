import ContactForImpedance from "@/components/ContactForImpedance";
import EquipmentDetailsModal from "@/components/EquipmentDetailsModal";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

const MetricRow = ({ label, value }) =>
  value ? (
    <div className="mb-4">
      <span className="font-semibold text-slate-700 dark:text-slate-200">{label}:</span>{" "}
      <span className="landing-body">{String(value)}</span>
    </div>
  ) : null;

const AntennaCard = ({ antenna, cardBackground }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const m = antenna?.metrics || {};

  const detailsContent = (
    <>
      {antenna.materials && (
        <div className="mb-4">
          <span className="font-semibold text-slate-700 dark:text-slate-200">Materials:</span>{" "}
          <span className="landing-body">{antenna.materials}</span>
        </div>
      )}
      <MetricRow label="Frequency Range" value={m.frequencyRange} />
      <MetricRow label="Resonant Frequency" value={m.resonantFrequency} />
      <MetricRow label="Gain" value={m.gain} />
      <MetricRow label="Radiation Pattern" value={m.radiationPattern} />
      <MetricRow label="Polarization" value={m.polarization} />
      <MetricRow label="SWR" value={m.swr} />
      <MetricRow label="Impedance" value={m.impedance} />
      <MetricRow label="Bandwidth" value={m.bandwidth} />
      <MetricRow label="Front-to-Back Ratio" value={m.frontToBackRatio} />
      <MetricRow label="Power Handling" value={m.powerHandling} />
      {m.dimensions && (
        <div className="mb-4">
          <span className="font-semibold text-slate-700 dark:text-slate-200">Dimensions:</span>
          <ul className="list-disc pl-5 landing-body mt-1">
            {m.dimensions.length && <li>Length: {m.dimensions.length}</li>}
            {m.dimensions.width && <li>Width: {m.dimensions.width}</li>}
            {m.dimensions.height && <li>Height: {m.dimensions.height}</li>}
          </ul>
        </div>
      )}
      {antenna.contactForImpedance && <ContactForImpedance />}
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
            alt={antenna?.name || "antenna"}
            src={antenna?.imgSrc || ""}
            quality={85}
            loading="lazy"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent>
          <Typography variant="h5" className="font-console capitalize text-slate-700 dark:text-slate-200" component="div">
            {antenna?.name || "test"}
          </Typography>
          <Typography variant="body2" className="text-justify text-slate-600 dark:text-slate-300">{antenna?.description}</Typography>
        </CardContent>
      </div>
      <EquipmentDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={antenna?.name}
        imageSrc={antenna?.imgSrc}
      >
        {detailsContent}
      </EquipmentDetailsModal>
    </>
  );
};

export default AntennaCard;
