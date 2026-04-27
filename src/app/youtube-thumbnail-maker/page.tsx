'use client'

import { useState, useCallback, useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import TemplateSelector from '@/components/canvas/TemplateSelector'
import TextEditor from '@/components/canvas/TextEditor'
import BgSection from '@/components/canvas/BgSection'
import BgImageUpload from '@/components/canvas/BgImageUpload'
import FontSelector from '@/components/canvas/FontSelector'
import ProgressBar from '@/components/tool/ProgressBar'
import FAQItem from '@/components/tool/FAQItem'
import AdSlot from '@/components/ads/AdSlot'
import { PLATFORMS } from '@/lib/platforms'
import { YOUTUBE_TEMPLATES } from '@/lib/templates'
import type { Template } from '@/lib/templates'
import { triggerDownload } from '@/lib/utils'
import { analytics } from '@/lib/analytics'
import Link from 'next/link'

const CanvasEditor = dynamic(() => import('@/components/canvas/CanvasEditor'), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-surface rounded-xl border border-border animate-pulse" />,
})

const platform = PLATFORMS.youtube

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'YouTube Thumbnail Maker',
      url: 'https://click-thumb.com/youtube-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online YouTube thumbnail maker. Create 1280×720 thumbnails with templates, custom text, and background images. No signup required.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size is a YouTube thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'The recommended YouTube thumbnail size is 1280×720 pixels (16:9 aspect ratio). This tool exports thumbnails at exactly this size.' } },
        { '@type': 'Question', name: 'Is this YouTube thumbnail maker really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark, no file size limits. Download as many thumbnails as you need.' } },
        { '@type': 'Question', name: 'What file format are thumbnails downloaded in?', acceptedAnswer: { '@type': 'Answer', text: 'Thumbnails are downloaded as JPG files at 92% quality, which is the standard for YouTube uploads. The file size is typically 150–400KB.' } },
        { '@type': 'Question', name: 'Can I use my own photo as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload image" to add your own photo as the background. The image is processed locally in your browser — nothing is uploaded to any server.' } },
        { '@type': 'Question', name: 'How do I make a good YouTube thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Use high contrast colors, large bold text (readable at small sizes), and a clear focal point. Face expressions and bright colors improve click-through rates. Avoid cluttered designs — keep it simple and readable at 120px wide.' } },
        { '@type': 'Question', name: 'Can I edit the text on the canvas?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. After selecting a template, double-click any text on the canvas to edit it directly. You can change the content, move, and resize text freely.' } },
        { '@type': 'Question', name: 'What is the maximum YouTube thumbnail file size?', acceptedAnswer: { '@type': 'Answer', text: 'YouTube accepts thumbnails up to 2MB. This tool exports thumbnails well within that limit (typically 150–400KB at 1280×720 JPG quality 92).' } },
        { '@type': 'Question', name: 'Do I need to compress my thumbnail before uploading?', acceptedAnswer: { '@type': 'Answer', text: 'Usually not — JPG at quality 92 is already well-optimized. If you need a smaller file size, use CompressImg.pro to reduce it further without visible quality loss.' } },
      ],
    },
  ],
}

export default function YouTubeThumbnailPage() {
  const [template, setTemplate] = useState<Template | null>(YOUTUBE_TEMPLATES[0])
  const [bgColor, setBgColor] = useState(YOUTUBE_TEMPLATES[0].bgColor)
  const [bgImageUrl, setBgImageUrl] = useState<string | null>(null)
  const [fontFamily, setFontFamily] = useState(YOUTUBE_TEMPLATES[0].texts[0]?.fontFamily ?? 'Impact')
  const [texts, setTexts] = useState<string[]>(YOUTUBE_TEMPLATES[0].texts.map(() => ''))
  const [exporting, setExporting] = useState(false)
  const [done, setDone] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const exportFnRef = useRef<(() => Promise<Blob>) | null>(null)
  const bgUrlRef = useRef<string | null>(null)

  const handleReady = useCallback((fn: () => Promise<Blob>) => {
    exportFnRef.current = fn
  }, [])

  const handleTemplateSelect = useCallback((t: Template) => {
    setTemplate(t)
    setBgColor(t.bgColor)
    setFontFamily(t.texts[0]?.fontFamily ?? 'Impact')
    setTexts(t.texts.map(() => ''))
  }, [])

  const handleTextChange = useCallback((index: number, value: string) => {
    setTexts((prev) => prev.map((t, i) => (i === index ? value : t)))
  }, [])

  const handleBgUpload = useCallback((url: string) => {
    if (bgUrlRef.current) URL.revokeObjectURL(bgUrlRef.current)
    bgUrlRef.current = url
    setBgImageUrl(url)
  }, [])

  const handleBgClear = useCallback(() => {
    if (bgUrlRef.current) {
      URL.revokeObjectURL(bgUrlRef.current)
      bgUrlRef.current = null
    }
    setBgImageUrl(null)
  }, [])

  const handleExport = useCallback(async () => {
    if (!exportFnRef.current) return
    setExporting(true)
    try {
      const blob = await exportFnRef.current()
      triggerDownload(blob, 'click-thumb-youtube-thumbnail.jpg')
      setDone(true)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 3000)
      analytics.thumbnailExported('youtube', template?.id ?? 'custom', blob.size / 1024)
    } catch {
      // silent — canvas export rarely fails
    } finally {
      setExporting(false)
    }
  }, [template])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
              YouTube Thumbnail Maker
            </h1>
            <p className="text-text-muted text-sm sm:text-base">
              Free online — 1280×720px — no signup, no watermark
            </p>
          </div>

          {/* 2-column on lg+: canvas left (sticky) + controls right */}
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-6">

            {/* Left: outer stretches to right col height → canvas sticky within that range */}
            <div>
              <div className="space-y-3 lg:sticky lg:top-14">
                <div className="flex justify-center">
                  <Suspense fallback={<div className="w-full h-64 bg-surface rounded-xl border border-border" />}>
                    <CanvasEditor
                      platform={platform}
                      template={template}
                      bgColor={bgColor}
                      bgImageUrl={bgImageUrl}
                      fontFamily={fontFamily}
                      texts={texts}
                      onReady={handleReady}
                    />
                  </Suspense>
                </div>
                <div className="flex justify-end px-1">
                  <p className="text-xs font-medium text-text-muted tabular-nums">1280 × 720 px</p>
                </div>
                <BgImageUpload imageUrl={bgImageUrl} onUpload={handleBgUpload} onClear={handleBgClear} />
                {/* Download — desktop */}
                <div className="hidden lg:block space-y-2">
                  {exporting && <ProgressBar visible label="Exporting thumbnail..." />}
                  <button onClick={handleExport} disabled={exporting} className={`w-full touch-target flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${downloaded ? 'bg-green-600 hover:bg-green-700 text-white active:scale-95' : 'bg-primary hover:bg-primary-hover active:scale-95 disabled:opacity-60 text-white'}`}>
                    {downloaded ? (<><svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Downloaded!</>) : (<><svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>{exporting ? 'Exporting...' : 'Download Thumbnail (1280×720)'}</>)}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: controls panel only (in flow) */}
            <div className="mt-4 lg:mt-0 space-y-4">
              <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 space-y-5">
                <TemplateSelector templates={YOUTUBE_TEMPLATES} selected={template} onSelect={handleTemplateSelect} />
                <TextEditor values={texts} onChange={handleTextChange} placeholders={template?.texts.map((t) => t.text)} />
                <BgSection color={bgColor} onChange={setBgColor} />
                <FontSelector value={fontFamily} onChange={setFontFamily} />
              </div>
              {/* Download — mobile/tablet only */}
              <div className="lg:hidden space-y-2">
                {exporting && <ProgressBar visible label="Exporting thumbnail..." />}
                <button onClick={handleExport} disabled={exporting} className={`w-full touch-target flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${downloaded ? 'bg-green-600 hover:bg-green-700 text-white active:scale-95' : 'bg-primary hover:bg-primary-hover active:scale-95 disabled:opacity-60 text-white'}`}>
                  {downloaded ? (<><svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Downloaded!</>) : (<><svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>{exporting ? 'Exporting...' : 'Download Thumbnail (1280×720)'}</>)}
                </button>
              </div>
            </div>
          </div>

          {/* Full-width below both columns: ad + SEO content */}
          <AdSlot actionDone={done} slot="placeholder-slot-id" />

              {/* SEO Content */}
              <section className="space-y-8 text-sm text-text-muted leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base font-bold text-text-main">
                What Makes a Good YouTube Thumbnail?
              </h2>
              <p>
                A YouTube thumbnail is the first thing viewers see before deciding to click your video.
                Research by YouTube itself shows that 90% of the best-performing videos have custom
                thumbnails — not auto-generated frames. A well-designed thumbnail can double or triple
                your click-through rate (CTR), which directly impacts how YouTube&apos;s algorithm
                promotes your content.
              </p>
              <p>
                The key elements of a high-performing thumbnail are: high contrast colors that stand
                out in a busy feed, large readable text (your title should be legible at 120px wide —
                the size thumbnails appear on mobile), a clear focal point (usually a face or object),
                and visual consistency with your channel branding so returning subscribers recognize
                your content immediately.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-bold text-text-main">
                YouTube Thumbnail Size — The Exact Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-surface">
                      <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Spec</th>
                      <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Value</th>
                      <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Resolution', '1280×720 pixels', 'HD quality on all devices'],
                      ['Aspect ratio', '16:9', 'Matches YouTube player and feed'],
                      ['Max file size', '2 MB', 'YouTube upload limit'],
                      ['Best format', 'JPG', 'Smaller file, no quality loss for photos'],
                      ['Minimum width', '640px', 'Below this YouTube rejects the file'],
                      ['Safe zone', 'Keep text 80px from edges', 'Prevents clipping on different devices'],
                    ].map(([spec, value, why]) => (
                      <tr key={spec} className="even:bg-surface/50">
                        <td className="border border-border px-3 py-2 font-medium text-text-main">{spec}</td>
                        <td className="border border-border px-3 py-2">{value}</td>
                        <td className="border border-border px-3 py-2">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                This tool exports thumbnails at exactly 1280×720px as JPG at 92% quality — the ideal
                balance of visual quality and file size. The output is always under 500KB, well within
                YouTube&apos;s 2MB limit.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-bold text-text-main">
                How to Use This Thumbnail Maker
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-1">
                <li><strong className="text-text-main">Choose a template</strong> — pick Dark Impact, Bright &amp; Bold, or Clean Minimal as your starting point.</li>
                <li><strong className="text-text-main">Edit the text</strong> — double-click any text on the canvas to change it. Type your video title and subtitle.</li>
                <li><strong className="text-text-main">Set background</strong> — change the background color using the presets, or upload your own photo (face shots work best).</li>
                <li><strong className="text-text-main">Download</strong> — click the Download button. Your thumbnail exports at 1280×720px JPG instantly.</li>
              </ol>
              <p>
                No account needed. No watermark. The entire process runs in your browser — your
                images never leave your device.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-bold text-text-main">
                Thumbnail Best Practices by Content Type
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-1">
                <li><strong className="text-text-main">Gaming:</strong> Dark backgrounds with bright, high-contrast text. Red and yellow perform consistently well. Include the game name or enemy if relevant.</li>
                <li><strong className="text-text-main">Tutorial / How-to:</strong> Show the before/after result. Use arrows or text like &ldquo;EASY&rdquo; or &ldquo;STEP BY STEP&rdquo; to signal the format.</li>
                <li><strong className="text-text-main">Vlog / Lifestyle:</strong> Your face, large, with a genuine expression. Curiosity or surprise expressions outperform neutral ones by 2–3×.</li>
                <li><strong className="text-text-main">Finance / Business:</strong> Clean, professional look. White or dark backgrounds with one bold number or claim (e.g., &ldquo;$10K in 30 Days&rdquo;).</li>
                <li><strong className="text-text-main">Tech reviews:</strong> Product image centered, rating or verdict overlaid as text. Clean background, no clutter.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-bold text-text-main">
                Why Thumbnail CTR Matters More Than Views
              </h2>
              <p>
                YouTube&apos;s algorithm uses click-through rate (CTR) as a primary signal to decide
                whether to recommend a video to more viewers. A video with 50K views but 8% CTR will
                be promoted more aggressively than a video with 500K views but 2% CTR. The thumbnail
                is the biggest lever you have to control CTR.
              </p>
              <p>
                The average YouTube CTR is 2–10%. Top creators targeting competitive niches aim for
                6–8%+ CTR. A thumbnail redesign alone — with no changes to the video itself — can
                increase CTR by 50–200% on older videos. YouTube Studio lets you A/B test thumbnails
                on the same video; use this tool to create both variants quickly.
              </p>
              <p>
                After uploading your thumbnail, monitor CTR in YouTube Studio → Analytics → Reach for
                the first 48 hours. If CTR is below 4% on an established channel, consider replacing
                the thumbnail.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-bold text-text-main">
                Optimize Your Thumbnail File Before Uploading
              </h2>
              <p>
                YouTube accepts thumbnails up to 2MB, but smaller files load faster in the feed,
                which can affect perceived quality on slow connections. If you need to reduce your
                thumbnail file size further — for example for third-party scheduling tools or
                Instagram cross-posting — use{' '}
                <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">
                  CompressImg.pro
                </Link>{' '}
                to compress your JPG without visible quality loss.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {[
                  { q: 'What size is a YouTube thumbnail?', a: 'The recommended YouTube thumbnail size is 1280×720 pixels with a 16:9 aspect ratio. This tool exports at exactly this size. YouTube also accepts 1920×1080, but 1280×720 is the standard and sufficient for all display sizes.' },
                  { q: 'Is this YouTube thumbnail maker really free?', a: 'Yes, completely free. No account required, no watermark on the exported file, no daily limits. Download as many thumbnails as you need.' },
                  { q: 'Can I use my own photo as a background?', a: 'Yes. Click "Upload image" in the Background Image section to add your own photo. The image is processed entirely in your browser — it is never uploaded to any server.' },
                  { q: 'Can I edit the text directly on the canvas?', a: 'Yes. Double-click any text layer on the canvas to enter edit mode. You can change the content, move the text box, and resize it using the handles.' },
                  { q: 'What font should I use for YouTube thumbnails?', a: 'Bold, high-weight fonts like Impact, Arial Black, or Bebas Neue are standard for thumbnails because they are readable at small sizes. This tool uses Impact and Arial Bold by default, which are the most reliable cross-browser options.' },
                  { q: 'How do I upload my thumbnail to YouTube?', a: 'After downloading, go to YouTube Studio → select your video → Edit → Thumbnail → Upload custom thumbnail → select the downloaded file. The thumbnail goes live within a few minutes.' },
                  { q: 'Why does YouTube say my thumbnail was rejected?', a: 'YouTube rejects thumbnails for three reasons: file over 2MB, resolution under 640px wide, or community guidelines violations (misleading or adult content). This tool exports well within the size and resolution requirements.' },
                  { q: 'Can I make thumbnails for other platforms too?', a: 'Yes — this tool focuses on YouTube (1280×720), but ClickThumb.com also has dedicated makers for Instagram posts, Twitter headers, LinkedIn banners, and Facebook covers, each pre-sized for the correct platform dimensions.' },
                ].map((item) => (
                  <FAQItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>

            {/* Related tools */}
            <div className="space-y-3 pt-2 border-t border-border">
              <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { href: '/instagram-post-maker', title: 'Instagram Post Maker', desc: '1080×1080 square or 1080×1920 Story format.' },
                  { href: '/twitter-header-maker', title: 'Twitter Header Maker', desc: 'Create a 1500×500px Twitter/X profile header.' },
                  { href: '/linkedin-banner-maker', title: 'LinkedIn Banner Maker', desc: '1584×396px LinkedIn profile banner, free.' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
                  >
                    <p className="font-semibold text-text-main text-xs group-hover:text-primary transition-colors">{item.title}</p>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
