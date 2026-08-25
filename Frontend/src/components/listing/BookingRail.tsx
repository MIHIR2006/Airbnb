"use client";

import { useState } from "react";
import type { Listing } from "@/lib/types";
import { TagIcon, FlagIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

export function BookingRail({ listing }: { listing: Listing }) {
  const [guests, setGuests] = useState(listing.defaultGuests);

  const checkInLabel = new Date(listing.checkIn).toLocaleDateString("en-US");
  const checkOutLabel = new Date(listing.checkOut).toLocaleDateString("en-US");

  return (
    <div id="bookingSticky" className="sticky top-lg flex flex-col gap-base">
      <div className="flex items-center gap-base rounded-md border border-hairline p-base">
        <TagIcon className="h-6 w-6 shrink-0 text-ink" />
        <p className="flex-1 text-body-sm text-ink">
          Get 10% off your next stay.
          <br />
          <button type="button" className="underline">
            Terms apply
          </button>
        </p>
        <Button variant="secondary" className="h-10 px-base">
          Claim
        </Button>
      </div>

      <div className="flex flex-col gap-base rounded-md border border-hairline p-lg shadow-elevated">
        <p className="text-title-md text-ink">
          {listing.currency}
          {listing.pricePerStay.toLocaleString("en-IN")} for {listing.nights} nights
        </p>

        <div className="overflow-hidden rounded-sm border border-hairline">
          <div className="grid grid-cols-2 divide-x divide-hairline">
            <label className="flex flex-col gap-xxs p-sm">
              <span className="text-micro-label text-ink">CHECK-IN</span>
              <span className="text-body-sm text-ink">{checkInLabel}</span>
            </label>
            <label className="flex flex-col gap-xxs p-sm">
              <span className="text-micro-label text-ink">CHECKOUT</span>
              <span className="text-body-sm text-ink">{checkOutLabel}</span>
            </label>
          </div>
          <span className="block h-px w-full bg-hairline" />
          <label className="flex items-center justify-between p-sm">
            <span className="flex flex-col gap-xxs">
              <span className="text-micro-label text-ink">GUESTS</span>
              <span className="text-body-sm text-ink">{guests} guests</span>
            </span>
            <select
              aria-label="Number of guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="bg-transparent text-body-sm text-ink"
            >
              {Array.from({ length: listing.guests }).map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="rounded-sm bg-surface-soft px-base py-sm text-center text-body-sm text-ink">
          Free cancellation before <strong>{listing.freeCancellationDate}</strong>
        </p>

        <Button id="reserveBtn" variant="primary" className="w-full">
          Reserve
        </Button>

        <p className="text-center text-body-sm text-muted">You won&apos;t be charged yet</p>
      </div>

      <button type="button" className="flex items-center gap-xs self-center text-body-sm text-ink underline">
        <FlagIcon className="h-4 w-4" />
        Report this listing
      </button>
    </div>
  );
}
