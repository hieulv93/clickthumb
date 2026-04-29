'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { TWITCH_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.twitch

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Twitch Banner Maker',
      url: 'https://click-thumb.com/twitch-banner-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free online Twitch banner and offline screen maker. Create 1920×1080 Twitch banners with gaming templates, custom text, and background images. No signup required.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size is a Twitch banner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The recommended Twitch offline screen and banner size is 1920×1080 pixels (16:9 ratio). This is the same resolution as a standard 1080p video frame, which displays perfectly on all screens. This tool exports at exactly 1920×1080px.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Twitch offline banner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Twitch offline banner (also called an offline screen) is the image viewers see on your Twitch channel when you are not streaming. It typically includes your channel name, a "BRB" or "Offline" message, and your branding. A professional offline banner makes your channel look active and polished even when you are not live.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I set a Twitch offline banner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Go to Twitch → Creator Dashboard → Settings → Channel → scroll to Offline Channel Image → click Upload → select your 1920×1080px image. Twitch may take a few minutes to process the new banner.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file format does Twitch accept for banners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Twitch accepts JPG, PNG, and GIF for offline banners. Maximum file size is 10MB. JPG at 1920×1080px is typically 200–500KB — well within the limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this Twitch banner maker free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No account required, no watermark on the downloaded file, no limits. Download as many Twitch banners as you need.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use my own image as the background?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Click "Upload image" to add your own artwork, screenshot, or photo as the background. All processing happens in your browser — your file is never uploaded to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I put on my Twitch banner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A good Twitch offline banner includes: your channel name in large text, an offline message ("BRB", "Offline", "Stream starting soon"), your streaming schedule if consistent, and your social media handles or Discord link. Keep it simple — viewers typically only see it briefly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I create a Twitch panel or profile banner too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This tool creates offline screens at 1920×1080px. For Twitch panels (320×160px) or profile banners, you can resize and crop the exported image using the free Resize Image and Crop Image tools at CompressImg.pro.',
          },
        },
      ],
    },
  ],
}

export default function TwitchBannerMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Twitch Banner Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">
              Free online — 1920×1080px offline screen — no signup, no watermark
            </p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={TWITCH_TEMPLATES}
            downloadFilename="click-thumb-twitch-banner.jpg"
            exportLabel="Download Banner (1920×1080)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  What Is a Twitch Offline Banner?
                </h2>
                <p>
                  A Twitch offline banner — also called an offline screen — is the image your
                  channel displays when you are not live. Every visitor who lands on your Twitch
                  page while you are offline sees this image. It is one of the most important
                  branding assets on your channel because it creates a first impression for new
                  followers and communicates professionalism to returning viewers.
                </p>
                <p>
                  A well-designed Twitch banner includes your channel name in large text, an offline
                  message (such as &ldquo;Offline&rdquo; or &ldquo;BRB&rdquo;), your streaming
                  schedule if consistent, and optionally your Discord or social media handles. Keep
                  the design clean and readable — it will be displayed at various sizes across
                  desktop and mobile.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Twitch Banner Size — Exact Specifications
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
                        ['Resolution', '1920×1080 pixels', 'Standard 1080p — fits all screens'],
                        ['Aspect ratio', '16:9', 'Same as video format'],
                        ['Max file size', '10MB', 'Twitch upload limit'],
                        ['Best format', 'JPG or PNG', 'JPG for photos, PNG for flat graphics'],
                        ['Minimum size', '1024×576px', 'Below this Twitch may reject the file'],
                      ].map(([spec, value, note]) => (
                        <tr key={spec} className="even:bg-surface/50">
                          <td className="border border-border px-3 py-2 font-medium text-text-main">
                            {spec}
                          </td>
                          <td className="border border-border px-3 py-2">{value}</td>
                          <td className="border border-border px-3 py-2">{note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  This tool exports your Twitch banner at exactly 1920×1080px as JPG at 92% quality
                  — the standard for Twitch uploads. The output file is typically 200–500KB, well
                  within Twitch&apos;s 10MB limit.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  How to Set Your Twitch Offline Banner
                </h2>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                  <li>
                    <strong className="text-text-main">Design your banner</strong> — choose a
                    template, edit the channel name and offline message, set your background color or
                    upload a custom image.
                  </li>
                  <li>
                    <strong className="text-text-main">Download</strong> — click Download Banner to
                    save the 1920×1080px JPG file.
                  </li>
                  <li>
                    <strong className="text-text-main">Upload to Twitch</strong> — go to your Twitch{' '}
                    <strong>Creator Dashboard → Settings → Channel</strong> → scroll to{' '}
                    <strong>Offline Channel Image</strong> → click Upload → select your file.
                  </li>
                  <li>
                    <strong className="text-text-main">Done</strong> — Twitch processes the image
                    within a few minutes. Refresh your channel to see the new banner.
                  </li>
                </ol>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Twitch Banner Design Tips for Streamers
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li>
                    <strong className="text-text-main">Use high contrast text.</strong> Your channel
                    name should be readable in 3 seconds. Dark background + bright text (white,
                    yellow, or Twitch purple) works consistently.
                  </li>
                  <li>
                    <strong className="text-text-main">Include your schedule.</strong> If you stream
                    on fixed days (e.g., Mon/Wed/Fri 8PM EST), add it to your banner. Viewers who
                    discover you offline will know when to return.
                  </li>
                  <li>
                    <strong className="text-text-main">Add a Discord or social CTA.</strong> A
                    simple &ldquo;Join Discord: discord.gg/yourserver&rdquo; line converts offline
                    visitors into community members.
                  </li>
                  <li>
                    <strong className="text-text-main">Keep branding consistent.</strong> Use the
                    same color palette as your stream overlay and panels. Consistent branding across
                    your Twitch page looks more professional and memorable.
                  </li>
                  <li>
                    <strong className="text-text-main">Update for events.</strong> Create a special
                    banner for charity streams, subathons, or milestones. Rotating banners keep the
                    channel feeling active.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Compress Your Twitch Banner Before Uploading
                </h2>
                <p>
                  Twitch accepts files up to 10MB. A 1920×1080px JPG from this tool is typically
                  200–500KB — far under the limit. If you upload a PNG background image and the
                  output is larger than expected, use{' '}
                  <Link
                    href="https://compressimg.pro/compress-image"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    CompressImg.pro
                  </Link>{' '}
                  to reduce the file size without visible quality loss.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      q: 'What size is a Twitch banner?',
                      a: 'The recommended Twitch offline screen size is 1920×1080 pixels (16:9). This is the same as standard 1080p and displays correctly on all screens. This tool exports at exactly 1920×1080px.',
                    },
                    {
                      q: 'What is a Twitch offline banner?',
                      a: 'A Twitch offline banner is the image displayed on your channel when you are not streaming. It creates a professional first impression for new visitors and communicates your branding, schedule, and social links.',
                    },
                    {
                      q: 'How do I upload a Twitch offline banner?',
                      a: 'Go to Twitch Creator Dashboard → Settings → Channel → scroll to Offline Channel Image → click Upload → select your downloaded 1920×1080px image. The new banner goes live within a few minutes.',
                    },
                    {
                      q: 'Is this Twitch banner maker free?',
                      a: 'Yes, completely free. No account required, no watermark on the downloaded file, no daily limits.',
                    },
                    {
                      q: 'Can I use my own image as the background?',
                      a: 'Yes. Click "Upload image" to use your own artwork or photo as the background. All processing is local — your files are never uploaded to any server.',
                    },
                    {
                      q: 'What should I put on my Twitch offline banner?',
                      a: 'Include your channel name, an offline message (BRB, Offline, Stream starts soon), your streaming schedule if consistent, and your Discord or social links. Keep the design clean — viewers see it briefly.',
                    },
                    {
                      q: 'What format does Twitch accept for banners?',
                      a: 'Twitch accepts JPG, PNG, and GIF for offline banners. Maximum file size is 10MB. JPG at 1920×1080px is typically 200–500KB — well within the limit.',
                    },
                    {
                      q: 'Can I download as PNG instead of JPG?',
                      a: 'Yes. Click the JPEG/PNG toggle above the Download button to switch the export format. PNG is lossless and better for banners with flat colors and sharp text. JPG is smaller and sufficient for most uses.',
                    },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Creator Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {
                      href: '/gaming-thumbnail-maker',
                      title: 'Gaming Thumbnail Maker',
                      desc: '1280×720px YouTube thumbnails for gaming.',
                    },
                    {
                      href: '/youtube-banner-maker',
                      title: 'YouTube Banner Maker',
                      desc: '2560×1440px YouTube channel art.',
                    },
                    {
                      href: '/youtube-thumbnail-maker',
                      title: 'YouTube Thumbnail Maker',
                      desc: '1280×720px with bold gaming templates.',
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
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </CanvasToolClient>
        </div>
      </main>
    </>
  )
}
