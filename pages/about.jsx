import Head from "next/head";
import Image from "next/image";
import aboutImage from "../public/VU2RCY.jpg";
import { useTheme } from "next-themes";
import CategoryCard from "@/components/CategoryCard";
import love_black from "../public/love-black.svg";
import love_white from "../public/love-white.svg";
import { useEffect } from "react";
import Contact from "@/components/Contact";

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
  }, []);
  const contactMeDescription = `If you share the same passion for Ham Radio or want to connect for
              tech discussions, feel free to reach out.`;
  const yearsExp = new Date().getUTCFullYear() - 1988;

  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 mx-auto max-w-[75rem] lg:mb-12">
      <Head>
        <title>VU2RCY - About</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className="mx-auto pt-20 sm:pt-24 max-w-4xl">
          {/* Hero section */}
          <div className="landing-panel p-6 sm:p-8 md:p-10 text-center">
            <h1 className="landing-h1 text-center mb-8">About</h1>
            <div className="relative inline-block">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/20 to-teal-500/20 dark:from-[#39ff14]/15 dark:to-amber-500/10 blur-sm" />
              <Image
                src={aboutImage}
                placeholder="blur"
                height={600}
                width={600}
                className="relative rounded-2xl select-none h-28 w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 object-cover border-2 border-slate-200 dark:border-[#39ff14]/30 shadow-lg"
                alt="ham radio enthusiast"
                priority
              />
            </div>
            <h2 className="landing-h2 mt-6 text-xl md:text-2xl">
              M G Ramachandran
            </h2>
            <CategoryCard />
            <p className="landing-body mt-6 w-full text-center max-w-2xl mx-auto">
              A passionate Ham Radio enthusiast who loves exploring the world of
              radio communication and technology. I believe in the magic of
              radio waves and the global connections they enable. Experienced in
              various radio protocols, propagation, and building radio setups.
            </p>
          </div>

          {/* Years of experience */}
          <div className="landing-panel p-6 sm:p-8 mt-10 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-amber-500/10 dark:bg-[#39ff14]/10 border border-amber-500/30 dark:border-[#39ff14]/30 flex flex-col items-center justify-center">
                <span className="font-console text-4xl md:text-5xl font-bold text-amber-700 dark:text-[#39ff14] tabular-nums">
                  {yearsExp}
                </span>
                <span className="font-console text-xs md:text-sm mt-1 text-amber-600 dark:text-[#39ff14]/90 tracking-wide">
                  Years
                </span>
                <span className="font-console text-[0.65rem] md:text-xs text-slate-600 dark:text-slate-400">
                  of experience
                </span>
              </div>
              <div className="flex-1">
                <p className="landing-body w-full">
                  Over my {yearsExp} years in Ham Radio, I&apos;ve explored diverse
                  bands and modes, delving deep into its captivating realm. From
                  1.8MHz on 160M to 28MHz on 10M, HF has been my playground. VHF
                  offered thrilling opportunities at 50MHz and 144MHz, while UHF
                  presented challenges at 435MHz with my homebrewed MMDVM hotspot.
                  APRS on 144.390MHz and RMS HF systems like PACTOE-1, PACTOE-2,
                  and PACTOE-3 enriched my experience, along with the marvel of
                  satellite communications. Ham radio never ceases to amaze me!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <Contact ContactDescription={contactMeDescription} />
          </div>

          {/* Signature */}
          <div className="flex items-center justify-center mt-14 sm:mt-16 select-none gap-2">
            <span className="font-console font-bold text-2xl md:text-3xl text-amber-600 dark:text-[#39ff14] tracking-[0.2em]">
              73&apos;s
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width={28} height={28} className="opacity-90" />
            ) : (
              <Image src={love_black} alt="love" width={28} height={28} className="opacity-90" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
