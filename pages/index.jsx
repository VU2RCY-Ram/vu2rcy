import { useTheme } from "next-themes";
import Blob from "@/components/Blob";
import Image from "next/image";
import Avatar_Black from "../public/VU2RCY.jpg";
import Avatar_White from "../public/VU2RCY.jpg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";
import HorizontalLine from "@/components/HorizontalLine";
import Link from "next/link";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <Head>
        <title> VU2RCY - RAM </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-80 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            {currentTheme === "dark" ? (
              <Image src={Avatar_White} alt="vu2rcy" width="100" height="100" />
            ) : (
              <Image src={Avatar_Black} alt="vu2rcy" width="100" height="100" />
            )}
            <div className="flex flex-col ml-2 sm:ml-4">
              <h1 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-4xl">
                M.G.RAMACHANDRAN
              </h1>
              <h4 className="text-gray-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                Avid Ham Radio Operator 📻
              </h4>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              I am a devoted ham radio operator from
              <span className="mx-2 font-medium select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] ">
                INDIA
              </span>
              , embracing cutting-edge technologies in amateur radio since 1988.
              From VU3MGR to VU2RCY, my journey evolved, exploring various
              bands, modes, and satellite communication. Ham radio unites a
              global community with shared passion and curiosity.{" "}
            </p>
            <div className="mt-8 flex justify-start">
              <Link
                href="/projects"
                className="group w-full sm:w-auto text-center rounded-2xl px-8 py-4 sm:px-12 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 hover:from-purple-600 hover:via-indigo-600 hover:to-cyan-600 dark:from-purple-700 dark:via-violet-700 dark:to-blue-700 dark:hover:from-purple-600 dark:hover:via-violet-600 dark:hover:to-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1"
              >
                PROJECTS
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <HorizontalLine />
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
