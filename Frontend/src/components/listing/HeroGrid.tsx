import type { Photo } from "@/lib/types";
import { GridIcon } from "@/components/icons";

export function HeroGrid({ photos }: { photos: Photo[] }) {
  const [main, ...rest] = photos;
  return (
    <div className="relative grid grid-cols-4 grid-rows-2 gap-sm overflow-hidden rounded-md" style={{ height: 480 }}>
      <img src={main.src} alt={main.alt} className="col-span-2 row-span-2 h-full w-full object-cover" />
      {rest.slice(0, 4).map((photo, i) => (
        <img key={i} src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
      ))}
      <button
        type="button"
        className="absolute bottom-base right-base flex items-center gap-xs rounded-sm bg-canvas px-base py-sm text-button-sm text-ink shadow-elevated"
      >
        <GridIcon className="h-4 w-4" />
        Show all photos
      </button>
    </div>
  );
}
