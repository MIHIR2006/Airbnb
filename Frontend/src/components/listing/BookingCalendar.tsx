"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, KeyboardIcon } from "@/components/icons";

function dateKey(year: number, month: number, day: number) {
  return `${year}-${month}-${day}`;
}

// Blocked by the host — matches the reference listing's availability calendar.
const UNAVAILABLE_DATES = new Set([
  dateKey(2026, 10, 18),
  dateKey(2026, 10, 19),
  dateKey(2026, 10, 20),
  dateKey(2026, 10, 21),
  dateKey(2026, 10, 22),
  dateKey(2026, 10, 23),
  dateKey(2026, 10, 24),
  dateKey(2026, 10, 29),
  dateKey(2026, 10, 30),
]);

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function buildMonth(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function MonthGrid({
  year,
  month,
  selectedStart,
  selectedEnd,
}: {
  year: number;
  month: number;
  selectedStart: Date;
  selectedEnd: Date;
}) {
  const cells = buildMonth(year, month);
  return (
    <div>
      <p className="mb-6 text-center text-[16px] font-semibold text-ink">
        {MONTH_NAMES[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="text-[12px] font-semibold text-ink h-9 flex items-center justify-center">
            {d}
          </span>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />;
          const date = new Date(year, month, day);
          const inRange = date > selectedStart && date < selectedEnd;
          const isStart = date.getTime() === selectedStart.getTime();
          const isEnd = date.getTime() === selectedEnd.getTime();
          const isPast = date < new Date(2026, 9, 1);
          const isUnavailable = UNAVAILABLE_DATES.has(dateKey(year, month, day)) && !isStart && !isEnd;
          const isDisabled = isPast || isUnavailable;

          return (
            <div key={i} className="relative flex h-11 w-full items-center justify-center">
              {/* Highlight background strip connecting range */}
              {inRange && (
                <div className="absolute inset-y-1 left-0 right-0 bg-[#F7F7F7] z-0" />
              )}
              {isStart && (
                <div className="absolute inset-y-1 left-1/2 right-0 bg-[#F7F7F7] z-0" />
              )}
              {isEnd && (
                <div className="absolute inset-y-1 left-0 right-1/2 bg-[#F7F7F7] z-0" />
              )}

              <button
                type="button"
                disabled={isDisabled}
                className={`text-[14px] font-semibold flex h-10 w-10 items-center justify-center rounded-full z-10 transition-all relative ${
                  isStart || isEnd
                    ? "bg-ink text-on-dark font-bold"
                    : isUnavailable
                      ? "text-muted-soft line-through cursor-not-allowed"
                      : isPast
                        ? "text-muted-soft cursor-not-allowed"
                        : "text-ink hover:border hover:border-ink"
                }`}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BookingCalendar({
  checkIn,
  checkOut,
  nights,
  location,
}: {
  checkIn: string;
  checkOut: string;
  nights: number;
  location: string;
}) {
  // Parse inputs as UTC to extract correct calendar day components,
  // then normalize them to local midnight Date objects to match MonthGrid local dates.
  const startRaw = new Date(checkIn);
  const start = new Date(startRaw.getUTCFullYear(), startRaw.getUTCMonth(), startRaw.getUTCDate());

  const endRaw = new Date(checkOut);
  const end = new Date(endRaw.getUTCFullYear(), endRaw.getUTCMonth(), endRaw.getUTCDate());

  const [cursor, setCursor] = useState({ year: start.getFullYear(), month: start.getMonth() });

  const nextMonth = { year: cursor.month === 11 ? cursor.year + 1 : cursor.year, month: (cursor.month + 1) % 12 };

  const formatted = `${start.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} - ${end.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`;

  return (
    <div className="flex flex-col gap-6 border-b border-hairline pb-lg">
      <div className="flex flex-col gap-1">
        <h2 className="text-display-xl text-ink">
          {nights} nights in {location}
        </h2>
        <p className="text-[14px] text-muted">{formatted}</p>
      </div>

      <div className="relative mt-2">
        {/* Absolute chevrons matching month header vertical alignment */}
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setCursor((c) => ({ year: c.month === 0 ? c.year - 1 : c.year, month: (c.month + 11) % 12 }))}
          className="absolute left-2 top-[2px] flex h-8 w-8 items-center justify-center rounded-full hover:bg-surface-soft z-20"
        >
          <ChevronLeftIcon className="h-4 w-4 text-ink" />
        </button>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setCursor((c) => ({ year: c.month === 11 ? c.year + 1 : c.year, month: (c.month + 1) % 12 }))}
          className="absolute right-2 top-[2px] flex h-8 w-8 items-center justify-center rounded-full hover:bg-surface-soft z-20"
        >
          <ChevronRightIcon className="h-4 w-4 text-ink" />
        </button>

        <div className="grid grid-cols-2 gap-16">
          <MonthGrid year={cursor.year} month={cursor.month} selectedStart={start} selectedEnd={end} />
          <MonthGrid year={nextMonth.year} month={nextMonth.month} selectedStart={start} selectedEnd={end} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          type="button"
          aria-label="Switch to manual date entry"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#B0B0B0] hover:bg-surface-soft transition-colors"
        >
          <KeyboardIcon className="h-4 w-4 text-ink" />
        </button>
        <button type="button" className="text-button-md text-ink underline font-semibold">
          Clear dates
        </button>
      </div>
    </div>
  );
}
