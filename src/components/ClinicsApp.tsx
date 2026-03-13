"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  clinicSections,
  requiredDocuments,
  cnasInfo,
  practicalWarning,
  waitTimes,
} from "../data/clinics";
import ClinicCard from "./ClinicCard";

export default function ClinicsApp() {
  const [notes, setNotes] = useLocalStorage<Record<string, string>>(
    "orl-clinic-notes",
    {}
  );
  const [docsOpen, setDocsOpen] = useState(false);

  function handleNoteChange(clinicId: string, value: string) {
    setNotes((prev) => {
      const next = { ...prev };
      if (value.trim()) {
        next[clinicId] = value;
      } else {
        delete next[clinicId];
      }
      return next;
    });
  }

  function handleNoteClear(clinicId: string) {
    setNotes((prev) => {
      const next = { ...prev };
      delete next[clinicId];
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
          Clinici RMN Cerebral
        </h1>
        <p className="text-lg" style={{ color: "#6b7280" }}>
          Programare RMN 3T cu decontare CNAS
        </p>
      </header>

      {/* Practical warning */}
      <div
        className="rounded-2xl p-5 mb-6 text-sm leading-relaxed"
        style={{
          backgroundColor: "#fef2f2",
          border: "1px solid #fecaca",
          color: "#991b1b",
        }}
      >
        <p className="font-semibold mb-1">Avertisment important</p>
        <p>{practicalWarning}</p>
      </div>

      {/* Wait times info */}
      <div
        className="rounded-2xl p-5 mb-6 text-sm leading-relaxed"
        style={{
          backgroundColor: "#eff6ff",
          border: "1px solid #bfdbfe",
          color: "#1e40af",
        }}
      >
        <div className="mb-1 text-xs font-bold uppercase tracking-wider">
          Timpi de asteptare estimati
        </div>
        <p>
          <span className="font-semibold">Cu CNAS:</span> {waitTimes.cnas}
        </p>
        <p>
          <span className="font-semibold">Cu plata:</span> {waitTimes.private}
        </p>
        <p>
          <span className="font-semibold">Preturi orientative 3T:</span>{" "}
          {waitTimes.priceRange}
        </p>
      </div>

      {/* Required documents - collapsible */}
      <div
        className="rounded-2xl mb-6 overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e0d8",
        }}
      >
        <button
          onClick={() => setDocsOpen((v) => !v)}
          className="w-full flex items-center justify-between p-5 text-left"
        >
          <span
            className="text-base font-bold"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
          >
            Documente necesare CNAS
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 transition-transform"
            style={{ transform: docsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {docsOpen && (
          <div className="px-5 pb-5">
            <ul className="space-y-2 text-sm" style={{ color: "#4b5563" }}>
              {requiredDocuments.map((doc) => (
                <li key={doc} className="flex gap-2">
                  <span
                    className="shrink-0 mt-0.5"
                    style={{ color: "#16a34a" }}
                  >
                    &#10003;
                  </span>
                  {doc}
                </li>
              ))}
            </ul>
            <div
              className="mt-4 rounded-xl p-3 text-sm leading-relaxed"
              style={{
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#166534",
              }}
            >
              <p>
                <span className="font-semibold">Tarife decontate CNAS:</span>{" "}
                {cnasInfo.rateNative} / {cnasInfo.rateContrast}
              </p>
              <p className="mt-1">{cnasInfo.note}</p>
              <p className="mt-1">{cnasInfo.referralValidity}</p>
              <p className="mt-1">{cnasInfo.priorityAccess}</p>
            </div>
          </div>
        )}
      </div>

      {/* Clinic sections */}
      {clinicSections.map((section) => (
        <div key={section.title} className="mb-8">
          <h2
            className="mb-2 text-lg font-bold"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
          >
            {section.title}
          </h2>
          {section.description && (
            <p className="mb-4 text-sm" style={{ color: "#6b7280" }}>
              {section.description}
            </p>
          )}
          {section.clinics.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
              noteValue={notes[clinic.id] ?? ""}
              onNoteChange={handleNoteChange}
              onNoteClear={handleNoteClear}
            />
          ))}
        </div>
      ))}

      {/* Action recommendations */}
      <div
        className="rounded-2xl p-5 mb-6"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e0d8",
        }}
      >
        <h2
          className="mb-3 text-lg font-bold"
          style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
        >
          Recomandari de actiune
        </h2>
        <ol
          className="space-y-2 text-sm list-decimal list-inside"
          style={{ color: "#4b5563" }}
        >
          <li>
            <span className="font-semibold">Donna Medical Center</span>{" "}
            &mdash; singura clinica care confirma explicit 3T pe CNAS
          </li>
          <li>
            <span className="font-semibold">Medima Virtutii</span> &mdash;
            preturi transparente, decontare detaliata pe site
          </li>
          <li>
            <span className="font-semibold">
              MedicalES Riverside 2 sau Phoenix
            </span>{" "}
            &mdash; tehnologie AI, doua aparate 3T
          </li>
          <li>
            <span className="font-semibold">Grupul Medical NORD</span> &mdash;
            contract CASMB fara coplata
          </li>
        </ol>
        <p
          className="mt-3 text-xs leading-relaxed"
          style={{ color: "#9ca3af" }}
        >
          Suna la fiecare si intreaba explicit: &quot;Daca vin cu bilet de
          trimitere de la neurolog, pot face RMN cerebral pe aparatul de 3
          Tesla?&quot; Noteaza raspunsul in casutele de mai sus.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs pb-4" style={{ color: "#9ca3af" }}>
        <p>Date colectate martie 2025. Verificati telefonic inainte de programare.</p>
      </footer>
    </div>
  );
}
