"use client";

import { treatmentData } from "../data/treatment";

export default function Overview() {
  const items = [
    { label: "Diagnostic", value: `${treatmentData.diagnosticCode} — ${treatmentData.diagnostic}` },
    { label: "Durata tratament", value: `${treatmentData.totalDaysLabel} (4 faze)` },
    { label: "Data consult", value: treatmentData.consultDate },
    { label: "Medic", value: treatmentData.doctor },
  ];

  return (
    <div className="mb-8 space-y-4">
      <div
        className="grid gap-4 rounded-2xl p-5 sm:grid-cols-2"
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
      <div
        className="rounded-2xl p-4 text-sm leading-relaxed"
        style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", color: "#1e40af" }}
      >
        <div className="mb-1 text-xs font-bold uppercase tracking-wider">Diagnostic Complet</div>
        {treatmentData.diagnosticFull}
      </div>
    </div>
  );
}
