import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { AMONG_US_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.among_us

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Among Us Thumbnail Maker',
      url: 'https://click-thumb.com/among-us-thumbnail-maker/',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: 'Free online Among Us thumbnail maker. Create 1280×720px YouTube thumbnails with Impostor Red, Crewmate Blue, and Emergency Meeting templates. No signup, instant download.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What size should an Among Us thumbnail be?', acceptedAnswer: { '@type': 'Answer', text: 'Among Us YouTube thumbnails should be 1280×720 pixels (16:9 aspect ratio). This is YouTube\'s recommended thumbnail size and gives the sharpest result on all screens. The minimum accepted size is 640×360px, but 1280×720 looks best on TV, desktop, and mobile.' } },
        { '@type': 'Question', name: 'Is this Among Us thumbnail maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Create and download unlimited Among Us thumbnails for your YouTube channel.' } },
        { '@type': 'Question', name: 'What makes a good Among Us thumbnail?', acceptedAnswer: { '@type': 'Answer', text: 'Great Among Us thumbnails tease the biggest moment — an impostor reveal, an emergency meeting, or a last-crewmate survival win. Use bold Impact text with 3–5 punchy words, high-contrast colors (red for impostor, teal for crewmate), and keep the design simple enough to read at sidebar thumbnail size (120px wide).' } },
        { '@type': 'Question', name: 'What colors work best for Among Us thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Red (#ff2727) on very dark backgrounds is the iconic impostor look. Teal/cyan (#4fffde) on dark navy captures the crewmate space station vibe. Yellow (#ffe600) on dark orange-brown works for emergency meeting chaos content. High contrast between text and background is the most important rule.' } },
        { '@type': 'Question', name: 'What font is best for Among Us thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'Impact is the standard choice for gaming thumbnails including Among Us — bold, condensed, and readable at any thumbnail size. Add a 3–4px black or dark contrasting outline to keep text visible over colorful space backgrounds.' } },
        { '@type': 'Question', name: 'Can I use an Among Us screenshot as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click "Upload background image" to add your Among Us gameplay screenshot, kill animation, or impostor reveal frame. All image processing runs locally in your browser — nothing is uploaded to any server.' } },
        { '@type': 'Question', name: 'What text should I put on an Among Us thumbnail?', acceptedAnswer: { '@type': 'Answer', text: '"IMPOSTOR DETECTED!", "EMERGENCY MEETING!", "I SURVIVED AS LAST CREWMATE", "3 IMPOSTORS?!" — keep it to 3–5 words. Suspense and surprise drive clicks. Questions like "WHO IS SUS?" and exclamations like "CAUGHT RED-HANDED!" both perform well.' } },
        { '@type': 'Question', name: 'What file format for Among Us thumbnails?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP up to 2MB. This tool exports 1280×720 JPG at 92% quality — typically 150–350KB, well within YouTube\'s 2MB limit.' } },
      ],
    },
  ],
}

export default function AmongUsThumbnailMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Among Us Thumbnail Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1280×720px — no signup, no watermark</p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={AMONG_US_TEMPLATES}
            downloadFilename="click-thumb-among-us-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Why Among Us Thumbnails Still Drive Millions of Views</h2>
                <p>Among Us exploded onto YouTube in 2020 and never fully left. The game&apos;s perfect mix of social deduction, betrayal, and comedy makes it one of the most watchable genres on YouTube — and the thumbnail is what decides whether someone clicks your video or scrolls past. Even a great gameplay session with full impostor stealth, a dramatic emergency meeting, and a clutch last-crewmate win means nothing if the thumbnail doesn&apos;t hook viewers in a single glance.</p>
                <p>Top Among Us creators understand that the thumbnail&apos;s job is to answer one question instantly: "what&apos;s the moment I&apos;ll regret missing?" An impostor reveal thumbnail should feel like a betrayal already happened. An emergency meeting thumbnail should radiate chaos and accusation. A last-crewmate survival thumbnail should feel like a miracle. The emotion in the thumbnail needs to match the peak moment in the video — not the average moment, the absolute best one.</p>
                <p>The creators who grew fastest in the Among Us era all followed the same formula: bold contrasting text (Impact font, 3–4 words, dark outline), the game&apos;s signature color palette (red for impostor, teal-cyan for crewmate, yellow for chaos), and a scene that teases the best moment without spoiling it. Your thumbnail sets the expectation — make sure the video delivers on that promise to maximize watch time and return viewers.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Among Us YouTube Thumbnail Size — Full Specs</h2>
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
                <p>This tool exports at exactly 1280×720px JPG — the size YouTube uses for thumbnail previews on all device types.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Template Guide: Choosing the Right Among Us Style</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'Impostor Red',
                      bg: 'bg-red-950',
                      desc: 'Near-black background with red text and dark stroke. The classic impostor look — high tension, dramatic reveal energy. Best for impostor POV videos, betrayal moments, and kill highlight content.',
                    },
                    {
                      name: 'Crewmate Blue',
                      bg: 'bg-blue-950',
                      desc: 'Dark navy space background with cyan-teal text. Captures the crewmate survival experience. Best for last-crewmate videos, task completion wins, and voting-the-impostor-out moments.',
                    },
                    {
                      name: 'Emergency Meeting',
                      bg: 'bg-orange-950',
                      desc: 'Dark orange-black background with yellow text. Captures the chaos and urgency of emergency meetings. Best for accusation videos, voting drama, 1v1 impostor showdown content.',
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
                <h2 className="text-base font-bold text-text-main">Among Us Thumbnail Design Rules</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Tease the best moment, not the average:</strong> The thumbnail should represent the absolute peak of your video — not the setup, not the middle, the climax. If you had an impostor reveal no one saw coming, that&apos;s your thumbnail moment. The thumbnail is a promise to the viewer about the best part of what they&apos;re about to watch.</li>
                  <li><strong className="text-text-main">Use Among Us&apos; color language:</strong> Red = impostor = danger. Teal/cyan = crewmate = space station. Yellow = chaos = emergency meeting. These color associations are built into every Among Us player&apos;s brain from thousands of hours of gameplay. Use them to trigger the right emotional response instantly.</li>
                  <li><strong className="text-text-main">Suspense outperforms spoilers:</strong> &quot;IMPOSTOR DETECTED&quot; teases tension without revealing who. &quot;EMERGENCY MEETING&quot; creates urgency. &quot;3 IMPOSTORS?!&quot; raises a question. Thumbnails that create curiosity get higher CTR than thumbnails that tell the whole story — leave them wanting to know how it ends.</li>
                  <li><strong className="text-text-main">Numbers and specifics earn trust:</strong> &quot;3 IMPOSTORS IN ONE LOBBY&quot; feels more real than &quot;CRAZY GAME&quot;. &quot;1 vs 9 CREWMATES&quot; feels like a specific achievement. Numbers make your claim verifiable — and viewers click to verify.</li>
                  <li><strong className="text-text-main">Bold Impact at full size, readable at 120px:</strong> Your thumbnail is shown at sidebar size (~120px wide) in YouTube recommendations. Impact font with a 3–4px contrasting outline is the only style that stays readable at that size. Test your thumbnail at 20% size before uploading — if the text is unclear, increase font size or reduce word count.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Best Among Us Thumbnail Ideas by Content Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: 'Impostor POV', ideas: '"IMPOSTOR DETECTED!", "I KILLED EVERYONE", "3 KILLS WITHOUT GETTING CAUGHT", "PERFECT IMPOSTOR ROUND" — show your kill cam or the moment your identity was revealed.' },
                    { type: 'Emergency Meetings & Voting', ideas: '"EMERGENCY MEETING!", "WHO IS THE IMPOSTOR?", "CAUGHT RED-HANDED!", "WRONG VOTE — IMPOSTOR WINS" — capture the accusation moment or the incorrect vote screen.' },
                    { type: 'Last Crewmate Survival', ideas: '"1 CREWMATE vs 2 IMPOSTORS", "I SURVIVED ALONE", "LAST CREWMATE WINS!", "IMPOSSIBLE SURVIVAL" — the "against all odds" angle always outperforms highlight reels.' },
                    { type: 'Funny & Chaos', ideas: '"3 IMPOSTORS IN ONE GAME!", "EVERYONE VOTED ME OUT FIRST", "IMPOSTOR FORGETS HOW TO VEN", "MOST CHAOTIC LOBBY EVER" — lean into the comedy and absurdity of among us moments.' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border p-3 space-y-1">
                      <p className="font-semibold text-text-main text-xs">{item.type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Upload Your Among Us Screenshot as Background</h2>
                <p>The best Among Us thumbnails use an actual in-game screenshot — the kill animation, the emergency meeting button flash, the vote screen at a critical moment, or the victory/defeat screen. Click <strong className="text-text-main">Upload background image</strong> to add your screenshot, then layer a text template that contrasts clearly with your game scene&apos;s dominant colors.</p>
                <p>For impostor content, screenshot the kill cam or the moment right after a vent escape. For crewmate content, capture the victory screen or a last-minute task completion. For emergency meeting content, the accusation text overlay or voting screen makes an instant visual hook. All image processing runs locally — your screenshot is never uploaded to any server.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Thumbnail Before Uploading</h2>
                <p>YouTube accepts thumbnails up to 2MB. A 1280×720px JPG at 92% quality is typically 150–350KB — well within the limit. If you need a smaller file, use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to reduce file size without visible quality loss.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size should an Among Us thumbnail be?', a: 'Among Us YouTube thumbnails should be 1280×720 pixels (16:9). This tool exports at exactly this size — no resizing needed before uploading to YouTube.' },
                    { q: 'Is this Among Us thumbnail maker free?', a: 'Yes, completely free. No account, no watermark. Download unlimited Among Us thumbnails.' },
                    { q: 'What makes a good Among Us thumbnail?', a: 'Show the peak moment — impostor reveal, emergency meeting, last-crewmate win — with bold Impact text (3–5 words) in Among Us signature colors (red, teal, or yellow).' },
                    { q: 'What colors work best for Among Us thumbnails?', a: 'Red (#ff2727) on dark for impostor content, teal (#4fffde) on dark navy for crewmate content, yellow (#ffe600) on dark orange-brown for emergency meeting chaos. Always use high contrast.' },
                    { q: 'What font is best for Among Us thumbnails?', a: 'Impact is the standard — bold, condensed, readable at any thumbnail size. Add a 3–4px dark outline to keep text visible over colorful game screenshots.' },
                    { q: 'Can I use an Among Us screenshot as the background?', a: 'Yes. Click "Upload background image" to add your gameplay screenshot. All processing is done locally — nothing is uploaded to any server.' },
                    { q: 'What text should I put on an Among Us thumbnail?', a: '"IMPOSTOR DETECTED!", "EMERGENCY MEETING!", "3 IMPOSTORS?!", "LAST CREWMATE WINS!" — 3–5 words, suspense-driven. Questions and exclamations drive curiosity clicks.' },
                    { q: 'What file format for Among Us thumbnails?', a: 'JPG is recommended. This tool exports 1280×720 JPG at 92% quality (typically 150–350KB), well within YouTube\'s 2MB limit.' },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Gaming Thumbnail Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/gaming-thumbnail-maker', title: 'Gaming Thumbnail Maker', desc: 'Neon, fire, cyberpunk — for all gaming niches.' },
                    { href: '/gta-thumbnail-maker', title: 'GTA Thumbnail Maker', desc: 'GTA Gold, Night Purple, Wanted Red for GTA 5.' },
                    { href: '/call-of-duty-thumbnail-maker', title: 'COD Thumbnail Maker', desc: 'Military Dark, Combat Orange, Camo Green for COD.' },
                    { href: '/roblox-thumbnail-maker', title: 'Roblox Thumbnail Maker', desc: 'Roblox Red, Neon Obby, Rare Item templates.' },
                    { href: '/fortnite-thumbnail-maker', title: 'Fortnite Thumbnail Maker', desc: 'Storm Eye, Zero Point, Legendary Loot templates.' },
                    { href: '/cs2-thumbnail-maker', title: 'CS2 Thumbnail Maker', desc: 'CT Blue, T-Side Orange, Pro Minimal for CS2.' },
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
