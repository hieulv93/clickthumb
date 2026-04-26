'use client'

import { useState, useCallback, useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import TemplateSelector from './TemplateSelector'
import BgSection from './BgSection'
import FontSelector from './FontSelector'
import ProgressBar from '@/components/tool/ProgressBar'
import AdSlot from '@/components/ads/AdSlot'
import type { Platform } from '@/lib/platforms'
import type { Template } from '@/lib/templates'
import { triggerDownload } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

const CanvasEditor = dynamic(() => import('./CanvasEditor'), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-surface rounded-xl border border-border animate-pulse" />,
})

interface CanvasToolClientProps {
  platform: Platform
  templates: Template[]
  downloadFilename: string
  exportLabel: string
  children: React.ReactNode
}

export default function CanvasToolClient({
  platform,
  templates,
  downloadFilename,
  exportLabel,
  children,
}: CanvasToolClientProps) {
  const [template, setTemplate] = useState<Template | null>(templates[0] ?? null)
  const [bgColor, setBgColor] = useState(templates[0]?.bgColor ?? '#ffffff')
  const [bgImageUrl, setBgImageUrl] = useState<string | null>(null)
  const [fontFamily, setFontFamily] = useState(templates[0]?.texts[0]?.fontFamily ?? 'Impact')
  const [exporting, setExporting] = useState(false)
  const [done, setDone] = useState(false)
  const exportFnRef = useRef<(() => Promise<Blob>) | null>(null)
  const bgUrlRef = useRef<string | null>(null)

  const handleReady = useCallback((fn: () => Promise<Blob>) => {
    exportFnRef.current = fn
  }, [])

  const handleTemplateSelect = useCallback((t: Template) => {
    setTemplate(t)
    setBgColor(t.bgColor)
    setFontFamily(t.texts[0]?.fontFamily ?? 'Impact')
  }, [])

  const handleBgUpload = useCallback((url: string) => {
    if (bgUrlRef.current) URL.revokeObjectURL(bgUrlRef.current)
    bgUrlRef.current = url
    setBgImageUrl(url)
  }, [])

  const handleBgClear = useCallback(() => {
    if (bgUrlRef.current) {
      URL.revokeObjectURL(bgUrlRef.current)
      bgUrlRef.current = null
    }
    setBgImageUrl(null)
  }, [])

  const handleExport = useCallback(async () => {
    if (!exportFnRef.current) return
    setExporting(true)
    try {
      const blob = await exportFnRef.current()
      triggerDownload(blob, downloadFilename)
      setDone(true)
      analytics.thumbnailExported(platform.id, template?.id ?? 'custom', blob.size / 1024)
    } catch {
      // silent
    } finally {
      setExporting(false)
    }
  }, [downloadFilename, platform.id, template?.id])

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Suspense fallback={<div className="w-full h-64 bg-surface rounded-xl border border-border" />}>
          <CanvasEditor
            platform={platform}
            template={template}
            bgColor={bgColor}
            bgImageUrl={bgImageUrl}
            fontFamily={fontFamily}
            onReady={handleReady}
          />
        </Suspense>
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="text-xs text-text-muted">
          Double-click text to edit
        </p>
        <p className="text-xs font-medium text-text-muted tabular-nums">
          {platform.width} × {platform.height} px
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 space-y-5">
        <TemplateSelector templates={templates} selected={template} onSelect={handleTemplateSelect} />
        <BgSection
          color={bgColor}
          imageUrl={bgImageUrl}
          onColorChange={setBgColor}
          onImageUpload={handleBgUpload}
          onImageClear={handleBgClear}
        />
        <FontSelector value={fontFamily} onChange={setFontFamily} />
      </div>

      <div className="space-y-2">
        {exporting && <ProgressBar visible label="Exporting..." />}
        <button
          onClick={handleExport}
          disabled={exporting}
          className="w-full touch-target flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover active:scale-95 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {exporting ? 'Exporting...' : exportLabel}
        </button>
      </div>

      <AdSlot actionDone={done} slot="placeholder-slot-id" />

      {children}
    </div>
  )
}
