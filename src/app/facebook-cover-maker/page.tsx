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
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">Facebook Cover Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 851×315px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={FACEBOOK_TEMPLATES} downloadFilename="click-thumb-facebook-cover.jpg" exportLabel="Download Cover (851×315)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Facebook Cover Photo Size — Full Specs</h2>
                <p>Facebook displays cover photos at different sizes depending on the device and account type. The recommended upload size is 851×315 pixels — this is what this tool exports. On desktop browsers, Facebook renders the cover at 820×312px from your upload. On mobile, it crops to approximately 640×360px, showing the center of your image.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-surface">
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Context</th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Display Size</th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Recommended upload', '851×315px', 'Use this — what this tool exports'],
                        ['Desktop display', '820×312px', 'Slight crop from upload size'],
                        ['Mobile display', '640×360px', 'Center crop of your image'],
                        ['Max file size', '100MB', 'Keep under 1MB for best quality after FB compression'],
                        ['Accepted formats', 'JPG, PNG', 'JPG for photos, PNG for graphics/text'],
                        ['Minimum size', '400×150px', 'Avoid — looks blurry on modern screens'],
                      ].map(([ctx, size, note]) => (
                        <tr key={ctx} className="even:bg-surface/50">
                          <td className="border border-border px-3 py-2 font-medium text-text-main">{ctx}</td>
                          <td className="border border-border px-3 py-2">{size}</td>
                          <td className="border border-border px-3 py-2">{note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>Designing at 851×315px and centering key content ensures your cover looks correct on both desktop and mobile. Avoid placing logos or text in the bottom-left corner (profile photo area) or extreme edges.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Profile Cover vs Page Cover — Key Differences</h2>
                <p>Facebook cover photos work slightly differently depending on whether you are customizing a personal profile or a business/creator Page. The main difference is where the profile picture appears — this affects which areas of your cover photo are partially blocked.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      type: 'Personal Profile',
                      details: [
                        'Profile photo: bottom-left corner',
                        'Safe zone: upper-right and center',
                        'Name appears bottom-left below profile photo',
                        'Update via: Profile → hover cover → Update cover photo',
                      ],
                    },
                    {
                      type: 'Facebook Page',
                      details: [
                        'Profile photo: bottom-center (slightly left)',
                        'Safe zone: upper area and right side',
                        'Page name appears bottom-left',
                        'Update via: Page → hover cover → Change cover',
                      ],
                    },
                  ].map(({ type, details }) => (
                    <div key={type} className="rounded-xl border border-border p-3 space-y-2">
                      <p className="font-semibold text-text-main text-xs">{type}</p>
                      <ul className="space-y-1">
                        {details.map((d) => (
                          <li key={d} className="text-xs text-text-muted">• {d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Facebook Cover Photo Ideas by Page Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      type: 'Business & Brand Pages',
                      ideas: 'Feature your current product, promotion, or seasonal campaign. Include your tagline and website URL. Update the cover whenever you run a new campaign — an outdated cover signals a neglected page. Keep branding consistent with your logo colors.',
                    },
                    {
                      type: 'Personal Profiles',
                      ideas: 'Travel photos, hobby shots, family moments, or a motivational quote that represents you. Avoid stock photos — authenticity performs better on personal profiles. Change seasonally or after major life events.',
                    },
                    {
                      type: 'Events & Launches',
                      ideas: 'Display event name, date, and time prominently in the upper-center area. Use bold, high-contrast fonts. Add a brief CTA ("Register Now", "Tickets Available"). This turns your cover into a free advertisement for anyone visiting the page.',
                    },
                    {
                      type: 'Non-profits & Causes',
                      ideas: 'Lead with mission impact — "We\'ve planted 1 million trees" performs better than a generic logo. For fundraising campaigns, add a donation CTA and progress indicator. People-first imagery (real beneficiaries, volunteers) outperforms abstract graphics.',
                    },
                  ].map(({ type, ideas }) => (
                    <div key={type} className="rounded-xl border border-border p-3 space-y-1.5">
                      <p className="font-semibold text-text-main text-xs">{type}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{ideas}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">How to Upload a Facebook Cover Photo</h2>
                <ol className="space-y-2 pl-1">
                  {[
                    { step: '1. Create your cover', desc: 'Use this tool to design at 851×315px. Choose a template, add your text, and click Download.' },
                    { step: '2. Go to your profile or Page', desc: 'On desktop, navigate to your Facebook profile or Page. On mobile, open the Facebook app and go to your profile.' },
                    { step: '3. Hover over the cover area', desc: 'On desktop, move your cursor to the cover photo area. A camera icon or "Update cover photo" button will appear in the bottom-right of the cover.' },
                    { step: '4. Upload your file', desc: 'Click "Update cover photo" (profile) or "Change cover" (Page) → Upload photo → select your 851×315px file.' },
                    { step: '5. Adjust and save', desc: 'Facebook lets you reposition the image. Drag to center your key content. Click "Save changes" when done.' },
                  ].map(({ step, desc }) => (
                    <div key={step} className="flex gap-3">
                      <span className="font-semibold text-text-main text-xs shrink-0 pt-0.5">{step}</span>
                      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </ol>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Optimize Your Facebook Cover Before Uploading</h2>
                <p>Facebook re-compresses images on upload, which reduces quality — especially for JPGs with gradients or complex backgrounds. To minimize quality loss: upload at exactly 851×315px (this tool handles this automatically), use JPG for photos and PNG for graphics with flat colors or text, and keep file size under 1MB.</p>
                <p>If your exported cover is over 1MB, use <Link href="https://compressimg.pro/compress-image-for-facebook" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg — Compress for Facebook</Link> to reduce the file size before uploading. Starting with an optimized file gives Facebook less reason to apply heavy compression, preserving sharpness.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    { q: 'What size is a Facebook cover photo?', a: 'The recommended Facebook cover photo size is 851×315 pixels. On desktop, Facebook displays it at 820×312px. On mobile, it crops to 640×360px showing the center of your image. This tool exports at exactly 851×315px.' },
                    { q: 'Is this Facebook cover maker free?', a: 'Yes, completely free. No account required, no watermark on downloads. Create and download unlimited Facebook cover photos.' },
                    { q: 'How do I change my Facebook cover photo?', a: 'On your profile: hover over the cover area → click "Update cover photo" → Upload photo → adjust position → Save. On a Page: hover cover → Change cover → Upload photo → Save changes.' },
                    { q: 'What is the safe zone for Facebook cover photos?', a: 'For personal profiles, keep key content in the upper-right and center — the profile photo overlaps the bottom-left corner. For Pages, the profile photo is centered at the bottom, so keep important content in the upper area.' },
                    { q: 'What file format does Facebook accept for cover photos?', a: 'Facebook accepts JPG and PNG (max 100MB, though files under 1MB upload faster and compress less). Use JPG for photos and PNG for graphics, logos, or covers with text.' },
                    { q: 'How do I compress my Facebook cover photo?', a: 'Use CompressImg.pro/compress-image-for-facebook to reduce your file size before uploading. Facebook applies its own compression on upload — starting with a smaller, well-optimized file reduces how much additional compression Facebook applies.' },
                    { q: 'Can I use a video as my Facebook cover?', a: 'Yes, Facebook Pages support cover videos (20–90 seconds, recommended 820×312px at 25fps). Personal profiles do not support cover videos. This tool creates static image covers only.' },
                    { q: 'Can I upload my own background photo?', a: 'Yes. Click "Upload background image" to use your own photo as the canvas background. All processing runs locally in your browser — your images never leave your device.' },
                    { q: 'Why does my Facebook cover look blurry after uploading?', a: 'Facebook recompresses all uploaded images. To minimize blur: upload at exactly 851×315px, keep file size under 1MB, and use JPG quality 85–92%. Uploading a larger file than needed forces Facebook to resize and compress more aggressively.' },
                    { q: 'How often should I update my Facebook cover?', a: 'For business Pages, update with each major campaign, season, or product launch. For personal profiles, change whenever you want — there is no penalty for frequent updates. A fresh cover signals an active, maintained page.' },
                  ].map(item => <FAQItem key={item.q} question={item.q} answer={item.a} />)}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Social Media Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { href: '/instagram-post-maker', title: 'Instagram Post Maker', desc: '1080×1080px Instagram posts, free.' },
                    { href: '/twitter-header-maker', title: 'Twitter Header Maker', desc: '1500×500px Twitter/X header.' },
                    { href: '/linkedin-banner-maker', title: 'LinkedIn Banner Maker', desc: '1584×396px LinkedIn profile banner.' },
                    { href: '/youtube-banner-maker', title: 'YouTube Banner Maker', desc: '2560×1440px YouTube channel art.' },
                    { href: '/og-image-generator', title: 'OG Image Generator', desc: '1200×630px Open Graph images.' },
                    { href: '/youtube-thumbnail-maker', title: 'YouTube Thumbnail Maker', desc: '1280×720px YouTube thumbnails.' },
                  ].map(item => (
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
