"use client";

import type { SideEffect } from "../data/treatment";

interface SideEffectCardProps {
  effect: SideEffect;
}

const riskColors: Record<string, { bg: string; text: string; label: string }> = {
  scazut: { bg: "#f0fdf4", text: "#166534", label: "Risc scazut" },
  mediu: { bg: "#fffbeb", text: "#92400e", label: "Risc mediu" },
  ridicat: { bg: "#fef2f2", text: "#991b1b", label: "Risc ridicat" },
};

export default function SideEffectCard({ effect }: SideEffectCardProps) {
  const risk = riskColors[effect.risk] ?? riskColors.scazut;

  return (
    <div
      className="rounded-xl p-4"
      style={{ backgroundColor: "#ffffff", border: "1px solid #e5e0d8" }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>
          {effect.medication}
        </span>
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: risk.bg, color: risk.text }}
        >
          {risk.label}
        </span>
      </div>
      <p className="mt-1 text-xs font-medium" style={{ color: "#374151" }}>
        {effect.effect}
      </p>
      <p className="mt-1 text-xs" style={{ color: "#6b7280" }}>
        {effect.details}
      </p>
    </div>
  );
}
