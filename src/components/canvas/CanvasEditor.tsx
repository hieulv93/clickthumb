"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import type { Template } from "@/lib/templates";
import { getDisplayDimensions, type Platform } from "@/lib/platforms";

interface CanvasEditorProps {
  platform: Platform;
  template: Template | null;
  bgColor: string;
  bgImageUrl: string | null;
  fontFamily: string;
  texts: string[];
  format: "jpeg" | "png";
  hasChanges: boolean;
  onReady: (exportFn: () => Promise<Blob>) => void;
  onReset: () => void;
  onCanvasChange: () => void;
  textColors?: string[];
  textSizeMultiplier?: number;
  // Project load/save
  initialJson?: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onGetJson?: (fn: () => Promise<any>) => void;
  onGetPreview?: (fn: () => string) => void;
  onBgImageRestored?: (dataUrl: string) => void;
}

export default function CanvasEditor({
  platform,
  template,
  bgColor,
  bgImageUrl,
  fontFamily,
  texts,
  format,
  hasChanges,
  onReady,
  onReset,
  onCanvasChange,
  textColors,
  textSizeMultiplier,
  initialJson,
  onGetJson,
  onGetPreview,
  onBgImageRestored,
}: CanvasEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fabricRef = useRef<any>(null);
  const loadedFromJsonRef = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<string[]>(texts);
  useEffect(() => {
    textsRef.current = texts;
  }, [texts]);
  const [cssScale, setCssScale] = useState(1);
  const { w: displayW, h: displayH } = getDisplayDimensions(platform);
  const scale = displayW / platform.width;

  const formatRef = useRef(format);
  useEffect(() => {
    formatRef.current = format;
  }, [format]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new ResizeObserver(([entry]) => {
      setCssScale(Math.min(1, entry.contentRect.width / displayW));
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  const applyTemplate = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (canvas: any, fabric: any, tmpl: Template) => {
      canvas.clear();
      canvas.backgroundColor = tmpl.bgColor;

      if (bgImageUrl) {
        await new Promise<void>((resolve) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fabric.Image.fromURL(bgImageUrl, (img: any) => {
            const coverScale = Math.max(
              canvas.width / img.width,
              canvas.height / img.height,
            );
            img.scale(coverScale);
            img.set({
              left: (canvas.width - img.getScaledWidth()) / 2,
              top: (canvas.height - img.getScaledHeight()) / 2,
              selectable: true,
              evented: true,
              hasControls: false,
              hasBorders: false,
            });
            canvas.add(img);
            canvas.sendToBack(img);
            resolve();
          });
        });
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
        });
        canvas.add(textObj);
      }

      canvas.renderAll();
    },
    [bgImageUrl, scale],
  );

  // Reset: restore each object's position to template defaults without rebuilding canvas.
  // Avoids canvas.loadFromJSON (which caused the black border bug) by setting coordinates directly.
  const handleReset = useCallback(() => {
    const canvas = fabricRef.current;
    if (!canvas || !template) return;

    // Exit any active IText editing mode first
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const active = canvas.getActiveObject() as any;
    if (active && active.isEditing) active.exitEditing();
    canvas.discardActiveObject();

    const textObjs = canvas
      .getObjects()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((obj: any) => obj.type === "i-text" || obj.type === "text");

    template.texts.forEach((preset, i) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const obj = textObjs[i] as any;
      if (!obj) return;
      obj.set({
        text: preset.text,
        left: preset.left * scale,
        top: preset.top * scale,
        originX: preset.originX,
        originY: preset.originY,
      });
      obj.setCoords();
    });

    // Re-center background image so no black edges after drag
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvas.getObjects().forEach((obj: any) => {
      if (obj.type !== "image") return;
      obj.set({
        left: (canvas.width - obj.getScaledWidth()) / 2,
        top: (canvas.height - obj.getScaledHeight()) / 2,
      });
      obj.setCoords();
    });

    canvas.renderAll();
    onReset();
  }, [template, scale, onReset]);

  // Ctrl+Z / Cmd+Z
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        handleReset();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleReset]);

  useEffect(() => {
    if (!canvasRef.current) return;
    let mounted = true;

    (async () => {
      const fabric = (await import("fabric")).fabric;
      if (!mounted || !canvasRef.current) return;

      const canvas = new fabric.Canvas(canvasRef.current, {
        width: displayW,
        height: displayH,
        backgroundColor: bgColor,
        selection: true,
        preserveObjectStacking: true,
      });
      fabricRef.current = canvas;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvas.on("object:moving", (e: any) => {
        const obj = e.target;
        const cw = displayW;
        const ch = displayH;
        if (obj.type === "i-text" || obj.type === "text") {
          const hw = obj.getScaledWidth() / 2;
          const hh = obj.getScaledHeight() / 2;
          obj.left = Math.max(hw, Math.min(cw - hw, obj.left));
          obj.top = Math.max(hh, Math.min(ch - hh, obj.top));
        } else if (obj.type === "image") {
          const sw = obj.getScaledWidth();
          const sh = obj.getScaledHeight();
          const newLeft = Math.max(cw - sw, Math.min(0, obj.left));
          const newTop = Math.max(ch - sh, Math.min(0, obj.top));
          obj.set({ left: newLeft, top: newTop });
          obj.setCoords();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const t = (canvas as any)._currentTransform;
          if (t) {
            t.left = newLeft;
            t.top = newTop;
          }
        }
      });

      canvas.on("object:modified", () => onCanvasChange());
      canvas.on("text:changed", () => onCanvasChange());

      if (initialJson) {
        await new Promise<void>((resolve) => {
          canvas.loadFromJSON(JSON.parse(initialJson), () => {
            // Blob URLs were compressed to max 1280px before saving, so the
            // loaded image's natural dims differ from the original. The stored
            // scaleX/scaleY was calculated against the original dims, so it is
            // now wrong. Recalculate cover-scale from actual loaded dimensions.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            canvas.getObjects().forEach((obj: any) => {
              if (obj.type !== "image") return;
              const cs = Math.max(displayW / obj.width, displayH / obj.height);
              obj.scale(cs);
              obj.set({
                left: (displayW - obj.getScaledWidth()) / 2,
                top: (displayH - obj.getScaledHeight()) / 2,
              });
              obj.setCoords();
            });
            // Notify parent so BgImageUpload shows "Background image set" state.
            // Set the flag first so the template-change effect doesn't fire and
            // wipe the canvas when bgImageUrl propagates back down.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const firstImg = canvas
              .getObjects()
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .find((o: any) => o.type === "image") as any;
            if (firstImg?.src?.startsWith("data:")) {
              loadedFromJsonRef.current = true;
              onBgImageRestored?.(firstImg.src);
            }
            canvas.renderAll();
            resolve();
          });
        });
      } else if (template) {
        await applyTemplate(canvas, fabric, template);
      }

      onReady(async () => {
        const fmt = formatRef.current;
        const multiplier = platform.width / displayW;
        const dataUrl = canvas.toDataURL({
          format: fmt,
          quality: fmt === "jpeg" ? 0.92 : 1,
          multiplier,
        });
        return await fetch(dataUrl).then((r) => r.blob());
      });

      if (onGetPreview) {
        onGetPreview(() =>
          canvas.toDataURL({
            format: "jpeg",
            quality: 0.6,
            multiplier: 320 / displayW,
          }),
        );
      }

      if (onGetJson) {
        onGetJson(async () => {
          const json = canvas.toJSON();
          // Convert blob URLs to base64 data URLs so uploaded images persist across sessions
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          for (const obj of json.objects as any[]) {
            if (
              obj.type === "image" &&
              typeof obj.src === "string" &&
              obj.src.startsWith("blob:")
            ) {
              try {
                const res = await fetch(obj.src);
                const blob = await res.blob();
                // Resize + compress to JPEG ≤1280px so base64 stays under Vercel's 4.5MB body limit
                obj.src = await new Promise<string>((resolve, reject) => {
                  const img = new Image();
                  const tempUrl = URL.createObjectURL(blob);
                  img.onload = () => {
                    const MAX = 1280;
                    let w = img.naturalWidth;
                    let h = img.naturalHeight;
                    if (w > MAX || h > MAX) {
                      const scale = MAX / Math.max(w, h);
                      w = Math.round(w * scale);
                      h = Math.round(h * scale);
                    }
                    const offscreen = document.createElement("canvas");
                    offscreen.width = w;
                    offscreen.height = h;
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    offscreen.getContext("2d")!.drawImage(img, 0, 0, w, h);
                    URL.revokeObjectURL(tempUrl);
                    resolve(offscreen.toDataURL("image/jpeg", 0.8));
                  };
                  img.onerror = () => {
                    URL.revokeObjectURL(tempUrl);
                    reject(new Error("img load failed"));
                  };
                  img.src = tempUrl;
                });
              } catch {
                // blob URL already revoked — skip, image won't restore
              }
            }
          }
          return json;
        });
      }
    })();

    return () => {
      mounted = false;
      if (fabricRef.current) {
        fabricRef.current.dispose();
        fabricRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform.id]);

  useEffect(() => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    canvas.backgroundColor = bgColor;
    canvas.renderAll();
  }, [bgColor]);

  useEffect(() => {
    // When a project was just loaded from JSON, bgImageUrl propagating down
    // changes applyTemplate (closure dep) and would trigger this effect,
    // clearing the canvas. Suppress it once and let subsequent changes through.
    if (loadedFromJsonRef.current) {
      loadedFromJsonRef.current = false;
      return;
    }
    const canvas = fabricRef.current;
    if (!canvas || !template) return;
    (async () => {
      const fabric = (await import("fabric")).fabric;
      await applyTemplate(canvas, fabric, template);
      // After rebuild, restore user-typed text (overrides template defaults)
      const textObjs = canvas
        .getObjects()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((obj: any) => obj.type === "i-text" || obj.type === "text");
      textsRef.current.forEach((text, i) => {
        if (textObjs[i]) textObjs[i].set("text", text);
      });
      canvas.renderAll();
    })();
  }, [template, applyTemplate]);

  useEffect(() => {
    const canvas = fabricRef.current;
    if (!canvas || !fontFamily) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvas.getObjects().forEach((obj: any) => {
      if (obj.type === "i-text" || obj.type === "text") {
        obj.set("fontFamily", fontFamily);
      }
    });
    canvas.renderAll();
  }, [fontFamily]);

  useEffect(() => {
    const canvas = fabricRef.current;
    if (!canvas || !texts.length) return;
    const textObjs = canvas
      .getObjects()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((obj: any) => obj.type === "i-text" || obj.type === "text");
    texts.forEach((text, i) => {
      if (textObjs[i]) textObjs[i].set("text", text);
    });
    canvas.renderAll();
  }, [texts]);

  useEffect(() => {
    const canvas = fabricRef.current;
    if (!canvas || !textColors?.length) return;
    const textObjs = canvas
      .getObjects()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((obj: any) => obj.type === "i-text" || obj.type === "text");
    textColors.forEach((color, i) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (textObjs[i]) (textObjs[i] as any).set("fill", color);
    });
    canvas.renderAll();
  }, [textColors]);

  useEffect(() => {
    const canvas = fabricRef.current;
    if (!canvas || !template) return;
    const mult = (textSizeMultiplier ?? 100) / 100;
    const textObjs = canvas
      .getObjects()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((obj: any) => obj.type === "i-text" || obj.type === "text");
    template.texts.forEach((preset, i) => {
      if (textObjs[i]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (textObjs[i] as any).set("fontSize", preset.fontSize * scale * mult);
      }
    });
    canvas.renderAll();
  }, [textSizeMultiplier, template, scale]);

  return (
    <div
      ref={wrapperRef}
      className="mx-auto"
      style={{ width: "100%", maxWidth: displayW }}
    >
      {/* overflow:hidden clips the absolute canvas (fixed layout width) so it never causes page horizontal scroll */}
      <div
        style={{
          aspectRatio: `${displayW}/${displayH}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute top-0 left-0 rounded-xl overflow-hidden border border-border shadow-sm"
          style={{
            width: displayW,
            height: displayH,
            transformOrigin: "top left",
            transform: `scale(${cssScale})`,
          }}
        >
          <canvas
            ref={canvasRef}
            role="img"
            aria-label="Thumbnail preview canvas"
          />
        </div>
      </div>
      {/* Dimension + reset share one fixed-height row — no UI jump when reset appears */}
      <div className="flex items-center justify-between px-1 mt-1 min-h-[26px]">
        <div>
          {hasChanges && (
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
          )}
        </div>
        <p className="text-xs font-medium text-text-muted tabular-nums">
          {platform.width} × {platform.height} px
        </p>
      </div>
    </div>
  );
}
