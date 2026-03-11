"use client";

import { treatmentData } from "../data/treatment";

export default function Recommendations() {
  return (
    <div className="mb-8">
      <h2
        className="mb-3 text-lg font-bold"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
      >
        Recomandari
      </h2>
      <div className="space-y-2">
        {treatmentData.recommendations.map((rec, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl p-3"
            style={{
              backgroundColor:
                rec.icon === "⚠️" ? "#fef2f2" : "#ffffff",
              border: `1px solid ${rec.icon === "⚠️" ? "#fecaca" : "#e5e0d8"}`,
            }}
          >
            <span className="text-lg">{rec.icon}</span>
            <p
              className="text-sm"
              style={{
                color: rec.icon === "⚠️" ? "#991b1b" : "#374151",
              }}
            >
              {rec.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
