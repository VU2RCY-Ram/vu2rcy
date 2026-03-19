/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import mmdvm from "../../public/mmdvm.jpg";
import ContactForImpedance from "@/components/ContactForImpedance";

export default function MMDVM() {
  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[75rem] mx-auto lg:mb-12">
      <Head>
        <title>Work - MMDVM</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className="pt-24 container mx-auto p-4 max-w-4xl">
          <h1 className="landing-h1 text-center capitalize">MMDVM</h1>
          <p className="landing-subtitle text-center mt-2 mb-10">Digital Mode</p>

          <div className="landing-panel p-6 sm:p-8 space-y-8">
            <section>
              <h2 className="landing-h2 mb-3">Introduction</h2>
              <p className="landing-body">
                MMDVM (Multi-Mode Digital Voice Modem) is a groundbreaking
                technology that bridges the gap between diverse digital
                communication modes. As an avid Ham radio enthusiast,
                understanding how MMDVM is made, utilized, and its numerous
                benefits can greatly enhance your experience.
              </p>
            </section>

            <section>
              <h2 className="landing-h2 mb-3">Making MMDVM</h2>
              <p className="landing-body">
                MMDVM is crafted by integrating hardware and software components,
                enabling compatibility with various digital radio protocols. Its
                core comprises microcontrollers, transceivers, and a firmware that
                facilitates seamless mode transitions.
              </p>
            </section>

            <section>
              <h2 className="landing-h2 mb-3">Benefits of MMDVM</h2>
              <ul className="list-disc pl-6 space-y-2 landing-body">
                <li>
                  <strong>Interoperability:</strong> MMDVM breaks down protocol
                  barriers, fostering communication among enthusiasts using
                  different modes and networks.
                </li>
                <li>
                  <strong>Coverage Expansion:</strong> By linking various
                  repeaters and networks, MMDVM extends communication range,
                  overcoming geographical limitations.
                </li>
                <li>
                  <strong>Innovation Hub:</strong> Hams can experiment with
                  different modes and protocols, pushing the boundaries of digital
                  communication.
                </li>
                <li>
                  <strong>Community Growth:</strong> MMDVM connects enthusiasts
                  globally, facilitating knowledge sharing, skill development, and
                  idea exchange.
                </li>
                <li>
                  <strong>Adaptability:</strong> As new modes emerge, MMDVM can be
                  updated to accommodate the latest advancements, ensuring
                  long-term relevance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="landing-h2 mb-3">In Conclusion</h2>
              <p className="landing-body">
                Embracing MMDVM technology amplifies the Ham radio experience.
                Seamlessly integrating various modes, MMDVM&apos;s innovative
                design and immense benefits open new horizons for global
                communication, learning, and camaraderie. Explore its potential,
                enhance your skills, and contribute to the vibrant Ham radio
                community.
              </p>
            </section>
          </div>

          <div className="mt-8">
            <Image
              loading="lazy"
              src={mmdvm}
              alt="MMDVM"
              className="rounded-xl w-full border border-slate-200 dark:border-[#39ff14]/20"
            />
          </div>

          <div className="flex justify-center mt-10">
            <ContactForImpedance />
          </div>
        </div>
      </main>
    </div>
  );
}
