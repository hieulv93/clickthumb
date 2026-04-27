'use client'

interface FontSelectorProps {
  value: string
  onChange: (font: string) => void
}

const FONTS = [
  { name: 'Impact', label: 'Impact' },
  { name: 'Arial Black', label: 'Arial Black' },
  { name: 'Arial', label: 'Arial' },
  { name: 'Georgia', label: 'Georgia' },
  { name: 'Verdana', label: 'Verdana' },
  { name: 'Trebuchet MS', label: 'Trebuchet MS' },
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
            {f.label}
          </button>
        ))}
      </div>
    </div>
  )
}
