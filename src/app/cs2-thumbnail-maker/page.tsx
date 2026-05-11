import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { CS2_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CS2 Thumbnail Maker – Free Counter-Strike 2 YouTube Thumbnails',
  description: 'Free CS2 thumbnail maker. Create 1280×720px Counter-Strike 2 YouTube thumbnails with CT Blue, T-Side Orange, and Pro Minimal templates. No signup.',
  alternates: { canonical: 'https://click-thumb.com/cs2-thumbnail-maker/' },
  openGraph: { title: 'CS2 Thumbnail Maker – Free Counter-Strike 2 YouTube Thumbnails', description: 'Create 1280×720px CS2 thumbnails free. CT Blue, T-Side Orange, and Pro Minimal templates for Counter-Strike 2 YouTube creators.', url: 'https://click-thumb.com/cs2-thumbnail-maker/', siteName: 'ClickThumb', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
}

const platform = PLATFORMS.cs2

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'CS2 Thumbnail Maker', url: 'https://click-thumb.com/cs2-thumbnail-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online CS2 thumbnail maker. Create 1280×720px Counter-Strike 2 YouTube thumbnails with CT Blue, T-Side Orange, and Pro Minimal templates. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size should a CS2 thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'CS2 YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is YouTube\'s recommended thumbnail size and displays sharply on all devices. This tool exports at exactly 1280×720px as JPG.' } },
      { '@type': 'Question', name: 'Is this CS2 thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited CS2 thumbnails for your Counter-Strike YouTube channel.' } },
      { '@type': 'Question', name: 'What colors work best for CS2 thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'CT-side blue (#4da6ff) on near-black conveys precision and tactical gameplay. T-side orange (#ff8c00) on dark backgrounds gives aggressive energy for highlight reels. White Impact on black (#0a0a0a) is the cleanest look for pro-style content.' } },
      { '@type': 'Question', name: 'What text should I put on a CS2 thumbnail?', acceptedAnswer: { '@type': 'Answer', text: '"1 vs 5 CLUTCH", "ACE ROUND!", "GLOBAL ELITE RANKED", "HOW I HIT FACEIT LEVEL 10" — clutch rounds, rank achievements, and specific play descriptions drive high CTR for CS2 content.' } },
      { '@type': 'Question', name: 'Can I upload a CS2 screenshot as background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload image" to add your CS2 gameplay screenshot. All processing runs locally in your browser — nothing is uploaded to any server.' } },
      { '@type': 'Question', name: 'What font works best for CS2 thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the standard for CS2 thumbnails — bold, condensed, and readable at small YouTube thumbnail sizes. For a cleaner pro-player look, Arial Bold works well. Always add an outline in a contrasting color.' } },
      { '@type': 'Question', name: 'What makes a good CS2 clutch thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'The best CS2 clutch thumbnails state the exact scenario: "1 vs 5", "1 vs 3 PISTOL", "DEAGLE ACE". The more specific the clutch scenario, the higher the CTR — Counter-Strike viewers know exactly what difficulty each scenario represents.' } },
      { '@type': 'Question', name: 'What file format for CS2 thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within the limit.' } },
    ] },
  ],
}

export default function CS2ThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">CS2 Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={CS2_TEMPLATES} downloadFilename="click-thumb-cs2-thumbnail.jpg" exportLabel="Download Thumbnail (1280×720)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">CS2 Thumbnails — The Most Competitive Gaming Niche on YouTube</h2>
                <p>Counter-Strike 2 (CS2) is one of the most watched and searched gaming topics on YouTube. From FACEIT highlights to Premier ranked climbs, Global Elite guides to clutch compilations, the CS2 content space attracts millions of daily viewers. In this environment, a thumbnail is the primary differentiator — the same clutch round with a well-designed thumbnail can get 10× the views of one with a bad thumbnail.</p>
                <p>CS2 thumbnails follow a specific high-performance formula: exact scenario description (&quot;1 vs 5 clutch&quot; beats &quot;INSANE PLAY&quot;), a CT-blue or T-orange color palette that signals the game instantly, and the cleanest possible design (Counter-Strike&apos;s audience skews toward tactical thinkers who respond to precision, not chaos). The channels that dominate CS2 YouTube — Sparkles, s1mple&apos;s clips, HLTV highlights — all follow this pattern.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">CS2 Thumbnail Size — YouTube Specifications</h2>
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
                <h2 className="text-base font-bold text-text-main">Best CS2 Templates by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[{type:'Clutch Rounds & Highlights',desc:'CT Blue — near-black bg + blue Impact text. CT-side blue signals precision and tactical play — perfect for clutch compilations.'},
                    {type:'Ranked Climbs & Frags',desc:'T-Side Orange — dark bg + orange Impact text. Orange energy communicates aggression and fast play — great for highlight reels and ranked grind.'},
                    {type:'Guides & Pro Analysis',desc:'Pro Minimal — black bg + white Impact text. Clean, professional design for tier lists, crosshair guides, and settings videos.'}
                  ].map(t=>(
                    <div key={t.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{t.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">CS2 Thumbnail Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">State the exact clutch scenario:</strong> &quot;1 vs 5&quot; is better than &quot;INSANE CLUTCH&quot;. The Counter-Strike audience immediately understands the difficulty of each scenario — the more specific, the higher the CTR.</li>
                  <li><strong className="text-text-main">Use CT blue for defensive/tactical content:</strong> #4da6ff is CS2&apos;s Counter-Terrorist color — it signals the game to fans immediately and works well for guides, tactical analysis, and defensive highlight content.</li>
                  <li><strong className="text-text-main">Include rank or rating:</strong> &quot;GLOBAL ELITE RANKED&quot;, &quot;FACEIT LEVEL 10&quot;, &quot;PREMIER 20,000 RATING&quot; — rank names are powerful credibility signals for the CS2 audience.</li>
                  <li><strong className="text-text-main">Upload your CS2 scorecard screenshot:</strong> A real kill feed, scoreboard, or clutch moment screenshot makes the thumbnail feel earned and authentic.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Step-by-Step: Make a CS2 Thumbnail Free</h2>
                <div className="space-y-2">
                  {[
                    { step: '1. Choose your template', desc: 'Select CT Blue for clutch and tactical content, T-Side Orange for aggressive highlight reels and ranked grind videos, or Pro Minimal for guides, tier lists, and crosshair/settings content.' },
                    { step: '2. Upload your CS2 screenshot', desc: 'Click "Upload image" to add your kill feed, scoreboard, or clutch moment screenshot. The more specific the screenshot — showing a 1v5 clutch scoreboard or an ACE round kill feed — the more authentic the thumbnail feels.' },
                    { step: '3. Edit the main text', desc: 'State the exact scenario: "1 VS 5 CLUTCH", "ACE ROUND!", "FACEIT LEVEL 10". CS2 viewers understand exactly what each scenario means — specificity is what drives clicks in this niche.' },
                    { step: '4. Verify text is readable at thumbnail size', desc: 'Counter-Strike thumbnails often appear alongside other CS2 content. Zoom out to 120px wide to simulate the YouTube mobile grid. Your claim must be legible — if it is not, the viewer scrolls past.' },
                    { step: '5. Download', desc: 'Click "Download Thumbnail (1280×720)". Upload to YouTube Studio. For HLTV clips or Twitter posts, the same 1280×720 file works — no additional resizing required.' },
                  ].map(({ step, desc }) => (
                    <div key={step} className="flex gap-3">
                      <span className="font-semibold text-text-main text-xs shrink-0 pt-0.5">{step}</span>
                      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">CS2 Thumbnail Strategy by Content Type</h2>
                <p>Counter-Strike 2 content divides into distinct categories, each with different thumbnail conventions. Clutch compilation channels dominate with "1 vs X" format thumbnails — the fraction communicates difficulty immediately. Ranked progression channels use rank names as the primary hook: "I HIT FACEIT LEVEL 10" or "PREMIER 20,000 RATING" — these are powerful credibility signals for the CS2 audience who understands what each rank means.</p>
                <p>Guide and educational content performs differently — clean, minimal thumbnails with white text on black outperform cluttered designs for settings guides, crosshair tutorials, and aim training videos. The Pro Minimal template is optimized for this: black background, white Impact text, no distractions. This style signals that the content is informational rather than entertainment-focused, which accurately sets viewer expectations and reduces early drop-off.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your CS2 Thumbnail</h2>
                <p>YouTube thumbnails must be under 2MB. JPG at 92% quality is typically 150–350KB for 1280×720 images. If you need to reduce file size for other platforms, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to compress without visible quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size should a CS2 thumbnail be?',a:'1280×720 pixels (16:9). This tool exports at exactly this size as JPG.'},
                    {q:'Is this CS2 thumbnail maker free?',a:'Yes, completely free. No account, no watermark. Download unlimited thumbnails.'},
                    {q:'What colors work best for CS2 thumbnails?',a:'CT blue (#4da6ff) for tactical/clutch content, T-side orange (#ff8c00) for aggressive highlights, and white on black for clean pro-style content.'},
                    {q:'What text should I use on a CS2 thumbnail?',a:'"1 vs 5 CLUTCH", "ACE ROUND!", "GLOBAL ELITE RANKED" — specific scenarios and rank names drive the highest CTR in the CS2 niche.'},
                    {q:'Can I upload a CS2 screenshot as background?',a:'Yes. Click "Upload image" to add your CS2 gameplay screenshot. Everything runs locally.'},
                    {q:'What makes a good CS2 clutch thumbnail?',a:'Exact scenario ("1 vs 5", "1 vs 3 PISTOL"), CT-blue or orange color, Impact font. Counter-Strike viewers know what each clutch scenario means — be specific.'},
                    {q:'Does this work for CSGO thumbnails?',a:'Yes — the 1280×720 size works for both CS2 and CS:GO YouTube content. The templates work for any CS game mode.'},
                    {q:'What file format for CS2 thumbnails?',a:'JPG. YouTube accepts JPG up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Gaming Thumbnail Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {href:'/call-of-duty-thumbnail-maker',title:'COD Thumbnail Maker',desc:'Military Dark, Combat Orange, Camo Green for COD.'},
                    {href:'/valorant-thumbnail-maker',title:'Valorant Thumbnail Maker',desc:'Agent Impact, ACE Gold, Clutch Navy for Valorant.'},
                    {href:'/apex-legends-thumbnail-maker',title:'Apex Legends Thumbnail Maker',desc:'Champion Orange, Dark Red for Apex Legends creators.'},
                    {href:'/gaming-thumbnail-maker',title:'Gaming Thumbnail Maker',desc:'Universal gaming templates — neon, fire, cyberpunk.'},
                    {href:'/fortnite-thumbnail-maker',title:'Fortnite Thumbnail Maker',desc:'Storm Eye, Zero Point, Legendary Loot templates.'},
                    {href:'/pubg-thumbnail-maker',title:'PUBG Thumbnail Maker',desc:'Chicken Dinner, Military Tan, Night Drop templates.'},
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
