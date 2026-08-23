import type { SleepingArrangement } from "@/lib/types";

export function SleepingArrangements({ rooms }: { rooms: SleepingArrangement[] }) {
  return (
    <div className="flex flex-col gap-base border-b border-hairline pb-lg">
      <h2 className="text-display-md text-ink">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-2 gap-base">
        {rooms.map((room) => (
          <div key={room.room}>
            <img
              src={room.photo.src}
              alt={room.photo.alt}
              className="mb-sm aspect-[4/3] w-full rounded-md object-cover"
            />
            <p className="text-title-sm text-ink">{room.room}</p>
            <p className="text-body-sm text-muted">{room.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
