"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { PhotoRoom } from "@/lib/types";
import { ChevronLeftIcon, ShareIcon, HeartIcon } from "@/components/icons";
import { useGalleryUrl } from "@/lib/useGalleryUrl";

function slug(room: string) {
  return room.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function PhotoTourOverlay({ rooms }: { rooms: PhotoRoom[] }) {
  const { tourOpen, closeTour, openLightbox } = useGalleryUrl();

  let runningIndex = 0;
  const roomsWithIndex = rooms.map((room) => {
    const startIndex = runningIndex;
    runningIndex += room.photos.length;
    return { ...room, startIndex };
  });

  return (
    <Dialog.Root open={tourOpen} onOpenChange={(open) => !open && closeTour()}>
      <Dialog.Portal>
        <Dialog.Content className="fixed inset-0 z-40 overflow-y-auto bg-canvas focus:outline-none">
          <Dialog.Title className="sr-only">Photo tour</Dialog.Title>
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-canvas px-lg py-base">
            <Dialog.Close aria-label="Close photo tour" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-strong">
              <ChevronLeftIcon className="h-5 w-5 text-ink" />
            </Dialog.Close>
            <div className="flex items-center gap-lg">
              <button type="button" className="flex items-center gap-xs text-button-sm text-ink underline">
                <ShareIcon className="h-4 w-4" />
                Share
              </button>
              <button type="button" className="flex items-center gap-xs text-button-sm text-ink underline">
                <HeartIcon className="h-4 w-4" />
                Save
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-280 px-lg py-lg">
            <h1 className="mb-lg text-display-md text-ink">Photo tour</h1>

            <div className="mb-xxl grid grid-cols-2 gap-base sm:grid-cols-4 lg:grid-cols-7">
              {roomsWithIndex.map((room) => (
                <a key={room.room} href={`#room-${slug(room.room)}`} className="flex flex-col gap-sm">
                  <img
                    src={room.thumbnail.src}
                    alt={room.thumbnail.alt}
                    className="aspect-4/3 w-full rounded-md object-cover"
                  />
                  <span className="text-body-sm text-ink">{room.room}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-xxl">
              {roomsWithIndex.map((room) => (
                <div key={room.room} id={`room-${slug(room.room)}`} className="flex flex-col gap-base sm:grid sm:grid-cols-[200px_1fr] sm:gap-xl">
                  <h2 className="text-display-sm text-ink">{room.room}</h2>
                  <div className="grid grid-cols-1 gap-base sm:grid-cols-2">
                    {room.photos.map((photo, i) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => openLightbox(room.startIndex + i)}
                        className={`overflow-hidden rounded-md ${room.photos.length === 1 ? "sm:col-span-2" : ""}`}
                      >
                        <img src={photo.src} alt={photo.alt} className="aspect-4/3 w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
