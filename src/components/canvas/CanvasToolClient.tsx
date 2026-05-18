"use client";

import { useState, useCallback, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import TemplateSelector from "./TemplateSelector";
import TextEditor from "./TextEditor";
import BgSection from "./BgSection";
import BgImageUpload from "./BgImageUpload";
import FontSelector from "./FontSelector";
import ProgressBar from "@/components/tool/ProgressBar";
import AdSlot from "@/components/ads/AdSlot";
import { getDisplayDimensions, type Platform } from "@/lib/platforms";
import type { Template } from "@/lib/templates";
import { triggerDownload } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

const CanvasEditor = dynamic(() => import("./CanvasEditor"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-surface rounded-xl border border-border animate-pulse" />
  ),
});

type ExportFormat = "jpeg" | "png";

interface CanvasToolClientProps {
  platform: Platform;
  templates: Template[];
  downloadFilename: string;
  exportLabel: string;
  children: React.ReactNode;
}

export default function CanvasToolClient({
  platform,
  templates,
  downloadFilename,
  exportLabel,
  children,
}: CanvasToolClientProps) {
  const [template, setTemplate] = useState<Template | null>(
    templates[0] ?? null,
  );
  const [bgColor, setBgColor] = useState(templates[0]?.bgColor ?? "#ffffff");
  const [bgImageUrl, setBgImageUrl] = useState<string | null>(null);
  const [fontFamily, setFontFamily] = useState(
    templates[0]?.texts[0]?.fontFamily ?? "Impact",
  );
  const [texts, setTexts] = useState<string[]>(
    templates[0]?.texts.map((t) => t.text) ?? [],
  );
  const [textColors, setTextColors] = useState<string[]>(
    templates[0]?.texts.map((t) => t.fill) ?? [],
  );
  const [textSizeMultiplier, setTextSizeMultiplier] = useState(100);
  const [hasChanges, setHasChanges] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [done, setDone] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [exportError, setExportError] = useState(false);
  const [format] = useState<ExportFormat>("jpeg");
  const { w: displayW, h: displayH } = getDisplayDimensions(platform);
  const exportFnRef = useRef<(() => Promise<Blob>) | null>(null);
  const bgUrlRef = useRef<string | null>(null);

  const handleReady = useCallback((fn: () => Promise<Blob>) => {
    exportFnRef.current = fn;
  }, []);

  const handleTemplateSelect = useCallback((t: Template) => {
    setTemplate(t);
    setBgColor(t.bgColor);
    setFontFamily(t.texts[0]?.fontFamily ?? "Impact");
    setTexts(t.texts.map((tx) => tx.text));
    setTextColors(t.texts.map((tx) => tx.fill));
    setTextSizeMultiplier(100);
    setHasChanges(false);
  }, []);

  const handleTextChange = useCallback((index: number, value: string) => {
    setTexts((prev) => prev.map((t, i) => (i === index ? value : t)));
    setHasChanges(true);
  }, []);

  const handleFontChange = useCallback((font: string) => {
    setFontFamily(font);
    setHasChanges(true);
  }, []);

  const handleBgColorChange = useCallback((color: string) => {
    setBgColor(color);
    setHasChanges(true);
  }, []);

  const handleBgUpload = useCallback((url: string) => {
    if (bgUrlRef.current) URL.revokeObjectURL(bgUrlRef.current);
    bgUrlRef.current = url;
    setBgImageUrl(url);
  }, []);

  const handleBgClear = useCallback(() => {
    if (bgUrlRef.current) {
      URL.revokeObjectURL(bgUrlRef.current);
      bgUrlRef.current = null;
    }
    setBgImageUrl(null);
  }, []);

  const handleReset = useCallback(() => {
    setBgColor(template?.bgColor ?? "#ffffff");
    setFontFamily(template?.texts[0]?.fontFamily ?? "Impact");
    setTexts(template?.texts.map((t) => t.text) ?? []);
    setTextColors(template?.texts.map((t) => t.fill) ?? []);
    setTextSizeMultiplier(100);
    setHasChanges(false);
  }, [template]);

  const handleExport = useCallback(async () => {
    if (!exportFnRef.current) return;
    setExporting(true);
    setExportError(false);
    try {
      const blob = await exportFnRef.current();
      const filename = downloadFilename.replace(/\.(jpg|jpeg|png)$/i, ".jpg");
      triggerDownload(blob, filename);
      setDone(true);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
      analytics.thumbnailExported(
        platform.id,
        template?.id ?? "custom",
        blob.size / 1024,
      );
    } catch {
      setExportError(true);
      setTimeout(() => setExportError(false), 4000);
    } finally {
      setExporting(false);
    }
  }, [downloadFilename, platform.id, template?.id]);

  const downloadBtn = (
    <div className="space-y-2">
      {exporting && <ProgressBar visible label="Exporting..." />}
      {exportError && (
        <p className="text-xs text-center text-red-500">
          Export failed. Please try again.
        </p>
      )}
      <button
        onClick={handleExport}
        disabled={exporting}
        className={`w-full touch-target flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          downloaded
            ? "bg-green-700 hover:bg-green-800 text-white active:scale-95"
            : "bg-green-600 hover:bg-green-700 active:scale-95 disabled:opacity-60 text-white"
        }`}
      >
        {downloaded ? (
          <>
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Downloaded!
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {exporting ? "Exporting..." : exportLabel}
          </>
        )}
      </button>
      {done && (
        <p className="text-xs text-center text-text-muted">
          Need a smaller file?{" "}
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
    </div>
  );

  return (
    <div className="space-y-6">
      {/* 2-column tool area: canvas left (sticky) + controls right */}
      <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-6">
        {/* Left: canvas (sticky) */}
        <div>
          <div className="lg:sticky lg:top-14 lg:min-h-full">
            <Suspense
              fallback={
                <div
                  className="mx-auto"
                  style={{ width: "100%", maxWidth: displayW }}
                >
                  <div
                    className="w-full bg-surface rounded-xl border border-border animate-pulse"
                    style={{ aspectRatio: `${displayW} / ${displayH}` }}
                  />
                  <div className="flex items-center justify-end px-1 mt-1 min-h-[26px]">
                    <p className="text-xs font-medium text-text-muted tabular-nums">
                      {platform.width} × {platform.height} px
                    </p>
                  </div>
                </div>
              }
            >
              <CanvasEditor
                platform={platform}
                template={template}
                bgColor={bgColor}
                bgImageUrl={bgImageUrl}
                fontFamily={fontFamily}
                texts={texts}
                format={format}
                hasChanges={hasChanges}
                onReady={handleReady}
                onReset={handleReset}
                onCanvasChange={() => setHasChanges(true)}
                textColors={textColors}
                textSizeMultiplier={textSizeMultiplier}
              />
            </Suspense>
            <div className="mt-2 space-y-2">
              <BgImageUpload
                imageUrl={bgImageUrl}
                onUpload={handleBgUpload}
                onClear={handleBgClear}
              />
              <div className="hidden lg:block">{downloadBtn}</div>
            </div>
          </div>
        </div>

        {/* Right: controls panel */}
        <div className="mt-4 lg:mt-0">
          <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 space-y-5">
            <TextEditor
              values={texts}
              onChange={handleTextChange}
              placeholders={template?.texts.map((t) => t.text)}
              colors={textColors}
              onColorChange={(i, color) => {
                setTextColors((prev) =>
                  prev.map((c, idx) => (idx === i ? color : c)),
                );
                setHasChanges(true);
              }}
              sizeMultiplier={textSizeMultiplier}
              onSizeChange={(s) => {
                setTextSizeMultiplier(s);
                setHasChanges(true);
              }}
            />
            <FontSelector value={fontFamily} onChange={handleFontChange} />
            <TemplateSelector
              templates={templates}
              selected={template}
              onSelect={handleTemplateSelect}
            />
            <BgSection color={bgColor} onChange={handleBgColorChange} />
          </div>
          <div className="lg:hidden mt-4">{downloadBtn}</div>
        </div>
      </div>

      {/* Full-width below both columns: ad + SEO content */}
      <AdSlot actionDone={done} slot="placeholder-slot-id" />
      {children}
    </div>
  );
}
