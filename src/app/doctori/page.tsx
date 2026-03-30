"use client";

import dynamic from "next/dynamic";

const DoctorsApp = dynamic(() => import("../../components/DoctorsApp"), {
  ssr: false,
});

export default function DoctoriPage() {
  return <DoctorsApp />;
}
