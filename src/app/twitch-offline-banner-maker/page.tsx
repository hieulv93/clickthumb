import CanvasToolClient from "@/components/canvas/CanvasToolClient";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQItem from "@/components/tool/FAQItem";
import { PLATFORMS } from "@/lib/platforms";
import { TWITCH_TEMPLATES } from "@/lib/templates";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitch Offline Banner Maker — Free 1920×1080px Offline Screen",
  description:
    "Create a free Twitch offline banner at 1920×1080px. Offline screen templates with channel name, BRB message and schedule — no sign-up, instant download.",
  alternates: {
    canonical: "https://click-thumb.com/twitch-offline-banner-maker/",
  },
  openGraph: {
    title: "Twitch Offline Banner Maker — Free 1920×1080px Offline Screen",
    description:
      "Make a free Twitch offline banner at 1920×1080px. Offline screen templates — channel name, BRB message, schedule. No account, instant download.",
    url: "https://click-thumb.com/twitch-offline-banner-maker/",
    siteName: "ClickThumb",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const platform = PLATFORMS.twitch;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Twitch Offline Banner Maker",
      url: "https://click-thumb.com/twitch-offline-banner-maker/",
      applicationCategory: "DesignApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Free online Twitch offline banner and offline screen maker. Create 1920×1080px Twitch offline screens with channel name, BRB message, and schedule. No sign-up required, instant download.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Twitch offline banner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Twitch offline banner (also called an offline screen or offline image) is the image displayed on your Twitch channel page when you are not streaming. Every visitor who lands on your channel while you are offline sees this image instead of a live stream. A professional offline banner includes your channel name, an offline message (BRB, Offline, Stream starting soon), your streaming schedule, and optionally your Discord or social links.",
          },
        },
        {
          "@type": "Question",
          name: "What size should a Twitch offline banner be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The recommended Twitch offline banner size is 1920×1080 pixels (16:9 aspect ratio). This is the standard 1080p resolution and displays correctly on all screen sizes. Twitch accepts a minimum of 1024×576px but 1920×1080px is the standard for a sharp result. Maximum file size is 10MB. This tool exports at exactly 1920×1080px.",
          },
        },
        {
          "@type": "Question",
          name: "How do I set a Twitch offline banner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Go to Twitch → Creator Dashboard → Settings → Channel → scroll down to Offline Channel Image → click Upload → select your 1920×1080px image. Twitch processes the image within a few minutes. Refresh your channel page to confirm the new offline screen is live.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a Twitch offline banner and a Twitch panel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Twitch offline banner (offline screen) is the full-screen 1920×1080px image displayed when you are not streaming. A Twitch panel is a smaller rectangular block (typically 320×160px or 320×100px) shown below the stream or video area and used for links, schedules, or sponsor info. They serve different purposes — this tool creates offline banners. For panels, export this image and crop to the required dimensions.",
          },
        },
        {
          "@type": "Question",
          name: "What should a Twitch offline screen say?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'A good Twitch offline screen includes: your channel name in large, readable text; an offline status message ("Offline", "BRB", "Stream starting soon", "See you next time"); your streaming schedule if consistent (e.g., Mon/Wed/Fri 8PM EST); and your social or Discord link to keep offline visitors in your community. Keep it clean — avoid cramming too much text. Viewers typically see it for just a few seconds.',
          },
        },
        {
          "@type": "Question",
          name: "What file format does Twitch accept for offline banners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Twitch accepts JPG, PNG, and GIF for offline banners. Maximum file size is 10MB. JPG at 1920×1080px is typically 200–500KB — well within the limit. Use PNG if your design has text on a solid background for sharper edges. Use JPG for photographic backgrounds.",
          },
        },
        {
          "@type": "Question",
          name: "Is this Twitch offline banner maker free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, completely free. No account required, no daily limits. Free downloads include a small watermark — upgrade to Pro to remove it. Create and download as many Twitch offline banners as you need.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use my own image as the offline screen background?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Click the Upload image button to use your own photo, artwork, or game screenshot as the background. You can then add your channel name and offline message on top. All processing runs entirely in your browser — your image is never uploaded to any server.",
          },
        },
      ],
    },
  ],
};

export default function TwitchOfflineBannerMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              {
                label: "Twitch Offline Banner Maker",
                url: "https://click-thumb.com/twitch-offline-banner-maker/",
              },
            ]}
          />
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
              Twitch Offline Banner Maker
            </h1>
            <p className="text-text-muted text-sm sm:text-base">
              Free online — 1920×1080px offline screen — no sign-up required
            </p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={TWITCH_TEMPLATES}
            downloadFilename="click-thumb-twitch-offline-banner.jpg"
            exportLabel="Download Offline Banner (1920×1080)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  What Is a Twitch Offline Banner?
                </h2>
                <p>
                  A Twitch offline banner — also called an offline screen or
                  offline image — is the full-screen 1920×1080px image your
                  channel displays when you are not streaming. Every viewer who
                  lands on your Twitch page while you are offline sees this
                  image. For new visitors, it is often the first impression of
                  your channel; for returning followers, it is the signal that
                  you are away.
                </p>
                <p>
                  A professional offline screen communicates three things
                  instantly: who you are (channel name), where you are (offline
                  message), and when you will be back (streaming schedule or
                  Discord link). Channels that keep an up-to-date offline banner
                  consistently convert offline visitors into followers and
                  community members.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Twitch Offline Banner Size — Exact Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-surface">
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Spec
                        </th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Value
                        </th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Resolution",
                          "1920×1080 pixels",
                          "Standard 1080p — fits all screens",
                        ],
                        ["Aspect ratio", "16:9", "Same as video format"],
                        ["Max file size", "10MB", "Twitch upload limit"],
                        [
                          "Best format",
                          "JPG or PNG",
                          "PNG for text/graphics, JPG for photos",
                        ],
                        [
                          "Minimum size",
                          "1024×576px",
                          "Below this Twitch may reject the file",
                        ],
                        [
                          "This tool exports",
                          "1920×1080 JPG",
                          "92% quality — typically 200–500KB",
                        ],
                      ].map(([spec, value, note]) => (
                        <tr key={spec} className="even:bg-surface/50">
                          <td className="border border-border px-3 py-2 font-medium text-text-main">
                            {spec}
                          </td>
                          <td className="border border-border px-3 py-2">
                            {value}
                          </td>
                          <td className="border border-border px-3 py-2">
                            {note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  How to Set Your Twitch Offline Banner
                </h2>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                  <li>
                    <strong className="text-text-main">Design</strong> — choose
                    a template above, edit the channel name and offline message,
                    pick a background color or upload your own image.
                  </li>
                  <li>
                    <strong className="text-text-main">Download</strong> — click
                    Download Offline Banner to save the 1920×1080px JPG.
                  </li>
                  <li>
                    <strong className="text-text-main">Upload to Twitch</strong>{" "}
                    — go to{" "}
                    <strong>
                      Creator Dashboard → Settings → Channel → Offline Channel
                      Image
                    </strong>{" "}
                    → click Upload → select your file.
                  </li>
                  <li>
                    <strong className="text-text-main">Done</strong> — Twitch
                    processes the image within a few minutes. Refresh your
                    channel page to confirm it is live.
                  </li>
                </ol>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  What to Put on Your Twitch Offline Screen
                </h2>
                <p>
                  The most effective Twitch offline banners keep it simple and
                  readable. Here is what works:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li>
                    <strong className="text-text-main">Channel name</strong> —
                    large, centered, high-contrast text. If a visitor can&apos;t
                    read your name in 3 seconds, the banner is failing its
                    primary job.
                  </li>
                  <li>
                    <strong className="text-text-main">Offline message</strong>{" "}
                    — keep it short: &ldquo;Offline&rdquo;, &ldquo;BRB&rdquo;,
                    &ldquo;See you next stream&rdquo;, or &ldquo;Stream starting
                    soon&rdquo;. Match the tone of your channel.
                  </li>
                  <li>
                    <strong className="text-text-main">
                      Streaming schedule
                    </strong>{" "}
                    — if you stream on consistent days and times, add it. A
                    viewer who discovers you offline will know exactly when to
                    come back.
                  </li>
                  <li>
                    <strong className="text-text-main">
                      Discord or social
                    </strong>{" "}
                    — one social link converts offline visitors into community
                    members. Discord is the highest-value for streamers.
                  </li>
                  <li>
                    <strong className="text-text-main">
                      Consistent branding
                    </strong>{" "}
                    — use the same color palette as your stream overlay.
                    Cohesive branding signals professionalism and makes your
                    channel memorable.
                  </li>
                </ul>
                <p>
                  Avoid crowding the design. An offline screen with six lines of
                  text, three logos, and a busy background is harder to read
                  than a clean two-line design.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Twitch Channel Graphics — Full Size Guide
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-surface">
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Asset
                        </th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Size
                        </th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Where it appears
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Offline banner (offline screen) ← this tool",
                          "1920×1080px",
                          "Channel page when not streaming",
                        ],
                        [
                          "Profile banner",
                          "1200×480px",
                          "Top of channel page, always visible",
                        ],
                        [
                          "Twitch panel",
                          "320×160px",
                          "Below stream — links, schedule, sponsors",
                        ],
                        [
                          "Profile picture",
                          "256×256px",
                          "Avatar next to channel name",
                        ],
                      ].map(([asset, size, where]) => (
                        <tr key={asset} className="even:bg-surface/50">
                          <td className="border border-border px-3 py-2 font-medium text-text-main">
                            {asset}
                          </td>
                          <td className="border border-border px-3 py-2">
                            {size}
                          </td>
                          <td className="border border-border px-3 py-2">
                            {where}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  This tool exports offline banners at 1920×1080px. The offline
                  screen is the most searched Twitch graphic because it is the
                  first thing new visitors see. The profile banner (1200×480px)
                  and panel images require different dimensions — use an image
                  editor to crop the exported file if needed.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      q: "What is a Twitch offline banner?",
                      a: "A Twitch offline banner is the full-screen image displayed on your channel when you are not streaming. Viewers who visit your channel while you are offline see this image instead of a live stream. A professional offline banner shows your channel name, an offline message, and your streaming schedule.",
                    },
                    {
                      q: "What size should a Twitch offline banner be?",
                      a: "1920×1080 pixels (16:9 aspect ratio). This is the standard 1080p resolution. Twitch accepts a minimum of 1024×576px, but 1920×1080 ensures a sharp result on all screens. This tool exports at exactly 1920×1080px.",
                    },
                    {
                      q: "How do I upload a Twitch offline banner?",
                      a: "Go to Twitch Creator Dashboard → Settings → Channel → scroll to Offline Channel Image → click Upload → select your image. Twitch processes it within a few minutes. Refresh your channel page to confirm it is live.",
                    },
                    {
                      q: "What should a Twitch offline screen say?",
                      a: "Include your channel name in large text, an offline status message (Offline, BRB, See you next stream), your streaming schedule if consistent, and one social or Discord link. Keep it clean — viewers typically see it for just a few seconds.",
                    },
                    {
                      q: "What is the difference between a Twitch offline banner and a profile banner?",
                      a: "The offline banner (1920×1080px) is shown when you are not streaming. The profile banner (1200×480px) appears at the top of your channel page and is always visible. This tool creates offline banners.",
                    },
                    {
                      q: "What file format does Twitch accept for offline banners?",
                      a: "Twitch accepts JPG, PNG, and GIF. Maximum file size is 10MB. JPG at 1920×1080px is typically 200–500KB — well within the limit. Use PNG for designs with sharp text on solid backgrounds.",
                    },
                    {
                      q: "Is this Twitch offline banner maker free?",
                      a: "Yes, completely free. No account required, no daily limits. Free downloads include a small watermark — upgrade to Pro to remove it.",
                    },
                    {
                      q: "Can I upload my own image as the background?",
                      a: "Yes. Click Upload image to use your own photo, artwork, or game screenshot as the background. All processing runs in your browser — your image is never uploaded to any server.",
                    },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">
                  More Free Creator Tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {
                      href: "/twitch-banner-maker",
                      title: "Twitch Banner Maker",
                      desc: "1200×480px Twitch profile banner.",
                    },
                    {
                      href: "/youtube-banner-maker",
                      title: "YouTube Banner Maker",
                      desc: "2560×1440px YouTube channel art.",
                    },
                    {
                      href: "/gaming-thumbnail-maker",
                      title: "Gaming Thumbnail Maker",
                      desc: "1280×720px YouTube gaming thumbnails.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
                    >
                      <p className="font-semibold text-text-main text-xs group-hover:text-primary">
                        {item.title}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </CanvasToolClient>
        </div>
      </main>
    </>
  );
}
