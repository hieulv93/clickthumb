import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { APEX_LEGENDS_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.apex_legends

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Apex Legends Thumbnail Maker',
      url: 'https://click-thumb.com/apex-legends-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online Apex Legends thumbnail maker. Create 1280×720px YouTube thumbnails with Champion Orange, Legend Gold, and Dark Red templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size should an Apex Legends thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Apex Legends YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is YouTube\'s recommended thumbnail size and gives the sharpest result on all screens including TV and 4K monitors. The minimum accepted size is 640×360px, but 1280×720 is the standard for competitive gaming content.' } },
        { '@type': 'Question', name: 'Is this Apex Legends thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Apex Legends thumbnails for your YouTube channel.' } },
        { '@type': 'Question', name: 'What makes a good Apex Legends thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Great Apex Legends thumbnails capture the most dramatic moment — a champion banner, a 20-bomb game, a squad wipe, or a ranked climb. Use bold Impact text with 3–5 words, Apex\'s signature orange/dark color palette, and a specific claim (kills count, rank achieved) to drive clicks from competitive players.' } },
        { '@type': 'Question', name: 'What colors work best for Apex Legends thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Apex orange (#ff8c00) on very dark backgrounds is the game\'s most iconic look — reminiscent of the champion banner. Gold (#ffd700) feels premium and suits apex predator and ranked content. Red (#ff3333) on near-black works for highlight reels and high-kill games. Always prioritize dark backgrounds for maximum text contrast.' } },
        { '@type': 'Question', name: 'What font is best for Apex Legends thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the top choice for Apex Legends thumbnails — bold, condensed, and readable even at the 120px sidebar size in YouTube recommendations. Add a 3–4px dark outline to keep text visible over the detailed lighting effects and character art in Apex gameplay screenshots.' } },
        { '@type': 'Question', name: 'Can I use an Apex Legends screenshot as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload background image" to add your Apex gameplay screenshot — the champion banner, kill feed, final ring moment, or legend selection screen. All image processing runs locally in your browser — nothing is uploaded to any server.' } },
        { '@type': 'Question', name: 'What text should I put on an Apex Legends thumbnail?', acceptedAnswer: { '@type': 'Answer', text: '"CHAMPION!", "20 BOMB GAME!", "APEX PREDATOR RANKED", "SQUAD WIPE CLUTCH", "I HIT MASTER IN ONE DAY" — 3–5 words, specific achievements and numbers. Kill counts, rank names, and legend names all boost CTR for their target audience.' } },
        { '@type': 'Question', name: 'What file format for Apex Legends thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within YouTube\'s 2MB limit.' } },
      ],
    },
  ],
}

export default function ApexLegendsThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Apex Legends Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={APEX_LEGENDS_TEMPLATES}
            downloadFilename="click-thumb-apex-legends-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Why Apex Legends Thumbnails Decide Your Channel Growth</h2>
                <p>Apex Legends is one of the most competitive ecosystems on YouTube gaming. Hundreds of creators are uploading champion runs, 20-bomb highlights, ranked climbs, and legend tier lists every single day. In a feed this crowded, the thumbnail is not just decoration — it is the most important ranking factor for your video&apos;s click-through rate, and CTR is one of YouTube&apos;s strongest signals for recommending content to new audiences.</p>
                <p>The creators who break through in Apex — streamers who built audiences from scratch, coaches who monetized their gameplay knowledge, content creators who hit 100K subscribers on their ranked journey — all share one thumbnail habit: they design for the specific viewer who already loves Apex, not for a general audience. An Apex predator thumbnail brings in ranked grinders. A 20-bomb thumbnail attracts players chasing high kill games. A legend guide thumbnail hooks that legend&apos;s dedicated mains. The more specific your thumbnail claim, the higher your CTR from the audience that matters most.</p>
                <p>Apex Legends&apos; visual identity is dark, intense, and cinematic — heavy contrast between glowing abilities and dark environments. The best thumbnails borrow this aesthetic: near-black backgrounds, glowing orange or gold text, specific numbers and achievements as the text hook. Combine your gameplay screenshot with one of these templates and you have a thumbnail that looks native to the Apex YouTube ecosystem.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Apex Legends YouTube Thumbnail Size — Full Specs</h2>
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
                        ['Recommended size', '1280×720px', 'Best quality on all devices'],
                        ['Minimum size', '640×360px', 'Avoid — blurry on large screens'],
                        ['Aspect ratio', '16:9', 'Matches YouTube player'],
                        ['Max file size', '2MB', 'JPG recommended'],
                        ['Formats accepted', 'JPG, PNG, GIF, BMP', 'JPG gives best size/quality ratio'],
                        ['Sidebar display size', '~120px wide', 'Text must be readable at this width'],
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
                <p>This tool exports at exactly 1280×720px JPG — the size YouTube uses for thumbnail previews across all platforms and device types.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Template Guide: Choosing the Right Apex Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'Champion Orange',
                      bg: 'bg-orange-950',
                      desc: 'Near-black background, Apex signature orange text with dark stroke. The game\'s most iconic color combination — champion banner energy. Best for squad wipe highlights, champion runs, and general Apex content.',
                    },
                    {
                      name: 'Legend Gold',
                      bg: 'bg-yellow-950',
                      desc: 'Near-black background, gold text. Premium ranked feel — reminiscent of apex predator badge gold. Best for ranked climb videos, apex predator content, season highlights, and high kill game milestones.',
                    },
                    {
                      name: 'Dark Red',
                      bg: 'bg-red-950',
                      desc: 'Very dark background, intense red text. Aggressive and high-stakes energy. Best for 20-bomb games, solo carry highlights, legend-specific montages, and competitive grind content.',
                    },
                  ].map((t) => (
                    <div key={t.name} className="rounded-xl border border-border p-3 space-y-1.5">
                      <div className={`w-full h-8 rounded-lg ${t.bg} mb-2`} />
                      <p className="font-semibold text-text-main text-xs">{t.name}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Apex Legends Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Lead with the achievement, not the journey:</strong> Apex viewers click for results. &quot;20 BOMB GAME&quot; outperforms &quot;I TRIED TO GET 20 KILLS&quot;. &quot;APEX PREDATOR&quot; outperforms &quot;RANKED GRIND SESSION&quot;. Thumbnails that promise a specific, impressive outcome get more clicks from the audience most likely to watch the whole video.</li>
                  <li><strong className="text-text-main">Use Apex&apos;s visual language:</strong> Dark environments, glowing ability effects, orange champion banners — these are what Apex players have seen thousands of times in-game. Thumbnails that use the same color palette (dark backgrounds, orange/gold glows) feel native to the game. Players are more likely to click content that immediately reads as &quot;this is about my game.&quot;</li>
                  <li><strong className="text-text-main">Legend-specific content needs the legend name:</strong> &quot;BEST WRAITH PLAYS&quot; brings in Wraith mains. &quot;OCTANE MOVEMENT GUIDE&quot; captures players trying to master Octane. If your video is legend-specific, put the legend name in the text and ideally use an ability screenshot as the background — it&apos;s the fastest visual signal to the right audience.</li>
                  <li><strong className="text-text-main">Numbers are your strongest hook:</strong> &quot;20 KILLS&quot;, &quot;4000 DAMAGE&quot;, &quot;PREDATOR IN 7 DAYS&quot; — kill counts, damage records, and rank achievements all feel like verifiable claims. Viewers click to verify the number is real, and if your video delivers, they subscribe for more.</li>
                  <li><strong className="text-text-main">Test readability at sidebar size:</strong> YouTube shows your thumbnail at approximately 120px wide in recommendation feeds. At that size, long sentences become blurs. Three to five words in Impact with a contrasting outline is the only formula that works consistently at all display sizes — from mobile to 4K TV.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Apex Legends Thumbnail Ideas by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: 'Champion & Squad Wipes', ideas: '"CHAMPION!", "SQUAD WIPED WHOLE LOBBY", "3-MAN SQUAD vs 1", "WE DROPPED HOT AND WON" — use the champion banner screenshot or the kill feed at maximum chaos as background.' },
                    { type: 'Ranked & Predator', ideas: '"APEX PREDATOR!", "HITTING MASTER TODAY", "IRON TO DIAMOND IN ONE SEASON", "RANKED GRIND PAYS OFF" — rank badge screenshots make great backgrounds for rank achievement videos.' },
                    { type: 'High Kill Games', ideas: '"20 BOMB GAME!", "4000 DAMAGE", "30 KILLS IN ONE GAME", "MY HIGHEST KILL GAME EVER" — the kill feed or end-of-game scoreboard screenshot is your best background for these videos.' },
                    { type: 'Legend Guides & Tier Lists', ideas: '"BEST WRAITH TIPS 2024", "OCTANE MOVEMENT GUIDE", "S-TIER LEGENDS ONLY", "HOW TO MASTER BLOODHOUND" — legend selection screen or ability showcase screenshot for maximum recognition.' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{item.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Apex Screenshot as Background</h2>
                <p>The most effective Apex Legends thumbnails use an actual gameplay screenshot — the champion banner, the kill feed at peak action, the ranked lobby screen, or a legend using their ultimate ability. Click <strong className="text-text-main">Upload background image</strong> to add your screenshot, then drag to reposition until the most visually striking part of your screenshot fills the frame behind the text.</p>
                <p>For champion content, screenshot the champion banner screen before it disappears. For ranked content, capture your rank badge or the end-of-game screen. For high kill games, pause at the kill feed when it&apos;s fullest — that&apos;s your best thumbnail frame. All image processing runs locally in your browser — nothing is uploaded to any server.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–350KB — well within the limit. If your screenshot-based thumbnail is larger, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce file size without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size should an Apex Legends thumbnail be?', a: 'Apex Legends YouTube thumbnails should be 1280×720 pixels (16:9). This tool exports at exactly this size — no resizing needed before uploading to YouTube.' },
                    { q: 'Is this Apex Legends thumbnail maker free?', a: 'Yes, completely free. No account, no watermark. Download unlimited Apex Legends thumbnails.' },
                    { q: 'What makes a good Apex Legends thumbnail?', a: 'Show the peak achievement — champion banner, 20-bomb kill feed, apex predator rank — with bold Impact text (3–5 words) in Apex\'s dark orange or gold color palette.' },
                    { q: 'What colors work best for Apex Legends thumbnails?', a: 'Apex orange (#ff8c00) on dark for general and champion content, gold (#ffd700) on dark for ranked and predator content, red (#ff3333) for kill highlights. Always use dark backgrounds.' },
                    { q: 'What font is best for Apex Legends thumbnails?', a: 'Impact is the standard — bold, condensed, readable at any thumbnail size. Add a 3–4px dark outline to keep text visible over Apex\'s detailed ability effects and lighting.' },
                    { q: 'Can I use an Apex screenshot as the background?', a: 'Yes. Click "Upload background image" to add your gameplay screenshot. All processing is done locally — nothing is uploaded to any server.' },
                    { q: 'What text should I put on an Apex Legends thumbnail?', a: '"CHAMPION!", "20 BOMB GAME!", "APEX PREDATOR", "SQUAD WIPE CLUTCH" — 3–5 words, specific kills/ranks/achievements. Numbers and rank names drive the highest CTR.' },
                    { q: 'What file format for Apex Legends thumbnails?', a: 'JPG is recommended. This tool exports 1280×720 JPG at 92% quality (typically 150–350KB), well within YouTube\'s 2MB limit.' },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Gaming Thumbnail Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/call-of-duty-thumbnail-maker', title: 'COD Thumbnail Maker', desc: 'Military Dark, Combat Orange, Camo Green for COD.' },
                    { href: '/cs2-thumbnail-maker', title: 'CS2 Thumbnail Maker', desc: 'CT Blue, T-Side Orange, Pro Minimal for CS2.' },
                    { href: '/pubg-thumbnail-maker', title: 'PUBG Thumbnail Maker', desc: 'Chicken Dinner, Military Tan, Night Drop for PUBG.' },
                    { href: '/gaming-thumbnail-maker', title: 'Gaming Thumbnail Maker', desc: 'Neon, fire, cyberpunk — for all gaming niches.' },
                    { href: '/valorant-thumbnail-maker', title: 'Valorant Thumbnail Maker', desc: 'Agent Impact, ACE Gold, Clutch Navy for Valorant.' },
                    { href: '/fortnite-thumbnail-maker', title: 'Fortnite Thumbnail Maker', desc: 'Storm Eye, Zero Point, Legendary Loot templates.' },
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
