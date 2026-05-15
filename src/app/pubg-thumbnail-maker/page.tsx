import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { PUBG_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free PUBG Thumbnail Maker — No Canva, No Signup, Instant Download',
  description: 'Free PUBG thumbnail maker — no Canva, no signup. Chicken Dinner, Military Tan, Night Drop templates for PUBG Mobile & PC. Create 1280×720px and download in seconds.',
  alternates: { canonical: 'https://click-thumb.com/pubg-thumbnail-maker/' },
  openGraph: { title: 'Free PUBG Thumbnail Maker — Chicken Dinner Templates, No Signup', description: 'Make PUBG thumbnails at 1280×720px free. Chicken Dinner, Military Tan, Night Drop templates for PUBG Mobile and PC creators.', url: 'https://click-thumb.com/pubg-thumbnail-maker/', siteName: 'ClickThumb', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
}

const platform = PLATFORMS.pubg

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'PUBG Thumbnail Maker', url: 'https://click-thumb.com/pubg-thumbnail-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online PUBG thumbnail maker. Create 1280×720px PUBG Mobile and PUBG PC YouTube thumbnails. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size should a PUBG thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'PUBG YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is YouTube\'s recommended thumbnail size and displays sharply on all devices including mobile. This tool exports at exactly 1280×720px as JPG.' } },
      { '@type': 'Question', name: 'Is this PUBG thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited PUBG Mobile and PUBG PC thumbnails for your YouTube channel.' } },
      { '@type': 'Question', name: 'What colors work best for PUBG thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Amber/gold (#f59e0b) on near-black is PUBG\'s most iconic color — it represents the "Winner Winner Chicken Dinner" victory screen. Military tan (#d4b483) on dark earth tones suits tactical and survival content. Teal (#22d3ee) on dark navy works for night-drop and stealth gameplay.' } },
      { '@type': 'Question', name: 'What text should I put on a PUBG thumbnail?', acceptedAnswer: { '@type': 'Answer', text: '"#1 WINNER!", "20 KILLS GAME", "SOLO SQUAD WIN", "CHICKEN DINNER!" — placement/win results and kill counts. The "Chicken Dinner" phrase is iconic in PUBG culture and drives strong recognition clicks.' } },
      { '@type': 'Question', name: 'Can I upload a PUBG screenshot as background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload image" to add your PUBG gameplay screenshot — the winner screen, kill feed, or map view. All processing runs locally in your browser — nothing is uploaded to any server.' } },
      { '@type': 'Question', name: 'What makes a good PUBG thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'The best PUBG thumbnails show the chicken dinner winner screen or a high-kill game. Use the amber/gold color palette to match PUBG\'s victory aesthetic, include the kill count in large Impact text, and name the map (Erangel, Miramar, Sanhok) for searchability.' } },
      { '@type': 'Question', name: 'Does this work for PUBG Mobile thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the 1280×720 size is correct for both PUBG Mobile and PUBG PC YouTube thumbnails. The templates and layout work for both versions of the game.' } },
      { '@type': 'Question', name: 'What file format for PUBG thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within the limit.' } },
    ] },
  ],
}

export default function PUBGThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">PUBG Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={PUBG_TEMPLATES} downloadFilename="click-thumb-pubg-thumbnail.jpg" exportLabel="Download Thumbnail (1280×720)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">PUBG Thumbnails — Win More Clicks, Not Just Chicken Dinners</h2>
                <p>PUBG (PlayerUnknown&apos;s Battlegrounds) remains one of the most-searched battle royale games on YouTube, with PUBG Mobile adding a massive additional viewer base across Southeast Asia, India, and beyond. Whether you create PUBG PC highlights, PUBG Mobile ranked content, chicken dinner compilations, or map guides, your thumbnail is the primary driver of click-through rate.</p>
                <p>PUBG thumbnails perform best when they combine two elements: the specific achievement (kill count, chicken dinner, solo squad win) and the game&apos;s signature amber-gold color palette. The &quot;Winner Winner Chicken Dinner&quot; phrase is culturally embedded in PUBG culture — thumbnails that reference it explicitly get strong recognition clicks from the fanbase. High kill counts (15+, 20+) and solo squad wins are the two highest-performing thumbnail claims in the PUBG niche.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">PUBG Thumbnail Size — YouTube Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-surface"><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Spec</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Value</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th></tr></thead>
                    <tbody>
                      {[['Recommended size','1280×720px','Best quality on all devices'],['Aspect ratio','16:9','Matches YouTube player'],['Max file size','2MB','JPG stays well under'],['Format','JPG','Best quality-to-size ratio'],['Safe zone','80px from edges','Prevents mobile cropping']].map(([s,v,n])=>(
                        <tr key={s} className="even:bg-surface/50"><td className="border border-border px-3 py-2 font-medium text-text-main">{s}</td><td className="border border-border px-3 py-2">{v}</td><td className="border border-border px-3 py-2">{n}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best PUBG Templates by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[{type:'Chicken Dinner / Win Videos',desc:'Chicken Dinner — near-black bg + amber/gold Impact text. The gold palette directly matches PUBG\'s victory screen color and signals a win to viewers instantly.'},
                    {type:'Kill Record / Squad Games',desc:'Military Tan — dark earth-tone bg + tan Impact text. The military palette suits tactical gameplay and matches PUBG\'s realistic survival aesthetic.'},
                    {type:'Ranked / Night Drop',desc:'Night Drop — dark navy bg + teal Impact text. Teal gives a high-tech stealth feel for night-map gameplay and ranked climb content.'}
                  ].map(t=>(
                    <div key={t.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{t.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">PUBG Thumbnail Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Lead with the kill count or placement:</strong> &quot;20 KILLS CHICKEN DINNER&quot;, &quot;#1 WINNER SOLO SQUAD&quot;, &quot;15 KILLS ERANGEL&quot; — PUBG viewers respond to specific numbers and placements.</li>
                  <li><strong className="text-text-main">Name the map:</strong> Erangel, Miramar, Sanhok, Vikendi, Deston — naming the map makes the thumbnail searchable and relevant to viewers who grind specific maps.</li>
                  <li><strong className="text-text-main">Use amber/gold for victory content:</strong> #f59e0b directly mirrors PUBG&apos;s chicken dinner color. Any win or high-kill thumbnail should default to gold on black.</li>
                  <li><strong className="text-text-main">Upload your PUBG winner screen:</strong> The chicken dinner victory screen or kill feed screenshot makes the thumbnail feel authentic and earned — not just a generic gaming template.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Step-by-Step: Make a PUBG Thumbnail Free</h2>
                <div className="space-y-2">
                  {[
                    { step: '1. Choose your template', desc: 'Select Chicken Dinner (amber/gold) for win and high-kill content, Military Tan for tactical and squad gameplay, or Night Drop (teal) for night-map and stealth content. Each template matches a distinct PUBG playstyle and audience expectation.' },
                    { step: '2. Upload your PUBG screenshot', desc: 'Click "Upload image" to add your PUBG winner screen, kill feed, or map overview. The "Winner Winner Chicken Dinner" victory screen is one of the most recognizable gaming images ever — it instantly communicates a win to any PUBG viewer.' },
                    { step: '3. Edit the main text', desc: 'Lead with the achievement: "#1 WINNER!", "20 KILLS SOLO", "CHICKEN DINNER ERANGEL". Include the map name when relevant — PUBG viewers often search map-specific content for their favorite drops.' },
                    { step: '4. Check readability', desc: 'PUBG thumbnails compete in the battle royale category alongside Warzone and Fortnite thumbnails. Zoom to 120px wide — your text claim must be legible and the color palette must immediately read as PUBG (amber/gold or military tan, not Fortnite-bright).' },
                    { step: '5. Download', desc: 'Click "Download Thumbnail (1280×720)". Upload to YouTube Studio directly. The exported JPG is optimized for YouTube at 92% quality — well within the 2MB limit.' },
                  ].map(({ step, desc }) => (
                    <div key={step} className="flex gap-3">
                      <span className="font-semibold text-text-main text-xs shrink-0 pt-0.5">{step}</span>
                      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">PUBG Mobile vs PUBG PC — Thumbnail Differences</h2>
                <p>PUBG Mobile and PUBG PC share the same core gameplay but have distinct audiences on YouTube. PUBG Mobile has a massive viewership across Southeast Asia, India, and the Middle East — titles in local languages often outperform English titles for those audiences. PUBG PC content skews toward Western audiences who respond to the military and tactical aesthetic. The amber/gold Chicken Dinner template works equally well for both audiences, as the victory screen color is identical in both versions of the game.</p>
                <p>PUBG Mobile thumbnails often include device-specific context: "iPhone 16 PUBG Mobile", "90FPS PUBG Mobile" — these technical tags attract the mobile gaming audience who are actively seeking performance benchmarks and device comparisons. PUBG PC thumbnails focus more on the achievement itself (kill count, placement) without device context. If you create content for both platforms, consider separate thumbnail styles that signal which version you are covering.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your PUBG Thumbnail</h2>
                <p>YouTube thumbnails must be under 2MB. JPG at 92% quality is typically 150–350KB for 1280×720. If you need to reduce file size, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to compress without visible quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size should a PUBG thumbnail be?',a:'1280×720 pixels (16:9). This tool exports at exactly this size as JPG.'},
                    {q:'Is this PUBG thumbnail maker free?',a:'Yes, completely free. No account, no watermark. Download unlimited thumbnails.'},
                    {q:'What colors work best for PUBG thumbnails?',a:'Amber/gold (#f59e0b) for chicken dinner content, military tan (#d4b483) for tactical/squad gameplay, teal (#22d3ee) for night-drop and stealth content.'},
                    {q:'What text should I use on a PUBG thumbnail?',a:'"#1 WINNER!", "20 KILLS GAME", "SOLO SQUAD WIN", "CHICKEN DINNER!" — kill counts, placements, and the iconic chicken dinner phrase all drive strong CTR.'},
                    {q:'Can I upload a PUBG screenshot as background?',a:'Yes. Click "Upload image" to add your PUBG gameplay screenshot. Everything runs locally.'},
                    {q:'Does this work for PUBG Mobile thumbnails?',a:'Yes — 1280×720 is the correct size for both PUBG Mobile and PUBG PC YouTube thumbnails.'},
                    {q:'What makes a good PUBG chicken dinner thumbnail?',a:'Gold text on black background + "#1 WINNER" or "CHICKEN DINNER" + specific kill count. The gold palette matches PUBG\'s victory screen color, creating instant recognition.'},
                    {q:'What file format for PUBG thumbnails?',a:'JPG. YouTube accepts JPG up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Gaming Thumbnail Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {href:'/gaming-thumbnail-maker',title:'Gaming Thumbnail Maker',desc:'Universal gaming templates — neon, fire, cyberpunk.'},
                    {href:'/call-of-duty-thumbnail-maker',title:'COD Thumbnail Maker',desc:'Military Dark, Combat Orange, Camo Green for COD.'},
                    {href:'/apex-legends-thumbnail-maker',title:'Apex Legends Thumbnail Maker',desc:'Champion Orange, Dark Red for Apex Legends creators.'},
                    {href:'/fortnite-thumbnail-maker',title:'Fortnite Thumbnail Maker',desc:'Storm Eye, Zero Point, Legendary Loot templates.'},
                    {href:'/cs2-thumbnail-maker',title:'CS2 Thumbnail Maker',desc:'CT Blue, T-Side Orange, Pro Minimal for CS2 creators.'},
                    {href:'/valorant-thumbnail-maker',title:'Valorant Thumbnail Maker',desc:'Agent Impact, ACE Gold, Clutch Navy for Valorant.'},
                  ].map(item=>(
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
