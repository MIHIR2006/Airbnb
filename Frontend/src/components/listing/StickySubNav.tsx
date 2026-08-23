"use client";

import { useEffect, useState } from "react";
import type { Listing } from "@/lib/types";
import { StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

const TABS = [
  { id: "section-photos", label: "Photos" },
  { id: "section-amenities", label: "Amenities" },
  { id: "section-reviews", label: "Reviews" },
  { id: "section-location", label: "Location" },
];

export function StickySubNav({ listing }: { listing: Listing }) {
  const [active, setActive] = useState(TABS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const tab of TABS) {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-30 border-b border-hairline bg-canvas">
      <div className="mx-auto flex max-w-280 items-center justify-between px-lg py-base">
        <nav className="flex gap-lg" aria-label="Listing sections">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`text-button-md pb-xs ${
                active === tab.id ? "border-b-2 border-ink text-ink" : "text-muted"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-lg sm:flex">
          <p className="text-body-sm text-ink">
            <span className="underline">
              {listing.currency}
              {listing.pricePerStay.toLocaleString("en-IN")}
            </span>{" "}
            for {listing.nights} nights
            <span className="mx-xs">·</span>
            <StarIcon className="mb-0.5 inline h-3 w-3" /> {listing.rating} · {listing.reviewCount} reviews
          </p>
          <Button variant="primary" className="h-10 px-lg">
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}
