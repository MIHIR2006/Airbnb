import { LaurelLeft, LaurelRight } from "@/components/icons";

export function RatingDisplay({ rating }: { rating: number }) {
  return (
    <div className="py-lg text-center">
      <div className="flex items-center justify-center gap-base">
        <LaurelLeft className="h-16 w-12 text-ink" />
        <span className="text-rating-display text-ink">{rating}</span>
        <LaurelRight className="h-16 w-12 text-ink" />
      </div>
      <p className="mt-sm text-title-md text-ink">Guest favourite</p>
      <p className="mx-auto mt-xs max-w-112 text-body-sm text-muted">
        This home is a guest favourite based on ratings, reviews and reliability
      </p>
    </div>
  );
}
