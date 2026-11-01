import Image from "next/image";

import Banner from "@/components/home/Banner";
import Brief from "@/components/home/Brief";
import Events from "@/components/home/Events";
import Activities from "@/components/home/Activities";

export default function Home() {
  return (
    <>
      <Banner />
      <Brief />
      <Events />
      <Activities />
    </>
  );
}
