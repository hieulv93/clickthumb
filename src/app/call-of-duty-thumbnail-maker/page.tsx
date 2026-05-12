import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { COD_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Call of Duty Thumbnail Maker — Warzone & MW3, No Signup',
  description: 'Make COD thumbnails at 1280×720px free — Warzone, MW3, Military Dark, Combat Orange, Camo Green templates. Download instantly, no account or software needed.',
  alternates: { canonical: 'https://click-thumb.com/call-of-duty-thumbnail-maker/' },
  openGraph: { title: 'Free Call of Duty Thumbnail Maker — Warzone & MW3, No Signup', description: 'Make Call of Duty thumbnails at 1280×720px free. Military Dark, Combat Orange, Camo Green templates for Warzone & MW3 creators.', url: 'https://click-thumb.com/call-of-duty-thumbnail-maker/', siteName: 'ClickThumb', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
}

const platform = PLATFORMS.cod

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'Call of Duty Thumbnail Maker', url: 'https://click-thumb.com/call-of-duty-thumbnail-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online Call of Duty thumbnail maker. Create 1280×720px COD Warzone and MW3 YouTube thumbnails with military templates. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size should a Call of Duty thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Call of Duty YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is YouTube\'s recommended size and displays sharply on all devices. This tool exports at exactly 1280×720px as JPG.' } },
      { '@type': 'Question', name: 'Is this COD thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Call of Duty thumbnails for Warzone, MW3, or any COD title.' } },
      { '@type': 'Question', name: 'What colors work best for Call of Duty thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Military green (#00ff41) on near-black gives a night-vision, tactical feel. Bright orange (#ff6600) on dark backgrounds works for explosive, high-kill content. Camo earth tones (olive green, tan) suit loadout and tips videos.' } },
      { '@type': 'Question', name: 'What text should I put on a COD thumbnail?', acceptedAnswer: { '@type': 'Answer', text: '"NUKE GAME!", "30 KILL GAME", "BEST LOADOUT", "WARZONE WIN", "NEW META SETUP" — 3–5 words, specific stats or claims. Kill counts and loadout names perform well for Call of Duty audiences.' } },
      { '@type': 'Question', name: 'Can I upload a Warzone or MW3 screenshot as background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload image" to add your own gameplay screenshot. All processing runs locally in your browser — nothing is uploaded to any server.' } },
      { '@type': 'Question', name: 'What font works best for COD thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the standard for COD thumbnails — bold, condensed, and readable at small sizes. Always add a dark outline (2–4px) in a contrasting color to keep text readable over gameplay backgrounds.' } },
      { '@type': 'Question', name: 'What makes a good Warzone thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Warzone thumbnails that perform best show a specific achievement: kill count (25+, 30+), win streak, or a specific loadout. Include the kill count in large Impact text, use dark backgrounds to match Warzone\'s visual tone, and add neon green or orange for energy.' } },
      { '@type': 'Question', name: 'What file format for COD thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within the limit.' } },
    ] },
  ],
}

export default function CODThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Call of Duty Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={COD_TEMPLATES} downloadFilename="click-thumb-cod-thumbnail.jpg" exportLabel="Download Thumbnail (1280×720)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Why Call of Duty Thumbnails Win on YouTube</h2>
                <p>Call of Duty is one of the longest-running and most-searched gaming franchises on YouTube. Whether you create Warzone highlights, Modern Warfare 3 ranked content, or loadout guides, your thumbnail is the first and often the only factor that determines whether a viewer clicks. COD content is ultra-competitive — dozens of creators upload Warzone content every day, and the difference between 50 views and 50,000 views often comes down to thumbnail design.</p>
                <p>The most effective COD thumbnails share a specific visual formula: a dark or near-black background that mimics the tactical atmosphere of the game, bold Impact text with a specific achievement or claim (kill count, win streak, class name), and a high-contrast accent color — military green for stealth content, orange for explosive highlights, or white for clean loadout guides. The fewer words, the better — 3–5 words maximum, readable at thumbnail size.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Call of Duty Thumbnail Size — YouTube Specs</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-surface"><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Spec</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Value</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th></tr></thead>
                    <tbody>
                      {[['Recommended size','1280×720px','Best quality across all devices'],['Aspect ratio','16:9','Matches YouTube player'],['Max file size','2MB','JPG stays well under'],['Format','JPG','Best quality-to-size ratio'],['Safe zone','Keep text 80px from edges','Prevents cropping on mobile']].map(([s,v,n])=>(
                        <tr key={s} className="even:bg-surface/50"><td className="border border-border px-3 py-2 font-medium text-text-main">{s}</td><td className="border border-border px-3 py-2">{v}</td><td className="border border-border px-3 py-2">{n}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best COD Thumbnail Templates by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[{type:'Warzone Highlights',desc:'Military Dark — near-black bg, white Impact text with neon green outline. Matches Warzone\'s tactical aesthetic.'},
                    {type:'Kill Record / High Kill Game',desc:'Combat Orange — dark background + orange Impact text. Conveys explosive, aggressive energy.'},
                    {type:'Loadout / Tips Videos',desc:'Camo Green — earth-tone bg + yellow-green text. Professional look for guide and meta content.'}
                  ].map(t=>(
                    <div key={t.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{t.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">How to Make a COD Thumbnail That Gets Clicks</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Lead with a specific number:</strong> &quot;30 KILLS&quot; outperforms &quot;INSANE GAME&quot; because it sets a concrete expectation. COD viewers respond to specific kill counts, win streaks, and rank names.</li>
                  <li><strong className="text-text-main">Use dark backgrounds:</strong> COD games have a dark, tactical visual identity. Bright white backgrounds feel out of place — dark navy, near-black, or camo tones fit the game&apos;s aesthetic and make text pop.</li>
                  <li><strong className="text-text-main">Name the game mode or map:</strong> Warzone, Ranked, Ground War, Search &amp; Destroy — naming the mode helps viewers find content relevant to their own playstyle.</li>
                  <li><strong className="text-text-main">Upload your gameplay screenshot:</strong> A real in-game moment (kill feed, nuke screen, champion screen) makes the thumbnail feel authentic and earned, not stock-photo generic.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Step-by-Step: Make a COD Thumbnail Free</h2>
                <div className="space-y-2">
                  {[
                    { step: '1. Choose your template', desc: 'Military Dark suits Warzone highlights and tactical content. Combat Orange works for high-kill games and aggressive plays. Camo Green is best for loadout guides and meta analyses.' },
                    { step: '2. Upload your COD screenshot', desc: 'Click "Upload image" to add your gameplay screenshot — kill feed, nuke screen, final killcam, or end-of-match scoreboard. Real screenshots make thumbnails feel earned rather than staged.' },
                    { step: '3. Write your claim', desc: 'Be specific: "30 KILLS WARZONE" beats "INSANE GAME". COD viewers know exactly what 30 kills means in a Warzone lobby — the specificity of the number is what earns the click. Include the game mode if it is relevant: "RANKED", "WARZONE", "GROUND WAR".' },
                    { step: '4. Test at mobile size', desc: 'COD content is a saturated niche — dozens of creators upload daily. Zoom to 120px wide to simulate the YouTube mobile search grid. Your thumbnail must stand out from the competition at this size.' },
                    { step: '5. Download', desc: 'Click "Download Thumbnail (1280×720)". The exported JPG works directly for YouTube Studio, Discord previews, and social sharing. No resizing needed for any of these platforms.' },
                  ].map(({ step, desc }) => (
                    <div key={step} className="flex gap-3">
                      <span className="font-semibold text-text-main text-xs shrink-0 pt-0.5">{step}</span>
                      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">COD Warzone vs Multiplayer — Thumbnail Strategy</h2>
                <p>Warzone and multiplayer have different thumbnail conventions because the audience expectation differs. Warzone thumbnails tend to be more cinematic — large area screenshots, squad moments, final-circle tension. Kill counts above 20 are the standard hook because Warzone lobbies are large (150 players). Multiplayer thumbnails use different benchmarks: 100 kills in a single match, a nuke, or an S/D triple. The game mode context changes what counts as impressive.</p>
                <p>Loadout guide thumbnails perform consistently in Call of Duty regardless of which game is current — players always want the best setup. For loadout content, the thumbnail hook is the specific weapon: "BEST KILO 141 CLASS", "META SMG WARZONE". Weapon name + "BEST LOADOUT" or "META" drives search traffic from players actively looking for class advice. Use clean, minimal designs for guide content — cluttered thumbnails work for highlights but not for informational videos.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your COD Thumbnail Before Uploading</h2>
                <p>YouTube thumbnails have a 2MB limit. This tool exports JPG at 92% quality, typically 150–350KB — well within limits. If you need to reduce file size for other platforms, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to compress without quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size should a Call of Duty thumbnail be?',a:'1280×720 pixels (16:9). This tool exports at exactly this size.'},
                    {q:'Is this COD thumbnail maker free?',a:'Yes, completely free. No account, no watermark. Download unlimited thumbnails.'},
                    {q:'What colors work best for Warzone thumbnails?',a:'Military green (#00ff41) on near-black for tactical content. Orange (#ff6600) on dark for aggressive highlights. Both use high contrast Impact text.'},
                    {q:'What text should I use on a COD thumbnail?',a:'"NUKE GAME!", "30 KILLS", "BEST WARZONE LOADOUT" — 3–5 words with a specific number or claim. Kill counts and rank names drive higher CTR.'},
                    {q:'Can I use a Warzone screenshot as background?',a:'Yes. Click "Upload image" to add your gameplay screenshot. Everything runs locally — nothing is uploaded to any server.'},
                    {q:'What makes a good COD thumbnail?',a:'Dark background matching COD\'s aesthetic, bold Impact text with a specific claim (kill count, win), and a single high-contrast accent color. Keep it to 3–5 words.'},
                    {q:'Does this work for MW3 and Warzone thumbnails?',a:'Yes — the 1280×720 size is correct for all COD titles on YouTube. The templates work for any game mode: Warzone, MW3 multiplayer, DMZ, or Zombies.'},
                    {q:'What file format for COD thumbnails?',a:'JPG. YouTube accepts JPG up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Gaming Thumbnail Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {href:'/gaming-thumbnail-maker',title:'Gaming Thumbnail Maker',desc:'Universal gaming templates — neon, fire, cyberpunk.'},
                    {href:'/cs2-thumbnail-maker',title:'CS2 Thumbnail Maker',desc:'CT Blue, T-Side Orange, and Pro Minimal templates.'},
                    {href:'/pubg-thumbnail-maker',title:'PUBG Thumbnail Maker',desc:'Chicken Dinner, Military Tan, and Night Drop templates.'},
                    {href:'/valorant-thumbnail-maker',title:'Valorant Thumbnail Maker',desc:'Agent Impact, ACE Gold, Clutch Navy for Valorant creators.'},
                    {href:'/apex-legends-thumbnail-maker',title:'Apex Legends Thumbnail Maker',desc:'Champion Orange and Dark Red templates for Apex creators.'},
                    {href:'/fortnite-thumbnail-maker',title:'Fortnite Thumbnail Maker',desc:'Storm Eye, Zero Point templates for Fortnite content.'},
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
