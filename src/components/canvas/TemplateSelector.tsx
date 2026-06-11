"use client";

import type { Template } from "@/lib/templates";

interface TemplateSelectorProps {
  templates: Template[];
  selected: Template | null;
  onSelect: (t: Template) => void;
  plan: "free" | "pro";
  planLoaded: boolean;
  freeLimit: number;
  onUpgrade: () => void;
}

export default function TemplateSelector({
  templates,
  selected,
  onSelect,
  plan,
  planLoaded,
  freeLimit,
  onUpgrade,
}: TemplateSelectorProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">
        Templates{" "}
        <span className="font-normal normal-case text-text-muted">
          {!planLoaded
            ? ""
            : plan === "free"
              ? `${freeLimit} free · ${templates.length - freeLimit} Pro`
              : `${templates.length} available`}
        </span>
      </p>
      <div className="flex gap-2 flex-wrap">
        {templates.map((t, i) => {
          const locked = planLoaded && plan === "free" && i >= freeLimit;
          return (
            <button
              key={t.id}
              onClick={() => (locked ? onUpgrade() : onSelect(t))}
              className={`relative flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg text-xs font-medium border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                locked
                  ? "bg-gray-50 text-gray-400 border-gray-200"
                  : selected?.id === t.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-text-main border-border hover:border-primary hover:text-primary"
              }`}
            >
              <span
                className="w-3 h-3 rounded-full shrink-0 border border-black/10"
                style={{ backgroundColor: t.bgColor }}
              />
              {t.name}
              {locked && (
                <svg
                  className="w-3 h-3 ml-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
