'use client'

import { useRef, useState } from 'react'
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '@/lib/utils'

interface BgImageUploadProps {
  imageUrl: string | null
  onUpload: (url: string) => void
  onClear: () => void
}

export default function BgImageUpload({ imageUrl, onUpload, onClear }: BgImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)

  function handleFile(file: File) {
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`File too large. Max ${MAX_FILE_SIZE_MB}MB.`)
      setTimeout(() => setError(null), 4000)
      return
    }
    if (!file.type.startsWith('image/')) {
      setError('Unsupported format. Use JPG, PNG, or WebP.')
      setTimeout(() => setError(null), 4000)
      return
    }
    setError(null)
    onUpload(URL.createObjectURL(file))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    e.target.value = ''
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setDragging(true)
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
  }

  return (
    <div>
      {imageUrl ? (
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl border border-border bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Background" className="h-10 w-16 rounded object-cover border border-border shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-text-main">Background image set</p>
            <p className="text-xs text-text-muted">Drag to reposition on canvas</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => inputRef.current?.click()}
              className="text-xs font-medium text-primary hover:underline"
            >
              Change
            </button>
            <button
              onClick={onClear}
              className="text-xs text-text-muted hover:text-error transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`touch-target w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border-2 border-dashed text-sm font-medium transition-colors ${
            dragging
              ? 'border-primary bg-primary/5 text-primary'
              : 'border-border bg-white hover:border-primary hover:text-primary text-text-main'
          }`}
        >
          <svg className="w-4 h-4 shrink-0 text-text-muted" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          {dragging ? 'Drop image here' : 'Upload background image or drag & drop'}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleChange}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  )
}
