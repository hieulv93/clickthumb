"use client";

import { useState } from "react";
import { saveProject } from "../actions/projects";

interface Props {
  onLimitReached: () => void;
}

export default function SaveProjectForm({ onLimitReached }: Props) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    setError("");

    const mockCanvas = JSON.stringify({
      version: "5.3.0",
      objects: [],
      background: "#16213e",
    });
    const result = await saveProject(title.trim(), mockCanvas);

    if (result.error === "limit_reached") {
      onLimitReached();
    } else if (result.error) {
      setError(result.error);
    } else {
      setSaved(true);
      setTitle("");
      setTimeout(() => setSaved(false), 2000);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSave} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project name…"
        className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-base sm:text-sm outline-none focus:border-blue-400"
      />
      <button
        type="submit"
        disabled={loading || !title.trim()}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Saving…" : saved ? "Saved ✓" : "Save"}
      </button>
      {error && <p className="text-xs text-red-500 self-center">{error}</p>}
    </form>
  );
}
