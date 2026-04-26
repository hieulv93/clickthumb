import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { MINECRAFT_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.minecraft

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Minecraft Thumbnail Maker',
      url: 'https://click-thumb.com/minecraft-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online Minecraft thumbnail maker. Create 1280×720px YouTube thumbnails with Grass Block, Diamond Mine, and Nether Portal templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size should a Minecraft thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Minecraft YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is the standard YouTube thumbnail size. The minimum accepted size is 640×360px, but 1280×720 gives the best clarity on all screens including TV and desktop.' } },
        { '@type': 'Question', name: 'Is this Minecraft thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Minecraft thumbnails.' } },
        { '@type': 'Question', name: 'What makes a good Minecraft thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Great Minecraft thumbnails show something the viewer wants to see: rare loot (diamonds, netherite), an extreme build, or a survival challenge. Use bold text (3–5 words), high-contrast colors (white or cyan on dark), and your face with an expressive reaction if possible.' } },
        { '@type': 'Question', name: 'What colors work best for Minecraft thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Match your thumbnail color to the Minecraft biome or theme: green (#7fff00) for overworld/survival, cyan (#5bc8f5) for diamond/mining videos, orange-red (#ff6600) for Nether/fire content. Always use dark backgrounds for maximum contrast.' } },
        { '@type': 'Question', name: 'What font should I use for Minecraft thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the most effective font for Minecraft thumbnails — bold, condensed, and readable at any size. Add a 3px outline in a contrasting color to keep text readable over any background image. Avoid the Minecraft pixel font (Minecraftia) for main titles as it becomes unreadable at small sizes.' } },
        { '@type': 'Question', name: 'How do I use a game screenshot as the thumbnail background?', acceptedAnswer: { '@type': 'Answer', text: 'Click "Upload background image" to add your Minecraft screenshot as the canvas background. The text templates are positioned to overlay clearly on top. All processing runs locally in your browser — nothing is uploaded to any server.' } },
        { '@type': 'Question', name: 'What text should I put on a Minecraft thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Keep it to 3–5 words that tease the best moment: "I FOUND 100 DIAMONDS", "BEATING MINECRAFT HARDCORE", "THE PERFECT SEED", "NEVER BUILD THIS". Numbers and superlatives drive clicks. The video title handles the full explanation.' } },
        { '@type': 'Question', name: 'What file format should Minecraft thumbnails use?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within YouTube\'s limit.' } },
      ],
    },
  ],
}

export default function MinecraftThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Minecraft Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={MINECRAFT_TEMPLATES}
            downloadFilename="click-thumb-minecraft-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Makes a Minecraft Thumbnail Get Clicks?</h2>
                <p>Minecraft is one of the most searched gaming topics on YouTube, with millions of videos competing for attention every day. Whether you run a survival series, speedrun channel, or build showcase, your thumbnail is the single most important factor in determining whether someone clicks your video or scrolls past it.</p>
                <p>The best Minecraft thumbnails follow a simple formula: show something valuable or surprising, put it in a bold visual frame (bright colors on dark background), and add 3–5 words of punchy text that tease the payoff. Viewers decide in under half a second. Make that half second count.</p>
                <p>Top Minecraft creators like Dream, Technoblade, and MrBeast have proven that the same techniques work regardless of subscriber count: high-contrast text, expressive faces (when applicable), and a clear "what's in it for me" message visible even at thumbnail size.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Minecraft YouTube Thumbnail Size — Full Specs</h2>
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
                        ['Formats accepted', 'JPG, PNG, GIF, BMP', 'JPG is optimal for thumbnails'],
                        ['YouTube sidebar size', '~120px wide', 'Text must be readable at this size'],
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
                <p>This tool exports at exactly 1280×720px as JPG — no resizing, no quality loss after export.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Template Guide: Choosing the Right Minecraft Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'Grass Block',
                      color: 'bg-green-800',
                      desc: 'Dark green background, white + green text. Perfect for survival series, overworld exploration, and farming content.',
                    },
                    {
                      name: 'Diamond Mine',
                      color: 'bg-blue-950',
                      desc: 'Dark navy background, cyan diamond-blue text. Ideal for mining videos, rare loot finds, and underground exploration.',
                    },
                    {
                      name: 'Nether Portal',
                      color: 'bg-red-950',
                      desc: 'Deep dark red background, orange-red fire text. Built for Nether adventures, hardcore challenges, and boss fights.',
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
                <h2 className="text-base font-bold text-text-main">Minecraft Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Show the best moment:</strong> Diamond haul, massive build, impossible survival — your thumbnail should be the highlight reel of your video, not a generic screenshot.</li>
                  <li><strong className="text-text-main">Use Impact font with an outline:</strong> Impact is condensed and punchy. A 3px outline in a contrasting color keeps text readable over any Minecraft landscape or inventory screenshot.</li>
                  <li><strong className="text-text-main">Numbers drive curiosity:</strong> &quot;I Survived 100 Days&quot;, &quot;64 Stacks of Diamonds&quot;, &quot;Found the BEST Seed at Spawn&quot; — specific numbers make claims feel credible and shareable.</li>
                  <li><strong className="text-text-main">Match your color to your content:</strong> Green for overworld, cyan for mining/diamonds, orange-red for Nether. Visual consistency trains your audience to recognize your style.</li>
                  <li><strong className="text-text-main">Keep text to 5 words or fewer:</strong> Thumbnails display at roughly 120px wide in the sidebar. Five short words in Impact is the maximum readable length at that size.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Minecraft Thumbnail Ideas by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: 'Survival Series', ideas: '"Day 1 to 100", "Everything Changed", "I Almost Died" — focus on the journey and milestone moments.' },
                    { type: 'Mining & Loot', ideas: '"Found 100 Diamonds", "Best Y-Level for Mining", "Lucky Chest Haul" — show the loot visually.' },
                    { type: 'Building', ideas: '"Built a Mega Base", "Most Satisfying Build", "Starter House to Mansion" — wide shots of the complete build.' },
                    { type: 'Challenges', ideas: '"Beating Minecraft with No Tools", "Hardcore Mode Day 1", "1 vs 100 Mobs" — the restriction IS the hook.' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{item.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Minecraft Screenshot as Background</h2>
                <p>The most effective Minecraft thumbnails use an in-game screenshot as the background. A dramatic mountain view, a glowing diamond vein in a dark cave, or a blazing Nether fortress gives your thumbnail an authentic look that generic color backgrounds cannot match.</p>
                <p>Click <strong className="text-text-main">Upload background image</strong> to add your screenshot. The text templates are pre-positioned to overlay clearly on most Minecraft scenes. For best results, take your screenshot in high resolution (1920×1080 or higher) and adjust the template text to contrast with the brightest area of your image.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–350KB — well within the limit. If you need a smaller file, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce the size without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size should a Minecraft thumbnail be?', a: 'Minecraft YouTube thumbnails should be 1280×720 pixels (16:9). This tool exports at exactly this size — no resizing needed.' },
                    { q: 'Is this Minecraft thumbnail maker free?', a: 'Yes, completely free. No account, no watermark. Download unlimited Minecraft thumbnails.' },
                    { q: 'What makes a good Minecraft thumbnail?', a: 'Show something rare or impressive (diamonds, huge build, challenge), bold Impact font with outline, 3–5 word title, high-contrast colors on a dark background.' },
                    { q: 'What colors work best for Minecraft thumbnails?', a: 'Green for overworld/survival, cyan for diamond/mining, orange-red for Nether content. Always pair bright text with a dark background for maximum contrast.' },
                    { q: 'What font is best for Minecraft thumbnails?', a: 'Impact is the standard — bold, condensed, readable even at small sizes. Add a 3px contrasting outline to keep text visible over any background.' },
                    { q: 'Can I use a screenshot as the background?', a: 'Yes. Click "Upload background image" to use your Minecraft screenshot. All processing is done locally in your browser — nothing is sent to any server.' },
                    { q: 'What text should I put on a Minecraft thumbnail?', a: '"I FOUND 100 DIAMONDS", "BEATING HARDCORE", "THE BEST SEED" — 3–5 punchy words that tease the best moment in the video. Numbers and superlatives drive clicks.' },
                    { q: 'What file format should I use for Minecraft thumbnails?', a: 'JPG is recommended. This tool exports 1280×720 JPG at 92% quality (typically 150–350KB), well within YouTube\'s 2MB limit.' },
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
                    { href: '/youtube-thumbnail-maker', title: 'YouTube Thumbnail Maker', desc: '1280×720px thumbnails for any YouTube content.' },
                    { href: '/youtube-banner-maker', title: 'YouTube Banner Maker', desc: '2560×1440px channel art for your YouTube profile.' },
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
