import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";

export default function Index() {
  // remove these

  const { systemTheme, theme, setTheme } = useTheme();
  const [invertColor, setInvertColor] = useState();

  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (theme === "light") {
      {
        setInvertColor(true);
        setLoad(true);
      }
    }
    if (theme === "dark") {
      setInvertColor(false);
      setLoad(true);
    }
  }, [theme]);

  //
  let UrlData = ["home", "shack", "satellite"];

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Satellite ✦ VU2RCY </title>
        <link rel="icon" href="./logo.png" />
      </Head>

      <main className="  max-w-screen ">
        <br />
        <br />
        <Breadcrumb data={UrlData} />
        <br />
        {/*  */}
        <div className="px-8 sm:px-14 md:px-24 lg:px-30 lg:mb-12">
          <div className=" pt-14 container mx-auto p-4">
            {load && (
              <div className="max-w-sm mx-auto shadow-lg z-20 rounded-md overflow-hidden relative">
                {!invertColor && (
                  <div
                    className={`dark-404 h-96 w-full absolute top-0 left-0 bg-cover bg-center`}
                  ></div>
                )}
                {invertColor && (
                  <div
                    className={`light-404 h-96 w-full absolute top-0 left-0 bg-cover bg-center`}
                  ></div>
                )}
                <div className="relative">
                  <div className="p-6">
                    <h2 className="text-3xl font-bold mb-4 text-center dark:text-gray-100 text-black-900">
                      # Work in Progress
                    </h2>
                    <p className="dark:text-gray-100 text-black-900 mb-6 text-center">
                      📡 We&#39;re currently fine-tuning our signals for an
                      optimal experience. Stay tuned for an upgraded connection!
                      🚀
                    </p>
                    <p className="dark:text-gray-100 text-black-900 mb-6 text-center">
                      Explore other frequencies on our homepage while we enhance
                      this channel.
                    </p>

                    <h3 className="dark:text-gray-100 text-black-900 text-xl text-center mb-4">
                      Thanks for your understanding!
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/*  */}
      </main>
    </div>
  );
}
