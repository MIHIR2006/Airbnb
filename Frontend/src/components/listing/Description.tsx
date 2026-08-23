"use client";

import { useState } from "react";

export function Description({ text, translatedNotice }: { text: string; translatedNotice: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-base border-b border-hairline pb-lg">
      <div className="rounded-sm bg-surface-soft px-base py-sm">
        <p className="text-body-sm text-ink">
          {translatedNotice} <button className="underline">Show original</button>
        </p>
      </div>
      <p className={`text-body-md whitespace-pre-line text-ink ${expanded ? "" : "line-clamp-4"}`}>{text}</p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-fit items-center gap-xs text-button-md text-ink underline"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
