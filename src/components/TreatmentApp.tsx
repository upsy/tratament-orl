"use client";

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
