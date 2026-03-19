import React from "react";
import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import AprsIgateStationContent from "@/components/ProductsContents/aprs-igate-station-Content";

function AprsIgateStation() {
  let UrlData = ["home", "products", "aprs-igate-station"];

  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[75rem] mx-auto lg:mb-12">
      <Head>
        <title>Products - Aprs IGATE Station </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" pt-24 container mx-auto p-4">
          <h1 className="landing-h1 capitalize text-center">
            APRS IGATE Station
          </h1>
          <Breadcrumb data={UrlData} />
          <br />
          <AprsIgateStationContent />
        </div>
      </main>
    </div>
  );
}

export default AprsIgateStation;
