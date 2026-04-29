'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { TIKTOK_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.tiktok

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'TikTok Thumbnail Maker',
      url: 'https://click-thumb.com/tiktok-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online TikTok thumbnail maker. Create 1080×1920px TikTok cover images with viral templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size is a TikTok thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'TikTok thumbnails (cover images) are 1080×1920 pixels — a 9:16 portrait ratio. This is the same aspect ratio as a TikTok video. The cover image is cropped and displayed as a square preview on your profile grid, so keep the most important visual element centered.' } },
        { '@type': 'Question', name: 'Is this TikTok thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited TikTok covers.' } },
        { '@type': 'Question', name: 'What makes a good TikTok cover image?', acceptedAnswer: { '@type': 'Answer', text: 'A great TikTok cover is bold, high-contrast, and readable at small sizes. TikTok profile grids show covers as small squares, so text must be large and centered. Use brand colors or TikTok\'s signature palette (red #FF0050, cyan #00f2ea). Keep text under 4 words.' } },
        { '@type': 'Question', name: 'What is the difference between a TikTok cover and thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'TikTok calls it a "cover" rather than thumbnail. You can set a cover frame from the video itself or upload a custom image. A custom cover image gives you more creative control — you can add bold text, your logo, or a designed graphic that stands out on your profile.' } },
        { '@type': 'Question', name: 'Can I use my own image as a TikTok cover?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Upload your photo or screenshot using the "Upload image" button, add a bold text overlay, and download the result. All processing runs locally in your browser — nothing is uploaded to any server.' } },
        { '@type': 'Question', name: 'What font works best for TikTok covers?', acceptedAnswer: { '@type': 'Answer', text: 'Impact and Arial Black work best for TikTok covers. They are bold, condensed, and readable at small sizes. TikTok profile grids show covers as small thumbnails, so thin or script fonts become illegible. Add a stroke/outline to text for readability over any background.' } },
        { '@type': 'Question', name: 'What colors are best for TikTok covers?', acceptedAnswer: { '@type': 'Answer', text: 'TikTok\'s brand colors (#FF0050 red and #00f2ea cyan) are recognizable and perform well. High-contrast combinations like white on black, neon on dark, or yellow on deep purple catch the eye. Avoid pastels and low-contrast combinations — they disappear in a busy feed.' } },
        { '@type': 'Question', name: 'What file format should a TikTok cover be?', acceptedAnswer: { '@type': 'Answer', text: 'TikTok accepts JPG, PNG, and WEBP for cover images (max 1MB). This tool exports as JPG at high quality — typically 150–300KB for a 1080×1920px image, well within the limit.' } },
      ],
    },
  ],
}

export default function TikTokThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">TikTok Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1080×1920px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={TIKTOK_TEMPLATES} downloadFilename="click-thumb-tiktok-cover.jpg" exportLabel="Download TikTok Cover (1080×1920)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Is a TikTok Thumbnail (Cover Image)?</h2>
                <p>On TikTok, every video has a cover image — the still frame shown on your profile grid and in search results. Unlike YouTube where thumbnails appear in a horizontal feed, TikTok covers are displayed as squares in a 3-column grid on your profile. A well-designed cover makes your profile look professional and consistent, encourages viewers to browse older videos, and helps your content stand out in TikTok search results.</p>
                <p>TikTok lets you choose a frame from your video as the cover, or upload a custom image. A custom cover image gives you full creative control — you can add bold text, branded colors, your logo, or a graphic that perfectly represents the video. The best TikTok creators treat their cover images as a brand asset, maintaining consistent colors and fonts across all videos to build a recognizable profile aesthetic.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">TikTok Cover Size — Exact Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-surface">
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Spec</th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Value</th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Recommended size', '1080×1920px', 'Full portrait resolution'],
                        ['Aspect ratio', '9:16', 'Matches TikTok video format'],
                        ['Profile grid display', 'Square crop (center)', 'Keep main element centered'],
                        ['Max file size', '1MB', 'JPG recommended'],
                        ['Formats accepted', 'JPG, PNG, WEBP', 'JPG gives best size/quality ratio'],
                      ].map(([s, v, n]) => (
                        <tr key={s} className="even:bg-surface/50">
                          <td className="border border-border px-3 py-2 font-medium text-text-main">{s}</td>
                          <td className="border border-border px-3 py-2">{v}</td>
                          <td className="border border-border px-3 py-2">{n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>This tool exports at exactly 1080×1920px as JPG — the correct TikTok cover size. Your cover will display without cropping or quality loss.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">TikTok Cover Design Rules That Get Views</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Center your main element:</strong> TikTok profile grids crop covers into squares, taking the center of the image. Keep your text and key visual within the center 1080×1080px zone.</li>
                  <li><strong className="text-text-main">Use 3 words maximum:</strong> Profile grid thumbnails are small — long text becomes illegible. "POV:", "STORY TIME", "HOW I DID IT" — short and punchy wins.</li>
                  <li><strong className="text-text-main">High contrast is mandatory:</strong> TikTok&apos;s interface is dark. Your cover competes with dozens of other videos. Neon on black, white on dark, yellow on deep purple — all outperform muted palettes.</li>
                  <li><strong className="text-text-main">Brand consistency over creativity:</strong> Top TikTok accounts use the same color, font, and layout on every cover. Viewers recognize your content instantly in search results.</li>
                  <li><strong className="text-text-main">Add your face for lifestyle content:</strong> Thumbnails with human faces outperform text-only covers for lifestyle, vlog, and reaction content. Upload a photo and add a bold text overlay.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">TikTok Cover Templates by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { type: 'Viral / Trending', style: 'TikTok red (#FF0050) on black — grabs attention instantly. "WATCH THIS", "POV:", "MUST SEE". Bold Impact font with white outline.' },
                    { type: 'Tutorial / How-To', style: 'Clean dark background + cyan (#00f2ea) text. Professional and trustworthy. Numbers work well: "5 TIPS", "IN 60 SEC", "STEP 1".' },
                    { type: 'Aesthetic / Lifestyle', style: 'Deep purple or navy gradient + yellow or white text. Premium feel. Works for beauty, fashion, travel, and food content.' },
                  ].map((t) => (
                    <div key={t.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{t.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.style}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">How to Set a Custom Cover on TikTok</h2>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                  <li>Design and download your cover using this tool.</li>
                  <li>Open TikTok and start uploading your video.</li>
                  <li>On the &quot;Post&quot; screen, tap <strong className="text-text-main">Select cover</strong>.</li>
                  <li>Swipe to the right until you see the <strong className="text-text-main">Upload image</strong> option.</li>
                  <li>Select your downloaded cover image — TikTok will crop it to a square for the profile grid preview.</li>
                  <li>Adjust the crop frame if needed, then tap <strong className="text-text-main">Confirm</strong>.</li>
                </ol>
                <p>TikTok shows the full portrait image when users tap your video, but only the cropped square on your profile. This tool&apos;s templates position all text in the center so both views look correct.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your TikTok Cover Before Uploading</h2>
                <p>TikTok&apos;s cover image limit is 1MB. A 1080×1920px JPG at high quality is typically 200–500KB — within the limit. If you need to reduce file size, use <Link href="https://compressimg.pro/compress-image-for-tiktok" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg — Compress for TikTok</Link> to compress without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size is a TikTok thumbnail?', a: 'TikTok covers are 1080×1920px (9:16 portrait). Profile grids show a square crop of the center. This tool exports at exactly 1080×1920px.' },
                    { q: 'Is this TikTok thumbnail maker free?', a: 'Yes, completely free. No account, no watermark, no limits. Download as many TikTok covers as you need.' },
                    { q: 'What makes a good TikTok cover image?', a: 'Bold text (3 words max), high contrast colors, and a centered main element. TikTok profile grids are small — anything subtle disappears.' },
                    { q: 'What is the difference between a TikTok cover and thumbnail?', a: 'TikTok calls it a "cover" — it\'s the image shown on your profile and in search. You can use a video frame or upload a custom image like the one this tool creates.' },
                    { q: 'Can I use my own image as a TikTok cover?', a: 'Yes. Click "Upload image" to set your own photo or screenshot as background, then add a text template. All processing is local — nothing is sent to any server.' },
                    { q: 'What font works best for TikTok covers?', a: 'Impact with a stroke/outline is the most readable at small sizes. Arial Black is a good alternative. Avoid thin or script fonts — they disappear on the profile grid.' },
                    { q: 'What colors work best for TikTok covers?', a: 'TikTok red (#FF0050) and cyan (#00f2ea) are on-brand and eye-catching. High-contrast combos: neon on black, white on dark, yellow on purple. Avoid low-contrast pastels.' },
                    { q: 'What file format should a TikTok cover be?', a: 'JPG is recommended (max 1MB). This tool exports JPG at high quality — typically 200–400KB for 1080×1920px.' },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Social Media Image Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/instagram-post-maker', title: 'Instagram Post Maker', desc: 'Create 1080×1080px Instagram posts with bold templates.' },
                    { href: '/youtube-thumbnail-maker', title: 'YouTube Thumbnail Maker', desc: 'Design 1280×720px YouTube thumbnails that get clicks.' },
                    { href: '/twitter-header-maker', title: 'Twitter Header Maker', desc: 'Create 1500×500px Twitter/X profile banners.' },
                    { href: '/facebook-cover-maker', title: 'Facebook Cover Maker', desc: 'Design 851×315px Facebook cover photos.' },
                    { href: '/linkedin-banner-maker', title: 'LinkedIn Banner Maker', desc: 'Create 1584×396px professional LinkedIn banners.' },
                    { href: '/gaming-thumbnail-maker', title: 'Gaming Thumbnail Maker', desc: 'Bold 1280×720px gaming thumbnails for YouTube.' },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group">
                      <p className="font-semibold text-text-main text-xs group-hover:text-primary">{item.title}</p>
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
