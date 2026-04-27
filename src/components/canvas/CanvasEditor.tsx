'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import type { Template } from '@/lib/templates'
import { CANVAS_DISPLAY_WIDTH, getDisplayHeight, type Platform } from '@/lib/platforms'

interface CanvasEditorProps {
  platform: Platform
  template: Template | null
  bgColor: string
  bgImageUrl: string | null
  fontFamily: string
  texts: string[]
  onReady: (exportFn: () => Promise<Blob>) => void
}

export default function CanvasEditor({
  platform,
  template,
  bgColor,
  bgImageUrl,
  fontFamily,
  texts,
  onReady,
}: CanvasEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fabricRef = useRef<any>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [cssScale, setCssScale] = useState(1)
  const scale = CANVAS_DISPLAY_WIDTH / platform.width
  const displayH = getDisplayHeight(platform)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const observer = new ResizeObserver(([entry]) => {
      setCssScale(Math.min(1, entry.contentRect.width / CANVAS_DISPLAY_WIDTH))
    })
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [])

  const applyTemplate = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (canvas: any, fabric: any, tmpl: Template) => {
      canvas.clear()

      // Background
      canvas.backgroundColor = tmpl.bgColor

      // Background image if provided
      if (bgImageUrl) {
        await new Promise<void>((resolve) => {
          fabric.Image.fromURL(bgImageUrl, (img: any) => {
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
            // Constrain drag so image always covers canvas (no black edges)
            img.on('moving', () => {
              const minLeft = canvas.width - img.getScaledWidth()
              const minTop = canvas.height - img.getScaledHeight()
              if (img.left > 0) img.left = 0
              if (img.left < minLeft) img.left = minLeft
              if (img.top > 0) img.top = 0
              if (img.top < minTop) img.top = minTop
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
    },
    [bgImageUrl, scale]
  )

  useEffect(() => {
    if (!canvasRef.current) return
    let mounted = true

    ;(async () => {
      const fabric = (await import('fabric')).fabric
      if (!mounted || !canvasRef.current) return

      const canvas = new fabric.Canvas(canvasRef.current, {
        width: CANVAS_DISPLAY_WIDTH,
        height: displayH,
        backgroundColor: bgColor,
        selection: true,
        preserveObjectStacking: true,
      })
      fabricRef.current = canvas

      if (template) {
        await applyTemplate(canvas, fabric, template)
      }

      onReady(async () => {
        const multiplier = platform.width / CANVAS_DISPLAY_WIDTH
        const dataUrl = canvas.toDataURL({
          format: 'jpeg',
          quality: 0.92,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textObjs = canvas.getObjects().filter((obj: any) => obj.type === 'i-text' || obj.type === 'text')
    texts.forEach((text, i) => {
      if (textObjs[i]) textObjs[i].set('text', text !== '' ? text : (template?.texts[i]?.text ?? ''))
    })
    canvas.renderAll()
  }, [texts])

  return (
    <div ref={wrapperRef} className="w-full" style={{ maxWidth: CANVAS_DISPLAY_WIDTH }}>
      <div style={{ aspectRatio: `${CANVAS_DISPLAY_WIDTH}/${displayH}`, position: 'relative' }}>
        <div
          className="absolute top-0 left-0 rounded-xl overflow-hidden border border-border shadow-sm"
          style={{
            width: CANVAS_DISPLAY_WIDTH,
            height: displayH,
            transformOrigin: 'top left',
            transform: `scale(${cssScale})`,
          }}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  )
}
