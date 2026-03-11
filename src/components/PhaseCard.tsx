"use client";

import { useState, useEffect, useRef } from "react";
import type { Phase } from "../data/treatment";
import MedStep from "./MedStep";

interface PhaseCardProps {
  phase: Phase;
  isCurrentPhase: boolean;
  currentDay: number | null;
}

export default function PhaseCard({
  phase,
  isCurrentPhase,
  currentDay,
}: PhaseCardProps) {
  const [isOpen, setIsOpen] = useState(isCurrentPhase);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCurrentPhase) setIsOpen(true);
  }, [isCurrentPhase]);

  const dayLabel = `Zilele ${phase.dayRange[0]} – ${phase.dayRange[1]}`;
  const isActive =
    currentDay !== null &&
    currentDay >= phase.dayRange[0] &&
    currentDay <= phase.dayRange[1];
  const isPast = currentDay !== null && currentDay > phase.dayRange[1];

  return (
    <div
      className="mb-4 overflow-hidden rounded-2xl transition-shadow"
      style={{
        backgroundColor: "#ffffff",
        border: `1px solid #e5e0d8`,
        borderLeft: `4px solid ${phase.color}`,
        opacity: isPast ? 0.7 : 1,
        boxShadow: isActive ? `0 0 0 1px ${phase.color}40, 0 4px 12px ${phase.color}20` : undefined,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <div>
          <h3
            className="text-base font-bold sm:text-lg"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
          >
            {phase.title}
          </h3>
          <span className="mt-1 text-xs" style={{ color: "#6b7280" }}>
            {dayLabel}
            {isActive && (
              <span
                className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                style={{ backgroundColor: phase.color }}
              >
                Activa
              </span>
            )}
            {isPast && (
              <span className="ml-2 text-xs" style={{ color: "#22c55e" }}>
                ✓ Completata
              </span>
            )}
          </span>
        </div>
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

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${(contentRef.current?.scrollHeight ?? 1000) + 20}px` : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
        }}
      >
        <div className="border-t px-5 pb-5 pt-3" style={{ borderColor: "#f3f0ea" }}>
          {phase.steps.map((step, si) => (
            <div key={si}>
              <div
                className="mb-2 mt-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: phase.color }}
              >
                {step.label}
              </div>
              <div className="divide-y" style={{ borderColor: "#f3f0ea" }}>
                {step.medications.map((med, mi) => (
                  <MedStep
                    key={mi}
                    med={med}
                    index={mi}
                    phaseColor={phase.color}
                  />
                ))}
              </div>
            </div>
          ))}

          {phase.alerts.length > 0 && (
            <div className="mt-4 space-y-2">
              {phase.alerts.map((alert, ai) => (
                <div
                  key={ai}
                  className="rounded-lg p-3 text-xs"
                  style={{
                    backgroundColor:
                      alert.type === "warning"
                        ? "#fef3c7"
                        : alert.type === "info"
                        ? "#eff6ff"
                        : "#f5f3ff",
                    color:
                      alert.type === "warning"
                        ? "#92400e"
                        : alert.type === "info"
                        ? "#1e40af"
                        : "#5b21b6",
                  }}
                >
                  <span className="mr-1 font-bold">
                    {alert.type === "warning"
                      ? "⚠️"
                      : alert.type === "info"
                      ? "ℹ️"
                      : "📝"}
                  </span>
                  {alert.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
