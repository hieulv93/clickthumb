'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import type { Template } from '@/lib/templates'
import { getDisplayDimensions, type Platform } from '@/lib/platforms'

const MAX_HISTORY = 50
const TEXT_DEBOUNCE_MS = 500

interface CanvasEditorProps {
  platform: Platform
  template: Template | null
  bgColor: string
  bgImageUrl: string | null
  fontFamily: string
  texts: string[]
  format: 'jpeg' | 'png'
  onReady: (exportFn: () => Promise<Blob>) => void
}

export default function CanvasEditor({
  platform,
  template,
  bgColor,
  bgImageUrl,
  fontFamily,
  texts,
  format,
  onReady,
}: CanvasEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fabricRef = useRef<any>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [cssScale, setCssScale] = useState(1)
  const { w: displayW, h: displayH } = getDisplayDimensions(platform)
  const scale = displayW / platform.width

  // History for Undo
  const historyRef = useRef<string[]>([])
  const historyIndexRef = useRef(-1)
  const isRestoringRef = useRef(false)
  const textDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [canUndo, setCanUndo] = useState(false)

  // Keep format accessible in the export closure without re-registering onReady
  const formatRef = useRef(format)
  useEffect(() => {
    formatRef.current = format
  }, [format])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const observer = new ResizeObserver(([entry]) => {
      setCssScale(Math.min(1, entry.contentRect.width / displayW))
    })
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [])

  const pushHistory = useCallback((canvas: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    if (isRestoringRef.current) return
    const json = JSON.stringify(canvas.toJSON())
    // Trim redo future
    historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1)
    historyRef.current.push(json)
    if (historyRef.current.length > MAX_HISTORY) {
      historyRef.current.shift()
    } else {
      historyIndexRef.current++
    }
    setCanUndo(historyIndexRef.current > 0)
  }, [])

  const handleUndo = useCallback(async () => {
    if (historyIndexRef.current <= 0) return
    const canvas = fabricRef.current
    if (!canvas) return
    historyIndexRef.current--
    const snapshot = historyRef.current[historyIndexRef.current]
    isRestoringRef.current = true
    await new Promise<void>((resolve) => {
      canvas.loadFromJSON(JSON.parse(snapshot), () => {
        // hasBorders/hasControls are not serialized by Fabric.js — re-apply after restore
        canvas.getObjects().forEach((obj: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
          if (obj.type === 'image') {
            obj.set({ hasBorders: false, hasControls: false })
          }
        })
        canvas.renderAll()
        resolve()
      })
    })
    isRestoringRef.current = false
    setCanUndo(historyIndexRef.current > 0)
  }, [])

  // Keyboard Ctrl+Z / Cmd+Z
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault()
        handleUndo()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleUndo])

  const applyTemplate = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (canvas: any, fabric: any, tmpl: Template) => {
      // Reset history before rebuilding canvas
      historyRef.current = []
      historyIndexRef.current = -1
      setCanUndo(false)

      canvas.clear()

      // Background
      canvas.backgroundColor = tmpl.bgColor

      // Background image if provided
      if (bgImageUrl) {
        await new Promise<void>((resolve) => {
          fabric.Image.fromURL(bgImageUrl, (img: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
            // CSS cover: scale so image fills entire canvas with no black bars
            const coverScale = Math.max(canvas.width / img.width, canvas.height / img.height)
            img.scale(coverScale)
            img.set({
              left: (canvas.width - img.getScaledWidth()) / 2,
              top: (canvas.height - img.getScaledHeight()) / 2,
              selectable: true,
              evented: true,
              hasControls: false,
              hasBorders: false,
            })
            canvas.add(img)
            canvas.sendToBack(img)
            resolve()
          })
        })
      }

      // Text layers
      for (const preset of tmpl.texts) {
        const textObj = new fabric.IText(preset.text, {
          fontSize: preset.fontSize * scale,
          fontFamily: preset.fontFamily,
          fill: preset.fill,
          stroke: preset.stroke,
          strokeWidth: preset.strokeWidth ? preset.strokeWidth * scale : 0,
          fontWeight: preset.fontWeight,
          left: preset.left * scale,
          top: preset.top * scale,
          originX: preset.originX,
          originY: preset.originY,
          textAlign: preset.textAlign,
          width: preset.width * scale,
          hasBorders: false,
          hasControls: false,
        })
        canvas.add(textObj)
      }

      canvas.renderAll()

      // Push initial state as first history entry
      pushHistory(canvas)
    },
    [bgImageUrl, scale, pushHistory]
  )

  useEffect(() => {
    if (!canvasRef.current) return
    let mounted = true

    ;(async () => {
      const fabric = (await import('fabric')).fabric
      if (!mounted || !canvasRef.current) return

      const canvas = new fabric.Canvas(canvasRef.current, {
        width: displayW,
        height: displayH,
        backgroundColor: bgColor,
        selection: true,
        preserveObjectStacking: true,
      })
      fabricRef.current = canvas

      // Constrain objects within canvas bounds while dragging
      canvas.on('object:moving', (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        const obj = e.target
        const cw = canvas.width as number
        const ch = canvas.height as number
        if (obj.type === 'i-text' || obj.type === 'text') {
          const hw = obj.getScaledWidth() / 2
          const hh = obj.getScaledHeight() / 2
          obj.left = Math.max(hw, Math.min(cw - hw, obj.left))
          obj.top = Math.max(hh, Math.min(ch - hh, obj.top))
        } else if (obj.type === 'image') {
          // Keep background image covering canvas (no black edges)
          const minLeft = cw - obj.getScaledWidth()
          const minTop = ch - obj.getScaledHeight()
          if (obj.left > 0) obj.left = 0
          if (obj.left < minLeft) obj.left = minLeft
          if (obj.top > 0) obj.top = 0
          if (obj.top < minTop) obj.top = minTop
        }
      })

      // History: push snapshot after user modifies objects
      canvas.on('object:modified', () => pushHistory(canvas))
      canvas.on('text:changed', () => {
        if (textDebounceRef.current) clearTimeout(textDebounceRef.current)
        textDebounceRef.current = setTimeout(() => pushHistory(canvas), TEXT_DEBOUNCE_MS)
      })

      if (template) {
        await applyTemplate(canvas, fabric, template)
      }

      onReady(async () => {
        const fmt = formatRef.current
        const multiplier = platform.width / displayW
        const dataUrl = canvas.toDataURL({
          format: fmt,
          quality: fmt === 'jpeg' ? 0.92 : 1,
          multiplier,
        })
        return await fetch(dataUrl).then((r) => r.blob())
      })
    })()

    return () => {
      mounted = false
      if (textDebounceRef.current) clearTimeout(textDebounceRef.current)
      if (fabricRef.current) {
        fabricRef.current.dispose()
        fabricRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform.id])

  useEffect(() => {
    const canvas = fabricRef.current
    if (!canvas) return
    canvas.backgroundColor = bgColor
    canvas.renderAll()
  }, [bgColor])

  useEffect(() => {
    const canvas = fabricRef.current
    if (!canvas || !template) return
    ;(async () => {
      const fabric = (await import('fabric')).fabric
      await applyTemplate(canvas, fabric, template)
    })()
  }, [template, applyTemplate])

  useEffect(() => {
    const canvas = fabricRef.current
    if (!canvas || !fontFamily) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvas.getObjects().forEach((obj: any) => {
      if (obj.type === 'i-text' || obj.type === 'text') {
        obj.set('fontFamily', fontFamily)
      }
    })
    canvas.renderAll()
  }, [fontFamily])

  useEffect(() => {
    const canvas = fabricRef.current
    if (!canvas || !texts.length) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textObjs = canvas.getObjects().filter((obj: any) => obj.type === 'i-text' || obj.type === 'text')
    texts.forEach((text, i) => {
      if (textObjs[i]) textObjs[i].set('text', text !== '' ? text : (template?.texts[i]?.text ?? ''))
    })
    canvas.renderAll()
  }, [texts])

  return (
    <div ref={wrapperRef} className="w-full" style={{ maxWidth: displayW }}>
      <div style={{ aspectRatio: `${displayW}/${displayH}`, position: 'relative' }}>
        <div
          className="absolute top-0 left-0 rounded-xl overflow-hidden border border-border shadow-sm"
          style={{
            width: displayW,
            height: displayH,
            transformOrigin: 'top left',
            transform: `scale(${cssScale})`,
          }}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
      {canUndo && (
        <div className="flex justify-start mt-1">
          <button
            onClick={handleUndo}
            title="Undo (Ctrl+Z)"
            className="flex items-center gap-1 text-xs text-text-muted hover:text-text-main px-2 py-1 rounded-lg hover:bg-surface transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 7v6h6" />
              <path d="M3 13C5.5 6.5 11 4 16 6s7 8 5 13" />
            </svg>
            Undo
          </button>
        </div>
      )}
    </div>
  )
}
