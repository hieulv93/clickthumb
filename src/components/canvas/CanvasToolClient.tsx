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
import { getDisplayDimensions, type Platform } from '@/lib/platforms'
import type { Template } from '@/lib/templates'
import { triggerDownload } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

const CanvasEditor = dynamic(() => import('./CanvasEditor'), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-surface rounded-xl border border-border animate-pulse" />,
})

type ExportFormat = 'jpeg' | 'png'

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
  const [exportError, setExportError] = useState(false)
  const [format, setFormat] = useState<ExportFormat>('jpeg')
  const [editorActivated, setEditorActivated] = useState(false)
  const { w: displayW, h: displayH } = getDisplayDimensions(platform)
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
    setExportError(false)
    try {
      const blob = await exportFnRef.current()
      const ext = format === 'png' ? '.png' : '.jpg'
      const filename = downloadFilename.replace(/\.(jpg|jpeg|png)$/i, ext)
      triggerDownload(blob, filename)
      setDone(true)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 3000)
      analytics.thumbnailExported(platform.id, template?.id ?? 'custom', blob.size / 1024)
    } catch {
      setExportError(true)
      setTimeout(() => setExportError(false), 4000)
    } finally {
      setExporting(false)
    }
  }, [downloadFilename, format, platform.id, template?.id])

  const formatToggle = (
    <div className="flex rounded-lg border border-border overflow-hidden text-xs font-medium">
      {(['jpeg', 'png'] as ExportFormat[]).map((fmt) => (
        <button
          key={fmt}
          onClick={() => setFormat(fmt)}
          className={`flex-1 py-1.5 transition-colors ${
            format === fmt
              ? 'bg-primary text-white'
              : 'text-text-muted hover:text-text-main hover:bg-surface'
          }`}
        >
          {fmt.toUpperCase()}
        </button>
      ))}
    </div>
  )

  const downloadBtn = (
    <div className="space-y-2">
      {formatToggle}
      {exporting && <ProgressBar visible label="Exporting..." />}
      {exportError && (
        <p className="text-xs text-center text-red-500">Export failed. Please try again.</p>
      )}
      {downloaded && (
        <p className="text-xs text-center text-text-muted">
          Need a smaller file?{' '}
          <a
            href="https://compressimg.pro/compress-image"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Compress it free →
          </a>
        </p>
      )}
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
      {/* 2-column tool area: canvas left (sticky) + controls right */}
      <div className={editorActivated ? 'lg:grid lg:grid-cols-[1fr_320px] lg:gap-6' : ''}>

        {/* Left: only canvas (sticky) — nothing below so nothing gets overlapped */}
        <div>
          <div className="lg:sticky lg:top-14 lg:min-h-full">
            {editorActivated ? (
              <>
                <Suspense fallback={
                  <div className="mx-auto" style={{ width: '100%', maxWidth: displayW }}>
                    <div className="w-full bg-surface rounded-xl border border-border animate-pulse" style={{ aspectRatio: `${displayW} / ${displayH}` }} />
                    <div className="flex items-center justify-end px-1 mt-1 min-h-[26px]">
                      <p className="text-xs font-medium text-text-muted tabular-nums">{platform.width} × {platform.height} px</p>
                    </div>
                  </div>
                }>
                  <CanvasEditor
                    platform={platform}
                    template={template}
                    bgColor={bgColor}
                    bgImageUrl={bgImageUrl}
                    fontFamily={fontFamily}
                    texts={texts}
                    format={format}
                    onReady={handleReady}
                  />
                </Suspense>
                <div className="mt-2 space-y-2">
                  <BgImageUpload imageUrl={bgImageUrl} onUpload={handleBgUpload} onClear={handleBgClear} />
                  <div className="hidden lg:block">{downloadBtn}</div>
                </div>
              </>
            ) : (
              <div>
                <div className="mx-auto" style={{ width: '100%', maxWidth: displayW }}>
                  <button
                    onClick={() => setEditorActivated(true)}
                    className="w-full rounded-xl border border-border bg-surface flex flex-col items-center justify-center gap-4 group hover:border-primary transition-colors duration-150"
                    style={{ aspectRatio: `${displayW} / ${Math.max(displayH, Math.round(displayW * 9 / 16))}` }}
                    aria-label={`Open ${platform.name} editor`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div className="text-center space-y-1 px-4">
                      <p className="text-sm font-semibold text-text-main">{platform.name}</p>
                      <p className="text-xs text-text-muted">{platform.width} × {platform.height} px</p>
                    </div>
                    <span className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl group-hover:opacity-90 transition-opacity">
                      Open Editor →
                    </span>
                  </button>
                </div>
                <div className="min-h-[26px]" />
              </div>
            )}
          </div>
        </div>

        {/* Right: controls panel — only render when editor is active */}
        {editorActivated && (
          <div className="mt-4 lg:mt-0">
            <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 space-y-5">
              <TextEditor values={texts} onChange={handleTextChange} placeholders={template?.texts.map((t) => t.text)} />
              <FontSelector value={fontFamily} onChange={setFontFamily} />
              <TemplateSelector templates={templates} selected={template} onSelect={handleTemplateSelect} />
              <BgSection color={bgColor} onChange={setBgColor} />
            </div>
            <div className="lg:hidden mt-4">{downloadBtn}</div>
          </div>
        )}
      </div>

      {/* Full-width below both columns: ad + SEO content */}
      <AdSlot actionDone={done} slot="placeholder-slot-id" />
      {children}
    </div>
  )
}
