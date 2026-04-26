'use client'

interface FontSelectorProps {
  value: string
  onChange: (font: string) => void
}

const FONTS = [
  { name: 'Impact', label: 'Impact', preview: 'BOLD' },
  { name: 'Arial Black', label: 'Arial Black', preview: 'Heavy' },
  { name: 'Arial', label: 'Arial', preview: 'Clean' },
  { name: 'Georgia', label: 'Georgia', preview: 'Serif' },
  { name: 'Verdana', label: 'Verdana', preview: 'Round' },
  { name: 'Trebuchet MS', label: 'Trebuchet', preview: 'Modern' },
]

export default function FontSelector({ value, onChange }: FontSelectorProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main">Font</p>
      <div className="flex flex-wrap gap-2">
        {FONTS.map((f) => (
          <button
            key={f.name}
            onClick={() => onChange(f.name)}
            title={f.name}
            className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
              value === f.name
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border bg-white text-text-main hover:border-primary/50'
            }`}
            style={{ fontFamily: f.name }}
          >
            {f.preview}
          </button>
        ))}
      </div>
    </div>
  )
}
