"use client";

import { useRef } from "react";

const PRESETS = [
  "#0a0a0a",
  "#1a1a2e",
  "#16213e",
  "#0f3460",
  "#FFD700",
  "#e94560",
  "#ffffff",
  "#f3f4f6",
  "#7C3AED",
  "#059669",
  "#dc2626",
  "#2563eb",
];

interface BgSectionProps {
  color: string;
  onChange: (color: string) => void;
}

export default function BgSection({ color, onChange }: BgSectionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">
        Background Color
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        {PRESETS.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`w-11 h-11 rounded-lg border-2 transition-transform ${
              color === c
                ? "border-primary scale-110"
                : c === "#ffffff" || c === "#f3f4f6"
                  ? "border-gray-300 hover:scale-105"
                  : "border-border hover:scale-105"
            }`}
            style={{ backgroundColor: c }}
            aria-label={`Background color ${c}`}
          />
        ))}
        {/* Custom color — button triggers hidden input; input hidden from a11y tree */}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="relative w-11 h-11 rounded-lg border-2 border-border overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          aria-label="Custom background color"
        >
          <span
            className="absolute inset-0 flex items-center justify-center text-[10px] text-text-muted font-bold"
            aria-hidden="true"
          >
            +
          </span>
        </button>
        <input
          ref={inputRef}
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="sr-only"
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
