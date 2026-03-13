"use client";

import { useState, useRef, useEffect } from "react";
import type { Clinic } from "../data/clinics";

interface ClinicCardProps {
  clinic: Clinic;
  noteValue: string;
  onNoteChange: (clinicId: string, value: string) => void;
  onNoteClear: (clinicId: string) => void;
}

export default function ClinicCard({
  clinic,
  noteValue,
  onNoteChange,
  onNoteClear,
}: ClinicCardProps) {
  const [localNote, setLocalNote] = useState(noteValue);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLocalNote(noteValue);
  }, [noteValue]);

  function handleNoteInput(value: string) {
    setLocalNote(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onNoteChange(clinic.id, value);
    }, 400);
  }

  const teslaBg = clinic.tesla === "3T" ? "#16a34a" : "#9ca3af";

  return (
    <div
      className="rounded-2xl p-5 mb-4"
      style={{
        backgroundColor: "#ffffff",
        border: clinic.recommended
          ? "2px solid #f59e0b"
          : "1px solid #e5e0d8",
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {clinic.recommended && (
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                style={{ backgroundColor: "#f59e0b" }}
              >
                Recomandata
              </span>
            )}
            <h3
              className="text-base font-bold"
              style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
            >
              {clinic.name}
            </h3>
          </div>
        </div>
        <span
          className="shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
          style={{ backgroundColor: teslaBg }}
        >
          {clinic.tesla}
        </span>
      </div>

      {/* Equipment */}
      <p className="text-sm mb-2" style={{ color: "#6b7280" }}>
        {clinic.equipment}
      </p>

      {/* Address */}
      <p className="text-sm mb-3" style={{ color: "#4b5563" }}>
        <span style={{ color: "#9ca3af" }}>Adresa:</span> {clinic.address}
      </p>

      {/* Phone buttons */}
      {clinic.phones.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {clinic.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\./g, "")}`}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-75"
              style={{ backgroundColor: "#2563eb" }}
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
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {phone}
            </a>
          ))}
          {clinic.email && (
            <a
              href={`mailto:${clinic.email}`}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-75"
              style={{ backgroundColor: "#7c3aed" }}
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
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              Email
            </a>
          )}
        </div>
      )}

      {/* Schedule */}
      {clinic.schedule && (
        <p className="text-sm mb-2" style={{ color: "#4b5563" }}>
          <span style={{ color: "#9ca3af" }}>Program:</span> {clinic.schedule}
        </p>
      )}

      {/* CNAS info */}
      <div
        className="rounded-xl p-3 mb-2 text-sm"
        style={{
          backgroundColor: clinic.cnas ? "#f0fdf4" : "#fef2f2",
          border: clinic.cnas ? "1px solid #bbf7d0" : "1px solid #fecaca",
          color: clinic.cnas ? "#166534" : "#991b1b",
        }}
      >
        <span className="font-semibold">
          CNAS: {clinic.cnas ? "Da" : "Nu"}
        </span>
        {clinic.cnasNote && (
          <span> &mdash; {clinic.cnasNote}</span>
        )}
      </div>

      {/* Prices */}
      {clinic.prices && (
        <p className="text-sm mb-2" style={{ color: "#4b5563" }}>
          <span className="font-semibold" style={{ color: "#9ca3af" }}>
            Preturi cu plata:
          </span>{" "}
          {clinic.prices}
        </p>
      )}

      {/* Note */}
      {clinic.note && (
        <div
          className="rounded-xl p-3 mb-3 text-sm"
          style={{
            backgroundColor: "#fffbeb",
            border: "1px solid #fde68a",
            color: "#92400e",
          }}
        >
          <span className="font-semibold">Observatie:</span> {clinic.note}
        </div>
      )}

      {/* Notes textarea */}
      <div className="mt-3">
        <label
          htmlFor={`note-${clinic.id}`}
          className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
          style={{ color: "#9ca3af" }}
        >
          Notite (ce au zis la telefon)
        </label>
        <textarea
          id={`note-${clinic.id}`}
          value={localNote}
          onChange={(e) => handleNoteInput(e.target.value)}
          placeholder="Ex: am sunat pe 15.03, au zis ca..."
          rows={2}
          className="w-full rounded-xl p-3 text-sm outline-none transition-colors resize-y"
          style={{
            border: "2px dashed #e5e0d8",
            backgroundColor: "#fafaf8",
            color: "#1a1a2e",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#2563eb";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#e5e0d8";
            // Also save on blur immediately
            onNoteChange(clinic.id, localNote);
          }}
        />
        {localNote && (
          <button
            onClick={() => {
              setLocalNote("");
              onNoteClear(clinic.id);
            }}
            className="mt-1.5 text-xs font-medium transition-colors hover:underline"
            style={{ color: "#ef4444" }}
          >
            Sterge notita
          </button>
        )}
      </div>
    </div>
  );
}
