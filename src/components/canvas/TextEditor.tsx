"use client";

import { useState } from "react";

interface TextEditorProps {
  values: string[];
  onChange: (index: number, value: string) => void;
  placeholders?: string[];
  colors?: string[];
  onColorChange?: (index: number, color: string) => void;
  sizeMultiplier?: number;
  onSizeChange?: (size: number) => void;
}

const LABELS = ["Title", "Subtitle", "Line 3", "Line 4"];
const BASIC_COUNT = 2;

export default function TextEditor({
  values,
  onChange,
  placeholders,
  colors,
  onColorChange,
  sizeMultiplier,
  onSizeChange,
}: TextEditorProps) {
  const [showExtra, setShowExtra] = useState(false);
  if (values.length === 0) return null;

  const visibleCount = showExtra
    ? values.length
    : Math.min(BASIC_COUNT, values.length);
  const hasExtra = values.length > BASIC_COUNT;

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">
        Text
      </p>
      <div className="space-y-2">
        {values.slice(0, visibleCount).map((val, i) => (
          <div key={i}>
            <label className="block text-xs text-text-muted mb-1">
              {LABELS[i] ?? `Text ${i + 1}`}
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={val}
                onChange={(e) => onChange(i, e.target.value)}
                placeholder={
                  placeholders?.[i] ?? `Enter ${LABELS[i] ?? "text"}...`
                }
                className="flex-1 px-3 py-2 text-base sm:text-sm rounded-lg border border-border bg-white text-text-main placeholder:text-text-muted placeholder:transition-opacity focus:placeholder:opacity-0 focus:outline-none transition-shadow"
              />
              {onColorChange && colors?.[i] !== undefined && (
                <input
                  type="color"
                  value={colors[i]}
                  onChange={(e) => onColorChange(i, e.target.value)}
                  className="w-11 h-11 rounded-lg border border-border cursor-pointer p-0.5 shrink-0"
                  title="Text color"
                  aria-label={`${LABELS[i] ?? `Text ${i + 1}`} color`}
                />
              )}
            </div>
          </div>
        ))}
        {hasExtra && (
          <button
            type="button"
            onClick={() => setShowExtra((v) => !v)}
            className="text-xs text-text-muted hover:text-primary transition-colors py-3 min-h-[44px] flex items-center w-full text-left"
          >
            {showExtra ? "− Less text fields" : "+ Add more text"}
          </button>
        )}
      </div>
      {onSizeChange && sizeMultiplier !== undefined && (
        <div className="pt-1 space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs text-text-muted">Font size</label>
            <span className="text-xs tabular-nums text-primary font-medium">
              {sizeMultiplier}%
            </span>
          </div>
          <input
            type="range"
            min={60}
            max={150}
            step={5}
            value={sizeMultiplier}
            onChange={(e) => onSizeChange(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #2563EB ${(((sizeMultiplier - 60) / 90) * 100).toFixed(1)}%, #E5E7EB ${(((sizeMultiplier - 60) / 90) * 100).toFixed(1)}%)`,
            }}
            className="w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D1D5DB] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#D1D5DB] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            aria-label={`Font size: ${sizeMultiplier}%`}
          />
          <div className="flex justify-between text-xs text-text-muted">
            <span>Smaller</span>
            <span>Larger</span>
          </div>
        </div>
      )}
    </div>
  );
}
