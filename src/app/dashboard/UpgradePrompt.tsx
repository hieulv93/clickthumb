"use client";

interface Props {
  reason: "project_limit" | "brand_kit" | "png_export";
}

const MESSAGES = {
  project_limit: {
    title: "You've reached the free limit (3 projects)",
    body: "Upgrade to Pro to save unlimited projects and keep your work safe.",
  },
  brand_kit: {
    title: "Brand Kit is a Pro feature",
    body: "Save your logo, brand colors and fonts — auto-loaded every time you create a thumbnail.",
  },
  png_export: {
    title: "PNG export requires Pro",
    body: "Need a transparent background? PNG export is available on Pro.",
  },
};

export default function UpgradePrompt({ reason }: Props) {
  const msg = MESSAGES[reason];

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex-1">
        <p className="font-semibold text-gray-900 text-sm">{msg.title}</p>
        <p className="text-gray-500 text-sm mt-0.5">{msg.body}</p>
      </div>
      <a
        href="/upgrade"
        className="shrink-0 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        Upgrade to Pro — $8/mo
      </a>
    </div>
  );
}
