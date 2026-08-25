"use client";

import type { Photo } from "@/lib/types";
import { GridIcon } from "@/components/icons";
import { useGalleryUrl } from "@/lib/useGalleryUrl";

export function HeroGrid({ photos }: { photos: Photo[] }) {
  const { openTour } = useGalleryUrl();
  const [main, ...rest] = photos;

  return (
    <div id="heroGrid" className="relative grid grid-cols-4 grid-rows-2 gap-sm overflow-hidden rounded-md" style={{ height: 480 }}>
      <button type="button" onClick={openTour} className="col-span-2 row-span-2 h-full w-full cursor-pointer">
        <img src={main.src} alt={main.alt} className="h-full w-full object-cover" />
      </button>
      {rest.slice(0, 4).map((photo, i) => (
        <button key={i} type="button" onClick={openTour} className="h-full w-full cursor-pointer">
          <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
        </button>
      ))}
      <button
        type="button"
        id="showAllPhotos"
        onClick={openTour}
        className="absolute bottom-base right-base flex items-center gap-xs rounded-sm bg-canvas px-base py-sm text-button-sm text-ink shadow-elevated hover:bg-surface-soft transition-colors cursor-pointer"
      >
        <GridIcon className="h-4 w-4" />
        Show all photos
      </button>
    </div>
  );
}
