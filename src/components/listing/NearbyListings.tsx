"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { NearbyListing } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@/components/icons";

function NearbyCard({ listing }: { listing: NearbyListing }) {
  const photos = listing.photos && listing.photos.length > 0 ? listing.photos : [listing.photo];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <a
      href="#"
      className="w-[220px] shrink-0 group relative block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Slider */}
      <div className="relative w-full h-[220px] overflow-hidden rounded-[16px] bg-[#F7F7F7] mb-sm">
        {/* Images */}
        <div className="relative h-full w-full">
          <Image
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            fill
            sizes="220px"
            className="object-cover transition-opacity duration-300"
            priority={activeIndex === 0}
          />
        </div>

        {/* Hover Navigation Arrows */}
        {photos.length > 1 && isHovered && (
          <>
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white hover:scale-105 transition-all text-ink z-10"
              aria-label="Previous photo"
            >
              <ChevronLeftIcon className="h-3 w-3 stroke-[3]" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white hover:scale-105 transition-all text-ink z-10"
              aria-label="Next photo"
            >
              <ChevronRightIcon className="h-3 w-3 stroke-[3]" />
            </button>
          </>
        )}
      </div>

      <p className="line-clamp-2 text-body-sm text-ink leading-snug">{listing.title}</p>
      <p className="flex items-center gap-xs text-body-sm text-ink mt-1">
        <span className="font-semibold">₹{listing.price.toLocaleString("en-IN")}</span>
        <span className="text-[#717171] font-normal">night</span>
        <span className="ml-auto flex items-center gap-[2px]">
          <StarIcon className="h-3 w-3 text-ink fill-ink" />
          {listing.rating}
        </span>
      </p>
    </a>
  );
}

export function NearbyListings({ listings }: { listings: NearbyListing[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const totalPages = 2;

  function scrollBy(dir: 1 | -1) {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
    setPage((p) => Math.min(totalPages, Math.max(1, p + dir)));
  }

  return (
    <div className="pt-xl pb-lg">
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
      <div ref={scrollRef} className="flex items-start gap-base overflow-x-auto scroll-smooth no-scrollbar">
        {listings.map((listing) => (
          <NearbyCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
