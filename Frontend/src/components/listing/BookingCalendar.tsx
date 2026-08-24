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
      <p className="mb-base text-center text-title-sm text-ink">
        {MONTH_NAMES[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-y-xs text-center">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="text-caption-sm text-muted">
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
            <div key={i} className={`relative flex items-center justify-center ${inRange ? "bg-surface-soft" : ""} ${isStart ? "rounded-l-full bg-surface-soft" : ""} ${isEnd ? "rounded-r-full bg-surface-soft" : ""}`}>
              <button
                type="button"
                disabled={isDisabled}
                className={`text-body-sm flex h-10 w-10 items-center justify-center rounded-full ${
                  isStart || isEnd
                    ? "bg-ink text-on-dark"
                    : isUnavailable
                      ? "text-muted-soft line-through"
                      : isPast
                        ? "text-muted-soft"
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
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const [cursor, setCursor] = useState({ year: start.getFullYear(), month: start.getMonth() });

  const nextMonth = { year: cursor.month === 11 ? cursor.year + 1 : cursor.year, month: (cursor.month + 1) % 12 };

  const formatted = `${start.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} - ${end.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`;

  return (
    <div className="flex flex-col gap-base border-b border-hairline pb-lg">
      <div>
        <h2 className="text-display-md text-ink">
          {nights} nights in {location}
        </h2>
        <p className="text-body-sm text-muted">{formatted}</p>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setCursor((c) => ({ year: c.month === 0 ? c.year - 1 : c.year, month: (c.month + 11) % 12 }))}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-surface-strong"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <span />
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setCursor((c) => ({ year: c.month === 11 ? c.year + 1 : c.year, month: (c.month + 1) % 12 }))}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-surface-strong"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-xl">
        <MonthGrid year={cursor.year} month={cursor.month} selectedStart={start} selectedEnd={end} />
        <MonthGrid year={nextMonth.year} month={nextMonth.month} selectedStart={start} selectedEnd={end} />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Switch to manual date entry"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-hairline hover:shadow-elevated"
        >
          <KeyboardIcon className="h-4 w-4 text-ink" />
        </button>
        <button type="button" className="text-button-md text-ink underline">
          Clear dates
        </button>
      </div>
    </div>
  );
}
