"use client";

import { useState } from "react";
import Link from "next/link";
import { deleteProject } from "../actions/projects";
import UpgradePrompt from "./UpgradePrompt";

interface Project {
  id: string;
  title: string;
  preview_url: string | null;
  updated_at: string;
  openHref: string | null;
}

interface Props {
  projects: Project[];
  plan: string;
}

const FREE_LIMIT = 3;

export default function ProjectsSection({ projects, plan }: Props) {
  const [list, setList] = useState(projects);
  const [deleteErrors, setDeleteErrors] = useState<Record<string, string>>({});
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<{
    id: string;
    title: string;
  } | null>(null);

  async function handleDelete(id: string) {
    setDeleteConfirm(null);

    const snapshot = list.find((p) => p.id === id);
    setList((prev) => prev.filter((p) => p.id !== id));
    setDeleteErrors((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    if (list.length - 1 < FREE_LIMIT) setShowUpgrade(false);

    try {
      const result = await deleteProject(id);
      if (result && "error" in result && result.error) {
        if (snapshot)
          setList((prev) =>
            [snapshot, ...prev].sort(
              (a, b) =>
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime(),
            ),
          );
        setDeleteErrors((prev) => ({
          ...prev,
          [id]: "Delete failed — try again",
        }));
      }
    } catch {
      if (snapshot)
        setList((prev) =>
          [snapshot, ...prev].sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          ),
        );
      setDeleteErrors((prev) => ({
        ...prev,
        [id]: "Delete failed — try again",
      }));
    }
  }

  return (
    <div className="space-y-3">
      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setDeleteConfirm(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">Delete project?</h3>
              <p className="text-sm text-gray-500">
                &ldquo;{deleteConfirm.title}&rdquo; will be permanently removed.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                className="flex-1 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-gray-900 sm:text-lg">
          Saved Projects
        </h2>
        <span className="text-xs sm:text-sm text-gray-400">
          {list.length} / {plan === "pro" ? "∞" : "3"}
        </span>
      </div>
      {showUpgrade && <UpgradePrompt reason="project_limit" />}

      {list.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-white p-6 text-center space-y-1">
          <p className="text-sm text-gray-400">No saved projects yet.</p>
          <p className="text-xs text-gray-400">
            Open any tool and click{" "}
            <span className="font-medium text-gray-500">
              &ldquo;Save to My Projects&rdquo;
            </span>{" "}
            after designing.
          </p>
        </div>
      ) : (
        <div className="grid gap-2">
          {list.map((p) => {
            const { openHref } = p;
            return (
              <div
                key={p.id}
                className="rounded-xl border bg-white p-4 flex items-center gap-3"
              >
                <div className="w-16 h-9 rounded-md bg-gray-100 shrink-0 overflow-hidden">
                  {p.preview_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.preview_url}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                      16:9
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                    {p.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {new Date(p.updated_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {openHref && (
                    <Link
                      href={openHref}
                      className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Open →
                    </Link>
                  )}
                  <div className="flex flex-col items-end gap-0.5">
                    <button
                      onClick={() =>
                        setDeleteConfirm({ id: p.id, title: p.title })
                      }
                      className="text-xs sm:text-sm text-red-400 hover:text-red-600 transition-colors"
                    >
                      Delete
                    </button>
                    {deleteErrors[p.id] && (
                      <p className="text-xs text-red-500 leading-tight max-w-[100px] text-right">
                        {deleteErrors[p.id]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {plan !== "pro" && list.length >= 3 && !showUpgrade && (
        <p className="text-xs text-gray-400 px-1">
          You&apos;ve used all 3 free project slots.{" "}
          <Link href="/upgrade" className="text-blue-600 hover:underline">
            Upgrade to Pro
          </Link>{" "}
          for unlimited.
        </p>
      )}
    </div>
  );
}
