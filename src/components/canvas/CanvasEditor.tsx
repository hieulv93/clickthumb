'use client'

import { useEffect, useRef, useCallback } from 'react'
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
  const scale = CANVAS_DISPLAY_WIDTH / platform.width
  const displayH = getDisplayHeight(platform)

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
            img.scaleToWidth(canvas.width)
            img.set({ left: 0, top: 0, selectable: false, evented: false })
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
      if (textObjs[i]) textObjs[i].set('text', text)
    })
    canvas.renderAll()
  }, [texts])

  return (
    <div
      className="w-full rounded-xl overflow-hidden border border-border shadow-sm"
      style={{ maxWidth: CANVAS_DISPLAY_WIDTH }}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}
