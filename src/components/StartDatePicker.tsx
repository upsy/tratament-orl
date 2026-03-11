"use client";

import { useState } from "react";

interface StartDatePickerProps {
  onStartToday: () => void;
  onSetDate: (date: string) => void;
}

export default function StartDatePicker({
  onStartToday,
  onSetDate,
}: StartDatePickerProps) {
  const [dateValue, setDateValue] = useState("");

  return (
    <div className="mx-auto mb-8 max-w-2xl rounded-2xl border-2 border-dashed p-6 text-center"
      style={{ borderColor: "#3b82f6", backgroundColor: "#eff6ff" }}>
      <h2 className="mb-2 text-xl font-bold" style={{ color: "#1e40af" }}>
        Cand incepe tratamentul?
      </h2>
      <p className="mb-5 text-sm" style={{ color: "#6b7280" }}>
        Selecteaza data de inceput pentru a activa urmarirea zilnica.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <button
          onClick={onStartToday}
          className="rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#3b82f6" }}
        >
          Incepe Azi
        </button>
        <span className="text-sm font-medium" style={{ color: "#9ca3af" }}>
          sau
        </span>
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="rounded-lg border px-3 py-2.5 text-sm"
            style={{ borderColor: "#d1d5db" }}
          />
          <button
            onClick={() => {
              if (dateValue) onSetDate(dateValue);
            }}
            disabled={!dateValue}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity disabled:opacity-40"
            style={{ backgroundColor: "#3b82f6" }}
          >
            Seteaza
          </button>
        </div>
      </div>
    </div>
  );
}
