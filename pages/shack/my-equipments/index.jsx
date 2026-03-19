import Head from "next/head";
import EquipmentsList from "../../../components/shack/myEquipments/EquipmentsList";
import Breadcrumb from "@/components/Breadcrumb";

export default function Index() {
  let UrlData = ["home", "shack", "my-equipments"];

  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[75rem] mx-auto mb-10">
      <Head>
        <title>My Equipments - VU2RCY</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className="pt-20 container mx-auto p-4">
          <h1 className="landing-h1 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">My Equipments</h1>
          <Breadcrumb data={UrlData} />
          <div className="mt-6" />
          <EquipmentsList />
        </div>
      </main>
    </div>
  );
}
