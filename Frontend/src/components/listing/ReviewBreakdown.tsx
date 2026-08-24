import type { Listing } from "@/lib/types";
import { iconMap } from "./icon-map";

export function ReviewBreakdown({ breakdown }: { breakdown: Listing["reviewBreakdown"] }) {
  return (
    <div className="grid grid-cols-2 gap-xl border-b border-hairline pb-lg sm:grid-cols-4">
      <div className="col-span-2 flex flex-col gap-xs">
        <p className="text-title-sm text-ink">Overall rating</p>
        {breakdown.distribution.map((row) => (
          <div key={row.stars} className="flex items-center gap-sm">
            <span className="w-2 text-caption-sm text-muted">{row.stars}</span>
            <div className="h-1 flex-1 rounded-full bg-hairline">
              <div className="h-1 rounded-full bg-ink" style={{ width: `${row.percent}%` }} />
            </div>
          </div>
        ))}
      </div>

      {breakdown.categories.map((cat) => {
        const Icon = iconMap[cat.icon];
        return (
          <div key={cat.label} className="flex flex-col gap-xxs">
            <p className="text-body-sm text-ink">{cat.label}</p>
            <p className="text-title-md text-ink">{cat.score.toFixed(1)}</p>
            {Icon && <Icon className="h-6 w-6 text-ink" />}
          </div>
        );
      })}
    </div>
  );
}
