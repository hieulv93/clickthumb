import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valorant Thumbnail Maker Free — Agent & ACE Templates (2026)",
  description:
    "Make Valorant thumbnails at 1280×720px in 30 seconds. Agent Impact, ACE Gold & Clutch Navy templates for Valorant YouTube creators. No Photoshop, no account needed.",
  alternates: {
    canonical: "https://click-thumb.com/valorant-thumbnail-maker/",
  },
  openGraph: {
    title: "Valorant Thumbnail Maker Free — Agent & ACE Templates (2026)",
    description:
      "Make 1280×720px Valorant thumbnails in 30 seconds. Agent Impact, ACE Gold & Clutch Navy templates. No account needed.",
    url: "https://click-thumb.com/valorant-thumbnail-maker/",
    images: [
      { url: "https://click-thumb.com/og-image.png", width: 1200, height: 630 },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
