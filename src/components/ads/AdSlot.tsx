"use client";

import { useEffect, useState } from "react";

interface AdSlotProps {
  actionDone: boolean;
  slot: string;
  format?: "auto" | "rectangle" | "horizontal";
}

const isPlaceholder = (slot: string) => slot === "placeholder-slot-id" || !slot;

export default function AdSlot({
  actionDone,
  slot,
  format = "auto",
}: AdSlotProps) {
  const [showAd, setShowAd] = useState(false);
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const hasRealSlot = !isPlaceholder(slot) && !!adsenseId;

  useEffect(() => {
    if (!hasRealSlot || !actionDone) return;
    const timer = setTimeout(() => setShowAd(true), 500);
    return () => clearTimeout(timer);
  }, [hasRealSlot, actionDone]);

  useEffect(() => {
    if (!showAd) return;
    try {
      // @ts-expect-error adsbygoogle is injected by Google
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [showAd]);

  const isDev = process.env.NODE_ENV === "development";

  if (!hasRealSlot) {
    if (!isDev || !actionDone) return null;
    return (
      <div
        style={{ minHeight: "250px" }}
        className="w-full flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface"
        aria-hidden="true"
      >
        <p className="text-xs text-text-muted">
          [Ad slot — appears here after AdSense approval]
        </p>
      </div>
    );
  }

  return (
    <div
      style={{ minHeight: "250px" }}
      className="w-full flex items-center justify-center overflow-hidden"
      aria-hidden={!showAd}
    >
      {showAd && (
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client={adsenseId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
