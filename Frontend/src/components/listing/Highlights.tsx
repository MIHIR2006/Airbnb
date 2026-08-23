import type { Highlight } from "@/lib/types";
import { iconMap } from "./icon-map";

export function Highlights({ highlights }: { highlights: Highlight[] }) {
  return (
    <div className="flex flex-col gap-lg border-b border-hairline pb-lg">
      {highlights.map((h) => {
        const Icon = iconMap[h.icon];
        return (
          <div key={h.title} className="flex items-start gap-base">
            {Icon && <Icon className="h-6 w-6 shrink-0 text-ink" />}
            <div>
              <p className="text-title-sm text-ink">{h.title}</p>
              <p className="text-body-sm text-muted">{h.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
