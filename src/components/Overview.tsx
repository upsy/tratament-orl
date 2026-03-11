"use client";

import { treatmentData } from "../data/treatment";

export default function Overview() {
  const items = [
    { label: "Diagnostic", value: treatmentData.diagnostic },
    { label: "Durata tratament", value: `${treatmentData.totalDays} zile (4 faze)` },
    { label: "Consult", value: treatmentData.consultDate },
    { label: "Medic", value: treatmentData.doctor },
  ];

  return (
    <div
      className="mb-8 grid gap-4 rounded-2xl p-5 sm:grid-cols-2"
      style={{ backgroundColor: "#ffffff", border: "1px solid #e5e0d8" }}
    >
      {items.map((item) => (
        <div key={item.label}>
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#9ca3af" }}>
            {item.label}
          </div>
          <div className="mt-0.5 text-sm font-medium" style={{ color: "#1a1a2e" }}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
