import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { VALORANT_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.valorant

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Valorant Thumbnail Maker',
      url: 'https://click-thumb.com/valorant-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online Valorant thumbnail maker. Create 1280×720px YouTube thumbnails with Agent Impact, ACE Gold, and Clutch Navy templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size should a Valorant thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Valorant YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is the YouTube-recommended thumbnail size. The minimum accepted is 640×360px, but 1280×720 gives the sharpest result on all screens including TV.' } },
        { '@type': 'Question', name: 'Is this Valorant thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Valorant thumbnails for your YouTube channel.' } },
        { '@type': 'Question', name: 'What makes a good Valorant thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Great Valorant thumbnails highlight the most dramatic moment — an ACE round, a 1v5 clutch, a headshot montage, or a rank-up. Use bold Impact text with a contrasting outline, choose colors that match the game\'s red/dark aesthetic, and keep text to 3–5 punchy words.' } },
        { '@type': 'Question', name: 'What colors work best for Valorant thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Valorant\'s signature red (#ff4655) on very dark backgrounds is the most iconic look. Gold (#fbbf24) works great for ACE and highlights. Blue (#38bdf8) on dark navy suits clutch and tactical play videos. High contrast always wins over subtle combinations.' } },
        { '@type': 'Question', name: 'What font is best for Valorant thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the top choice for Valorant thumbnails — bold, condensed, and readable at the 120px thumbnail size shown in the YouTube sidebar. Always add a contrasting outline (3–4px) to keep text visible over bright in-game screenshots.' } },
        { '@type': 'Question', name: 'Can I use a Valorant screenshot as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload background image" to add your Valorant gameplay screenshot or a cinematic screen. The text templates are positioned to overlay clearly over most game scenes. All processing runs locally in your browser — nothing is uploaded to any server.' } },
        { '@type': 'Question', name: 'What text should I put on a Valorant thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Keep it to 3–5 punchy words: "ACE ROUND!", "1 vs 5 CLUTCH", "BEST JETT PLAYS", "RADIANT RANKED GAME", "INSANE MONTAGE". Numbers and achievement claims feel real and drive clicks. Questions like "CAN I ACE?" also perform well.' } },
        { '@type': 'Question', name: 'What file format for Valorant thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within YouTube\'s 2MB limit.' } },
      ],
    },
  ],
}

export default function ValorantThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Valorant Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={VALORANT_TEMPLATES}
            downloadFilename="click-thumb-valorant-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Makes a Valorant Thumbnail Get Clicked?</h2>
                <p>Valorant has one of the fastest-growing YouTube gaming communities, with millions of players uploading clips of ACE rounds, clutch plays, agent guides, and ranked journey videos every day. The competition for clicks is intense — which means your thumbnail is the difference between 200 views and 20,000 views on the same video.</p>
                <p>Top Valorant creators like TenZ, tarik, and QuarterJade all share the same thumbnail formula: extreme action moment, big bold text, high-contrast colors matching the red-and-dark Valorant aesthetic. The thumbnail should answer one question instantly — "why should I stop scrolling and watch this?" An ACE round thumbnail should make the viewer feel the intensity. A rank-up video should feel like a milestone worth celebrating.</p>
                <p>The key insight from top-performing Valorant content is specificity. "VALORANT CLIP" performs worse than "5 ACE ROUNDS IN ONE GAME". Agent-specific thumbnails (Jett, Reyna, Omen) attract dedicated mains. Map-specific content draws viewers preparing for ranked. The more specific your thumbnail promise, the higher your CTR from the right audience.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Valorant YouTube Thumbnail Size — Full Specs</h2>
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
                <h2 className="text-base font-bold text-text-main">Template Guide: Choosing the Right Valorant Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'Agent Impact',
                      bg: 'bg-red-950',
                      desc: 'Dark red background, Valorant signature red text with white outline. The classic Valorant brand look. Works for any general Valorant content, highlight reels, and agent showcases.',
                    },
                    {
                      name: 'ACE Gold',
                      bg: 'bg-yellow-950',
                      desc: 'Near-black background, gold text. Premium and prestigious feel. Perfect for ACE rounds, 5-kill clutches, and high-score highlight videos where the achievement speaks for itself.',
                    },
                    {
                      name: 'Clutch Navy',
                      bg: 'bg-blue-950',
                      desc: 'Dark navy background, ice blue text. Cool, tactical, and intense. Ideal for clutch rounds, 1v5 scenarios, ranked gameplay, and strategic agent guide content.',
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
                <h2 className="text-base font-bold text-text-main">Valorant Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Show the peak moment:</strong> Valorant thumbnails perform best when they capture the single most dramatic frame — the ACE kill cam, the 1v5 round win screen, the rank-up animation, or the 40-bomb scoreboard. Viewers should feel the intensity immediately.</li>
                  <li><strong className="text-text-main">Match the Valorant color palette:</strong> The game&apos;s signature red (#ff4655) and dark backgrounds are instantly recognizable. Thumbnails that feel &quot;off-brand&quot; from the game&apos;s aesthetic are often scrolled past. Stay in the red-dark-contrast zone unless you have a specific reason to deviate.</li>
                  <li><strong className="text-text-main">Agent-specific content, agent-specific thumbnails:</strong> Jett mains click Jett thumbnails. Reyna players stop on Reyna content. If your video is agent-specific, feature that agent prominently — either as a background screenshot or mention in the text (&quot;BEST JETT PLAYS&quot;).</li>
                  <li><strong className="text-text-main">Numbers outperform adjectives:</strong> &quot;5 ACE IN ONE SESSION&quot; outperforms &quot;INSANE ACES&quot;. &quot;40 BOMB ON SPLIT&quot; outperforms &quot;CRAZY GAME&quot;. Numbers make the claim feel real and specific — and viewers click to verify.</li>
                  <li><strong className="text-text-main">Bold Impact font with outline:</strong> Valorant screenshots are detailed and colorful. A 3–4px outline keeps your Impact text readable regardless of what&apos;s behind it. Never use thin or light fonts — they disappear at thumbnail sizes.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Valorant Thumbnail Ideas by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: 'ACE Rounds & Highlights', ideas: '"5 ACE IN ONE DAY", "INSANE CLUTCH ACE", "RADIANT ACE ROUND" — show the kill feed or the round win screen. Specific agent names boost CTR from that agent\'s main audience.' },
                    { type: 'Ranked & Competitive', ideas: '"FINALLY RADIANT", "IRON TO PLAT IN ONE MONTH", "BEST RANKED MATCH EVER" — rank icons in the thumbnail signal authority to competitive players.' },
                    { type: 'Agent Guides & Tips', ideas: '"BEST JETT MOVEMENT TIPS", "REYNA GUIDE FOR BEGINNERS", "HOW TO 1v5 AS OMEN" — use the agent\'s in-game model as background for instant recognition.' },
                    { type: 'Funny & Chaos', ideas: '"THIS GLITCH BROKE VALORANT", "WORST TEAMMATE EVER", "I TROLLED THE ENTIRE TEAM" — capture the exact chaotic moment on screen for maximum curiosity clicks.' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{item.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Valorant Screenshot as Background</h2>
                <p>The most click-worthy Valorant thumbnails use an in-game screenshot as the background — the ACE kill feed, the spike explosion, the agent using their ultimate, or the rank-up screen. Click <strong className="text-text-main">Upload background image</strong> to add your screenshot, then choose a text template that contrasts clearly with your image&apos;s brightest areas.</p>
                <p>For highlight content, take your screenshot at the most dramatic frame — the last kill of the round, the bomb explosion, or the scoreboard showing a high kill game. For ranked content, screenshot your rank card or the end-of-game screen. For agent guides, use the agent selection screen or an ability showcase moment. All processing runs locally — your screenshot is never uploaded to any server.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–350KB — well within the limit. If you need a smaller file, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce size without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size should a Valorant thumbnail be?', a: 'Valorant YouTube thumbnails should be 1280×720 pixels (16:9). This tool exports at exactly this size — no resizing needed before uploading to YouTube.' },
                    { q: 'Is this Valorant thumbnail maker free?', a: 'Yes, completely free. No account, no watermark. Download unlimited Valorant thumbnails.' },
                    { q: 'What makes a good Valorant thumbnail?', a: 'Show the most dramatic moment — ACE kill feed, 1v5 clutch, rank-up screen — with bold Impact text (3–5 words) in Valorant\'s red-dark color palette.' },
                    { q: 'What colors work best for Valorant thumbnails?', a: 'Valorant red (#ff4655) on dark for general content, gold (#fbbf24) for ACE highlights, ice blue (#38bdf8) on navy for clutch and tactical content. Always use dark backgrounds.' },
                    { q: 'What font is best for Valorant thumbnails?', a: 'Impact is the standard — bold, condensed, readable at any thumbnail size. Add a 3–4px contrasting outline to keep text visible over detailed game screenshots.' },
                    { q: 'Can I use a Valorant screenshot as the background?', a: 'Yes. Click "Upload background image" to add your gameplay screenshot. All processing is done locally — nothing is uploaded to any server.' },
                    { q: 'What text should I put on a Valorant thumbnail?', a: '"ACE ROUND!", "1 vs 5 CLUTCH", "BEST JETT PLAYS", "40 BOMB ON SPLIT" — 3–5 words, specific and punchy. Numbers and achievements feel real and drive clicks.' },
                    { q: 'What file format for Valorant thumbnails?', a: 'JPG is recommended. This tool exports 1280×720 JPG at 92% quality (typically 150–350KB), well within YouTube\'s 2MB limit.' },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Gaming Thumbnail Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/cs2-thumbnail-maker', title: 'CS2 Thumbnail Maker', desc: 'CT Blue, T-Side Orange, Pro Minimal for CS2.' },
                    { href: '/call-of-duty-thumbnail-maker', title: 'COD Thumbnail Maker', desc: 'Military Dark, Combat Orange, Camo Green for COD.' },
                    { href: '/apex-legends-thumbnail-maker', title: 'Apex Legends Thumbnail Maker', desc: 'Champion Orange, Dark Red for Apex Legends.' },
                    { href: '/gaming-thumbnail-maker', title: 'Gaming Thumbnail Maker', desc: 'Neon, fire, cyberpunk — for all gaming niches.' },
                    { href: '/fortnite-thumbnail-maker', title: 'Fortnite Thumbnail Maker', desc: 'Storm Eye, Zero Point, Legendary Loot templates.' },
                    { href: '/pubg-thumbnail-maker', title: 'PUBG Thumbnail Maker', desc: 'Chicken Dinner, Military Tan, Night Drop for PUBG.' },
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
