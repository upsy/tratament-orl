"use client";

import { doctors, doctorRecommendations } from "../data/doctors";

export default function DoctorRecommendation() {
  const sorted = [...doctorRecommendations].sort((a, b) => a.rank - b.rank);

  return (
    <div
      className="rounded-2xl p-5 mb-6"
      style={{
        backgroundColor: "#ffffff",
        border: "2px solid #f59e0b",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span
          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
          style={{ backgroundColor: "#f59e0b" }}
        >
          Recomandare
        </span>
        <h2
          className="text-xl font-bold"
          style={{
            color: "#1a1a2e",
            fontFamily: "var(--font-heading)",
          }}
        >
          Clasament pentru Teodor
        </h2>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: "#4b5563" }}>
        Criteriile de evaluare: experienta in ORL pediatric, tehnica
        chirurgicala (in cazul in care e necesara interventie pentru
        adenoide/amigdale), disponibilitate la MedLife, recenzii de la parinti,
        raport cu copiii.
      </p>

      <div className="space-y-4">
        {sorted.map((rec) => {
          const doctor = doctors.find((d) => d.id === rec.doctorId);
          if (!doctor) return null;

          return (
            <div
              key={rec.doctorId}
              className="flex items-start gap-3 rounded-xl p-4"
              style={{
                backgroundColor:
                  rec.rank === 1 ? doctor.colorLight : "#f9fafb",
                border:
                  rec.rank === 1
                    ? `2px solid ${doctor.color}`
                    : "1px solid #e5e0d8",
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full h-10 w-10 text-lg font-bold text-white"
                style={{ backgroundColor: doctor.color }}
              >
                #{rec.rank}
              </div>
              <div className="flex-1">
                <h3
                  className="font-bold text-base mb-1"
                  style={{
                    color: "#1a1a2e",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {doctor.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-2"
                  style={{ color: "#4b5563" }}
                >
                  {rec.reasoning}
                </p>
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    backgroundColor: doctor.colorLight,
                    color: doctor.color,
                  }}
                >
                  Cel mai potrivit pentru: {rec.bestFor}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-4 rounded-xl p-4 text-xs leading-relaxed"
        style={{
          backgroundColor: "#fef3c7",
          border: "1px solid #fde68a",
          color: "#92400e",
        }}
      >
        <strong>Nota importanta:</strong> Aceasta comparatie este orientativa,
        bazata pe informatii publice. Decizia finala apartine parintilor, in
        consultare cu medicul de familie. Va recomandam sa consultati cel putin
        2 medici inainte de a lua o decizie, in special daca este necesara o
        interventie chirurgicala.
      </div>
    </div>
  );
}
