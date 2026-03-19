import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import WIP from "@/components/WIP";

export default function Index() {
  // remove these

  //
  let UrlData = ["home", "shack", "satellite"];

  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[75rem] mx-auto mb-10">
      <Head>
        <title>Satellite - VU2RCY</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className="pt-20 container mx-auto p-4">
          <h1 className="landing-h1 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">Satellite</h1>
          <Breadcrumb data={UrlData} />
          <div className="mt-6" />
          <WIP />
        </div>
      </main>
    </div>
  );
}
