"use client";

import { useState, useCallback, useRef, Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
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
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { getUserPlan } from "@/app/actions/plan";
import { applyWatermark } from "@/lib/watermark";
import { getProject, saveProject } from "@/app/actions/projects";

const CanvasEditor = dynamic(() => import("./CanvasEditor"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-surface rounded-xl border border-border animate-pulse" />
  ),
});

type ExportFormat = "jpeg" | "png";

const FREE_TEMPLATE_LIMIT = 3;

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
  const router = useRouter();
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
  const [format, setFormat] = useState<ExportFormat>("jpeg");
  const [plan, setPlan] = useState<"free" | "pro">("free");
  const [planLoaded, setPlanLoaded] = useState(false);

  // Project load state
  const [loadedProjectJson, setLoadedProjectJson] = useState<string | null>(
    null,
  );
  const [canvasKey, setCanvasKey] = useState("default");
  const [loadingProject, setLoadingProject] = useState(false);

  const { isSignedIn } = useUser();

  // Project save state
  const getJsonFnRef = useRef<(() => Promise<object>) | null>(null);
  const getPreviewFnRef = useRef<(() => string) | null>(null);
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);
  const [saveTitle, setSaveTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveSaved, setSaveSaved] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    getUserPlan().then((p) => {
      setPlan(p);
      setPlanLoaded(true);
    });
  }, []);

  // Load project from ?project=<id> URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pid = params.get("project");
    if (!pid) return;
    setLoadingProject(true);
    getProject(pid).then((data) => {
      if (data?.canvas_json) {
        try {
          const parsed = JSON.parse(data.canvas_json);
          // Sync React state from JSON so text inputs reflect loaded state
          const textObjs = (parsed.objects ?? []).filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (o: any) => o.type === "i-text" || o.type === "text",
          );
          if (textObjs.length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setTexts(textObjs.map((o: any) => o.text ?? ""));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setTextColors(textObjs.map((o: any) => o.fill ?? "#ffffff"));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setFontFamily(textObjs[0]?.fontFamily ?? "Impact");
          }
          if (parsed.background) setBgColor(parsed.background);
          if (parsed.template_id) {
            const savedTemplate = templates.find(
              (t) => t.id === parsed.template_id,
            );
            if (savedTemplate) setTemplate(savedTemplate);
          }
          setLoadedProjectJson(data.canvas_json);
          setCanvasKey(pid); // force CanvasEditor remount with initialJson
        } catch {
          // Malformed JSON — load default template
        }
      }
      setLoadingProject(false);
    });
  }, []);
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
    setTexts((prev) => t.texts.map((tx, i) => prev[i] ?? tx.text));
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

  const handleGetJson = useCallback((fn: () => Promise<object>) => {
    getJsonFnRef.current = fn;
  }, []);

  const handleGetPreview = useCallback((fn: () => string) => {
    getPreviewFnRef.current = fn;
  }, []);

  const handleBgImageRestored = useCallback((dataUrl: string) => {
    setBgImageUrl(dataUrl);
  }, []);

  const handleSave = useCallback(async () => {
    if (!saveTitle.trim()) return;
    const getJson = getJsonFnRef.current;
    if (!getJson) {
      setSaveError("Canvas not ready. Try again.");
      return;
    }
    setSaving(true);
    setSaveError("");
    try {
      const json = await getJson();
      const previewUrl = getPreviewFnRef.current?.() ?? null;
      const withMeta = {
        ...(json as object),
        platform_id: platform.id,
        template_id: template?.id ?? null,
      };
      const result = await saveProject(
        saveTitle.trim(),
        JSON.stringify(withMeta),
        previewUrl,
      );
      if (result.error === "Not authenticated") {
        setSaveError("Sign in to save projects.");
      } else if (result.error === "limit_reached") {
        setSaveError("Free limit (3 projects) reached. Upgrade to save more.");
      } else if (result.error === "duplicate_name") {
        setSaveError(
          "A project with this name already exists. Choose a different name.",
        );
      } else if (result.error) {
        setSaveError("Save failed. Please try again.");
      } else {
        setSaveSaved(true);
        setShowSaveForm(false);
        setSaveTitle("");
        setTimeout(() => setSaveSaved(false), 2000);
      }
    } catch {
      setSaveError("Save failed. Please try again.");
    } finally {
      setSaving(false);
    }
  }, [saveTitle, platform.id, template?.id]);

  const handleExport = useCallback(async () => {
    if (!exportFnRef.current) return;
    setExporting(true);
    setExportError(false);
    try {
      // Re-verify plan server-side at download time to prevent client-state bypass
      const currentPlan = await getUserPlan();
      let blob = await exportFnRef.current();
      if (currentPlan !== "pro") {
        blob = await applyWatermark(blob, platform.width, platform.height);
      }
      const filename = downloadFilename.replace(
        /\.(jpg|jpeg|png)$/i,
        format === "png" ? ".png" : ".jpg",
      );
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
  }, [
    downloadFilename,
    format,
    platform.id,
    platform.width,
    platform.height,
    template?.id,
  ]);

  const downloadBtn = (
    <div className="space-y-2">
      {plan === "pro" && (
        <div className="flex items-center gap-1 justify-end">
          <span className="text-xs text-text-muted mr-1">Format:</span>
          {(["jpeg", "png"] as ExportFormat[]).map((f) => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                format === f
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-text-main border-border hover:border-primary"
              }`}
            >
              {f === "jpeg" ? "JPG" : "PNG"}
            </button>
          ))}
        </div>
      )}
      {planLoaded && plan === "free" && (
        <p className="text-xs text-center text-text-muted mb-2">
          Free downloads include a small watermark —{" "}
          <a
            href="/upgrade"
            className="text-primary hover:underline font-medium"
          >
            Upgrade to remove
          </a>
        </p>
      )}
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
            ? "bg-green-600 hover:bg-green-700 text-white active:scale-95"
            : "bg-primary hover:bg-primary-hover active:bg-blue-800 active:scale-95 disabled:opacity-60 text-white"
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
      <p
        className="text-sm text-center text-text-muted"
        style={{ display: done ? "block" : "none" }}
        data-testid="compress-suggest"
      >
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

      {/* Save to My Projects */}
      <div className="mt-2 space-y-1.5">
        {showSignInPrompt ? (
          <div className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600">
            <Link
              href="/sign-in"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </Link>
            to save your projects
          </div>
        ) : showSaveForm ? (
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={saveTitle}
              onChange={(e) => setSaveTitle(e.target.value)}
              placeholder="Project name…"
              className="flex-1 rounded-lg border border-border px-3 py-2 text-base sm:text-sm outline-none focus:border-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
                if (e.key === "Escape") setShowSaveForm(false);
              }}
              autoFocus
            />
            <button
              onClick={handleSave}
              disabled={saving || !saveTitle.trim()}
              className="px-3 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover disabled:opacity-50 transition-colors"
            >
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              onClick={() => setShowSaveForm(false)}
              className="text-text-muted hover:text-text-main text-sm px-1"
            >
              ✕
            </button>
          </div>
        ) : saveSaved ? (
          <div className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-700 text-sm font-medium">
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
            Saved to My Projects
          </div>
        ) : (
          <button
            onClick={() => {
              if (!isSignedIn) {
                setShowSignInPrompt(true);
                setTimeout(() => setShowSignInPrompt(false), 5000);
                return;
              }
              setSaveTitle("");
              setShowSaveForm(true);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-white hover:border-primary hover:text-primary text-sm font-medium text-gray-700 transition-colors"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
            </svg>
            Save to My Projects
          </button>
        )}
        {saveError && (
          <p className="text-xs text-red-500 text-center">{saveError}</p>
        )}
      </div>
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
              {loadingProject ? (
                <div
                  className="mx-auto"
                  style={{ width: "100%", maxWidth: displayW }}
                >
                  <div
                    className="w-full bg-surface rounded-xl border border-border animate-pulse flex items-center justify-center"
                    style={{ aspectRatio: `${displayW} / ${displayH}` }}
                  >
                    <p className="text-xs text-text-muted">Loading project…</p>
                  </div>
                </div>
              ) : (
                <CanvasEditor
                  key={canvasKey}
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
                  initialJson={loadedProjectJson}
                  onGetJson={handleGetJson}
                  onGetPreview={handleGetPreview}
                  onBgImageRestored={handleBgImageRestored}
                />
              )}
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
              plan={plan}
              planLoaded={planLoaded}
              freeLimit={FREE_TEMPLATE_LIMIT}
              onUpgrade={() => router.push("/upgrade")}
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
