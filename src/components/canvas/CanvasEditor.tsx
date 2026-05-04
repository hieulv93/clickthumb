'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import type { Template } from '@/lib/templates'
import { getDisplayDimensions, type Platform } from '@/lib/platforms'

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

  const [hasChanges, setHasChanges] = useState(false)

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

  const applyTemplate = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (canvas: any, fabric: any, tmpl: Template) => {
      setHasChanges(false)
      canvas.clear()
      canvas.backgroundColor = tmpl.bgColor

      if (bgImageUrl) {
        await new Promise<void>((resolve) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fabric.Image.fromURL(bgImageUrl, (img: any) => {
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
    },
    [bgImageUrl, scale]
  )

  // Reset: restore each object's position to template defaults without rebuilding canvas.
  // Avoids canvas.loadFromJSON (which caused the black border bug) by setting coordinates directly.
  const handleReset = useCallback(() => {
    const canvas = fabricRef.current
    if (!canvas || !template) return

    const textObjs = canvas
      .getObjects()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((obj: any) => obj.type === 'i-text' || obj.type === 'text')

    template.texts.forEach((preset, i) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const obj = textObjs[i] as any
      if (!obj) return
      obj.set({
        left: preset.left * scale,
        top: preset.top * scale,
        originX: preset.originX,
        originY: preset.originY,
      })
      obj.setCoords()
    })

    // Re-center background image so no black edges after drag
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvas.getObjects().forEach((obj: any) => {
      if (obj.type !== 'image') return
      obj.set({
        left: (canvas.width - obj.getScaledWidth()) / 2,
        top: (canvas.height - obj.getScaledHeight()) / 2,
      })
      obj.setCoords()
    })

    canvas.renderAll()
    setHasChanges(false)
  }, [template, scale])

  // Ctrl+Z / Cmd+Z
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault()
        handleReset()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleReset])

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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvas.on('object:moving', (e: any) => {
        const obj = e.target
        const cw = canvas.width as number
        const ch = canvas.height as number
        if (obj.type === 'i-text' || obj.type === 'text') {
          const hw = obj.getScaledWidth() / 2
          const hh = obj.getScaledHeight() / 2
          obj.left = Math.max(hw, Math.min(cw - hw, obj.left))
          obj.top = Math.max(hh, Math.min(ch - hh, obj.top))
        } else if (obj.type === 'image') {
          const sw = obj.getScaledWidth()
          const sh = obj.getScaledHeight()
          const newLeft = Math.max(cw - sw, Math.min(0, obj.left))
          const newTop = Math.max(ch - sh, Math.min(0, obj.top))
          obj.set({ left: newLeft, top: newTop })
          obj.setCoords()
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const t = (canvas as any)._currentTransform
          if (t) { t.left = newLeft; t.top = newTop }
        }
      })

      canvas.on('object:modified', () => setHasChanges(true))
      canvas.on('text:changed', () => setHasChanges(true))

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
    const textObjs = canvas
      .getObjects()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((obj: any) => obj.type === 'i-text' || obj.type === 'text')
    texts.forEach((text, i) => {
      if (textObjs[i])
        textObjs[i].set('text', text !== '' ? text : (template?.texts[i]?.text ?? ''))
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
      {hasChanges && (
        <div className="flex justify-start mt-1">
          <button
            onClick={handleReset}
            title="Reset positions (Ctrl+Z)"
            className="flex items-center gap-1 text-xs text-text-muted hover:text-text-main px-2 py-1 rounded-lg hover:bg-surface transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 7v6h6" />
              <path d="M3 13C5.5 6.5 11 4 16 6s7 8 5 13" />
            </svg>
            Reset
          </button>
        </div>
      )}
    </div>
  )
}
