"use client";

import type { Amenity } from "@/lib/types";
import { iconMap } from "./icon-map";
import { SlashOverlay } from "@/components/icons";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

function AmenityRow({ amenity }: { amenity: Amenity }) {
  const Icon = iconMap[amenity.icon];
  return (
    <div className={`flex items-center gap-base py-md ${amenity.available ? "text-ink" : "text-muted-soft"}`}>
      <span className="relative">
        {Icon && <Icon className="h-6 w-6" />}
        {!amenity.available && (
          <SlashOverlay className="absolute inset-0 h-6 w-6" />
        )}
      </span>
      <span className={`text-body-md ${amenity.available ? "" : "line-through"}`}>{amenity.label}</span>
    </div>
  );
}

export function Amenities({ amenities, total }: { amenities: Amenity[]; total: number }) {
  return (
    <div className="flex flex-col gap-base border-b border-hairline pb-lg">
      <h2 className="text-display-md text-ink">What this place offers</h2>
      <div className="grid grid-cols-2 gap-x-lg">
        {amenities.map((a) => (
          <AmenityRow key={a.label} amenity={a} />
        ))}
      </div>
      <Modal
        title={`Show all ${total} amenities`}
        trigger={
          <Button variant="secondary" className="w-fit">
            Show all {total} amenities
          </Button>
        }
      >
        <div className="grid grid-cols-1 gap-x-lg sm:grid-cols-2">
          {amenities.map((a) => (
            <AmenityRow key={a.label} amenity={a} />
          ))}
        </div>
      </Modal>
    </div>
  );
}
