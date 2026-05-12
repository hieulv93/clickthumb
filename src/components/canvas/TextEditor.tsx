'use client'

interface TextEditorProps {
  values: string[]
  onChange: (index: number, value: string) => void
  placeholders?: string[]
  colors?: string[]
  onColorChange?: (index: number, color: string) => void
  sizeMultiplier?: number
  onSizeChange?: (size: number) => void
}

const LABELS = ['Title', 'Subtitle', 'Text 3', 'Text 4']

export default function TextEditor({
  values,
  onChange,
  placeholders,
  colors,
  onColorChange,
  sizeMultiplier,
  onSizeChange,
}: TextEditorProps) {
  if (values.length === 0) return null
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">Text</p>
      <div className="space-y-2">
        {values.map((val, i) => (
          <div key={i}>
            <label className="block text-xs text-text-muted mb-1">{LABELS[i] ?? `Text ${i + 1}`}</label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={val}
                onChange={(e) => onChange(i, e.target.value)}
                placeholder={placeholders?.[i] ?? `Enter ${LABELS[i] ?? 'text'}...`}
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-white text-text-main placeholder:text-text-muted placeholder:transition-opacity focus:placeholder:opacity-0 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
              />
              {onColorChange && colors?.[i] !== undefined && (
                <input
                  type="color"
                  value={colors[i]}
                  onChange={(e) => onColorChange(i, e.target.value)}
                  className="w-9 h-9 rounded-lg border border-border cursor-pointer p-0.5 shrink-0"
                  title="Text color"
                  aria-label={`${LABELS[i] ?? `Text ${i + 1}`} color`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      {onSizeChange && sizeMultiplier !== undefined && (
        <div className="pt-1 space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs text-text-muted">Font size</label>
            <span className="text-xs tabular-nums text-primary font-medium">{sizeMultiplier}%</span>
          </div>
          <input
            type="range"
            min={60}
            max={150}
            step={5}
            value={sizeMultiplier}
            onChange={(e) => onSizeChange(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #7C3AED ${((sizeMultiplier - 60) / 90 * 100).toFixed(1)}%, #E5E7EB ${((sizeMultiplier - 60) / 90 * 100).toFixed(1)}%)`,
            }}
            className="w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            aria-label={`Font size: ${sizeMultiplier}%`}
          />
          <div className="flex justify-between text-xs text-text-muted">
            <span>Smaller</span>
            <span>Larger</span>
          </div>
        </div>
      )}
    </div>
  )
}
