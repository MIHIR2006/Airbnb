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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`fixed top-0 left-0 right-0 z-30 border-b border-hairline bg-canvas transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-6">
        <nav className="flex h-full gap-6" aria-label="Listing sections">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`flex h-full items-center text-[14px] font-semibold transition-all ${
                active === tab.id
                  ? "border-b-[3px] border-ink text-ink pt-[3px]"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex flex-col text-right">
            <p className="text-[14px] font-semibold text-ink">
              {listing.currency}
              {listing.pricePerStay.toLocaleString("en-IN")}{" "}
              <span className="font-normal text-muted text-[13px]">for {listing.nights} nights</span>
            </p>
            <p className="flex items-center justify-end gap-1 text-[12px] font-semibold text-ink">
              <StarIcon className="h-3 w-3" />
              <span>{listing.rating}</span>
              <span className="text-muted font-normal">·</span>
              <span className="underline font-normal text-muted">{listing.reviewCount} reviews</span>
            </p>
          </div>
          <Button variant="primary" className="!h-10 px-6 !rounded-full text-[14px] font-semibold">
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}
