"use client";

import { treatmentData } from "../data/treatment";
import type { Phase } from "../data/treatment";

interface HeaderProps {
  currentDay: number | null;
  currentPhase: Phase | null;
  startDateStr: string | null;
  onReset: () => void;
}

export default function Header({
  currentDay,
  currentPhase,
  startDateStr,
  onReset,
}: HeaderProps) {
  const withinRange =
    currentDay !== null && currentDay >= 1 && currentDay <= treatmentData.totalDays;
  const finished = currentDay !== null && currentDay > treatmentData.totalDays;

  return (
    <header className="mb-8 text-center">
      <h1
        className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
      >
        Plan de Tratament ORL
      </h1>
      <p className="mb-3 text-lg" style={{ color: "#6b7280" }}>
        {treatmentData.patient.name} &middot; {treatmentData.patient.age} &middot;{" "}
        {treatmentData.patient.weight}
      </p>
      {startDateStr && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {withinRange && currentDay !== null && (
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
              style={{ backgroundColor: currentPhase?.color ?? "#6b7280" }}
            >
              Ziua {currentDay} din {treatmentData.totalDays}
            </span>
          )}
          {finished && (
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
              style={{ backgroundColor: "#22c55e" }}
            >
              Tratament finalizat!
            </span>
          )}
          {currentPhase && (
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: currentPhase.colorLight,
                color: currentPhase.color,
              }}
            >
              {currentPhase.title}
            </span>
          )}
          <button
            onClick={onReset}
            className="ml-2 rounded-lg px-3 py-1 text-xs transition-colors hover:bg-red-50"
            style={{ color: "#ef4444" }}
            title="Reseteaza data de inceput"
          >
            Reseteaza
          </button>
        </div>
      )}
    </header>
  );
}
