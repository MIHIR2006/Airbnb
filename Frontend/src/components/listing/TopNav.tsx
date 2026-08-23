import Link from "next/link";
import { HouseIcon, SearchIcon, GlobeIcon, MenuIcon } from "@/components/icons";

export function TopNav() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex h-20 max-w-280 items-center justify-between px-lg">
        <Link href="/" className="flex items-center gap-xs text-primary">
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
            <path d="M16 3c6.5 8 10 14.5 10 18.5A10 10 0 016 21.5C6 17.5 9.5 11 16 3z" />
          </svg>
          <span className="text-display-sm text-primary">airbnb</span>
        </Link>

        <div className="hidden items-center rounded-full border border-hairline shadow-elevated md:flex">
          <div className="flex items-center gap-sm px-lg py-sm text-caption text-ink">
            <HouseIcon className="h-4 w-4" />
            Anywhere
          </div>
          <span className="h-6 w-px bg-hairline" />
          <div className="px-lg py-sm text-caption text-ink">Anytime</div>
          <span className="h-6 w-px bg-hairline" />
          <div className="px-lg py-sm text-caption text-muted">Add guests</div>
          <button
            type="button"
            aria-label="Search"
            className="m-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-base">
          <a href="#" className="text-button-sm text-ink hidden sm:inline">
            Become a host
          </a>
          <button
            type="button"
            aria-label="Choose a language"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-strong"
          >
            <GlobeIcon className="h-4 w-4 text-ink" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline hover:shadow-elevated"
          >
            <MenuIcon className="h-4 w-4 text-ink" />
          </button>
        </div>
      </div>
    </header>
  );
}
