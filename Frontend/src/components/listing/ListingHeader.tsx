import Image from "next/image";
import type { Listing } from "@/lib/types";
import { StarIcon } from "@/components/icons";

export function ListingHeader({ listing }: { listing: Listing }) {
  return (
    <div className="mt-lg flex flex-col gap-base">

      <div>
        <h1 className="text-[22px] font-semibold text-ink leading-tight">
          {listing.propertyType} in {listing.location}
        </h1>
        <p className="text-body-md text-ink mt-1">
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom
        </p>
      </div>

      {listing.guestFavorite && (
        <div className="flex items-center justify-between rounded-xl border border-hairline p-4 bg-white w-full">
          <div className="flex items-center pl-2 shrink-0">
            <Image
              src="/logo/Guest Favouite.png"
              alt="Guest favourite"
              width={100}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>

          <span className="h-8 w-px bg-hairline" />

          <div className="flex-1 px-5 text-left max-w-[320px]">
            <p className="text-[14px] leading-tight text-ink font-normal">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>

          <span className="h-8 w-px bg-hairline" />

          <div className="flex flex-col items-center justify-center px-6 shrink-0 text-center">
            <span className="text-[18px] font-bold text-ink leading-none">4.95</span>
            <div className="flex gap-[1px] mt-1.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3 w-3 text-ink fill-ink" />
              ))}
            </div>
          </div>

          <span className="h-8 w-px bg-hairline" />

          <div className="flex flex-col items-center justify-center pl-6 pr-2 shrink-0 text-center">
            <span className="text-[18px] font-bold text-ink leading-none">{listing.reviewCount}</span>
            <span className="text-[12px] font-semibold text-ink underline mt-1.5 cursor-pointer">
              Reviews
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-base border-t border-hairline pt-lg">
        <img src={listing.host.logo.src} alt="" className="h-12 w-12 rounded-full" />
        <div>
          <p className="text-title-sm text-ink">Hosted by {listing.host.name}</p>
          <p className="text-body-sm text-muted">{listing.host.yearsHosting}</p>
        </div>
      </div>
    </div>
  );
}
