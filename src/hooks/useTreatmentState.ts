"use client";

import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getPhaseForDay, treatmentData } from "../data/treatment";

function normalizeToMidnight(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function useTreatmentState() {
  const [startDateStr, setStartDateStr] = useLocalStorage<string | null>(
    "orl-start-date",
    null
  );
  const [completedDays, setCompletedDays] = useLocalStorage<number[]>(
    "orl-completed-days",
    []
  );

  const currentDay = useMemo(() => {
    if (!startDateStr) return null;
    const start = normalizeToMidnight(new Date(startDateStr + "T00:00:00"));
    const today = normalizeToMidnight(new Date());
    const diff = Math.floor(
      (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diff + 1;
  }, [startDateStr]);

  const currentPhase = useMemo(() => {
    if (currentDay === null) return null;
    return getPhaseForDay(currentDay) ?? null;
  }, [currentDay]);

  const totalDays = treatmentData.totalDays;

  const setStartDate = (date: string) => {
    setStartDateStr(date);
  };

  const startToday = () => {
    const today = new Date();
    const iso = today.toISOString().split("T")[0];
    setStartDateStr(iso);
  };

  const resetStartDate = () => {
    setStartDateStr(null);
    setCompletedDays([]);
  };

  const toggleDay = (day: number) => {
    setCompletedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const isDayCompleted = (day: number) => completedDays.includes(day);

  return {
    startDateStr,
    currentDay,
    currentPhase,
    totalDays,
    completedDays,
    setStartDate,
    startToday,
    resetStartDate,
    toggleDay,
    isDayCompleted,
  };
}
