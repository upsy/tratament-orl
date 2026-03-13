"use client";

import dynamic from "next/dynamic";

const ClinicsApp = dynamic(() => import("../../components/ClinicsApp"), {
  ssr: false,
});

export default function CliniciPage() {
  return <ClinicsApp />;
}
