import type { Listing } from "@/lib/types";
import { ShareIcon, HeartIcon } from "@/components/icons";

export function TitleRow({ listing }: { listing: Listing }) {
  return (
    <section id="photos" className="flex flex-col gap-xs pb-base pt-sm sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-display-lg text-ink font-semibold tracking-tight">
        {listing.title}
      </h1>
      <div className="flex shrink-0 items-center gap-base">
        <button
          type="button"
          id="shareBtn"
          className="flex items-center gap-xs rounded-md px-xs py-xs text-button-sm text-ink underline hover:bg-surface-soft transition-colors"
        >
          <ShareIcon className="h-4 w-4" />
          <span>Share</span>
        </button>
        <button
          type="button"
          id="saveBtn"
          className="flex items-center gap-xs rounded-md px-xs py-xs text-button-sm text-ink underline hover:bg-surface-soft transition-colors"
        >
          <HeartIcon className="h-4 w-4" />
          <span>Save</span>
        </button>
      </div>
    </section>
  );
}
