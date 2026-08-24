import { getListing } from "@/lib/api";
import { TopNav } from "@/components/listing/TopNav";
import { HeroGrid } from "@/components/listing/HeroGrid";
import { ListingHeader } from "@/components/listing/ListingHeader";
import { StickySubNav } from "@/components/listing/StickySubNav";
import { Highlights } from "@/components/listing/Highlights";
import { Description } from "@/components/listing/Description";
import { SleepingArrangements } from "@/components/listing/SleepingArrangements";
import { Amenities } from "@/components/listing/Amenities";
import { BookingCalendar } from "@/components/listing/BookingCalendar";
import { RatingDisplay } from "@/components/listing/RatingDisplay";
import { ReviewBreakdown } from "@/components/listing/ReviewBreakdown";
import { ReviewTags } from "@/components/listing/ReviewTags";
import { ReviewsGrid } from "@/components/listing/ReviewsGrid";
import { LocationSection } from "@/components/listing/LocationSection";
import { HostProfile } from "@/components/listing/HostProfile";
import { ThingsToKnow } from "@/components/listing/ThingsToKnow";
import { NearbyListings } from "@/components/listing/NearbyListings";
import { BookingRail } from "@/components/listing/BookingRail";
import { Footer } from "@/components/listing/Footer";

export default async function Home() {
  const listing = await getListing("1");

  return (
    <>
      <TopNav />

      <main className="mx-auto w-full max-w-280 px-lg">
        <div id="section-photos" className="pt-lg">
          <HeroGrid photos={listing.heroPhotos} />
        </div>
        <ListingHeader listing={listing} />
      </main>

      <StickySubNav listing={listing} />

      <main className="mx-auto w-full max-w-280 px-lg py-xl">
        {/* Sticky rail tracks only this grid — it unsticks once the calendar section ends,
            matching the reference's behavior (rail does not follow through reviews/location/host). */}
        <div className="grid grid-cols-1 gap-xl lg:grid-cols-[1fr_360px]">
          <div className="flex min-w-0 flex-col gap-xl">
            <Highlights highlights={listing.highlights} />
            <Description text={listing.description} translatedNotice={listing.descriptionTranslatedNotice} />
            <SleepingArrangements rooms={listing.sleepingArrangements} />
            <div id="section-amenities">
              <Amenities amenities={listing.amenities} total={listing.totalAmenities} />
            </div>
            <BookingCalendar
              checkIn={listing.checkIn}
              checkOut={listing.checkOut}
              nights={listing.nights}
              location={listing.location.split(",")[0]}
            />
          </div>

          <aside className="min-w-0">
            <BookingRail listing={listing} />
          </aside>
        </div>

        <div className="flex flex-col gap-xl">
          <div id="section-reviews" className="flex flex-col gap-lg border-b border-hairline pb-lg pt-xl">
            <RatingDisplay rating={listing.rating} />
            <ReviewBreakdown breakdown={listing.reviewBreakdown} />
            <ReviewTags tags={listing.reviewTags} />
            <ReviewsGrid reviews={listing.reviews} total={listing.reviewCount} />
          </div>
          <div id="section-location">
            <LocationSection
              address={listing.address}
              mapNote={listing.mapNote}
              neighbourhoodHighlights={listing.neighbourhoodHighlights}
            />
          </div>
          <HostProfile host={listing.host} />
          <ThingsToKnow sections={listing.thingsToKnow} />
        </div>

        <NearbyListings listings={listing.nearbyListings} />
      </main>

      <Footer />
    </>
  );
}
