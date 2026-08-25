import type { Listing } from "@/lib/types";
import { iconMap } from "./icon-map";

export function ReviewBreakdown({ breakdown }: { breakdown: Listing["reviewBreakdown"] }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Centered link */}
      <button 
        type="button" 
        className="text-[14px] font-semibold text-ink underline mb-8 hover:text-muted transition-colors cursor-pointer"
      >
        How reviews work
      </button>

      {/* 7-column grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-7 divide-y divide-[#EBEBEB] md:divide-y-0 md:divide-x md:divide-[#EBEBEB] w-full gap-y-6 md:gap-y-0">
        {/* Column 1: Overall rating */}
        <div className="col-span-2 md:col-span-1 pr-6 flex flex-col gap-xs pb-6 md:pb-0">
          <p className="text-[14px] font-semibold text-ink mb-1">Overall rating</p>
          {breakdown.distribution.map((row) => (
            <div key={row.stars} className="flex items-center gap-sm">
              <span className="text-[12px] font-normal text-ink w-2">{row.stars}</span>
              <div className="h-[4px] flex-1 rounded-full bg-[#EBEBEB]">
                <div className="h-[4px] rounded-full bg-ink" style={{ width: `${row.percent}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Columns 2-7: Categories */}
        {breakdown.categories.map((cat, idx) => {
          const Icon = iconMap[cat.icon];
          const paddingClass = 
            idx === 0 
              ? "md:pl-6 md:pr-0 pl-0" 
              : idx === 5 
                ? "md:pl-6 pl-0" 
                : "md:px-6 px-0";

          return (
            <div 
              key={cat.label} 
              className={`col-span-1 flex flex-col justify-between h-28 pt-6 md:pt-0 ${paddingClass}`}
            >
              <div className="flex flex-col gap-xxs">
                <p className="text-[14px] font-semibold text-ink leading-tight">{cat.label}</p>
                <p className="text-[20px] font-bold text-ink leading-none mt-1">{cat.score.toFixed(1)}</p>
              </div>
              {Icon && <Icon className="h-8 w-8 text-ink stroke-[1.25]" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
