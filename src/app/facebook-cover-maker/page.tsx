'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { FACEBOOK_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.facebook

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'Facebook Cover Maker', url: 'https://click-thumb.com/facebook-cover-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online Facebook cover photo maker. Create 851×315 cover photos with templates and custom text. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size is a Facebook cover photo?', acceptedAnswer: { '@type': 'Answer', text: 'The recommended Facebook cover photo size is 851×315 pixels for desktop. On mobile it displays at 640×360px. Design for 851×315 and keep important content in the center to ensure it looks good on both.' } },
      { '@type': 'Question', name: 'Is this Facebook cover maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark on downloads.' } },
      { '@type': 'Question', name: 'How do I change my Facebook cover photo?', acceptedAnswer: { '@type': 'Answer', text: 'Go to your Facebook profile or page → hover over the cover photo area → click Update cover photo (profile) or Change cover (page) → Upload photo → select your file → adjust position → Save changes.' } },
      { '@type': 'Question', name: 'What is the Facebook cover photo safe zone?', acceptedAnswer: { '@type': 'Answer', text: 'The bottom-left corner on personal profiles is overlapped by the profile photo. For Facebook Pages, the profile photo is centered at the bottom. Keep key text and logos in the upper-center area of the cover.' } },
      { '@type': 'Question', name: 'Can I use a video as Facebook cover?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Facebook Pages support cover videos (20–90 seconds). This tool creates static image covers. For video covers, use a video editor and export at 820×312px or larger at the same ratio.' } },
      { '@type': 'Question', name: 'What file format does Facebook accept?', acceptedAnswer: { '@type': 'Answer', text: 'Facebook accepts JPG and PNG for cover photos (max 100MB, though files under 1MB are recommended for fast loading). JPG is ideal for photos; PNG for graphics with text.' } },
      { '@type': 'Question', name: 'How do I compress a Facebook cover photo?', acceptedAnswer: { '@type': 'Answer', text: 'Use CompressImg.pro — Compress for Facebook to reduce file size before uploading. Facebook re-compresses images on upload, so starting with a well-optimized file minimizes quality loss.' } },
      { '@type': 'Question', name: 'Can I use my own image as background?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Click Upload image to add your own photo. All processing runs locally in your browser — your images never leave your device.' } },
    ] },
  ],
}

export default function FacebookCoverMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Facebook Cover Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 851×315px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={FACEBOOK_TEMPLATES} downloadFilename="click-thumb-facebook-cover.jpg" exportLabel="Download Cover (851×315)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Facebook Cover Photo Size — Desktop vs Mobile</h2>
                <p>Facebook displays cover photos at different sizes depending on the device. On desktop, the cover is 820×312px (displayed from an 851×315 upload). On mobile, it is cropped to approximately 640×360px. Designing at 851×315px and keeping key content in the center ensures it displays correctly on both.</p>
                <p>This tool exports at 851×315px — the recommended upload resolution for Facebook cover photos with no quality loss.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Facebook Cover Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Personal profiles:</strong> Show your personality. A travel photo, hobby shot, or motivational quote works well. Profile photo covers the bottom-left — leave that area clear.</li>
                  <li><strong className="text-text-main">Business pages:</strong> Reinforce your brand. Include your logo, tagline, and website. Feature your current promotion or product launch.</li>
                  <li><strong className="text-text-main">Events:</strong> Date, time, event name prominently displayed. Bold fonts, high contrast.</li>
                  <li><strong className="text-text-main">Non-profits:</strong> Mission statement or campaign imagery. Include donation CTA if running a campaign.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Optimize Your Facebook Cover Before Uploading</h2>
                <p>Facebook re-compresses images on upload, which can reduce quality. To get the best result: upload at 851×315px (this tool does this), use JPG format for photos, keep file size under 1MB. If you need to compress further, use <Link href="https://compressimg.pro/compress-image-for-facebook" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg — Compress for Facebook</Link>.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size is a Facebook cover photo?',a:'The recommended Facebook cover photo size is 851×315 pixels. This tool exports at exactly this size.'},
                    {q:'Is this Facebook cover maker free?',a:'Yes, completely free. No account, no watermark. Download instantly.'},
                    {q:'How do I change my Facebook cover photo?',a:'Profile: hover cover area → Update cover photo → Upload. Page: hover cover → Change cover → Upload photo → Save.'},
                    {q:'What is the safe zone for Facebook covers?',a:'Keep key content in the upper-center area. Bottom-left is covered by profile photo on personal profiles; centered at bottom on Pages.'},
                    {q:'What format does Facebook accept for cover photos?',a:'Facebook accepts JPG and PNG (max 100MB). JPG under 1MB is recommended for fast loading and best quality after Facebook\'s compression.'},
                    {q:'How do I compress my Facebook cover photo?',a:'Use CompressImg.pro to reduce file size before uploading. Facebook compresses images on upload — starting with a well-optimized file minimizes quality loss.'},
                    {q:'Can I use a video as Facebook cover?',a:'Yes, Pages support cover videos (20–90 seconds). This tool creates static image covers. For video covers, use a video editor at the same aspect ratio.'},
                    {q:'Can I upload my own background photo?',a:'Yes. Click "Upload image" to use your own photo as the canvas background. All processing is local — nothing is uploaded to a server.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[{href:'/instagram-post-maker',title:'Instagram Post Maker',desc:'1080×1080px Instagram posts, free.'},{href:'/twitter-header-maker',title:'Twitter Header Maker',desc:'1500×500px Twitter/X header.'},{href:'/linkedin-banner-maker',title:'LinkedIn Banner Maker',desc:'1584×396px LinkedIn profile banner.'}].map(item=>(
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
