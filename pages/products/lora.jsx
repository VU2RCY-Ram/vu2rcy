import React from "react";
import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import LoraContent from "@/components/ProductsContents/lora-Content";

function Lora() {
  let UrlData = ["home", "products", "Lora"];

  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[75rem] mx-auto lg:mb-12">
      <Head>
        <title>Products - Lora </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" pt-24 container mx-auto p-4">
          <h1 className="landing-h1 capitalize text-center">
            Lora
          </h1>
          <Breadcrumb data={UrlData} />
          <br />
          <LoraContent />
        </div>
      </main>
    </div>
  );
}

export default Lora;
