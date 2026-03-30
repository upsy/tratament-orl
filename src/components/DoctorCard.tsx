"use client";

import { useState, useRef, useEffect } from "react";
import type { Doctor } from "../data/doctors";
import DoctorReviews from "./DoctorReviews";

interface DoctorCardProps {
  doctor: Doctor;
  rank: number;
  noteValue: string;
  onNoteChange: (doctorId: string, value: string) => void;
  onNoteClear: (doctorId: string) => void;
}

export default function DoctorCard({
  doctor,
  rank,
  noteValue,
  onNoteChange,
  onNoteClear,
}: DoctorCardProps) {
  const [careerOpen, setCareerOpen] = useState(false);
  const [localNote, setLocalNote] = useState(noteValue);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const [careerHeight, setCareerHeight] = useState(0);

  useEffect(() => {
    setLocalNote(noteValue);
  }, [noteValue]);

  useEffect(() => {
    if (careerRef.current) {
      setCareerHeight(careerRef.current.scrollHeight);
    }
  }, [careerOpen]);

  function handleNoteInput(value: string) {
    setLocalNote(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onNoteChange(doctor.id, value);
    }, 400);
  }

  return (
    <div
      className="rounded-2xl p-5 mb-6"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e0d8",
        borderLeft: `4px solid ${doctor.color}`,
      }}
    >
      {/* Header: Avatar + Name + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
          style={{ backgroundColor: doctor.color }}
        >
          {doctor.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className="inline-flex items-center justify-center rounded-full h-6 w-6 text-xs font-bold text-white"
              style={{ backgroundColor: doctor.color }}
            >
              #{rank}
            </span>
            <h2
              className="text-xl font-bold"
              style={{
                color: "#1a1a2e",
                fontFamily: "var(--font-heading)",
              }}
            >
              {doctor.name}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
              style={{ backgroundColor: doctor.color }}
            >
              {doctor.title}
              {doctor.titleSince ? ` ${doctor.titleSince}` : ""}
            </span>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{
                backgroundColor: doctor.colorLight,
                color: doctor.color,
              }}
            >
              {doctor.experienceYears} ani experienta
            </span>
          </div>
          {doctor.medlifeUrl && (
            <a
              href={doctor.medlifeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white transition-opacity hover:opacity-80 mt-1.5"
              style={{ backgroundColor: "#e11d48" }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              Profil MedLife + Programare
            </a>
          )}
        </div>
      </div>

      {/* Quick info grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 rounded-xl p-4 text-sm"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div>
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-0.5"
            style={{ color: "#9ca3af" }}
          >
            Educatie
          </span>
          <span style={{ color: "#374151" }}>{doctor.education}</span>
        </div>
        <div>
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-0.5"
            style={{ color: "#9ca3af" }}
          >
            Focus
          </span>
          <span style={{ color: "#374151" }}>{doctor.experienceFocus}</span>
        </div>
        {doctor.surgicalTechnique && (
          <div>
            <span
              className="text-xs font-bold uppercase tracking-wider block mb-0.5"
              style={{ color: "#9ca3af" }}
            >
              Tehnica chirurgicala
            </span>
            <span style={{ color: "#374151", fontWeight: 600 }}>
              {doctor.surgicalTechnique}
            </span>
          </div>
        )}
        <div>
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-0.5"
            style={{ color: "#9ca3af" }}
          >
            Relevanta pt Teodor
          </span>
          <span style={{ color: "#374151" }}>
            {doctor.relevanceToTeodor.substring(0, 100)}...
          </span>
        </div>
      </div>

      {/* Surgical technique details */}
      {doctor.surgicalTechniqueDetails && (
        <div
          className="rounded-xl p-4 mb-4 text-sm leading-relaxed"
          style={{
            backgroundColor: doctor.colorLight,
            border: `1px solid ${doctor.color}30`,
            color: "#374151",
          }}
        >
          <span className="font-semibold" style={{ color: doctor.color }}>
            Despre tehnica:{" "}
          </span>
          {doctor.surgicalTechniqueDetails}
        </div>
      )}

      {/* Specializations badges */}
      <div className="mb-4">
        <span
          className="text-xs font-bold uppercase tracking-wider block mb-2"
          style={{ color: "#9ca3af" }}
        >
          Competente
        </span>
        <div className="flex flex-wrap gap-1.5">
          {doctor.specializations.map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: doctor.colorLight,
                color: doctor.color,
              }}
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Workplaces */}
      <div className="mb-4">
        <span
          className="text-xs font-bold uppercase tracking-wider block mb-2"
          style={{ color: "#9ca3af" }}
        >
          Unde lucreaza
        </span>
        <div className="space-y-2">
          {doctor.workplaces.map((wp, i) => (
            <div
              key={i}
              className="rounded-xl px-4 py-3 text-sm"
              style={{
                backgroundColor: wp.isMain ? doctor.colorLight : "#f9fafb",
                border: wp.isMain
                  ? `1px solid ${doctor.color}30`
                  : "1px solid #e5e0d8",
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: "#1a1a2e" }}>
                    {wp.name}
                    {wp.isMain && (
                      <span
                        className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium text-white"
                        style={{ backgroundColor: doctor.color }}
                      >
                        principal
                      </span>
                    )}
                  </div>
                  {wp.role && (
                    <div className="text-xs" style={{ color: "#6b7280" }}>
                      {wp.role}
                    </div>
                  )}
                  <div className="mt-1 flex flex-wrap gap-3 text-xs">
                    {wp.schedule && (
                      <span style={{ color: "#4b5563" }}>{wp.schedule}</span>
                    )}
                    {wp.price && (
                      <span className="font-semibold" style={{ color: doctor.color }}>
                        {wp.price}
                      </span>
                    )}
                  </div>
                </div>
                {wp.phone && (
                  <a
                    href={`tel:${wp.phone.replace(/[.\s]/g, "")}`}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "#2563eb" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    {wp.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ratings */}
      {doctor.ratings.length > 0 && (
        <div className="mb-4">
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-2"
            style={{ color: "#9ca3af" }}
          >
            Rating-uri
          </span>
          <div className="flex flex-wrap gap-2">
            {doctor.ratings.map((rating, i) => {
              const numScore = parseFloat(rating.score);
              const maxScore = rating.score.includes("/5") ? 5 : 10;
              const pct = numScore / maxScore;
              const bg =
                pct >= 0.8 ? "#f0fdf4" : pct >= 0.6 ? "#fef3c7" : "#fef2f2";
              const color =
                pct >= 0.8 ? "#166534" : pct >= 0.6 ? "#92400e" : "#991b1b";

              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold"
                  style={{ backgroundColor: bg, color }}
                >
                  <span className="text-base">{rating.score}</span>
                  {rating.sourceUrl ? (
                    <a
                      href={rating.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:underline"
                      style={{ color }}
                    >
                      {rating.source}
                      {rating.count ? ` (${rating.count} recenzii)` : ""}
                    </a>
                  ) : (
                    <span className="text-xs">
                      {rating.source}
                      {rating.count ? ` (${rating.count} recenzii)` : ""}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Pros / Cons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-2"
            style={{ color: "#166534" }}
          >
            Puncte forte
          </span>
          <ul className="space-y-1.5 text-sm" style={{ color: "#166534" }}>
            {doctor.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="flex-shrink-0 mt-0.5">+</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-2"
            style={{ color: "#991b1b" }}
          >
            De luat in considerare
          </span>
          <ul className="space-y-1.5 text-sm" style={{ color: "#991b1b" }}>
            {doctor.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="flex-shrink-0 mt-0.5">-</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Career details - collapsible */}
      <div className="mb-4">
        <button
          onClick={() => setCareerOpen(!careerOpen)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors"
          style={{ backgroundColor: "#f9fafb", color: "#374151" }}
        >
          <span>
            Istoric cariera ({doctor.careerHighlights.length} puncte)
            {doctor.media.length > 0 &&
              ` + ${doctor.media.length} aparitii media`}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform"
            style={{
              transform: careerOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: careerOpen ? careerHeight : 0 }}
        >
          <div ref={careerRef} className="px-4 pt-3 space-y-3">
            <ul className="space-y-1.5 text-sm" style={{ color: "#4b5563" }}>
              {doctor.careerHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: doctor.color }}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            {doctor.media.length > 0 && (
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-2"
                  style={{ color: "#9ca3af" }}
                >
                  Aparitii media / publicatii
                </span>
                <ul className="space-y-1.5 text-sm">
                  {doctor.media.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 text-xs mt-0.5">
                        {m.type === "tv"
                          ? "TV"
                          : m.type === "academic"
                            ? "Sci"
                            : "Web"}
                      </span>
                      {m.url ? (
                        <a
                          href={m.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: "#2563eb" }}
                        >
                          {m.title}{" "}
                          <span style={{ color: "#9ca3af" }}>
                            ({m.source})
                          </span>
                        </a>
                      ) : (
                        <span style={{ color: "#4b5563" }}>
                          {m.title}{" "}
                          <span style={{ color: "#9ca3af" }}>
                            ({m.source})
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <DoctorReviews reviews={doctor.reviews} doctorColor={doctor.color} />

      {/* Notes textarea */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: "#9ca3af" }}
          >
            Notitele tale
          </span>
          {localNote.trim() && (
            <button
              onClick={() => {
                setLocalNote("");
                onNoteClear(doctor.id);
              }}
              className="text-xs hover:underline"
              style={{ color: "#ef4444" }}
            >
              Sterge
            </button>
          )}
        </div>
        <textarea
          rows={2}
          value={localNote}
          onChange={(e) => handleNoteInput(e.target.value)}
          onBlur={() => onNoteChange(doctor.id, localNote)}
          placeholder="Noteaza impresiile tale despre acest doctor..."
          className="w-full rounded-xl px-4 py-3 text-sm transition-colors focus:outline-none"
          style={{
            border: "1px dashed #d1d5db",
            color: "#374151",
            backgroundColor: "#ffffff",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = doctor.color;
            e.currentTarget.style.borderStyle = "solid";
          }}
          onBlurCapture={(e) => {
            e.currentTarget.style.borderColor = "#d1d5db";
            e.currentTarget.style.borderStyle = "dashed";
          }}
        />
      </div>
    </div>
  );
}
