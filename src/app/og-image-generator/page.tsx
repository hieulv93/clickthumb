'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { OG_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.og

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'OG Image Generator', url: 'https://click-thumb.com/og-image-generator/', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online OG image generator. Create Open Graph preview images at 1200×630px for websites, blogs, and apps. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size is an OG image?', acceptedAnswer: { '@type': 'Answer', text: 'The standard Open Graph image size is 1200×630 pixels (1.91:1 ratio). This is the recommended size for Facebook, Twitter, LinkedIn, Slack, and most other platforms that display link previews.' } },
      { '@type': 'Question', name: 'What is an OG image?', acceptedAnswer: { '@type': 'Answer', text: 'An OG (Open Graph) image is the preview image that appears when a URL is shared on social media or messaging apps. It is controlled by the og:image meta tag in the page\'s HTML. Without a custom OG image, platforms display a random screenshot or no image.' } },
      { '@type': 'Question', name: 'Is this OG image generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Download your OG image instantly.' } },
      { '@type': 'Question', name: 'How do I add an OG image to my website?', acceptedAnswer: { '@type': 'Answer', text: 'Upload the image to your server, then add this to your page\'s <head>: <meta property="og:image" content="https://yoursite.com/og-image.jpg">. Also add Twitter card tags: <meta name="twitter:card" content="summary_large_image"> and <meta name="twitter:image" content="https://yoursite.com/og-image.jpg">.' } },
      { '@type': 'Question', name: 'How do I test my OG image?', acceptedAnswer: { '@type': 'Answer', text: 'Use the Facebook Sharing Debugger (developers.facebook.com/tools/debug), Twitter Card Validator, or LinkedIn Post Inspector to preview and validate your OG image before sharing.' } },
      { '@type': 'Question', name: 'What text should I include on an OG image?', acceptedAnswer: { '@type': 'Answer', text: 'Include the page title or article headline (large, bold), your website name or URL (smaller, bottom), and optionally a short description. Keep text minimal — the image will be displayed small in social feeds.' } },
      { '@type': 'Question', name: 'Does every page need its own OG image?', acceptedAnswer: { '@type': 'Answer', text: 'Ideally yes — unique OG images per page increase click-through rates on social shares. At minimum, have a default OG image for pages without a specific one, and custom images for high-traffic pages like your homepage, blog posts, and product pages.' } },
      { '@type': 'Question', name: 'What file format should I use for OG images?', acceptedAnswer: { '@type': 'Answer', text: 'JPG is recommended for OG images. It loads faster than PNG and is supported by all platforms. Keep the file size under 300KB for fast loading. Use CompressImg.pro to optimize if needed.' } },
    ] },
  ],
}

export default function OgImageGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">OG Image Generator</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1200×630px Open Graph image — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={OG_TEMPLATES} downloadFilename="click-thumb-og-image.jpg" exportLabel="Download OG Image (1200×630)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What Is an OG Image and Why Does It Matter?</h2>
                <p>An Open Graph (OG) image is the preview image displayed when a URL is shared on social media platforms, messaging apps (Slack, WhatsApp, iMessage), and search engines. It is defined by the <code className="bg-surface px-1 rounded text-xs font-mono">og:image</code> meta tag in your page&apos;s HTML head.</p>
                <p>Without a custom OG image, platforms display a random screenshot of your page — often the header or a misaligned section. A well-designed OG image increases click-through rate on shared links by 3–5× compared to pages with no OG image. Every blog post, product page, and landing page should have one.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">OG Image Size — Exact Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead><tr className="bg-surface"><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Platform</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Display size</th><th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th></tr></thead>
                    <tbody>
                      {[['Facebook','1200×630px (recommended)','Minimum 600×315px'],['Twitter/X','1200×630px','summary_large_image card'],['LinkedIn','1200×627px','Very close to standard'],['Slack','1200×630px','Shown in link unfurls'],['iMessage','1200×630px','iOS link previews'],['WhatsApp','1200×630px','Android and iOS']].map(([p,d,n])=>(
                        <tr key={p} className="even:bg-surface/50"><td className="border border-border px-3 py-2 font-medium text-text-main">{p}</td><td className="border border-border px-3 py-2">{d}</td><td className="border border-border px-3 py-2">{n}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>1200×630px works everywhere — use this as your standard OG image size. This tool exports at exactly 1200×630px.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">How to Add an OG Image to Your Website</h2>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Create and download</strong> your OG image using this tool.</li>
                  <li><strong className="text-text-main">Upload</strong> it to your server or CDN (e.g., <code className="bg-surface px-1 rounded text-xs font-mono">/public/og-image.jpg</code>).</li>
                  <li><strong className="text-text-main">Add meta tags</strong> to your page&apos;s <code className="bg-surface px-1 rounded text-xs font-mono">&lt;head&gt;</code>:</li>
                </ol>
                <pre className="bg-surface rounded-lg p-3 text-xs overflow-x-auto font-mono text-text-main">{`<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://yoursite.com/og-image.jpg" />`}</pre>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Optimize Your OG Image</h2>
                <p>Keep your OG image under 300KB for fast loading. Large OG images slow down link preview rendering on Slack and iMessage. Use <Link href="https://compressimg.pro/compress-image" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to compress your JPG to under 200KB without visible quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size is an OG image?',a:'The standard Open Graph image size is 1200×630 pixels (1.91:1 ratio). This works across Facebook, Twitter, LinkedIn, Slack, iMessage, and WhatsApp.'},
                    {q:'What is an OG image?',a:'An OG (Open Graph) image is the preview image shown when a URL is shared on social media or messaging apps. It\'s controlled by the og:image meta tag in your page\'s HTML.'},
                    {q:'Is this OG image generator free?',a:'Yes, completely free. No account required, no watermark. Download instantly.'},
                    {q:'How do I add an OG image to my website?',a:'Upload to your server, then add <meta property="og:image" content="https://yoursite.com/og.jpg"> to your page\'s <head>. Also add Twitter card tags for Twitter/X support.'},
                    {q:'How do I test if my OG image works?',a:'Use the Facebook Sharing Debugger (developers.facebook.com/tools/debug) or Twitter Card Validator to preview your OG image before sharing.'},
                    {q:'Does every page need its own OG image?',a:'Ideally yes — unique OG images per page increase click-through on shares. Start with a default for all pages, then create custom ones for high-traffic pages.'},
                    {q:'What text should I put on an OG image?',a:'Page title or article headline (large, bold), your site name or URL (smaller). Keep it minimal — OG images display small in social feeds.'},
                    {q:'What file format for OG images?',a:'JPG is recommended. Smaller file size than PNG, supported everywhere. Keep under 300KB. Use CompressImg.pro to optimize if needed.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[{href:'/youtube-thumbnail-maker',title:'YouTube Thumbnail Maker',desc:'1280×720px YouTube thumbnails.'},{href:'/twitter-header-maker',title:'Twitter Header Maker',desc:'1500×500px Twitter/X header.'},{href:'/instagram-post-maker',title:'Instagram Post Maker',desc:'1080×1080px Instagram posts.'}].map(item=>(
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
