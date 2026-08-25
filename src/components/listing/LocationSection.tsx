import { SearchIcon, PlusIcon, MinusIcon, PinHomeIcon } from "@/components/icons";

export function LocationSection({
  address,
  mapNote,
  neighbourhoodHighlights,
}: {
  address: string;
  mapNote: string;
  neighbourhoodHighlights: string;
}) {
  return (
    <div className="flex flex-col gap-base border-b border-hairline pb-lg">
      <h2 className="text-display-md text-ink">Where you&apos;ll be</h2>
      <p className="text-body-md text-ink">{address}</p>

      <div className="relative h-80 w-full overflow-hidden rounded-md bg-[#dbe6da]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#cfe0ea_45%,#dbe6da_45%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#5a7a68" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute left-[35%] top-[45%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c3d6c6]" />
        <div className="absolute left-[68%] top-[60%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c3d6c6]" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ink">
          <PinHomeIcon className="h-10 w-10" />
        </div>

        <button
          type="button"
          aria-label="Search this area"
          className="absolute left-base top-base flex h-10 w-10 items-center justify-center rounded-full bg-canvas shadow-elevated"
        >
          <SearchIcon className="h-4 w-4 text-ink" />
        </button>
        <div className="absolute right-base top-base flex flex-col overflow-hidden rounded-sm bg-canvas shadow-elevated">
          <button type="button" aria-label="Zoom in" className="flex h-9 w-9 items-center justify-center hover:bg-surface-strong">
            <PlusIcon className="h-4 w-4 text-ink" />
          </button>
          <span className="h-px w-full bg-hairline" />
          <button type="button" aria-label="Zoom out" className="flex h-9 w-9 items-center justify-center hover:bg-surface-strong">
            <MinusIcon className="h-4 w-4 text-ink" />
          </button>
        </div>
      </div>

      <p className="text-body-sm text-muted">{mapNote}</p>

      <div>
        <h3 className="text-title-sm text-ink">Neighbourhood highlights</h3>
        <p className="text-body-md text-ink">{neighbourhoodHighlights}</p>
      </div>
    </div>
  );
}
