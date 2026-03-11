"use client";

import { treatmentData, getPhaseColor, getPhaseForDay } from "../data/treatment";

interface DayGridProps {
  currentDay: number | null;
  completedDays: number[];
  onToggleDay: (day: number) => void;
}

export default function DayGrid({
  currentDay,
  completedDays,
  onToggleDay,
}: DayGridProps) {
  const days = Array.from({ length: treatmentData.totalDays }, (_, i) => i + 1);

  return (
    <div className="mb-8">
      <h2
        className="mb-3 text-lg font-bold"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
      >
        Progres Zilnic
      </h2>
      <div className="grid grid-cols-7 gap-1.5 sm:grid-cols-10">
        {days.map((day) => {
          const isToday = currentDay === day;
          const isCompleted = completedDays.includes(day);
          const color = getPhaseColor(day);
          const phase = getPhaseForDay(day);
          const isPast = currentDay !== null && day < currentDay;

          return (
            <button
              key={day}
              onClick={() => onToggleDay(day)}
              title={`Ziua ${day} – ${phase?.title ?? ""}`}
              className="relative flex aspect-square items-center justify-center rounded-lg text-xs font-bold transition-all hover:scale-110"
              style={{
                backgroundColor: isCompleted ? color : `${color}22`,
                color: isCompleted ? "#fff" : color,
                opacity: isPast && !isCompleted && !isToday ? 0.5 : 1,
                boxShadow: isToday
                  ? `0 0 0 2px #fff, 0 0 0 4px ${color}`
                  : undefined,
                animation: isToday ? "pulse-ring 2s ease-in-out infinite" : undefined,
              }}
            >
              {isCompleted ? "✓" : day}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs" style={{ color: "#6b7280" }}>
        {treatmentData.phases.map((p) => (
          <span key={p.id} className="flex items-center gap-1">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: p.color }}
            />
            Faza {p.id} (zile {p.dayRange[0]}-{p.dayRange[1]})
          </span>
        ))}
      </div>
    </div>
  );
}
