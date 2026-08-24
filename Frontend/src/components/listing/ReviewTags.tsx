import type { ReviewTag } from "@/lib/types";
import { iconMap } from "./icon-map";

export function ReviewTags({ tags }: { tags: ReviewTag[] }) {
  return (
    <div className="flex gap-sm overflow-x-auto pb-lg">
      {tags.map((tag) => {
        const Icon = iconMap[tag.icon];
        return (
          <div
            key={tag.label}
            className="flex shrink-0 items-center gap-sm rounded-full border border-hairline px-base py-sm"
          >
            {Icon && <Icon className="h-4 w-4 text-ink" />}
            <span className="text-body-sm text-ink">{tag.label}</span>
            <span className="text-body-sm text-muted">{tag.count}</span>
          </div>
        );
      })}
    </div>
  );
}
