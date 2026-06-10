"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProject } from "../actions/projects";

const DELETE_TIMEOUT_MS = 8000;

export default function DeleteProjectButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    if (!confirm("Delete this project?")) return;
    setLoading(true);
    setError("");

    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      setError("Timed out — try again");
      setLoading(false);
    }, DELETE_TIMEOUT_MS);

    try {
      const result = await deleteProject(id);
      clearTimeout(timer);
      if (timedOut) return; // timeout already handled UI; ignore late result
      if (result && "error" in result && result.error) {
        setError("Delete failed");
        setLoading(false);
      } else {
        router.refresh();
      }
    } catch {
      clearTimeout(timer);
      if (!timedOut) {
        setError("Delete failed");
        setLoading(false);
      }
    }
  }

  return (
    <div className="flex flex-col items-end gap-0.5">
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-xs text-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
      >
        {loading ? "Deleting…" : "Delete"}
      </button>
      {error && (
        <p className="text-xs text-red-500 leading-tight max-w-[100px] text-right">
          {error}
        </p>
      )}
    </div>
  );
}
