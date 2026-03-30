"use client";

import { useState } from "react";
import { surgicalTechniques, techniqueConclusion } from "../data/doctors";

export default function TechniqueComparison() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      className="rounded-2xl p-5 mb-6"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e0d8",
      }}
    >
      <h2
        className="text-xl font-bold mb-1"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
      >
        Tehnici chirurgicale comparate
      </h2>
      <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
        Pentru adenoidectomie (indepartarea polipilor) la copii
      </p>

      {/* Mobile-friendly cards + desktop table */}
      <div className="hidden sm:block overflow-x-auto mb-4">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr
              style={{
                backgroundColor: "#f9fafb",
                borderBottom: "2px solid #e5e0d8",
              }}
            >
              <th className="text-left px-3 py-2 font-bold" style={{ color: "#374151" }}>
                Tehnica
              </th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: "#374151" }}>
                Temperatura
              </th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: "#374151" }}>
                Durere
              </th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: "#374151" }}>
                Lichide dupa
              </th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: "#374151" }}>
                Recuperare
              </th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: "#374151" }}>
                La stat?
              </th>
              <th className="text-left px-3 py-2 font-bold" style={{ color: "#374151" }}>
                Folosita de
              </th>
            </tr>
          </thead>
          <tbody>
            {surgicalTechniques.map((tech, i) => {
              const isTop3 = tech.rank <= 3;
              const rowBg =
                tech.rank === 1
                  ? "#f0fdf4"
                  : tech.rank === 2
                    ? "#e8f1f8"
                    : tech.rank === 3
                      ? "#fefce8"
                      : i % 2 === 0
                        ? "#ffffff"
                        : "#f9fafb";

              return (
                <tr
                  key={tech.name}
                  style={{
                    backgroundColor: rowBg,
                    borderBottom: "1px solid #e5e0d8",
                  }}
                >
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                      {isTop3 && (
                        <span
                          className="inline-flex items-center justify-center rounded-full h-4 w-4 text-[9px] font-bold text-white flex-shrink-0"
                          style={{
                            backgroundColor:
                              tech.rank === 1
                                ? "#16a34a"
                                : tech.rank === 2
                                  ? "#3a7ca5"
                                  : "#eab308",
                          }}
                        >
                          {tech.rank}
                        </span>
                      )}
                      <span
                        className="font-semibold"
                        style={{
                          color: isTop3 ? "#1a1a2e" : "#6b7280",
                        }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5" style={{ color: "#4b5563" }}>
                    {tech.temperature}
                  </td>
                  <td className="px-3 py-2.5">
                    <span
                      style={{
                        color:
                          tech.painLevel.includes("Cea mai mica")
                            ? "#16a34a"
                            : tech.painLevel.includes("Mica-moderata") ||
                                tech.painLevel === "Mica"
                              ? "#ca8a04"
                              : "#dc2626",
                        fontWeight: 600,
                      }}
                    >
                      {tech.painLevel}
                    </span>
                  </td>
                  <td className="px-3 py-2.5" style={{ color: "#4b5563" }}>
                    {tech.recoveryLiquids}
                  </td>
                  <td className="px-3 py-2.5" style={{ color: "#4b5563" }}>
                    {tech.recoveryFull}
                  </td>
                  <td className="px-3 py-2.5" style={{ color: "#4b5563" }}>
                    {tech.availablePublic}
                  </td>
                  <td
                    className="px-3 py-2.5 font-medium"
                    style={{ color: isTop3 ? "#1a1a2e" : "#6b7280" }}
                  >
                    {tech.usedBy}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3 mb-4">
        {surgicalTechniques.map((tech) => {
          const isTop3 = tech.rank <= 3;
          const isExpanded = expanded === tech.name;

          return (
            <button
              key={tech.name}
              onClick={() =>
                setExpanded(isExpanded ? null : tech.name)
              }
              className="w-full text-left rounded-xl p-3.5 transition-all"
              style={{
                backgroundColor:
                  tech.rank === 1
                    ? "#f0fdf4"
                    : tech.rank === 2
                      ? "#e8f1f8"
                      : tech.rank === 3
                        ? "#fefce8"
                        : "#f9fafb",
                border: isExpanded
                  ? "2px solid #374151"
                  : isTop3
                    ? "1px solid #d1d5db"
                    : "1px solid #e5e7eb",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {isTop3 && (
                    <span
                      className="inline-flex items-center justify-center rounded-full h-5 w-5 text-[10px] font-bold text-white"
                      style={{
                        backgroundColor:
                          tech.rank === 1
                            ? "#16a34a"
                            : tech.rank === 2
                              ? "#3a7ca5"
                              : "#eab308",
                      }}
                    >
                      #{tech.rank}
                    </span>
                  )}
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#1a1a2e" }}
                  >
                    {tech.name}
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform flex-shrink-0"
                  style={{
                    transform: isExpanded
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-1">
                <span style={{ color: "#6b7280" }}>
                  {tech.temperature}
                </span>
                <span
                  style={{
                    color: tech.painLevel.includes("Cea mai mica")
                      ? "#16a34a"
                      : tech.painLevel.includes("mare")
                        ? "#dc2626"
                        : "#ca8a04",
                    fontWeight: 600,
                  }}
                >
                  Durere: {tech.painLevel}
                </span>
                <span style={{ color: "#6b7280" }}>
                  Recuperare: {tech.recoveryFull}
                </span>
              </div>

              {isExpanded && (
                <div
                  className="mt-3 pt-3 text-xs space-y-2"
                  style={{
                    borderTop: "1px solid #d1d5db",
                    color: "#4b5563",
                  }}
                >
                  <p>
                    <span className="font-semibold" style={{ color: "#374151" }}>
                      Principiu:{" "}
                    </span>
                    {tech.principle}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-semibold" style={{ color: "#374151" }}>
                        Lichide dupa:{" "}
                      </span>
                      {tech.recoveryLiquids}
                    </div>
                    <div>
                      <span className="font-semibold" style={{ color: "#374151" }}>
                        Sangerare:{" "}
                      </span>
                      {tech.bleeding}
                    </div>
                    <div>
                      <span className="font-semibold" style={{ color: "#374151" }}>
                        La stat:{" "}
                      </span>
                      {tech.availablePublic}
                    </div>
                    <div>
                      <span className="font-semibold" style={{ color: "#374151" }}>
                        Folosita de:{" "}
                      </span>
                      {tech.usedBy}
                    </div>
                  </div>
                  <p
                    className="rounded-lg p-2"
                    style={{
                      backgroundColor: "#ffffff80",
                      color: "#374151",
                    }}
                  >
                    {tech.bestFor}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Desktop: expandable details per row */}
      <div className="hidden sm:block space-y-2 mb-4">
        {surgicalTechniques
          .filter((t) => t.rank <= 3)
          .map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl p-3.5 text-sm"
              style={{
                backgroundColor:
                  tech.rank === 1
                    ? "#f0fdf420"
                    : tech.rank === 2
                      ? "#e8f1f820"
                      : "#fefce820",
                border: "1px solid #e5e0d8",
              }}
            >
              <p style={{ color: "#374151" }}>
                <span className="font-semibold">
                  #{tech.rank} {tech.name}:{" "}
                </span>
                {tech.bestFor}
              </p>
            </div>
          ))}
      </div>

      {/* Conclusion */}
      <div
        className="rounded-xl p-4 text-sm leading-relaxed"
        style={{
          backgroundColor: "#eff6ff",
          border: "1px solid #bfdbfe",
          color: "#1e40af",
        }}
      >
        <span className="font-semibold">Concluzie pentru Teodor: </span>
        {techniqueConclusion}
      </div>
    </div>
  );
}
