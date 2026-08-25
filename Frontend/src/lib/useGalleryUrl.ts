"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useGalleryUrl() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tourOpen = searchParams.get("photos") === "1";
  const iParam = searchParams.get("i");
  const lightboxIndex = iParam !== null && !Number.isNaN(Number(iParam)) ? Number(iParam) : null;

  return {
    tourOpen,
    lightboxIndex,
    openTour: () => router.push(`${pathname}?photos=1`, { scroll: false }),
    closeTour: () => router.push(pathname, { scroll: false }),
    openLightbox: (i: number) => router.push(`${pathname}?photos=1&i=${i}`, { scroll: false }),
    closeLightbox: () => router.push(`${pathname}?photos=1`, { scroll: false }),
    setLightboxIndex: (i: number) => router.replace(`${pathname}?photos=1&i=${i}`, { scroll: false }),
  };
}
