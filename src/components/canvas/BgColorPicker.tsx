'use client'

const PRESETS = [
  '#0a0a0a', '#1a1a2e', '#16213e', '#0f3460',
  '#FFD700', '#e94560', '#ffffff', '#f3f4f6',
  '#7C3AED', '#059669', '#dc2626', '#2563eb',
]

interface BgColorPickerProps {
  value: string
  onChange: (color: string) => void
}

export default function BgColorPicker({ value, onChange }: BgColorPickerProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">Background</p>
      <div className="flex items-center gap-2 flex-wrap">
        {PRESETS.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`w-7 h-7 rounded-lg border-2 transition-transform ${
              value === c ? 'border-primary scale-110' : 'border-border hover:scale-105'
            }`}
            style={{ backgroundColor: c }}
            aria-label={`Background color ${c}`}
          />
        ))}
        {/* Custom color input */}
        <label className="relative w-7 h-7 rounded-lg border-2 border-border overflow-hidden cursor-pointer hover:scale-105 transition-transform" title="Custom color">
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-text-muted font-bold">+</span>
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
        </label>
      </div>
    </div>
  )
}
