"use client";

import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { Photo } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";
import { useGalleryUrl } from "@/lib/useGalleryUrl";

export function Lightbox({ photos }: { photos: Photo[] }) {
  const { lightboxIndex, closeLightbox, setLightboxIndex } = useGalleryUrl();
  const open = lightboxIndex !== null;
  const index = lightboxIndex ?? 0;
  const photo = photos[index];

  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" && hasPrev) setLightboxIndex(index - 1);
      if (e.key === "ArrowRight" && hasNext) setLightboxIndex(index + 1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, index, hasPrev, hasNext, setLightboxIndex]);

  if (!photo) return null;

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && closeLightbox()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-scrim" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col focus:outline-none">
          <Dialog.Title className="sr-only">
            {photo.alt}
          </Dialog.Title>

          <div className="flex items-center justify-between px-lg py-base">
            <p aria-live="polite" className="text-body-sm text-on-dark">
              {index + 1} / {photos.length}
            </p>
            <Dialog.Close aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full text-on-dark hover:bg-white/10">
              <CloseIcon className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-xxl pb-xxl">
            {hasPrev && (
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() => setLightboxIndex(index - 1)}
                className="absolute left-lg top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas text-ink shadow-elevated"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
            )}

            <img src={photo.src} alt={photo.alt} className="max-h-full max-w-full rounded-sm object-contain" />

            {hasNext && (
              <button
                type="button"
                aria-label="Next photo"
                onClick={() => setLightboxIndex(index + 1)}
                className="absolute right-lg top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas text-ink shadow-elevated"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
