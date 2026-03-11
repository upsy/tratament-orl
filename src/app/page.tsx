"use client";

import dynamic from "next/dynamic";

const TreatmentApp = dynamic(() => import("../components/TreatmentApp"), {
  ssr: false,
});

export default function Home() {
  return <TreatmentApp />;
}
