import type { Listing } from "@/lib/types";
import { StarIcon } from "@/components/icons";

export function ListingHeader({ listing }: { listing: Listing }) {
  return (
    <div className="mt-lg flex flex-col gap-base">

      <div>
        <p className="text-title-sm text-ink">
          {listing.propertyType} in {listing.location}
        </p>
        <p className="text-body-md text-ink">
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom
        </p>
      </div>

      {listing.guestFavorite && (
        <div className="flex items-center gap-lg rounded-md border border-hairline px-lg py-base">
          <div className="flex flex-col items-center gap-xxs text-center">
            <StarIcon className="h-4 w-4 text-ink" />
            <span className="text-caption text-ink">Guest favourite</span>
          </div>
          <span className="h-10 w-px shrink-0 bg-hairline" />
          <p className="text-body-sm text-ink">{listing.guestFavoriteText}</p>
          <span className="h-10 w-px shrink-0 bg-hairline" />
          <div className="flex shrink-0 items-center gap-sm">
            <span className="text-title-md text-ink">{listing.rating}</span>
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3 w-3 text-ink" />
              ))}
            </div>
          </div>
          <span className="h-10 w-px shrink-0 bg-hairline" />
          <div className="text-center">
            <p className="text-title-md text-ink">{listing.reviewCount}</p>
            <p className="text-caption-sm text-muted">Reviews</p>
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
