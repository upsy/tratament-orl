"use client";

import { treatmentData } from "../data/treatment";

export default function OralMeds() {
  return (
    <div className="mb-8">
      <h2
        className="mb-3 text-lg font-bold"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
      >
        Medicatie Orala
      </h2>
      <div className="space-y-3">
        {treatmentData.oralMeds.map((med) => (
          <div
            key={med.name}
            className="rounded-2xl p-4"
            style={{ backgroundColor: "#ffffff", border: "1px solid #e5e0d8" }}
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>
                {med.name}
              </span>
              <span
                className="rounded-md px-2 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
              >
                {med.dose}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium" style={{ color: "#f59e0b" }}>
              {med.schedule}
            </p>
            <p className="mt-1 text-xs" style={{ color: "#6b7280" }}>
              {med.details}
            </p>
          </div>
        ))}
      </div>

      <h2
        className="mb-3 mt-6 text-lg font-bold"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
      >
        Suplimente (Zilnic, Permanent)
      </h2>
      <div className="space-y-3">
        {treatmentData.supplements.map((sup) => (
          <div
            key={sup.name}
            className="rounded-2xl p-4"
            style={{ backgroundColor: "#ffffff", border: "1px solid #e5e0d8" }}
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>
                {sup.name}
              </span>
              <span
                className="rounded-md px-2 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "#f0fdf4", color: "#166534" }}
              >
                {sup.dose}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium" style={{ color: "#22c55e" }}>
              {sup.schedule}
            </p>
            <p className="mt-1 text-xs" style={{ color: "#6b7280" }}>
              {sup.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
