import { useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";

export default function EquipmentDetailsModal({ isOpen, onClose, title, imageSrc, children }) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      const handleEscape = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-[9999] p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      style={{ width: "100vw", height: "100vh" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="landing-panel fixed left-1/2 top-1/2 z-[10000] w-[calc(100%-2rem)] max-w-lg max-h-[85vh] -translate-x-1/2 -translate-y-1/2 flex flex-col overflow-hidden sm:w-[calc(100%-3rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-[#39ff14]/20 flex-shrink-0">
          <h2 id="modal-title" className="landing-h2 text-lg md:text-xl">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-amber-500/10 dark:hover:bg-[#39ff14]/10 hover:text-amber-600 dark:hover:text-[#39ff14] transition-colors"
            aria-label="Close"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto p-4 sm:p-5 flex-1">
          {imageSrc && (
            <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 512px) 100vw, 512px"
              />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
