"use client";

import { useRef, useState } from "react";
import type { NearbyListing } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@/components/icons";

export function NearbyListings({ listings }: { listings: NearbyListing[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const totalPages = 2;

  function scrollBy(dir: 1 | -1) {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
    setPage((p) => Math.min(totalPages, Math.max(1, p + dir)));
  }

  return (
    <div className="pb-lg">
      <div className="mb-lg flex items-center justify-between">
        <h2 className="text-display-md text-ink">More stays nearby</h2>
        <div className="flex items-center gap-base">
          <span className="text-body-sm text-muted">
            {page}/{totalPages}
          </span>
          <button
            type="button"
            aria-label="Previous listings"
            onClick={() => scrollBy(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline hover:shadow-elevated"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next listings"
            onClick={() => scrollBy(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline hover:shadow-elevated"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-base overflow-x-auto scroll-smooth">
        {listings.map((listing) => (
          <a key={listing.id} href="#" className="w-48 shrink-0">
            <img src={listing.photo.src} alt={listing.photo.alt} className="mb-sm aspect-square w-full rounded-md object-cover" />
            <p className="line-clamp-1 text-body-sm text-ink">{listing.title}</p>
            <p className="flex items-center gap-xs text-body-sm text-ink">
              ₹{listing.price.toLocaleString("en-IN")}
              <StarIcon className="h-3 w-3" />
              {listing.rating}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
