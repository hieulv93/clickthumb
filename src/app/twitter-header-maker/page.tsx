'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { TWITTER_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.twitter

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'Twitter Header Maker', url: 'https://click-thumb.com/twitter-header-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online Twitter/X header maker. Create 1500×500 profile headers with templates and custom text. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size is a Twitter header?', acceptedAnswer: { '@type': 'Answer', text: 'The recommended Twitter/X profile header size is 1500×500 pixels. Twitter displays it cropped to different sizes on mobile and desktop, so keep important elements (text, logo) centered and away from the edges.' } },
      { '@type': 'Question', name: 'Is this Twitter header maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Download your Twitter header instantly.' } },
      { '@type': 'Question', name: 'How do I upload a new Twitter header?', acceptedAnswer: { '@type': 'Answer', text: 'Go to your Twitter/X profile → click Edit profile → click the camera icon on the header area → select your downloaded image → adjust crop if needed → Save.' } },
      { '@type': 'Question', name: 'What file format does Twitter accept for headers?', acceptedAnswer: { '@type': 'Answer', text: 'Twitter accepts JPG, PNG, and GIF for headers. Maximum file size is 5MB. JPG is recommended for best quality at smallest file size.' } },
      { '@type': 'Question', name: 'Why does my Twitter header look blurry?', acceptedAnswer: { '@type': 'Answer', text: 'Twitter re-compresses header images. To minimize blurriness: upload at exactly 1500×500px (this tool does this), use JPG format, keep file size under 2MB. Avoid uploading images larger than 1500×500 as Twitter will downscale them.' } },
      { '@type': 'Question', name: 'What should I put on my Twitter header?', acceptedAnswer: { '@type': 'Answer', text: 'Your Twitter header is prime real estate for branding. Include your name or brand, a short tagline of what you do, and optionally a website URL. Avoid putting critical information at the edges or bottom — the profile photo overlaps the bottom-left corner.' } },
      { '@type': 'Question', name: 'Does the Twitter header show on mobile?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but it is cropped differently. On desktop it shows more of the banner; on mobile the header is narrower. Keep key information in the center third of the image for it to display correctly on all devices.' } },
      { '@type': 'Question', name: 'Can I use my own image as the background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click Upload image to use your own photo or illustration as the background. All processing happens locally in your browser.' } },
    ] },
  ],
}

export default function TwitterHeaderMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Twitter Header Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1500×500px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={TWITTER_TEMPLATES} downloadFilename="click-thumb-twitter-header.jpg" exportLabel="Download Header (1500×500)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Twitter/X Header Size — Exact Specifications</h2>
                <p>The recommended Twitter (now X) profile header size is 1500×500 pixels with a 3:1 aspect ratio. Twitter displays this image across the top of your profile page, but the visible area changes depending on device: desktop shows more of the banner width, mobile shows a narrower crop. The bottom-left corner is always partially covered by your circular profile photo.</p>
                <p>This tool exports your Twitter header at exactly 1500×500px as JPG — the standard format accepted by Twitter/X with no quality loss from re-sizing.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What to Include on Your Twitter Header</h2>
                <p>Your Twitter header is one of the first things a visitor sees when they check your profile. Use it to communicate who you are and what you do in a single glance. The most effective Twitter headers include: your name or brand name in large text, a short tagline (what you do or build), and optionally your website URL or social handle. Avoid cramming too much information — the header is a first impression, not a resume.</p>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Creators:</strong> Name + content niche (e.g., &quot;Building SaaS in public&quot;)</li>
                  <li><strong className="text-text-main">Businesses:</strong> Logo + tagline + website</li>
                  <li><strong className="text-text-main">Job seekers:</strong> Name + role + &quot;Open to opportunities&quot;</li>
                  <li><strong className="text-text-main">Personal brand:</strong> Name + 2–3 topics you post about</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Safe Zone: Keep Text Away From Edges</h2>
                <p>Twitter crops the header differently on different devices and screen sizes. The profile photo (400×400px circular) always overlaps the bottom-left corner at approximately 120px from the left and 120px from the bottom. Keep all important text and graphics in the center 60% of the image (from left: 300px to 1200px). Avoid putting your name, logo, or key information near the bottom-left corner.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your Twitter Header Before Uploading</h2>
                <p>Twitter accepts headers up to 5MB. A 1500×500px JPG at 92% quality is typically 200–500KB — well within the limit. If you need to reduce the file size further, use <Link href="https://compressimg.pro" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg.pro</Link> to compress without visible quality loss.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size is a Twitter header?',a:'The recommended Twitter/X profile header size is 1500×500 pixels (3:1 ratio). This tool exports at exactly this size.'},
                    {q:'Is this Twitter header maker free?',a:'Yes, completely free. No account required, no watermark. Download your header instantly.'},
                    {q:'How do I upload a new Twitter header?',a:'Go to your Twitter/X profile → Edit profile → click the camera icon on the header → select your file → adjust crop if prompted → Save.'},
                    {q:'What format does Twitter accept for headers?',a:'Twitter accepts JPG, PNG, and GIF for headers (max 5MB). JPG is recommended for best quality at the smallest file size.'},
                    {q:'Why does my Twitter header look blurry?',a:'Upload at exactly 1500×500px to prevent Twitter from re-sizing. Use JPG format. Keep file size under 2MB. This tool exports at the correct size automatically.'},
                    {q:'Can I use my own photo as background?',a:'Yes. Click "Upload image" to use your own photo. All processing is local — your images are never uploaded to a server.'},
                    {q:'Where is the safe zone on a Twitter header?',a:'Keep important content in the center 60% (pixels 300–1200 from left). The bottom-left corner is always covered by your profile photo.'},
                    {q:'How often should I update my Twitter header?',a:'Update your header when you launch something new, change your focus, or run a campaign. Frequent updates signal an active account. Many creators update it monthly or seasonally.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[{href:'/youtube-thumbnail-maker',title:'YouTube Thumbnail Maker',desc:'1280×720px thumbnails with templates.'},{href:'/linkedin-banner-maker',title:'LinkedIn Banner Maker',desc:'1584×396px professional LinkedIn banner.'},{href:'/instagram-post-maker',title:'Instagram Post Maker',desc:'1080×1080px Instagram posts, free.'}].map(item=>(
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
