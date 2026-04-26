'use client'

import { useRef } from 'react'
import { MAX_FILE_SIZE_BYTES } from '@/lib/utils'

interface BgImageUploadProps {
  imageUrl: string | null
  onUpload: (url: string) => void
  onClear: () => void
}

export default function BgImageUpload({ imageUrl, onUpload, onClear }: BgImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFile(file: File) {
    if (file.size > MAX_FILE_SIZE_BYTES) return
    const url = URL.createObjectURL(file)
    onUpload(url)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-text-main uppercase tracking-wide">Background Image</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => inputRef.current?.click()}
          className="touch-target px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-white hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {imageUrl ? 'Change image' : 'Upload image'}
        </button>
        {imageUrl && (
          <button
            onClick={onClear}
            className="text-xs text-text-muted hover:text-error transition-colors"
          >
            Remove
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
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt="Background preview" className="h-14 w-auto rounded object-cover border border-border" />
      )}
    </div>
  )
}
