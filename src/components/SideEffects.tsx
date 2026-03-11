"use client";

import { useState } from "react";
import { treatmentData } from "../data/treatment";
import SideEffectCard from "./SideEffectCard";

export default function SideEffects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-2xl p-5 text-left"
        style={{ backgroundColor: "#ffffff", border: "1px solid #e5e0d8" }}
      >
        <h2
          className="text-lg font-bold"
          style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
        >
          Efecte Secundare Posibile
        </h2>
        <svg
          className="h-5 w-5 shrink-0 transition-transform duration-300"
          style={{
            color: "#9ca3af",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 space-y-3">
          {treatmentData.sideEffects.map((se, i) => (
            <SideEffectCard key={i} effect={se} />
          ))}
        </div>
      )}
    </div>
  );
}
