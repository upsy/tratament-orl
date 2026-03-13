"use client";

import Link from "next/link";
import { useTreatmentState } from "../hooks/useTreatmentState";
import { treatmentData } from "../data/treatment";
import StartDatePicker from "./StartDatePicker";
import Header from "./Header";
import Overview from "./Overview";
import DayGrid from "./DayGrid";
import PhaseCard from "./PhaseCard";
import ShoppingList from "./ShoppingList";
import OralMeds from "./OralMeds";
import Recommendations from "./Recommendations";
import SideEffects from "./SideEffects";
import Footer from "./Footer";

export default function TreatmentApp() {
  const {
    startDateStr,
    currentDay,
    currentPhase,
    completedDays,
    setStartDate,
    startToday,
    resetStartDate,
    toggleDay,
  } = useTreatmentState();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Header
        currentDay={currentDay}
        currentPhase={currentPhase}
        startDateStr={startDateStr}
        onReset={resetStartDate}
      />

      {!startDateStr && (
        <StartDatePicker onStartToday={startToday} onSetDate={setStartDate} />
      )}

      <Overview />

      <div className="mb-8 text-center">
        <Link
          href="/clinici"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
          Clinici RMN 3T &mdash; Programare
        </Link>
      </div>

      {startDateStr && (
        <DayGrid
          currentDay={currentDay}
          completedDays={completedDays}
          onToggleDay={toggleDay}
        />
      )}

      <div>
        <h2
          className="mb-3 text-lg font-bold"
          style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
        >
          Fazele Tratamentului
        </h2>
        {treatmentData.phases.map((phase) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            isCurrentPhase={currentPhase?.id === phase.id}
            isDefaultOpen={!startDateStr && phase.id === 1}
            currentDay={currentDay}
          />
        ))}
      </div>

      <ShoppingList />
      <OralMeds />
      <Recommendations />
      <SideEffects />
      <Footer />
    </div>
  );
}
