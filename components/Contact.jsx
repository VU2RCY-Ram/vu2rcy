import Image from "next/image";
import { TfiEmail, TfiTwitterAlt } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import Rectangle from "../public/Rectangle.svg";

const Contact = ({ ContactDescription }) => {
  return (
    <section className="landing-panel overflow-hidden">
      <div
        id="contact"
        className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 lg:gap-8 p-5 sm:p-6 md:p-8"
      >
        <div className="order-1 lg:order-2 shrink-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 flex justify-center sm:justify-start">
          <Image
            src={Rectangle}
            alt="Contact"
            width={750}
            height={650}
            sizes="(max-width: 768px) 96px, (max-width: 1200px) 160px, 192px"
            loading="lazy"
            className="select-none w-full h-full object-contain opacity-90 dark:opacity-95"
          />
        </div>

        <div className="order-2 flex flex-col items-start flex-1 min-w-0 space-y-4">
          <h2 className="landing-h2 text-left text-base sm:text-lg md:text-xl">Get in touch</h2>

          {ContactDescription ? (
            <p className="landing-body text-sm sm:text-base md:text-lg w-full text-justify">
              {ContactDescription}
            </p>
          ) : (
            <p className="landing-body text-sm sm:text-base md:text-lg w-full text-justify">
              In the captivating realm of Ham Radio, I&apos;ve delved into
              diverse fields. For more information, feel free to contact me!
            </p>
          )}

          <div className="flex flex-wrap justify-start gap-4 pt-1">
            <a
              href="https://wa.me/7388407388"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-link flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-[#39ff14] transition-colors duration-300"
            >
              <BsWhatsapp className="h-4 w-4 md:h-5 md:w-5 text-emerald-500 dark:text-[#39ff14]" />
              <span className="font-console text-sm md:text-base tracking-wide">VU2RCY</span>
            </a>
            <a
              href="https://twitter.com/vu2rcy"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-link flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
            >
              <TfiTwitterAlt className="h-4 w-4 md:h-5 md:w-5 text-cyan-500 dark:text-cyan-400" />
              <span className="font-console text-sm md:text-base tracking-wide">Twitter / X</span>
            </a>
            <a
              href="mailto:vu2rcy+social@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-link flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
            >
              <TfiEmail className="h-4 w-4 md:h-5 md:w-5 text-amber-500 dark:text-amber-400" />
              <span className="font-console text-sm md:text-base tracking-wide">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
