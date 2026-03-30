"use client";

import { useState, useRef, useEffect } from "react";
import type { DoctorReview } from "../data/doctors";

interface DoctorReviewsProps {
  reviews: DoctorReview[];
  doctorColor: string;
}

export default function DoctorReviews({
  reviews,
  doctorColor,
}: DoctorReviewsProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open, reviews]);

  const pozitive = reviews.filter((r) => r.sentiment === "pozitiv").length;
  const negative = reviews.filter((r) => r.sentiment === "negativ").length;

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors"
        style={{
          backgroundColor: open ? doctorColor + "10" : "#f9fafb",
          color: "#374151",
        }}
      >
        <span className="flex items-center gap-2">
          Recenzii ({reviews.length})
          <span
            className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ backgroundColor: "#f0fdf4", color: "#166534" }}
          >
            {pozitive} pozitive
          </span>
          {negative > 0 && (
            <span
              className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
              style={{ backgroundColor: "#fef2f2", color: "#991b1b" }}
            >
              {negative} negative
            </span>
          )}
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
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? height : 0 }}
      >
        <div ref={contentRef} className="space-y-3 pt-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-xl px-4 py-3 text-sm"
              style={{
                backgroundColor:
                  review.sentiment === "negativ" ? "#fef2f2" : "#ffffff",
                border:
                  review.sentiment === "negativ"
                    ? "1px solid #fecaca"
                    : "1px solid #e5e0d8",
              }}
            >
              <p
                className="italic leading-relaxed"
                style={{ color: "#374151" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      review.sentiment === "pozitiv"
                        ? "#16a34a"
                        : review.sentiment === "negativ"
                          ? "#ef4444"
                          : "#9ca3af",
                  }}
                />
                {review.author && (
                  <span style={{ color: "#6b7280" }}>{review.author}</span>
                )}
                {review.date && (
                  <span style={{ color: "#9ca3af" }}>{review.date}</span>
                )}
                <span style={{ color: "#9ca3af" }}>|</span>
                {review.sourceUrl ? (
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    {review.source}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ) : (
                  <span style={{ color: "#6b7280" }}>{review.source}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
