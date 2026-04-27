'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { YOUTUBE_BANNER_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.youtube_banner

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'YouTube Banner Maker', url: 'https://click-thumb.com/youtube-banner-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online YouTube banner maker. Create 2560×1440px YouTube channel art with templates and custom text. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size is a YouTube banner?', acceptedAnswer: { '@type': 'Answer', text: 'The recommended YouTube banner (channel art) size is 2560×1440 pixels. YouTube displays different portions depending on the device: 2560×423px on TV, 2560×1440px on desktop (with safe zone in center), and 1546×423px on tablets. Keep important content in the center safe zone (1235×338px).' } },
      { '@type': 'Question', name: 'Is this YouTube banner maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Download your YouTube channel art instantly.' } },
      { '@type': 'Question', name: 'How do I upload a YouTube banner?', acceptedAnswer: { '@type': 'Answer', text: 'Go to YouTube Studio → Customization → Branding → click the pencil icon on the banner area → Upload → select your 2560×1440px image → Publish.' } },
      { '@type': 'Question', name: 'What is the YouTube banner safe zone?', acceptedAnswer: { '@type': 'Answer', text: 'The YouTube channel art safe zone is the center 1235×338px of the 2560×1440 banner. Content in this area is visible on all devices. Avoid putting text or logos near the edges — on mobile, only the center portion is visible.' } },
      { '@type': 'Question', name: 'What file format does YouTube accept for banners?', acceptedAnswer: { '@type': 'Answer', text: 'YouTube accepts JPG, PNG, BMP, and GIF for channel art (max 6MB). JPG is recommended for photos and complex designs. PNG is better for logos and graphics with text.' } },
      { '@type': 'Question', name: 'What should I put on my YouTube banner?', acceptedAnswer: { '@type': 'Answer', text: 'Your channel name (large, centered), upload schedule ("New videos every Tuesday"), tagline or niche description, and optionally your social handles. Keep it simple — the banner is small on most devices.' } },
      { '@type': 'Question', name: 'How often should I update my YouTube banner?', acceptedAnswer: { '@type': 'Answer', text: 'Update your YouTube banner when you rebrand, change your content focus, hit a milestone (100K subs banner), or run a special promotion. Many creators update seasonally. Consistent branding across banner, thumbnail style, and profile photo builds faster channel recognition.' } },
      { '@type': 'Question', name: 'Why does my YouTube banner look blurry?', acceptedAnswer: { '@type': 'Answer', text: 'Upload at exactly 2560×1440px to avoid YouTube re-sizing. Keep the file under 6MB. Use JPG for complex designs (photos, gradients) and PNG for clean graphics with text. This tool exports at the correct 2560×1440px automatically.' } },
    ] },
  ],
}

export default function YoutubeBannerMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">YouTube Banner Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 2560×1440px channel art — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={YOUTUBE_BANNER_TEMPLATES} downloadFilename="click-thumb-youtube-banner.jpg" exportLabel="Download Banner (2560×1440)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">YouTube Banner Size — Exact Specifications</h2>
                <p>The YouTube channel art (banner) is 2560×1440 pixels — but YouTube displays different portions on different devices. Understanding the safe zones is critical: content in the edges of the full 2560×1440 image may be cut off on phones and tablets.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-surface"><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Device</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Visible area</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th></tr></thead>
                    <tbody>
                      {[['TV','2560×423px','Full width, top strip only'],['Desktop','2560×1440px','Full image visible'],['Tablet','1855×423px','Center crop, top strip'],['Mobile','1235×338px','Narrow center strip — safe zone']].map(([d,v,n])=>(
                        <tr key={d} className="even:bg-surface/50"><td className="border border-border px-3 py-2 font-medium text-text-main">{d}</td><td className="border border-border px-3 py-2">{v}</td><td className="border border-border px-3 py-2">{n}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>Keep all text and logos inside the <strong className="text-text-main">center 1235×338px safe zone</strong> — this is the area guaranteed to be visible on every device. This tool pre-positions all template text in the safe zone by default.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What to Put on Your YouTube Banner</h2>
                <p>Your YouTube channel art is the first thing a new viewer sees when they visit your channel page. It should immediately communicate who you are and why they should subscribe. The most effective YouTube banners include three elements: your channel name in large, readable text; a brief description of your content (&quot;Gaming tutorials&quot;, &quot;Weekly cooking videos&quot;, &quot;Tech reviews&quot;); and an upload schedule to set expectations.</p>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Gaming channels:</strong> Channel name in Impact font, neon colors, game genre (FPS/RPG/Minecraft), &quot;New videos daily&quot;</li>
                  <li><strong className="text-text-main">Vlog / lifestyle:</strong> Name + aesthetic background photo, upload day (e.g. &quot;Every Sunday&quot;)</li>
                  <li><strong className="text-text-main">Tutorial / educational:</strong> Channel name + topic + value proposition (&quot;Learn Python in 30 days&quot;)</li>
                  <li><strong className="text-text-main">Business / brand:</strong> Logo + tagline + website URL</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">How to Upload Your YouTube Banner</h2>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Create and download</strong> your banner using this tool (2560×1440px JPG).</li>
                  <li>Go to <strong className="text-text-main">YouTube Studio</strong> (studio.youtube.com).</li>
                  <li>Click <strong className="text-text-main">Customization</strong> in the left menu → <strong className="text-text-main">Branding</strong> tab.</li>
                  <li>Under &quot;Banner image&quot; → click the <strong className="text-text-main">pencil/upload icon</strong>.</li>
                  <li>Select your downloaded file → adjust crop preview → <strong className="text-text-main">Done</strong> → <strong className="text-text-main">Publish</strong>.</li>
                </ol>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Design Tips for YouTube Channel Art</h2>
                <p>Because the banner is cropped differently on every device, minimalism works best. A common mistake is filling the full 2560×1440 canvas with content — most viewers on mobile will only see a 1235×338px strip. Focus on your channel name and one clear message in the center safe zone. Use the outer areas only for background visuals that still look good when cropped.</p>
                <p>Consistent branding across your banner, profile photo, and video thumbnails builds channel recognition faster. If your thumbnails use a dark background with neon text, use the same color scheme in your banner. If your thumbnails use a specific font, use it in the banner too.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Optimize Your YouTube Banner File</h2>
                <p>YouTube accepts banners up to 6MB. A 2560×1440px JPG at 92% quality typically exports at 500KB–1.5MB — well within limits. If you need to reduce the file size, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce size without visible quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size is a YouTube banner?',a:'The recommended YouTube banner size is 2560×1440 pixels. This tool exports at exactly this size. Keep important content in the center 1235×338px safe zone — visible on all devices.'},
                    {q:'Is this YouTube banner maker free?',a:'Yes, completely free. No account required, no watermark. Download your YouTube channel art instantly.'},
                    {q:'How do I upload a YouTube banner?',a:'YouTube Studio → Customization → Branding → click pencil icon on banner → Upload → select file → Done → Publish.'},
                    {q:'What is the safe zone on a YouTube banner?',a:'The center 1235×338px of the 2560×1440 image. Content here is visible on mobile, tablet, desktop, and TV. Keep all text and logos inside this zone.'},
                    {q:'What format does YouTube accept for banners?',a:'JPG, PNG, BMP, GIF (max 6MB). JPG is recommended for photos and complex designs. PNG for clean graphics with text.'},
                    {q:'What should I put on my YouTube banner?',a:'Channel name (large, centered), content type or niche, upload schedule ("New videos every Tuesday"), optionally social handles. Keep it simple — most viewers see a narrow strip.'},
                    {q:'Can I upload my own background image?',a:'Yes. Click "Upload image" to use your own photo as the canvas background. All processing is local — nothing is sent to any server.'},
                    {q:'Why does my YouTube banner look blurry?',a:'Upload at 2560×1440px to prevent YouTube downscaling. Use JPG under 6MB. This tool exports at the correct resolution automatically.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[{href:'/youtube-thumbnail-maker',title:'YouTube Thumbnail Maker',desc:'1280×720px thumbnails with bold text.'},{href:'/gaming-thumbnail-maker',title:'Gaming Thumbnail Maker',desc:'Neon, fire & cyberpunk gaming templates.'},{href:'/twitter-header-maker',title:'Twitter Header Maker',desc:'1500×500px Twitter/X profile banner.'}].map(item=>(
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
