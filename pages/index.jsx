import Blob from "@/components/Blob";
import Image from "next/image";
import Avatar from "../public/VU2RCY.jpg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";
import HorizontalLine from "@/components/HorizontalLine";

export default function Home() {
  return (
    <>
      <Head>
        <title>VU2RCY - RAM</title>
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className="relative min-h-screen px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[75rem] mx-auto">
        <Blob />

        {/* Hero section — radio console panel */}
        <section className="relative landing-panel overflow-hidden mt-6 sm:mt-8 md:mt-10">
          <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-5 sm:p-6 md:p-8">
            <div className="shrink-0">
              <Image
                src={Avatar}
                alt="VU2RCY"
                width={96}
                height={96}
                className="rounded-xl ring-2 ring-amber-500/30 dark:ring-[#39ff14]/30 object-cover w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
              <h1 className="landing-h1 text-lg sm:text-xl md:text-2xl lg:text-3xl">M.G.RAMACHANDRAN</h1>
              <p className="font-console tracking-[0.15em] text-sm sm:text-base md:text-lg text-slate-500 dark:text-amber-400/90">Avid Ham Radio Operator</p>
            </div>
          </div>

          <div className="relative px-5 sm:px-6 md:px-8 pt-2 pb-6 sm:pb-8">
            <p className="landing-body text-base sm:text-lg md:text-xl w-full">
              I am a devoted ham radio operator from{" "}
              <span className="inline-block px-2 py-0.5 rounded-md font-console tracking-wide text-emerald-700 dark:text-[#39ff14] bg-emerald-500/10 dark:bg-[#39ff14]/10 border border-emerald-500/20 dark:border-[#39ff14]/30">
                INDIA
              </span>
              , embracing cutting-edge technologies in amateur radio since 1988.
              From VU3MGR to VU2RCY, my journey evolved, exploring various
              bands, modes, and satellite communication. Ham radio unites a
              global community with shared passion and curiosity.
            </p>
          </div>
        </section>

        {/* Section divider */}
        <div className="mt-10 sm:mt-12 md:mt-14">
          <HorizontalLine />
        </div>

        {/* Experience */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <Experience />
        </div>

        {/* Contact */}
        <div className="mt-10 sm:mt-12 md:mt-14 mb-10 sm:mb-12">
          <Contact />
        </div>
      </div>
    </>
  );
}
