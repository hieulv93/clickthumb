import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apex Legends Thumbnail Maker — Free Online, No Signup",
  description:
    "Create Apex Legends thumbnails at 1280×720px free online. Champion Orange, Legend Gold, and Dark Red templates for Apex YouTube creators. Download instantly, no account needed.",
  alternates: {
    canonical: "https://click-thumb.com/apex-legends-thumbnail-maker/",
  },
  openGraph: {
    title: "Apex Legends Thumbnail Maker — Free Online, No Signup",
    description:
      "Create 1280×720px Apex Legends thumbnails. Champion Orange, Legend Gold, Dark Red templates. Download instantly.",
    url: "https://click-thumb.com/apex-legends-thumbnail-maker/",
    images: [
      { url: "https://click-thumb.com/og-image.png", width: 1200, height: 630 },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
