'use client'

import { useRef } from 'react'
import { MAX_FILE_SIZE_BYTES } from '@/lib/utils'

const PRESETS = [
  '#0a0a0a', '#1a1a2e', '#16213e', '#0f3460',
  '#FFD700', '#e94560', '#ffffff', '#f3f4f6',
  '#7C3AED', '#059669', '#dc2626', '#2563eb',
]

interface BgSectionProps {
  color: string
  imageUrl: string | null
  onColorChange: (color: string) => void
  onImageUpload: (url: string) => void
  onImageClear: () => void
}

export default function BgSection({
  color,
  imageUrl,
  onColorChange,
  onImageUpload,
  onImageClear,
}: BgSectionProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFile(file: File) {
    if (file.size > MAX_FILE_SIZE_BYTES) return
    onImageUpload(URL.createObjectURL(file))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">Background</p>

      {/* Color swatches */}
      <div className="flex items-center gap-2 flex-wrap">
        {PRESETS.map((c) => (
          <button
            key={c}
            onClick={() => onColorChange(c)}
            className={`w-7 h-7 rounded-lg border-2 transition-transform ${
              color === c && !imageUrl ? 'border-primary scale-110' : 'border-border hover:scale-105'
            }`}
            style={{ backgroundColor: c }}
            aria-label={`Background color ${c}`}
          />
        ))}
        <label
          className="relative w-7 h-7 rounded-lg border-2 border-border overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          title="Custom color"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-text-muted font-bold">+</span>
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
        </label>
      </div>

      {/* Image upload */}
      {imageUrl ? (
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Background preview" className="h-12 w-20 rounded-lg object-cover border border-border" />
          <div className="flex flex-col gap-1">
            <button
              onClick={() => inputRef.current?.click()}
              className="text-xs font-medium text-primary hover:underline text-left"
            >
              Change image
            </button>
            <button
              onClick={onImageClear}
              className="text-xs text-text-muted hover:text-error transition-colors text-left"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="touch-target w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-dashed border-border hover:border-primary hover:bg-primary/5 text-xs text-text-muted hover:text-primary transition-all"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          Upload background image
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  )
}
