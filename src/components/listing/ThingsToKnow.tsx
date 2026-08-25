import type { ThingsToKnowSection } from "@/lib/types";
import { iconMap } from "./icon-map";

export function ThingsToKnow({ sections }: { sections: ThingsToKnowSection[] }) {
  return (
    <div className="border-b border-hairline pb-lg">
      <h2 className="mb-lg text-display-md text-ink">Things to know</h2>
      <div className="grid grid-cols-1 gap-xl sm:grid-cols-3">
        {sections.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <div key={s.title} className="flex flex-col gap-base">
              {Icon && <Icon className="h-6 w-6 text-ink" />}
              <h3 className="text-title-sm text-ink">{s.title}</h3>
              <div className="flex flex-col gap-xs">
                {s.lines.map((line) => (
                  <p key={line} className="text-body-sm text-ink">
                    {line}
                  </p>
                ))}
              </div>
              <button type="button" className="w-fit text-button-sm text-ink underline">
                {s.linkLabel}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
