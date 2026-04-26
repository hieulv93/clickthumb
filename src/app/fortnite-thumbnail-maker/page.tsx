import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { FORTNITE_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.fortnite

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Fortnite Thumbnail Maker',
      url: 'https://click-thumb.com/fortnite-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online Fortnite thumbnail maker. Create 1280×720px YouTube thumbnails with Storm Eye, Zero Point, and Legendary Loot templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size should a Fortnite thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Fortnite YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is the standard YouTube thumbnail size recommended for all gaming content. The minimum accepted is 640×360px, but 1280×720 gives the sharpest result on all screens.' } },
        { '@type': 'Question', name: 'Is this Fortnite thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Fortnite thumbnails.' } },
        { '@type': 'Question', name: 'What makes a good Fortnite thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'The best Fortnite thumbnails show a Victory Royale screen, a high-kill game, or a powerful loadout — combined with bold Impact text (3–5 words), high-contrast colors (yellow or cyan on dark purple/blue), and your face with a strong reaction if possible.' } },
        { '@type': 'Question', name: 'What colors work best for Fortnite thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Fortnite\'s visual identity is purple, blue, and gold. Use yellow (#f5e642) or cyan (#00d4ff) text on dark purple/navy backgrounds. Gold (#fbbf24) works perfectly for legendary loot and weapon showcase thumbnails. Avoid light backgrounds — they look washed out in the YouTube feed.' } },
        { '@type': 'Question', name: 'What font is best for Fortnite thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the standard for Fortnite thumbnails — bold, condensed, and readable at any thumbnail size. Add a 3–4px outline in a contrasting color (purple outline on yellow text, dark outline on cyan) to ensure readability over any background.' } },
        { '@type': 'Question', name: 'How do I use a Fortnite screenshot as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Click "Upload background image" to use your Fortnite gameplay screenshot. The text templates are positioned to overlay clearly over most Fortnite scenes. For Victory Royale thumbnails, crop so the victory text is visible in the background. All processing runs locally — nothing is uploaded.' } },
        { '@type': 'Question', name: 'What text should I put on a Fortnite thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Keep it to 3–5 punchy words: "VICTORY ROYALE", "20 KILL GAME", "BEST LOADOUT", "RANKED TO UNREAL", "NO BUILDS WIN". Numbers and achievement milestones drive the highest click-through rates. Avoid full sentences — the video title handles the explanation.' } },
        { '@type': 'Question', name: 'What file format should Fortnite thumbnails use?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–380KB, well within YouTube\'s limit.' } },
      ],
    },
  ],
}

export default function FortniteThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Fortnite Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={FORTNITE_TEMPLATES}
            downloadFilename="click-thumb-fortnite-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Makes a Fortnite Thumbnail Get Clicked?</h2>
                <p>Fortnite is one of the most competitive niches on YouTube. Thousands of videos are uploaded every day, all fighting for the same eyeballs. Your thumbnail is the first thing potential viewers see — and they make their decision in under 0.3 seconds. A great Fortnite thumbnail communicates excitement, achievement, or useful information instantly, without requiring any reading.</p>
                <p>The most successful Fortnite creators have refined their thumbnails into a science: dark purple or blue backgrounds (matching Fortnite&apos;s storm aesthetic), bold yellow or cyan Impact text, Victory Royale screens, high-kill indicators, and expressive faces. Whether you run a highlights channel, tips and tricks series, or ranked climb journey, your thumbnail formula should be consistent and immediately recognizable.</p>
                <p>Study top creators like SypherPK, Ninja, and Clix — their thumbnails follow strict visual patterns: limited color palette, short punchy text, and one dominant focal element (a face, a Victory Royale badge, or a weapon). Consistency builds audience recognition over time, which increases click-through rate even for new uploads.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Fortnite YouTube Thumbnail Size — Full Specs</h2>
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
                        ['Recommended size', '1280×720px', 'Sharpest on all screens'],
                        ['Minimum size', '640×360px', 'Avoid — blurry on large screens'],
                        ['Aspect ratio', '16:9', 'Matches YouTube player and Fortnite UI'],
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
                <p>This tool exports at exactly 1280×720px JPG — no resizing or quality loss after export.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Template Guide: Choosing the Right Fortnite Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'Storm Eye',
                      bg: 'bg-purple-950',
                      desc: 'Dark purple background, yellow + purple text. The classic Fortnite storm look. Best for Victory Royale, solo wins, and clutch moments.',
                    },
                    {
                      name: 'Zero Point',
                      bg: 'bg-blue-950',
                      desc: 'Deep navy background, electric cyan text. Futuristic and clean. Great for high-kill games, ranked content, and tips videos.',
                    },
                    {
                      name: 'Legendary Loot',
                      bg: 'bg-amber-950',
                      desc: 'Dark brown background, gold text. Matches the legendary item rarity color. Perfect for loadout showcases, weapon tier lists, and item reviews.',
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
                <h2 className="text-base font-bold text-text-main">Fortnite Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Lead with the achievement:</strong> Victory Royale, kill count, rank reached — the best Fortnite thumbnails make the accomplishment the hero of the image. Viewers click because they want to see how you did it.</li>
                  <li><strong className="text-text-main">Use Impact with a purple or dark outline:</strong> Yellow or cyan Impact text on dark backgrounds is the Fortnite meta. The outline prevents the text from blending into lighter areas of a gameplay screenshot.</li>
                  <li><strong className="text-text-main">Include chapter/season context:</strong> Fortnite changes every season. Adding &quot;Chapter 5&quot; or &quot;Season X&quot; in the subtitle tells viewers the content is current — older content gets significantly fewer clicks in fast-moving games.</li>
                  <li><strong className="text-text-main">Keep the focus center-weighted:</strong> YouTube crops thumbnails on mobile and in sidebar. Keep your face, Victory Royale badge, or key text in the center 60% of the image.</li>
                  <li><strong className="text-text-main">5 words maximum on the main title:</strong> &quot;VICTORY ROYALE&quot;, &quot;20 KILL GAME&quot;, &quot;RANKED TO UNREAL&quot; — short and punchy. Anything longer becomes unreadable at sidebar size (~120px wide).</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Fortnite Thumbnail Ideas by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: 'Victory Royale & Wins', ideas: '"SOLO VICTORY ROYALE", "WIN WITH 0 HP LEFT", "CLUTCH WIN" — the V-R screen is the strongest thumbnail asset you have.' },
                    { type: 'High Kill Games', ideas: '"20 KILL GAME", "KILL RECORD BROKEN", "40 BOMB SOLO" — numbers make claims credible and drive click curiosity.' },
                    { type: 'Ranked & Competitive', ideas: '"RANKED TO UNREAL", "DIAMOND GRIND", "HOW I HIT TOP 500" — rank progression content performs consistently across seasons.' },
                    { type: 'Loadouts & Weapons', ideas: '"BEST LOADOUT CHAPTER 5", "BROKEN GUN COMBO", "OVERPOWERED ITEM" — use the Legendary Loot template for gold/orange weapon accent colors.' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{item.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Fortnite Screenshot as Background</h2>
                <p>The most effective Fortnite thumbnails use an in-game screenshot as the background — a Victory Royale screen, a close-range shotgun fight, or a dramatic storm collapse. Click <strong className="text-text-main">Upload background image</strong> to add your screenshot, then choose a text template that contrasts with the brightest part of your image.</p>
                <p>For the best result, capture your screenshot at 1920×1080 (or higher) and pick a moment with a naturally dark area where the text can sit. The storm background, shadow areas, and dark sky in Fortnite work particularly well. All processing runs locally in your browser — your screenshot is never uploaded to any server.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–380KB — well within the limit. If you need a smaller file, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce size without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size should a Fortnite thumbnail be?', a: 'Fortnite YouTube thumbnails should be 1280×720 pixels (16:9). This tool exports at exactly this size — no resizing needed before uploading to YouTube.' },
                    { q: 'Is this Fortnite thumbnail maker free?', a: 'Yes, completely free. No account, no watermark. Download unlimited Fortnite thumbnails.' },
                    { q: 'What makes a good Fortnite thumbnail?', a: 'Victory Royale screens, kill count milestones, or legendary loadouts — combined with bold Impact text (3–5 words) on a dark purple or navy background. Cyan or yellow text gives the highest contrast.' },
                    { q: 'What colors work best for Fortnite thumbnails?', a: 'Yellow (#f5e642) or cyan (#00d4ff) text on dark purple or navy backgrounds. Gold (#fbbf24) for legendary loot content. Always dark backgrounds — light backgrounds look weak in the YouTube feed.' },
                    { q: 'What font is best for Fortnite thumbnails?', a: 'Impact is the standard — bold, condensed, readable at any size. Add a 3–4px outline (purple on yellow, dark on cyan) to keep text readable over gameplay screenshots.' },
                    { q: 'Can I use a Fortnite screenshot as the background?', a: 'Yes. Click "Upload background image" to use your gameplay screenshot. All processing is done locally in your browser — nothing is sent to any server.' },
                    { q: 'What text should I put on a Fortnite thumbnail?', a: '"VICTORY ROYALE", "20 KILL GAME", "RANKED TO UNREAL" — 3–5 punchy words. Include chapter/season for freshness. Numbers and achievements drive the highest click-through rates.' },
                    { q: 'What file format for Fortnite thumbnails?', a: 'JPG is recommended. This tool exports 1280×720 JPG at 92% quality (typically 150–380KB), well within YouTube\'s 2MB limit.' },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Thumbnail Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/gaming-thumbnail-maker', title: 'Gaming Thumbnail Maker', desc: 'Neon, fire, cyberpunk templates for all gaming niches.' },
                    { href: '/minecraft-thumbnail-maker', title: 'Minecraft Thumbnail Maker', desc: 'Grass Block, Diamond Mine, Nether Portal templates.' },
                    { href: '/youtube-thumbnail-maker', title: 'YouTube Thumbnail Maker', desc: '1280×720px thumbnails for any YouTube content type.' },
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
