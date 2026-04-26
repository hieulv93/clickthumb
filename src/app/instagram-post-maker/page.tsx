'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { INSTAGRAM_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.instagram

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'Instagram Post Maker', url: 'https://click-thumb.com/instagram-post-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online Instagram post maker. Create 1080×1080 square posts and 1080×1920 Stories with templates, custom text, and background images.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size is an Instagram post?', acceptedAnswer: { '@type': 'Answer', text: 'The standard Instagram feed post size is 1080×1080 pixels (square, 1:1 ratio). For Instagram Stories and Reels covers, use 1080×1920 pixels (9:16 ratio). This tool exports at 1080×1080.' } },
      { '@type': 'Question', name: 'Is this Instagram post maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Download unlimited Instagram posts.' } },
      { '@type': 'Question', name: 'Can I use my own photo as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click Upload image to add your own photo. Everything runs locally in your browser — your images are never sent to a server.' } },
      { '@type': 'Question', name: 'What font works best for Instagram posts?', acceptedAnswer: { '@type': 'Answer', text: 'Bold sans-serif fonts like Arial Black and Impact are most readable in the Instagram feed. Keep text large — at least 60px for a 1080×1080 image — so it remains readable on mobile.' } },
      { '@type': 'Question', name: 'What file format should I use for Instagram?', acceptedAnswer: { '@type': 'Answer', text: 'Instagram accepts JPG and PNG. JPG is recommended for photos and posts with backgrounds; PNG for graphics with transparency. This tool exports as JPG at 92% quality, which is optimal for Instagram.' } },
      { '@type': 'Question', name: 'How do I upload the image to Instagram?', acceptedAnswer: { '@type': 'Answer', text: 'Download the image, then open Instagram → tap + → select the downloaded file from your camera roll or Files app. On desktop, use Instagram.com → Create post.' } },
      { '@type': 'Question', name: 'Can I compress my Instagram post before uploading?', acceptedAnswer: { '@type': 'Answer', text: 'If you need a smaller file size, use CompressImg.pro to compress your JPG. For Instagram, keeping the file under 1MB is recommended to avoid Instagram re-compressing it heavily.' } },
      { '@type': 'Question', name: 'What are the best Instagram post dimensions in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Square: 1080×1080px. Portrait: 1080×1350px (4:5 ratio, takes more feed space). Landscape: 1080×566px. Square and portrait formats tend to get higher engagement because they take up more screen space in the feed.' } },
    ] },
  ],
}

export default function InstagramPostMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Instagram Post Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1080×1080px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={INSTAGRAM_TEMPLATES} downloadFilename="click-thumb-instagram-post.jpg" exportLabel="Download Post (1080×1080)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Instagram Post Size — The Complete Guide</h2>
                <p>Instagram supports multiple aspect ratios depending on the post type. The standard square post at 1080×1080 pixels remains the most versatile format — it displays without cropping in the feed, on profile grids, and in Explore. Portrait posts at 1080×1350px (4:5 ratio) take up more vertical space in the feed and can increase impressions by showing more of the image before the &quot;more&quot; cutoff.</p>
                <p>This tool exports Instagram posts at 1080×1080px — the universal safe size that works for all placements including feed posts, carousel slides, and Reels cover images.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">How to Make an Instagram Post in 30 Seconds</h2>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Choose a template</strong> — Vibrant, Clean Minimal, or Dark Mood. Each is pre-sized at 1080×1080px.</li>
                  <li><strong className="text-text-main">Edit the text</strong> — double-click any text to change your message, caption, or call to action.</li>
                  <li><strong className="text-text-main">Set background</strong> — pick a solid color or upload your own photo as the background.</li>
                  <li><strong className="text-text-main">Download</strong> — click Download Post. The JPG exports at exactly 1080×1080px.</li>
                </ol>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Instagram Image Specs at a Glance</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-surface"><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Format</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Size</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Ratio</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Use case</th></tr></thead>
                    <tbody>
                      {[['Square post','1080×1080px','1:1','Feed, carousel, profile grid'],['Portrait post','1080×1350px','4:5','Feed (max vertical space)'],['Landscape post','1080×566px','1.91:1','Panoramic shots'],['Story / Reels','1080×1920px','9:16','Stories, Reels cover'],['Profile photo','320×320px','1:1','Profile picture (displays as circle)']].map(([f,s,r,u])=>(
                        <tr key={f} className="even:bg-surface/50"><td className="border border-border px-3 py-2 font-medium text-text-main">{f}</td><td className="border border-border px-3 py-2">{s}</td><td className="border border-border px-3 py-2">{r}</td><td className="border border-border px-3 py-2">{u}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Practices for Instagram Post Design</h2>
                <p>Instagram is a visual-first platform. Posts that stop the scroll share a few characteristics: high contrast between text and background, a single clear focal point, and consistent branding (same color palette and font across posts builds recognizable identity). Avoid cluttered designs — users see your post for 1–2 seconds before scrolling, so the message must be instantly clear.</p>
                <p>For text-based posts (quotes, announcements, tips), use large typography at 80px+ with strong contrast. For photo-based posts, use minimal text overlay — let the image do the work. Captions are read by engaged users who already stopped scrolling; the thumbnail brings them in.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Optimize Before Uploading to Instagram</h2>
                <p>Instagram re-compresses images automatically, which can reduce quality. To minimize Instagram&apos;s compression: keep your file under 1MB, use JPG at 85–92% quality (this tool uses 92%), and upload via the desktop web app for slightly better quality preservation than the mobile app. If your image is too large, use <Link href="https://compressimg.pro/compress-image-for-instagram" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg — Compress for Instagram</Link> to reduce file size before uploading.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size is an Instagram post?',a:'The standard Instagram feed post size is 1080×1080 pixels (square, 1:1 ratio). For Instagram Stories and Reels covers, use 1080×1920 pixels (9:16 ratio). This tool exports at 1080×1080.'},
                    {q:'Is this Instagram post maker free?',a:'Yes, completely free. No account required, no watermark on the downloaded image. Create and download as many posts as you need.'},
                    {q:'Can I upload my own photo as background?',a:'Yes. Click "Upload image" to add your own photo as the canvas background. All processing is local — your images never leave your device.'},
                    {q:'What font is best for Instagram?',a:'Bold sans-serif fonts like Arial Black and Impact are most readable in the Instagram feed. Keep text at 80px+ for a 1080×1080 post so it remains legible on mobile screens.'},
                    {q:'Should I use JPG or PNG for Instagram?',a:'JPG is recommended for posts with photo backgrounds. PNG is better for graphics with transparency. This tool exports JPG at 92% quality, which is optimal for Instagram — good quality with a small file size.'},
                    {q:'How do I compress my Instagram post?',a:'If you need a smaller file size, use CompressImg.pro after downloading. For Instagram, keep the file under 1MB to minimize Instagram\'s own re-compression.'},
                    {q:'Can I make an Instagram Story with this tool?',a:'This tool is sized for square posts (1080×1080). For Instagram Stories (1080×1920), use the same canvas — we\'re adding a Story format toggle in the next update.'},
                    {q:'Why is my Instagram post blurry after uploading?',a:'Instagram re-compresses images on upload. To minimize blurriness: export at 1080×1080px (this tool does this automatically), keep file size under 1MB, and upload via desktop browser rather than the mobile app for better quality.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[{href:'/youtube-thumbnail-maker',title:'YouTube Thumbnail Maker',desc:'1280×720px thumbnails with bold text and templates.'},{href:'/twitter-header-maker',title:'Twitter Header Maker',desc:'1500×500px Twitter/X profile header, free.'},{href:'/linkedin-banner-maker',title:'LinkedIn Banner Maker',desc:'1584×396px professional LinkedIn banner.'}].map(item=>(
                    <Link key={item.href} href={item.href} className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group">
                      <p className="font-semibold text-text-main text-xs group-hover:text-primary transition-colors">{item.title}</p>
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
