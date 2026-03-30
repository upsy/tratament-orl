"use client";

import Link from "next/link";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { doctors, researchDate, researchDisclaimer } from "../data/doctors";
import DoctorCard from "./DoctorCard";
import DoctorRecommendation from "./DoctorRecommendation";
import TechniqueComparison from "./TechniqueComparison";

export default function DoctorsApp() {
  const [notes, setNotes] = useLocalStorage<Record<string, string>>(
    "orl-doctor-notes",
    {}
  );

  function handleNoteChange(doctorId: string, value: string) {
    setNotes((prev) => {
      const next = { ...prev };
      if (value.trim()) {
        next[doctorId] = value;
      } else {
        delete next[doctorId];
      }
      return next;
    });
  }

  function handleNoteClear(doctorId: string) {
    setNotes((prev) => {
      const next = { ...prev };
      delete next[doctorId];
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium mb-4 transition-colors hover:underline"
          style={{ color: "#2563eb" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Inapoi la tratament
        </Link>
        <h1
          className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
        >
          Comparatie Medici ORL
        </h1>
        <p className="text-lg" style={{ color: "#6b7280" }}>
          MedLife - pentru Teodor
        </p>
      </header>

      {/* Context box */}
      <div
        className="rounded-2xl p-5 mb-6 text-sm leading-relaxed"
        style={{
          backgroundColor: "#eff6ff",
          border: "1px solid #bfdbfe",
          color: "#1e40af",
        }}
      >
        <p className="font-semibold mb-2">
          Diagnostic: Rinoadenoidita acuta cu componenta alergica
        </p>
        <p>
          Teodor Iatan, 4 ani 9 luni, 17 kg. Aceasta pagina compara 3 medici
          ORL din reteaua MedLife, evaluati din perspectiva parintilor de copii
          cu afectiuni similare. Informatiile includ: recenzii reale cu
          link-uri, istoric profesional, tehnici chirurgicale si o recomandare
          bazata pe criteriile relevante pentru cazul lui Teodor.
        </p>
      </div>

      {/* Recommendation - at the top for quick reference */}
      <DoctorRecommendation />

      {/* Surgical techniques comparison */}
      <TechniqueComparison />

      {/* Doctor cards */}
      {doctors.map((doctor, i) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          rank={i + 1}
          noteValue={notes[doctor.id] || ""}
          onNoteChange={handleNoteChange}
          onNoteClear={handleNoteClear}
        />
      ))}

      {/* Footer */}
      <footer
        className="rounded-2xl p-5 text-center text-xs leading-relaxed"
        style={{
          backgroundColor: "#fef2f2",
          border: "1px solid #fecaca",
          color: "#991b1b",
        }}
      >
        <p className="font-semibold mb-1">
          Documentare realizata pe {researchDate}
        </p>
        <p>{researchDisclaimer}</p>
      </footer>
    </div>
  );
}
