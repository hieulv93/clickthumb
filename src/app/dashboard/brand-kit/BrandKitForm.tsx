"use client";

import { useState } from "react";
import { saveBrandKit, uploadLogo } from "../../actions/brandKit";

const FONT_OPTIONS = [
  "Impact",
  "Arial",
  "Roboto",
  "Montserrat",
  "Bebas Neue",
  "Open Sans",
  "Lato",
  "Oswald",
];
const DEFAULT_COLORS = ["#2563EB", "#16213e", "#ffffff", "#f59e0b"];

interface Props {
  initial: {
    logo_url: string | null;
    colors: string[];
    fonts: string[];
  } | null;
}

export default function BrandKitForm({ initial }: Props) {
  const [logoUrl, setLogoUrl] = useState(initial?.logo_url ?? null);
  const [colors, setColors] = useState<string[]>(
    initial?.colors?.length ? initial.colors : DEFAULT_COLORS,
  );
  const [fonts, setFonts] = useState<string[]>(
    initial?.fonts?.length ? initial.fonts : ["Impact"],
  );
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    if (file.size > 2 * 1024 * 1024) {
      setError("File too large. Max 2MB.");
      return;
    }
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("logo", file);
      const result = await uploadLogo(fd);
      if (result.error) {
        setError(result.error);
      } else if (result.url) {
        setLogoUrl(result.url);
      }
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function updateColor(index: number, value: string) {
    setColors((prev) => prev.map((c, i) => (i === index ? value : c)));
  }

  function addColor() {
    if (colors.length >= 6) return;
    setColors((prev) => [...prev, "#000000"]);
  }

  function removeColor(index: number) {
    setColors((prev) => prev.filter((_, i) => i !== index));
  }

  function toggleFont(font: string) {
    setFonts((prev) =>
      prev.includes(font) ? prev.filter((f) => f !== font) : [...prev, font],
    );
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    const result = await saveBrandKit(colors, fonts);
    if (result.error) {
      setError(
        result.error === "pro_required" ? "Pro plan required" : result.error,
      );
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
    setSaving(false);
  }

  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
        {/* Logo */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Logo</h2>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden bg-gray-50 shrink-0">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logoUrl}
                  alt="Logo"
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-xs text-gray-300">No logo</span>
              )}
            </div>
            <div>
              <label className="cursor-pointer px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors inline-block">
                {uploading ? "Uploading…" : "Upload logo"}
                <input
                  type="file"
                  accept="image/png,image/svg+xml,image/jpeg"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-gray-400 mt-1">
                PNG, SVG or JPG — max 2MB
              </p>
            </div>
          </div>
        </div>

        {/* Brand Colors */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">Brand Colors</h2>
            {colors.length < 6 && (
              <button
                onClick={addColor}
                className="text-xs text-blue-600 hover:underline"
              >
                + Add color
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {colors.map((color, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => updateColor(i, e.target.value)}
                  className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5"
                />
                <button
                  onClick={() => removeColor(i)}
                  className="text-xs text-gray-300 hover:text-red-400 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {colors.map((c, i) => (
              <span
                key={i}
                className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Fonts — full width */}
        <div className="sm:col-span-2">
          <h2 className="font-semibold text-gray-900 mb-3">Fonts</h2>
          <div className="flex flex-wrap gap-2">
            {FONT_OPTIONS.map((font) => (
              <button
                key={font}
                onClick={() => toggleFont(font)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                  fonts.includes(font)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"
                }`}
                style={{ fontFamily: font }}
              >
                {font}
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        onClick={handleSave}
        disabled={saving}
        className={`w-full py-2.5 rounded-xl text-white font-semibold disabled:opacity-50 transition-colors ${saved ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {saving ? "Saving…" : saved ? "Saved ✓" : "Save Brand Kit"}
      </button>
    </div>
  );
}
