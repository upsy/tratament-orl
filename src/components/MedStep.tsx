"use client";

import type { Medication } from "../data/treatment";

interface MedStepProps {
  med: Medication;
  index: number;
  phaseColor: string;
}

export default function MedStep({ med, index, phaseColor }: MedStepProps) {
  return (
    <div className="flex gap-3 py-3">
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
        style={{ backgroundColor: phaseColor }}
      >
        {index + 1}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>
            {med.name}
          </span>
          <span
            className="rounded-md px-2 py-0.5 text-xs font-medium"
            style={{ backgroundColor: `${phaseColor}18`, color: phaseColor }}
          >
            {med.dose}
          </span>
        </div>
        <p className="mt-0.5 text-xs" style={{ color: "#6b7280" }}>
          {med.details}
        </p>
        <p className="mt-0.5 text-xs italic" style={{ color: "#9ca3af" }}>
          Substanta activa: {med.activeSubstance}
        </p>
        {med.waitAfter && (
          <p className="mt-1 text-xs font-medium" style={{ color: phaseColor }}>
            ⏱ Asteapta {med.waitAfter} min inainte de urmatorul pas
          </p>
        )}
      </div>
    </div>
  );
}
