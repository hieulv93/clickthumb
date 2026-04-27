'use client'

import type { Template } from '@/lib/templates'

interface TemplateSelectorProps {
  templates: Template[]
  selected: Template | null
  onSelect: (t: Template) => void
}

export default function TemplateSelector({ templates, selected, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">Templates</p>
      <div className="flex gap-2 flex-wrap">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelect(t)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              selected?.id === t.id
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-text-main border-border hover:border-primary hover:text-primary'
            }`}
          >
            <span
              className="w-3 h-3 rounded-full shrink-0 border border-black/10"
              style={{ backgroundColor: t.bgColor }}
            />
            {t.name}
          </button>
        ))}
      </div>
    </div>
  )
}
