import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { GTA_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GTA Thumbnail Maker – Free GTA 5 & GTA Online Thumbnails',
  description: 'Free GTA thumbnail maker. Create 1280×720px GTA 5 and GTA Online YouTube thumbnails with Gold, Night Purple, and Wanted Red templates. No signup.',
  alternates: { canonical: 'https://click-thumb.com/gta-thumbnail-maker/' },
  openGraph: { title: 'GTA Thumbnail Maker – Free GTA 5 & GTA Online Thumbnails', description: 'Create 1280×720px GTA 5 and GTA Online thumbnails free. GTA Gold, Night Purple, and Wanted Red templates for heist and money grind content.', url: 'https://click-thumb.com/gta-thumbnail-maker/', siteName: 'ClickThumb', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
}

const platform = PLATFORMS.gta

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'GTA Thumbnail Maker', url: 'https://click-thumb.com/gta-thumbnail-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online GTA thumbnail maker. Create 1280×720px GTA 5 and GTA Online YouTube thumbnails. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size should a GTA thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'GTA YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is YouTube\'s recommended thumbnail size. This tool exports at exactly 1280×720px as JPG.' } },
      { '@type': 'Question', name: 'Is this GTA thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited GTA 5 and GTA Online thumbnails.' } },
      { '@type': 'Question', name: 'What colors work best for GTA thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Gold (#ffd700) on near-black is GTA\'s most iconic color — it represents money, luxury, and the GTA Online aesthetic. Purple (#c084fc) on dark backgrounds suits nightclub and nightlife content. Red (#ff2222) on black works for chaos and wanted-level videos.' } },
      { '@type': 'Question', name: 'What text should I put on a GTA thumbnail?', acceptedAnswer: { '@type': 'Answer', text: '"$10M HEIST!", "5 STAR WANTED", "GTA ONLINE MONEY GLITCH", "RICHEST PLAYER IN GTA" — money amounts, wanted levels, and specific heist names drive clicks from GTA audiences.' } },
      { '@type': 'Question', name: 'Can I upload a GTA 5 screenshot as background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload image" to add your GTA 5 or GTA Online screenshot as background. All processing is done locally in your browser — nothing is uploaded to any server.' } },
      { '@type': 'Question', name: 'What makes a good GTA Online thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'GTA Online thumbnails that perform best feature money amounts ($5M+, $10M+), heist names (Cayo Perico, Diamond Casino), or specific challenges (5 Star Wanted, Solo Heist). Gold text on dark backgrounds signals wealth and success — the core GTA Online fantasy.' } },
      { '@type': 'Question', name: 'Does this work for GTA 6 thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the 1280×720 size is correct for all GTA titles on YouTube. The templates work for GTA 5, GTA Online, and GTA 6 content.' } },
      { '@type': 'Question', name: 'What file format for GTA thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB.' } },
    ] },
  ],
}

export default function GTAThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">GTA Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={GTA_TEMPLATES} downloadFilename="click-thumb-gta-thumbnail.jpg" exportLabel="Download Thumbnail (1280×720)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Why GTA Thumbnails Drive Clicks on YouTube</h2>
                <p>GTA 5 and GTA Online have generated billions of YouTube views since 2013, and the channel is still growing — especially around new heists, money updates, and the eventual GTA 6 launch. In the GTA content niche, thumbnails communicate one thing above all else: scale. Money amounts ($10M heist), wanted levels (5 stars), player counts (50 vs 1), and challenge difficulty (Solo Cayo Perico, Hardest Heist) all signal to the viewer exactly how impressive the video content is before they click.</p>
                <p>The GTA aesthetic is defined by wealth, nightlife, and excess. Gold, purple, and red are the dominant thumbnail colors — matching the game&apos;s Los Santos setting and GTA Online&apos;s luxury theme. The most successful GTA YouTube channels (GTA Series Videos, DarkViperAU, TGG) all use this formula: specific claim + GTA color palette + Impact font at maximum size.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">GTA Thumbnail Size Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-surface"><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Spec</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Value</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th></tr></thead>
                    <tbody>
                      {[['Recommended size','1280×720px','HD quality on all devices'],['Aspect ratio','16:9','Matches YouTube player'],['Max file size','2MB','JPG stays well under'],['Format','JPG','Best quality-to-size ratio'],['Safe zone','80px from edges','Prevents mobile cropping']].map(([s,v,n])=>(
                        <tr key={s} className="even:bg-surface/50"><td className="border border-border px-3 py-2 font-medium text-text-main">{s}</td><td className="border border-border px-3 py-2">{v}</td><td className="border border-border px-3 py-2">{n}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best GTA Thumbnail Templates by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[{type:'Money / Heist Videos',desc:'GTA Gold — near-black background + gold Impact text. The gold color signals wealth, which is the core GTA Online fantasy for viewers.'},
                    {type:'Nightclub / Nightlife',desc:'Night Purple — deep dark purple bg + purple accent text. Matches the GTA Online nightclub and nightlife DLC aesthetic.'},
                    {type:'Chaos / Wanted Level',desc:'Wanted Red — near-black bg + bright red text. Communicates danger, chaos, and 5-star wanted level energy.'}
                  ].map(t=>(
                    <div key={t.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{t.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">GTA Thumbnail Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Lead with the money or milestone:</strong> &quot;$10M IN ONE HEIST&quot;, &quot;MADE $5M FROM SCRATCH&quot; — GTA viewers are motivated by money and progression. The bigger the number, the higher the CTR.</li>
                  <li><strong className="text-text-main">Name the heist or update:</strong> &quot;CAYO PERICO SOLO&quot;, &quot;DIAMOND CASINO HEIST&quot; — specific content names help viewers find what they&apos;re looking for and signal that you know the game.</li>
                  <li><strong className="text-text-main">Use gold for money content:</strong> Gold (#ffd700) is culturally synonymous with GTA Online wealth. Any money-related thumbnail should use gold as the primary text color.</li>
                  <li><strong className="text-text-main">Upload your GTA screenshot:</strong> A real in-game screenshot (heist payout screen, wanted level, car collection) makes the thumbnail authentic and specific to the content.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Step-by-Step: Make a GTA Thumbnail Free</h2>
                <div className="space-y-2">
                  {[
                    { step: '1. Choose your template', desc: 'Select GTA Gold for money and heist content, Night Purple for nightclub and nightlife videos, or Wanted Red for chaos and 5-star wanted content. Each template is pre-configured with the correct GTA color palette and Impact font style.' },
                    { step: '2. Upload your GTA screenshot', desc: 'Click "Upload image" to set your GTA 5 or GTA Online screenshot as the background. The heist payout screen, your car collection in the garage, or a high-action police chase moment all make strong thumbnail backgrounds.' },
                    { step: '3. Edit the main text', desc: 'Replace the template text with your hook: "$10M HEIST", "SOLO CAYO PERICO", "5 STAR CHAOS". Keep it to 3–5 words. The text should tell the viewer exactly what the video delivers before they click.' },
                    { step: '4. Check mobile readability', desc: 'Zoom your browser out until the canvas is about 120px wide — the size YouTube displays thumbnails on mobile. Text should be readable and the screenshot recognizable at this size. If not, increase font size or simplify the layout.' },
                    { step: '5. Download', desc: 'Click "Download Thumbnail (1280×720)". Exports as JPG at full HD resolution. Upload directly to YouTube Studio under your video → Custom thumbnail. No resizing needed.' },
                  ].map(({ step, desc }) => (
                    <div key={step} className="flex gap-3">
                      <span className="font-semibold text-text-main text-xs shrink-0 pt-0.5">{step}</span>
                      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">GTA YouTube Content and Thumbnail Strategy</h2>
                <p>GTA content on YouTube spans multiple sub-niches, and each has a different thumbnail formula. Money and heist content (Cayo Perico, Diamond Casino, Doomsday) performs best with gold text on dark backgrounds — the gold signals wealth, which is the core GTA Online fantasy. Chaos and challenge content (5-star wanted, destroying everything, 1 vs 100 players) performs better with red — it signals danger and spectacle. Nightclub and nightlife DLC content uses purple as the native color, matching the in-game UI of those updates.</p>
                <p>The most successful GTA YouTube channels update thumbnails based on what is trending in GTA Online — each major Rockstar update brings new keywords and thumbnail styles. During a new heist launch, every channel uses the heist name in large text. Staying current with these content cycles and adapting your thumbnail language keeps your channel relevant to the active GTA audience.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your GTA Thumbnail</h2>
                <p>YouTube thumbnails must be under 2MB. JPG at 92% quality is typically 150–350KB for 1280×720 images. If you need to reduce file size further, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to compress without visible quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size should a GTA thumbnail be?',a:'1280×720 pixels (16:9). This tool exports at exactly this size as JPG.'},
                    {q:'Is this GTA thumbnail maker free?',a:'Yes, completely free. No account, no watermark. Download unlimited thumbnails.'},
                    {q:'What colors work best for GTA thumbnails?',a:'Gold (#ffd700) for money content, purple (#c084fc) for nightlife/nightclub content, red (#ff2222) for chaos and wanted-level videos. All on near-black backgrounds.'},
                    {q:'What text should I use on a GTA thumbnail?',a:'"$10M HEIST!", "5 STAR WANTED", "SOLO CAYO PERICO" — money amounts, wanted levels, and specific heist names drive the highest CTR.'},
                    {q:'Can I upload a GTA screenshot as background?',a:'Yes. Click "Upload image" to add your GTA 5 or GTA Online screenshot. Everything runs locally.'},
                    {q:'Does this work for GTA 6 thumbnails?',a:'Yes — 1280×720 is the correct size for all GTA YouTube content, including GTA 6 coverage.'},
                    {q:'What makes a good GTA Online thumbnail?',a:'Specific money amount or achievement + gold/purple color palette + Impact font + dark background. Heist payouts and money milestones consistently get high CTR.'},
                    {q:'What file format for GTA thumbnails?',a:'JPG. YouTube accepts JPG up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Gaming Thumbnail Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {href:'/gaming-thumbnail-maker',title:'Gaming Thumbnail Maker',desc:'Universal gaming templates — neon, fire, cyberpunk.'},
                    {href:'/call-of-duty-thumbnail-maker',title:'COD Thumbnail Maker',desc:'Military Dark, Combat Orange, and Camo Green for COD.'},
                    {href:'/fortnite-thumbnail-maker',title:'Fortnite Thumbnail Maker',desc:'Storm Eye, Zero Point, Legendary Loot templates.'},
                    {href:'/roblox-thumbnail-maker',title:'Roblox Thumbnail Maker',desc:'Roblox Red, Neon Obby, Rare Item templates.'},
                    {href:'/minecraft-thumbnail-maker',title:'Minecraft Thumbnail Maker',desc:'Grass Block, Diamond Mine, Nether Portal templates.'},
                    {href:'/youtube-thumbnail-maker',title:'YouTube Thumbnail Maker',desc:'Universal YouTube thumbnails — all niches, all sizes.'},
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
