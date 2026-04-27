'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { GAMING_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.gaming

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'Gaming Thumbnail Maker', url: 'https://click-thumb.com/gaming-thumbnail-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online gaming thumbnail maker. Create 1280×720px YouTube gaming thumbnails with neon, fire, and cyberpunk templates. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size should a gaming thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Gaming thumbnails on YouTube should be 1280×720 pixels (16:9 ratio). This is the standard YouTube thumbnail size and works for all gaming channels. The minimum size is 640×360px, but 1280×720 is recommended for the best quality on all screens.' } },
      { '@type': 'Question', name: 'Is this gaming thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited gaming thumbnails.' } },
      { '@type': 'Question', name: 'What makes a good gaming thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'High-contrast colors (neon on black, red on dark), bold Impact-style text, a strong action word (INSANE, EPIC, BEST, HOW TO), and your face with a reaction expression. The thumbnail should be readable even at small sizes in the YouTube sidebar.' } },
      { '@type': 'Question', name: 'What font is best for gaming thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the most used font for gaming thumbnails — it is bold, condensed, and readable at small sizes. Arial Bold is a good alternative. Avoid thin or script fonts — they are unreadable in the YouTube sidebar where thumbnails display at around 120px wide.' } },
      { '@type': 'Question', name: 'What colors work best for gaming thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'High-contrast color combinations: neon green on black (#00ff88 on #0a0a0a), bright red on dark (#ff4400 on #0d0000), yellow on purple, or white on dark blue. Avoid low-contrast combinations like light gray on white. Saturation and contrast are more important than specific colors.' } },
      { '@type': 'Question', name: 'How many characters should a gaming thumbnail title have?', acceptedAnswer: { '@type': 'Answer', text: 'Keep thumbnail text to 3–6 words maximum. The thumbnail title is different from the video title — it should be a visual hook, not a full description. Examples: "INSANE WIN", "1 vs 100", "WORLD RECORD", "HOW I WON". Short and punchy wins every time.' } },
      { '@type': 'Question', name: 'Should I add my face to the thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — thumbnails with human faces perform 30–40% better than those without. Upload a transparent PNG of yourself using the background image upload feature, or use a photo with a solid background and high contrast against the thumbnail background.' } },
      { '@type': 'Question', name: 'What file format should I use for gaming thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended for gaming thumbnails. YouTube accepts JPG, PNG, GIF, and BMP (max 2MB). JPG gives the best quality at the smallest file size for thumbnails with solid backgrounds and text. This tool exports as JPG at 92% quality.' } },
    ] },
  ],
}

export default function GamingThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Gaming Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={GAMING_TEMPLATES} downloadFilename="click-thumb-gaming-thumbnail.jpg" exportLabel="Download Thumbnail (1280×720)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Makes a Gaming Thumbnail That Gets Clicks?</h2>
                <p>A gaming thumbnail has one job: make the viewer stop scrolling and click. In a YouTube feed packed with hundreds of videos, your thumbnail competes for attention in under 0.3 seconds. The best gaming thumbnails share three elements: extreme contrast between text and background, a short punchy title (3–5 words), and an emotion or action that promises a payoff.</p>
                <p>Top gaming channels have refined thumbnail design into a science. Study channels like MrBeast Gaming, Dream, or Markiplier — their thumbnails use neon colors on dark backgrounds, Impact font with thick outlines, bold facial expressions, and numbers (streak counts, win percentages, challenge difficulty). These patterns are not accidental — they are the result of years of A/B testing against millions of viewers.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Gaming Thumbnail Size — YouTube Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-surface"><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Spec</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Value</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th></tr></thead>
                    <tbody>
                      {[['Recommended size','1280×720px','Best quality on all devices'],['Minimum size','640×360px','Avoid — blurry on large screens'],['Aspect ratio','16:9','Matches YouTube player'],['Max file size','2MB','JPG recommended'],['Formats accepted','JPG, PNG, GIF, BMP','JPG is optimal for thumbnails']].map(([s,v,n])=>(
                        <tr key={s} className="even:bg-surface/50"><td className="border border-border px-3 py-2 font-medium text-text-main">{s}</td><td className="border border-border px-3 py-2">{v}</td><td className="border border-border px-3 py-2">{n}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>This tool exports at exactly 1280×720px as JPG — the YouTube-recommended size. No re-sizing, no quality loss.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Gaming Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Use Impact or Arial Black:</strong> Thin fonts disappear in the sidebar. Impact is the industry standard for gaming thumbnails — bold, condensed, and readable at 120px wide.</li>
                  <li><strong className="text-text-main">Add a stroke/outline to text:</strong> A 3–4px outline in a contrasting color (black outline on neon text, or neon outline on dark text) makes text readable over any background.</li>
                  <li><strong className="text-text-main">Limit text to 3–5 words:</strong> &quot;INSANE WIN&quot;, &quot;1 vs 100&quot;, &quot;HOW I DID IT&quot; — not full sentences. The video title handles the description.</li>
                  <li><strong className="text-text-main">Keep important elements in the center:</strong> YouTube crops thumbnails on mobile and in sidebar widgets. Anything near the edges may be cut off.</li>
                  <li><strong className="text-text-main">High contrast is non-negotiable:</strong> Test your thumbnail by squinting — if the text is still readable blurred, the contrast is sufficient.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Gaming Thumbnail Templates by Genre</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {genre:'FPS / Battle Royale',style:'Dark background + red/orange Impact text. Energy and aggression. Example colors: #ff4400 on #0d0000.'},
                    {genre:'RPG / Adventure',style:'Deep blue or forest green bg + gold text. Epic and cinematic. Example: #FFD700 on #0a0a23.'},
                    {genre:'Strategy / Tutorials',style:'Clean white or dark navy bg + bold sans-serif. Professional and informative. Arrows and callout boxes work well.'},
                  ].map(t=>(
                    <div key={t.genre} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{t.genre}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.style}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Own Game Screenshot as Background</h2>
                <p>The most effective gaming thumbnails use a screenshot or action shot from the game as the background, then overlay bold text on top. Use the <strong className="text-text-main">Upload image</strong> button to add your own game screenshot as the canvas background. Then pick a template for the text overlay — the neon text layers are pre-positioned to avoid clashing with typical game UI elements in the center of the screen.</p>
                <p>For best results: take your game screenshot at 1920×1080 or higher, upload it as the background, then use a text template with a stroke/outline for readability over the in-game scenery.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Gaming Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–400KB — well within the limit. If you need to reduce the file size, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to compress without visible quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size should a gaming thumbnail be?',a:'Gaming thumbnails on YouTube should be 1280×720 pixels (16:9 ratio). This tool exports at exactly this size.'},
                    {q:'Is this gaming thumbnail maker free?',a:'Yes, completely free. No account required, no watermark. Download unlimited gaming thumbnails.'},
                    {q:'What makes a good gaming thumbnail?',a:'High-contrast colors (neon on black), bold Impact font with outline, 3–5 word title, and a face with strong expression. Readable even at 120px wide.'},
                    {q:'What font is best for gaming thumbnails?',a:'Impact is the industry standard — bold, condensed, readable at any size. Always add a 3–4px outline in a contrasting color to keep text readable over backgrounds.'},
                    {q:'What colors work best for gaming thumbnails?',a:'Neon on black (#00ff88 on #0a0a0a), bright red on dark (#ff4400 on #0d0000), yellow on purple. High contrast and saturation — the thumbnail is small in the feed.'},
                    {q:'How many words should a gaming thumbnail have?',a:'3–5 words maximum. "INSANE WIN", "1 vs 100", "WORLD RECORD". Short and punchy. The video title handles the full description.'},
                    {q:'Can I upload my own game screenshot?',a:'Yes. Click "Upload image" to add your own game screenshot as the background. All processing runs locally — nothing is sent to any server.'},
                    {q:'What file format for gaming thumbnails?',a:'JPG is recommended. YouTube accepts JPG, PNG, GIF, BMP (max 2MB). JPG gives the best quality-to-size ratio for thumbnails.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[{href:'/youtube-thumbnail-maker',title:'YouTube Thumbnail Maker',desc:'1280×720px thumbnails for all niches.'},{href:'/youtube-banner-maker',title:'YouTube Banner Maker',desc:'2560×1440px YouTube channel art.'},{href:'/instagram-post-maker',title:'Instagram Post Maker',desc:'1080×1080px Instagram posts, free.'}].map(item=>(
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
