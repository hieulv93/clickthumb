'use client'

interface TextEditorProps {
  values: string[]
  onChange: (index: number, value: string) => void
  placeholders?: string[]
}

const LABELS = ['Title', 'Subtitle', 'Text 3', 'Text 4']

export default function TextEditor({ values, onChange, placeholders }: TextEditorProps) {
  if (values.length === 0) return null
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">Text</p>
      <div className="space-y-2">
        {values.map((val, i) => (
          <div key={i}>
            <label className="block text-xs text-text-muted mb-1">{LABELS[i] ?? `Text ${i + 1}`}</label>
            <input
              type="text"
              value={val}
              onChange={(e) => onChange(i, e.target.value)}
              placeholder={placeholders?.[i] ?? `Enter ${LABELS[i] ?? 'text'}...`}
              className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-white text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
