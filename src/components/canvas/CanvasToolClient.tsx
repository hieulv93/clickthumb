'use client'

import { useState, useCallback, useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import TemplateSelector from './TemplateSelector'
import TextEditor from './TextEditor'
import BgSection from './BgSection'
import BgImageUpload from './BgImageUpload'
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
  const [texts, setTexts] = useState<string[]>(templates[0]?.texts.map(() => '') ?? [])
  const [exporting, setExporting] = useState(false)
  const [done, setDone] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const exportFnRef = useRef<(() => Promise<Blob>) | null>(null)
  const bgUrlRef = useRef<string | null>(null)

  const handleReady = useCallback((fn: () => Promise<Blob>) => {
    exportFnRef.current = fn
  }, [])

  const handleTemplateSelect = useCallback((t: Template) => {
    setTemplate(t)
    setBgColor(t.bgColor)
    setFontFamily(t.texts[0]?.fontFamily ?? 'Impact')
    setTexts(t.texts.map(() => ''))
  }, [])

  const handleTextChange = useCallback((index: number, value: string) => {
    setTexts((prev) => prev.map((t, i) => (i === index ? value : t)))
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
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 3000)
      analytics.thumbnailExported(platform.id, template?.id ?? 'custom', blob.size / 1024)
    } catch {
      // silent
    } finally {
      setExporting(false)
    }
  }, [downloadFilename, platform.id, template?.id])

  const downloadBtn = (
    <div className="space-y-2">
      {exporting && <ProgressBar visible label="Exporting..." />}
      <button
        onClick={handleExport}
        disabled={exporting}
        className={`w-full touch-target flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          downloaded
            ? 'bg-green-600 hover:bg-green-700 text-white active:scale-95'
            : 'bg-primary hover:bg-primary-hover active:scale-95 disabled:opacity-60 text-white'
        }`}
      >
        {downloaded ? (
          <>
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Downloaded!
          </>
        ) : (
          <>
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {exporting ? 'Exporting...' : exportLabel}
          </>
        )}
      </button>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* 2-column on desktop: canvas left (sticky) | controls right */}
      <div className="md:grid md:grid-cols-[1fr_288px] md:gap-6 md:items-start">

        {/* Left column: canvas + upload + download (sticky on desktop) */}
        <div className="space-y-3 md:sticky md:top-14">
          <div className="flex justify-center">
            <Suspense fallback={<div className="w-full h-64 bg-surface rounded-xl border border-border" />}>
              <CanvasEditor
                platform={platform}
                template={template}
                bgColor={bgColor}
                bgImageUrl={bgImageUrl}
                fontFamily={fontFamily}
                texts={texts}
                onReady={handleReady}
              />
            </Suspense>
          </div>
          <div className="flex justify-end px-1">
            <p className="text-xs font-medium text-text-muted tabular-nums">
              {platform.width} × {platform.height} px
            </p>
          </div>
          <BgImageUpload imageUrl={bgImageUrl} onUpload={handleBgUpload} onClear={handleBgClear} />
          {/* Download button — desktop only */}
          <div className="hidden md:block">{downloadBtn}</div>
        </div>

        {/* Right column: controls panel */}
        <div className="mt-4 md:mt-0">
          <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 space-y-5">
            <TemplateSelector templates={templates} selected={template} onSelect={handleTemplateSelect} />
            <TextEditor values={texts} onChange={handleTextChange} placeholders={template?.texts.map((t) => t.text)} />
            <BgSection color={bgColor} onChange={setBgColor} />
            <FontSelector value={fontFamily} onChange={setFontFamily} />
          </div>
        </div>
      </div>

      {/* Download button — mobile only */}
      <div className="md:hidden">{downloadBtn}</div>

      <AdSlot actionDone={done} slot="placeholder-slot-id" />

      {children}
    </div>
  )
}
