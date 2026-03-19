import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import shackImage from "../../public/vu2rcyShack.jpg";

export default function Index() {
  const router = useRouter();
  const shackEquipmentData = [
    {
      name: "My Projects",
      description:
        "Embark on a journey of experimentation and creativity with various technologies and tools for general projects for my shack. Exploring new possibilities and bring ideas to life.",
      link: "projects",
    },
    {
      name: "My Equipment's",
      description:
        "Explore a diverse array of ham radios, each with a unique purpose in my shack. From HF to VHF/UHF, satellite to digital modes, delve into amateur radio with cutting-edge equipment.",
      link: "my-equipments",
    },
    {
      name: "Antenna",
      description:
        "The antenna system, carefully tuned and optimized, is a key component. It maximizes signal performance, enabling successful communication across specific frequency bands and modes.",
      link: "antenna",
    },
    {
      name: "VHF/UHF",
      description:
        "Resulting from years of refinement, my VHF/UHF gear includes KENWOOD TMV-71V and MMDVM transceivers. It excels in local communication, satellite tracking, and VHF/UHF contests.",
      link: "vhf-uhf",
    },
    {
      name: "HF",
      description:
        "My HF setup, featuring ICOM IC-706 MK2G, IC-718, and IC-700 transceivers, is the core of my shack. Enhanced by Digiface Pro, it excels in long-distance DX contacts and amateur radio contests",
      link: "hf",
    },
    {
      name: "APRS",
      description:
        "My APRS setup includes a custom station with a TNC, GPS unit, and VHF transceiver. It's vital for real-time location-based data sharing within the amateur radio community.",
      link: "aprs",
    },
    {
      name: "Satellite",
      description:
        "My satellite setup comprises specialized tracking software, high-gain antennas, and a dedicated transceiver, enabling communication with amateur radio satellites and the ISS.",
      link: "satellite",
    },
    {
      name: "Digital Modes",
      description:
        "Explore diverse digital modes in ham radio for projects, enhancing communication in my shack. From FT8 to PSK31, discover innovative ways to connect with the world.",
      link: "digitalMode",
    },
  ];
  const [shackEquipment, setShackEquipment] = useState([]);
  useEffect(() => {
    setShackEquipment(shackEquipmentData);
  }, []);

  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[75rem] mx-auto">
      <Head>
        <title>Shack - VU2RCY</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main>
        <div className="pt-16 sm:pt-20 md:pt-24 container mx-auto p-4">
          <h1 className="landing-h1 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8">
            Shack Equipment
          </h1>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {shackEquipment.map((equipment, index) => (
              <div
                key={index}
                onClick={() => router.push(`shack/${equipment.link}`)}
                className="landing-panel cursor-pointer hover:border-amber-500/40 dark:hover:border-[#39ff14]/40 hover:shadow-lg dark:hover:shadow-[0_0_16px_rgba(57,255,20,0.12)] transition-all duration-300 flex flex-col w-full sm:w-[calc(50%-0.625rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md p-5 sm:p-6"
              >
                <h2 className="landing-h2 text-lg md:text-xl mb-3">
                  {equipment.name}
                </h2>
                <p className="landing-body text-sm sm:text-base text-justify w-full">
                  {equipment.description}
                </p>
              </div>
            ))}
          </div>
          <a
            target="_blank"
            href="./vu2rcyShack.jpg"
            rel="noopener noreferrer"
            className="cursor-pointer block mt-12"
          >
            <Image
              src={shackImage}
              alt="VU2RCY Shack"
              className="rounded-xl w-full max-w-4xl mx-auto border border-slate-300/30 dark:border-[#39ff14]/20"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
