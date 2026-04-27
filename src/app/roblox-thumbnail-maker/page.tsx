import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { ROBLOX_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.roblox

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Roblox Thumbnail Maker',
      url: 'https://click-thumb.com/roblox-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online Roblox thumbnail maker. Create 1280×720px YouTube thumbnails with Roblox Red, Neon Obby, and Rare Item templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size should a Roblox thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Roblox YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is the YouTube-recommended thumbnail size. The minimum accepted is 640×360px, but 1280×720 gives the sharpest result on all screens including TV.' } },
        { '@type': 'Question', name: 'Is this Roblox thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Roblox thumbnails for your YouTube channel.' } },
        { '@type': 'Question', name: 'What makes a good Roblox thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Great Roblox thumbnails show the most exciting moment in your video — a completed obby, a rare pet or item, a funny fail, or a game record. Use bold Impact text (3–5 words), bright colors (red, cyan, gold) on a dark background, and your Roblox character or face if possible.' } },
        { '@type': 'Question', name: 'What colors work best for Roblox thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Roblox brand red (#ff3333) on dark for general content, bright green/cyan (#00ff99) on navy for obby and challenge videos, gold (#ffd700) on dark for rare item and trade content. Dark backgrounds always outperform light ones in the YouTube feed.' } },
        { '@type': 'Question', name: 'What font is best for Roblox thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the top choice — bold, condensed, and readable even when the thumbnail is displayed at 120px wide in the YouTube sidebar. Always add a 3px contrasting outline to keep text visible over colorful Roblox game screenshots.' } },
        { '@type': 'Question', name: 'Can I use a Roblox screenshot as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload background image" to use your Roblox game screenshot. The text templates are positioned to overlay clearly over most game scenes. All processing runs locally in your browser — nothing is uploaded to any server.' } },
        { '@type': 'Question', name: 'What text should I put on a Roblox thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Keep it to 3–5 punchy words: "I BEAT THE HARDEST OBBY", "GOT A RARE PET", "FREE ROBUX GLITCH?", "RICHEST PLAYER IN ADOPT ME". Questions and superlatives drive curiosity clicks. Numbers and achievements make claims feel real.' } },
        { '@type': 'Question', name: 'What file format should Roblox thumbnails use?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within YouTube\'s 2MB limit.' } },
      ],
    },
  ],
}

export default function RobloxThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Roblox Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={ROBLOX_TEMPLATES}
            downloadFilename="click-thumb-roblox-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Makes a Roblox Thumbnail Get Clicked?</h2>
                <p>Roblox has one of the most active YouTube communities of any game — with millions of creators uploading obby completions, rare item reveals, game reviews, and funny moments every day. Standing out in a sea of colorful, high-energy Roblox thumbnails requires a clear strategy: show the most exciting moment, use the most readable text, and pick colors that pop in a busy YouTube feed.</p>
                <p>The best Roblox creators have mastered the art of the visual hook. A thumbnail for an obby video should make it look nearly impossible to beat. A rare pet reveal should make the item look legendary. A funny fail should capture the exact moment of chaos. Your thumbnail is a promise to the viewer — and the more specific and exciting that promise looks, the higher your click-through rate will be.</p>
                <p>Study channels like KreekCraft, Flamingo, and Denis — their thumbnails use consistent branding (recurring character poses, color palettes, font choices) so that regular viewers recognize their style instantly. Consistency across your channel builds audience trust and drives more return views over time.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Roblox YouTube Thumbnail Size — Full Specs</h2>
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
                <p>This tool exports at exactly 1280×720px JPG — no resizing or quality loss after export.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Template Guide: Choosing the Right Roblox Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'Roblox Red',
                      bg: 'bg-red-950',
                      desc: 'Dark red background, bright red + white text. The classic Roblox brand look. Works for any general Roblox content, game reviews, and news videos.',
                    },
                    {
                      name: 'Neon Obby',
                      bg: 'bg-blue-950',
                      desc: 'Dark navy background, neon green text. High energy and futuristic. Perfect for obby completions, challenge runs, and impossible level videos.',
                    },
                    {
                      name: 'Rare Item',
                      bg: 'bg-yellow-950',
                      desc: 'Very dark background, gold text. Premium and exclusive feel. Ideal for rare pet reveals, limited item unboxings, trading videos, and rich player showcases.',
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
                <h2 className="text-base font-bold text-text-main">Roblox Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Lead with the rarest or funniest moment:</strong> Roblox audiences are driven by novelty. Show the rarest pet, the hardest obby cleared, the most chaotic fail, or the biggest trade. The thumbnail should make the viewer feel they&apos;re missing out if they don&apos;t click.</li>
                  <li><strong className="text-text-main">Use Impact font with a contrasting outline:</strong> Roblox game screenshots are colorful and busy. A 3px outline in white or a contrasting color keeps your title readable over any background, even at 120px thumbnail size.</li>
                  <li><strong className="text-text-main">Include your Roblox character or avatar:</strong> Thumbnails with recognizable characters perform better for returning viewers. A consistent character pose and expression becomes your channel&apos;s visual brand.</li>
                  <li><strong className="text-text-main">Game-specific color coding works:</strong> Adopt Me uses pastels, Blox Fruits uses dark/dramatic, Pet Simulator uses bright and bubbly. Match your thumbnail aesthetic to the game&apos;s visual identity to attract the right audience.</li>
                  <li><strong className="text-text-main">5 words maximum:</strong> &quot;I GOT THE RAREST PET&quot;, &quot;BEAT HARDEST OBBY EVER&quot;, &quot;RICHEST PLAYER IN ADOPT ME&quot;. Short, punchy, and specific. The video title handles the full explanation.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Roblox Thumbnail Ideas by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: 'Obby & Challenges', ideas: '"BEAT THE IMPOSSIBLE OBBY", "100 LEVELS IN 10 MINUTES", "NO ONE CAN FINISH THIS" — focus on the difficulty and your reaction.' },
                    { type: 'Adopt Me & Pet Sim', ideas: '"GOT A NEON LEGENDARY PET", "BEST TRADE EVER", "FREE PETS GIVEAWAY" — show the pet or item prominently in the thumbnail.' },
                    { type: 'Blox Fruits & Combat', ideas: '"STRONGEST FRUIT COMBO", "MAXED EVERYTHING IN 1 DAY", "BEATING THE RAID BOSS" — action and power fantasy drive clicks in combat games.' },
                    { type: 'Funny & Troll', ideas: '"I TROLLED THE WHOLE SERVER", "THIS BROKE THE GAME", "FUNNIEST GLITCH EVER" — use a screenshot of the exact moment of chaos.' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{item.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Roblox Screenshot as Background</h2>
                <p>The best Roblox thumbnails use an in-game screenshot as the background — the moment you got the rare pet, the view from the top of the hardest obby, or the exact frame of the funniest glitch. Click <strong className="text-text-main">Upload background image</strong> to add your screenshot, then choose a text template that contrasts with the brightest area of your image.</p>
                <p>For obby content, take your screenshot at the most dramatic point — a long fall, a near-miss, or the victory screen. For pet and item reveals, screenshot the moment the item appears. A high-resolution screenshot (press F12 or use screen capture) gives the sharpest result as a thumbnail background. All processing runs locally — your screenshot is never uploaded to any server.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–350KB — well within the limit. If you need a smaller file, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce size without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size should a Roblox thumbnail be?', a: 'Roblox YouTube thumbnails should be 1280×720 pixels (16:9). This tool exports at exactly this size — no resizing needed before uploading to YouTube.' },
                    { q: 'Is this Roblox thumbnail maker free?', a: 'Yes, completely free. No account, no watermark. Download unlimited Roblox thumbnails.' },
                    { q: 'What makes a good Roblox thumbnail?', a: 'Show the rarest item, hardest obby cleared, or funniest moment — bold Impact text (3–5 words), bright colors on a dark background, and your Roblox character or face if possible.' },
                    { q: 'What colors work best for Roblox thumbnails?', a: 'Roblox red (#ff3333) for general content, neon green (#00ff99) for obby and challenges, gold (#ffd700) for rare items and trades. Always use dark backgrounds — light backgrounds lose impact in the feed.' },
                    { q: 'What font is best for Roblox thumbnails?', a: 'Impact is the standard — bold, condensed, readable at any thumbnail size. Add a 3px contrasting outline to keep text visible over colorful Roblox screenshots.' },
                    { q: 'Can I use a Roblox screenshot as the background?', a: 'Yes. Click "Upload background image" to add your gameplay screenshot. All processing is done locally — nothing is uploaded to any server.' },
                    { q: 'What text should I put on a Roblox thumbnail?', a: '"I GOT A RARE PET", "BEAT THE HARDEST OBBY", "RICHEST PLAYER EVER" — 3–5 words, specific and punchy. Questions and superlatives drive curiosity clicks.' },
                    { q: 'What file format for Roblox thumbnails?', a: 'JPG is recommended. This tool exports 1280×720 JPG at 92% quality (typically 150–350KB), well within YouTube\'s 2MB limit.' },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Thumbnail Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/minecraft-thumbnail-maker', title: 'Minecraft Thumbnail Maker', desc: 'Grass Block, Diamond Mine, Nether Portal templates.' },
                    { href: '/fortnite-thumbnail-maker', title: 'Fortnite Thumbnail Maker', desc: 'Storm Eye, Zero Point, Legendary Loot templates.' },
                    { href: '/gaming-thumbnail-maker', title: 'Gaming Thumbnail Maker', desc: 'Neon, fire, cyberpunk — for all gaming niches.' },
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
