import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { BLOX_FRUITS_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.blox_fruits

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://click-thumb.com' },
        { '@type': 'ListItem', position: 2, name: 'Blox Fruits Thumbnail Maker', item: 'https://click-thumb.com/blox-fruit-thumbnail-maker/' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Blox Fruits Thumbnail Maker',
      url: 'https://click-thumb.com/blox-fruit-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online Blox Fruits thumbnail maker. Create 1280×720px YouTube thumbnails with Legendary Fruit, Raid Boss, Mythical Power, and Sea King templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size should a Blox Fruits thumbnail be?',
          acceptedAnswer: { '@type': 'Answer', text: 'Blox Fruits YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is the YouTube-recommended thumbnail size. This tool exports at exactly 1280×720px — no resizing needed before uploading.' },
        },
        {
          '@type': 'Question',
          name: 'Is this Blox Fruits thumbnail maker free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Blox Fruits thumbnails for your YouTube channel.' },
        },
        {
          '@type': 'Question',
          name: 'What makes a good Blox Fruits thumbnail?',
          acceptedAnswer: { '@type': 'Answer', text: 'Great Blox Fruits thumbnails show the most exciting moment — a legendary fruit drop, a boss raid victory, a max-level showcase, or a rare awakening. Use bold Impact text (3–5 words), dramatic colors (gold, orange, purple) on a dark background, and keep the main text visible at small sizes.' },
        },
        {
          '@type': 'Question',
          name: 'What colors work best for Blox Fruits thumbnails?',
          acceptedAnswer: { '@type': 'Answer', text: 'Gold (#fbbf24) on dark navy for legendary fruit content, orange (#f97316) on dark red for raid and combat, purple (#c084fc) on very dark purple for mythical awakening content, cyan (#22d3ee) on dark teal for Third Sea and exploration. Always use dark backgrounds — they stand out in the YouTube feed.' },
        },
        {
          '@type': 'Question',
          name: 'What are the best Blox Fruits thumbnail ideas?',
          acceptedAnswer: { '@type': 'Answer', text: 'Top Blox Fruits thumbnail concepts: "I GOT A LEGENDARY FRUIT" (fruit showcase), "BEATING THE RAID BOSS SOLO" (boss raid), "MAX LEVEL IN ONE DAY" (progression), "STRONGEST FRUIT AWAKENING" (power showcase), "THIRD SEA GUIDE" (exploration), "BEST FRUIT COMBO PVP" (combat). Specific claims and milestones perform better than generic titles.' },
        },
        {
          '@type': 'Question',
          name: 'Can I use a Blox Fruits screenshot as the background?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload background image" to use your Blox Fruits game screenshot. All processing runs locally in your browser — your screenshot is never uploaded to any server.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Blox Fruit and Blox Fruits?',
          acceptedAnswer: { '@type': 'Answer', text: 'The official game name is "Blox Fruits" (with an S) on Roblox. Both "blox fruit thumbnail" and "blox fruits thumbnail" are commonly searched — this tool works for all Blox Fruits content regardless of how you spell it.' },
        },
        {
          '@type': 'Question',
          name: 'What font is best for Blox Fruits thumbnails?',
          acceptedAnswer: { '@type': 'Answer', text: 'Impact is the standard choice — bold, condensed, and readable even when the thumbnail is 120px wide in the YouTube sidebar. Add a 3px contrasting outline (dark color) to keep text visible over colorful Blox Fruits game screenshots.' },
        },
      ],
    },
  ],
}

export default function BloxFruitThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Blox Fruits Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={BLOX_FRUITS_TEMPLATES}
            downloadFilename="click-thumb-blox-fruits-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Makes a Blox Fruits Thumbnail Get Clicked?</h2>
                <p>Blox Fruits is one of the most-played games on Roblox, with hundreds of millions of visits and a massive YouTube community. Whether you&apos;re showcasing a legendary fruit drop, completing a boss raid, or hitting max level, your thumbnail is the single biggest factor in whether someone clicks your video or scrolls past it.</p>
                <p>The Blox Fruits YouTube audience responds to specific visual cues: dramatic dark backgrounds that feel powerful and high-stakes, gold or glowing text that signals rarity and achievement, and bold Impact text with a clear claim or milestone. Thumbnails that show a specific fruit name, a boss name, or a level number outperform generic gaming thumbnails because they speak directly to what viewers are searching for.</p>
                <p>Study the top Blox Fruits creators — channels like Axiore, Blox Fruits Official, and Quackity-inspired creators who dominate Roblox YouTube. Their thumbnails share a formula: one key visual (fruit, boss, character), one punchy text line (3–5 words), and a color palette that matches the energy of the content — gold for legendary, red-orange for combat, purple for mythical power.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Blox Fruits YouTube Thumbnail Size — Full Specs</h2>
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
                        ['Recommended size', '1280×720px', 'Sharp on all screens including TV'],
                        ['Minimum size', '640×360px', 'Avoid — blurry on large displays'],
                        ['Aspect ratio', '16:9', 'Matches YouTube player exactly'],
                        ['Max file size', '2MB', 'JPG recommended for smallest size'],
                        ['Formats accepted', 'JPG, PNG, GIF, BMP', 'JPG gives best size/quality ratio'],
                        ['Mobile display size', '~170px wide', 'Text must be readable at this width'],
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
                <p>This tool exports at exactly 1280×720px JPG — ready to upload to YouTube with no extra resizing.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Template Guide: Choosing the Right Blox Fruits Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      name: 'Legendary Fruit',
                      color: 'bg-blue-950',
                      desc: 'Dark navy background, gold text. The signature Blox Fruits look for fruit showcases, rare drops, and fruit tier list videos. Gold color signals rarity and value.',
                    },
                    {
                      name: 'Raid Boss',
                      color: 'bg-red-950',
                      desc: 'Dark red background, orange text. High energy and combat-focused. Best for boss raid videos, PVP battles, and any content about defeating difficult enemies.',
                    },
                    {
                      name: 'Mythical Power',
                      color: 'bg-purple-950',
                      desc: 'Very dark purple background, purple text. Mysterious and powerful. Ideal for devil fruit awakenings, mythical fruit showcases, and overpowered combo videos.',
                    },
                    {
                      name: 'Sea King',
                      color: 'bg-teal-950',
                      desc: 'Dark teal background, cyan text. Ocean and exploration theme. Perfect for Third Sea content, sea beast fights, island guides, and adventure videos.',
                    },
                  ].map((t) => (
                    <div key={t.name} className="rounded-xl border border-border p-3 space-y-1.5">
                      <div className={`w-full h-8 rounded-lg ${t.color} mb-2`} />
                      <p className="font-semibold text-text-main text-xs">{t.name}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Blox Fruits Thumbnail Ideas by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: 'Fruit Showcase', ideas: '"I GOT A LEGENDARY FRUIT", "RAREST FRUIT IN THE GAME", "FRUIT TIER LIST 2026" — use gold text on dark navy, show the fruit name prominently.' },
                    { type: 'Raid & Boss Fights', ideas: '"SOLO RAID BOSS CLEAR", "DEFEATING THE HARDEST BOSS", "RAID BOSS WORLD RECORD" — red/orange palette, action-focused text, show the boss if possible.' },
                    { type: 'Max Level & Progression', ideas: '"MAX LEVEL IN 24 HOURS", "FASTEST GRIND GUIDE", "LEVEL 2450 SHOWCASE" — progress milestones with specific numbers convert best.' },
                    { type: 'PVP & Combat', ideas: '"STRONGEST FRUIT COMBO PVP", "1V1 BATTLE WITH MAX PLAYER", "UNDEFEATED FRUIT BUILD" — purple mythical palette works well for PVP power content.' },
                    { type: 'Third Sea & Exploration', ideas: '"THIRD SEA COMPLETE GUIDE", "ALL ISLANDS MAP", "SECRET LOCATION FOUND" — teal Sea King palette, explorer energy.' },
                    { type: 'Fruit Awakening', ideas: '"AWAKENED DRAGON FRUIT", "MYTHICAL AWAKENING SHOWCASE", "FULL AWAKENING OP COMBO" — purple palette signals power and rarity.' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{item.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Blox Fruits Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Name the fruit specifically:</strong> &quot;I GOT DRAGON FRUIT&quot; outperforms &quot;I GOT A FRUIT&quot; — Blox Fruits viewers search for specific fruits, and naming them in the thumbnail drives more targeted clicks.</li>
                  <li><strong className="text-text-main">Use Impact with a dark outline:</strong> Blox Fruits game backgrounds are visually busy with ocean, islands, and special effects. A 3px dark stroke keeps your title readable over any in-game screenshot.</li>
                  <li><strong className="text-text-main">Dark backgrounds always outperform light ones:</strong> The Blox Fruits audience expects a dramatic, high-stakes look. Light or pastel backgrounds feel low-effort in this niche.</li>
                  <li><strong className="text-text-main">Match color to rarity:</strong> Gold for legendary, orange for raid/combat, purple for mythical, cyan for exploration. Viewers in the Blox Fruits community recognize these color signals and click accordingly.</li>
                  <li><strong className="text-text-main">Keep text to 4 words or fewer:</strong> &quot;SOLO RAID BOSS CLEAR&quot;, &quot;MAX LEVEL SHOWCASE&quot;, &quot;LEGENDARY FRUIT DROP&quot;. The video title handles the details — the thumbnail just needs to hook the viewer.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Blox Fruits Screenshot as Background</h2>
                <p>The highest-performing Blox Fruits thumbnails use a direct screenshot from the game as the background — the moment the legendary fruit appeared, the boss health bar at zero, or the character at max level. Click <strong className="text-text-main">Upload background image</strong> to add your game screenshot, then overlay one of the text templates on top.</p>
                <p>Take your screenshots in Roblox at the most dramatic moment. For fruit content, capture the fruit hovering in the air with its glow effect. For boss raids, capture the final hit or the victory screen. Higher resolution screenshots (press PrtScn or use Roblox&apos;s screenshot key) give the sharpest thumbnail result. All image processing runs locally — nothing is uploaded to any server.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–350KB — well within the limit. If you need a smaller file, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce size without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size should a Blox Fruits thumbnail be?', a: '1280×720 pixels (16:9 aspect ratio). This is the YouTube-recommended thumbnail size. This tool exports at exactly this size — no resizing needed before uploading to YouTube.' },
                    { q: 'Is this Blox Fruits thumbnail maker free?', a: 'Yes, completely free. No account required, no watermark. Download unlimited Blox Fruits thumbnails.' },
                    { q: 'What makes a good Blox Fruits thumbnail?', a: 'Show a specific fruit, boss, or milestone. Use bold Impact text (3–5 words), dramatic dark backgrounds, and colors that match the content — gold for legendary, orange for combat, purple for mythical.' },
                    { q: 'What colors work best for Blox Fruits thumbnails?', a: 'Gold on dark navy for legendary fruit content, orange on dark red for raids and PVP, purple on very dark purple for mythical awakenings, cyan on dark teal for Third Sea and exploration.' },
                    { q: 'What are the best Blox Fruits thumbnail text ideas?', a: '"I GOT A LEGENDARY FRUIT", "SOLO RAID BOSS CLEAR", "MAX LEVEL IN ONE DAY", "STRONGEST AWAKENING COMBO", "THIRD SEA COMPLETE GUIDE" — specific milestones and achievements drive the most clicks.' },
                    { q: 'Can I use a Blox Fruits screenshot as the background?', a: 'Yes. Click "Upload background image" to add your Roblox gameplay screenshot. All processing is done locally — your screenshot is never uploaded to any server.' },
                    { q: 'What is the difference between Blox Fruit and Blox Fruits?', a: 'The official game name is "Blox Fruits" (with an S). Both spellings are commonly searched — this tool works for all Blox Fruits thumbnail content.' },
                    { q: 'What font should I use for Blox Fruits thumbnails?', a: 'Impact is the standard for gaming thumbnails — bold, condensed, and readable at small sizes. Always add a dark outline (3px) to keep text visible over the colorful Blox Fruits game backgrounds.' },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Roblox & Gaming Thumbnail Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/roblox-thumbnail-maker', title: 'Roblox Thumbnail Maker', desc: 'Roblox Red, Neon Obby, Rare Item, Adopt Me templates.' },
                    { href: '/minecraft-thumbnail-maker', title: 'Minecraft Thumbnail Maker', desc: 'Grass Block, Diamond Mine, Nether Portal templates.' },
                    { href: '/fortnite-thumbnail-maker', title: 'Fortnite Thumbnail Maker', desc: 'Storm Eye, Zero Point, Legendary Loot templates.' },
                    { href: '/gta-thumbnail-maker', title: 'GTA Thumbnail Maker', desc: 'GTA Gold, Night Purple, Wanted Red for GTA 5.' },
                    { href: '/cs2-thumbnail-maker', title: 'CS2 Thumbnail Maker', desc: 'CT Blue, Terrorist Orange, Nuke Green for CS2.' },
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
