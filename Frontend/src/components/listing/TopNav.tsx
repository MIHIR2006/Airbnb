import Link from "next/link";
import Image from "next/image";
import { SearchIcon, GlobeIcon, MenuIcon } from "@/components/icons";

function SearchHouseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Ground shadow */}
      <ellipse cx="16" cy="27" rx="13" ry="2" fill="#E2E8F0" />
      {/* Green Tree on Left */}
      <circle cx="8" cy="17" r="5" fill="#48BB78" />
      <circle cx="6" cy="19" r="4" fill="#38A169" />
      <circle cx="10" cy="19" r="3.5" fill="#2F855A" />
      <rect x="7" y="21" width="2" height="5" fill="#744210" rx="0.5" />
      {/* House Main Body */}
      <rect x="11" y="14" width="14" height="12" fill="#F7FAFC" stroke="#CBD5E0" strokeWidth="1" rx="0.5" />
      {/* House Roof */}
      <path d="M9.5 14.5L18 7.5L26.5 14.5H9.5Z" fill="#4A5568" stroke="#2D3748" strokeWidth="1" strokeLinejoin="round" />
      <path d="M9 14.5L18 7L27 14.5" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" />
      {/* Red Door */}
      <rect x="15" y="19" width="4" height="7" fill="#FF385C" rx="0.5" />
      {/* Door handle */}
      <circle cx="18" cy="22.5" r="0.5" fill="#FFFFFF" />
    </svg>
  );
}

export function TopNav() {
  return (
    <header className="border-b border-hairline bg-canvas">
      <div className="relative flex h-22 w-full items-center justify-between px-6 sm:px-10 lg:px-20">
        <Link href="/" className="flex items-center text-primary shrink-0 z-10">
          <Image
            src="/logo/Airbnb_Logo_0.svg"
            alt="Airbnb"
            width={102}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Center: Search Bar Pill */}
        <div className="hidden md:flex items-center rounded-full border border-[#DDDDDD] py-2 pl-3 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow cursor-pointer bg-white absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 pl-1 pr-4 text-[14px] font-semibold text-[#222222]">
            <SearchHouseIcon />
            <span>Anywhere</span>
          </div>
          <span className="h-6 w-[1px] bg-[#DDDDDD]" />
          <div className="px-4 text-[14px] font-semibold text-[#222222]">Anytime</div>
          <span className="h-6 w-[1px] bg-[#DDDDDD]" />
          <div className="px-4 text-[14px] font-normal text-[#717171]">Add guests</div>
          <button
            type="button"
            aria-label="Search"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white hover:bg-[#E00B41] transition-colors shrink-0 ml-1"
          >
            <SearchIcon className="h-3.5 w-3.5 stroke-[3]" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1 sm:gap-2 z-10">
          <a
            href="#"
            className="hidden sm:inline-block rounded-full px-4 py-2.5 text-[14px] font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors"
          >
            Become a host
          </a>
          <button
            type="button"
            aria-label="Choose a language"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#222222] hover:bg-[#F7F7F7] transition-colors"
          >
            <GlobeIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#E6E6E6] text-[#222222] transition-colors ml-1"
          >
            <MenuIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
