"use client";

import { useState } from "react";
import type { Review } from "@/lib/types";
import { StarIcon } from "@/components/icons";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 140;

  return (
    <div className="flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
        {review.avatar ? (
          <img src={review.avatar.src} alt={review.avatar.alt} className="h-10 w-10 rounded-full" />
        ) : (
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-title-sm text-ink"
            style={{ backgroundColor: review.avatarColor }}
          >
            {review.avatarInitial}
          </span>
        )}
        <div>
          <p className="text-body-sm text-ink">{review.author}</p>
          <p className="text-caption-sm text-muted">{review.authorTenure}</p>
        </div>
      </div>
      <div className="flex items-center gap-xs text-caption-sm text-muted">
        <div className="flex" aria-hidden="true">
          {Array.from({ length: review.rating }).map((_, i) => (
            <StarIcon key={i} className="h-2.5 w-2.5 text-ink" />
          ))}
        </div>
        <span>· {review.date}</span>
      </div>
      <p className={`text-body-sm text-ink ${expanded ? "" : "line-clamp-3"}`}>{review.text}</p>
      {isLong && (
        <button type="button" onClick={() => setExpanded((v) => !v)} className="w-fit text-button-sm text-ink underline">
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export function ReviewsGrid({ reviews, total }: { reviews: Review[]; total: number }) {
  return (
    <div className="flex flex-col gap-lg border-b border-hairline pb-lg">
      <div className="grid grid-cols-1 gap-x-xl gap-y-lg sm:grid-cols-2">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
      <Modal
        title={`${total} reviews`}
        trigger={
          <Button variant="secondary" className="w-fit">
            Show all {total} reviews
          </Button>
        }
      >
        <div className="grid grid-cols-1 gap-x-xl gap-y-lg sm:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </Modal>
    </div>
  );
}
