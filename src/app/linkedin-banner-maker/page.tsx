'use client'

import CanvasToolClient from '@/components/canvas/CanvasToolClient'
import FAQItem from '@/components/tool/FAQItem'
import { PLATFORMS } from '@/lib/platforms'
import { LINKEDIN_TEMPLATES } from '@/lib/templates'
import Link from 'next/link'

const platform = PLATFORMS.linkedin

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'LinkedIn Banner Maker', url: 'https://click-thumb.com/linkedin-banner-maker/', applicationCategory: 'DesignApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free online LinkedIn banner maker. Create 1584×396 profile banners with professional templates. No signup, instant download.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What size is a LinkedIn banner?', acceptedAnswer: { '@type': 'Answer', text: 'The recommended LinkedIn profile banner size is 1584×396 pixels (4:1 ratio). LinkedIn displays a portion of this image — the safe zone is approximately the center 60% of the width.' } },
      { '@type': 'Question', name: 'Is this LinkedIn banner maker free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No account required, no watermark. Download your LinkedIn banner instantly.' } },
      { '@type': 'Question', name: 'How do I upload a LinkedIn banner?', acceptedAnswer: { '@type': 'Answer', text: 'Go to your LinkedIn profile → click the Edit (pencil) icon → click Edit background photo → select your file → adjust position → Apply.' } },
      { '@type': 'Question', name: 'What should I put on my LinkedIn banner?', acceptedAnswer: { '@type': 'Answer', text: 'Your name and current role, your company or niche, a brief value proposition, and optionally your website or LinkedIn URL. Keep it professional and on-brand.' } },
      { '@type': 'Question', name: 'What is the LinkedIn banner safe zone?', acceptedAnswer: { '@type': 'Answer', text: 'The profile photo overlaps the bottom-left corner. Keep text and logos in the center-right area. On mobile, LinkedIn crops the banner more aggressively — test your design on a phone before publishing.' } },
      { '@type': 'Question', name: 'What file format does LinkedIn accept?', acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn accepts JPG, PNG, and GIF for banners (max 8MB). JPG is recommended for photos and professional designs.' } },
      { '@type': 'Question', name: 'How often should I update my LinkedIn banner?', acceptedAnswer: { '@type': 'Answer', text: 'Update when you change jobs, launch a new project, or rebrand. A current, professional banner signals that you actively maintain your LinkedIn presence.' } },
      { '@type': 'Question', name: 'Can I use my company logo on the LinkedIn banner?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Upload your background image first, then the logo text or image can be added as an overlay. For pixel-perfect logo placement, use this tool\'s background image upload feature with a pre-prepared design.' } },
    ] },
  ],
}

export default function LinkedInBannerMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">LinkedIn Banner Maker</h1>
            <p className="text-text-muted text-sm sm:text-base">Free online — 1584×396px — no signup, no watermark</p>
          </div>

          <CanvasToolClient platform={platform} templates={LINKEDIN_TEMPLATES} downloadFilename="click-thumb-linkedin-banner.jpg" exportLabel="Download Banner (1584×396)">
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">LinkedIn Banner Size — Exact Specifications</h2>
                <p>The LinkedIn profile banner (also called background photo) is 1584×396 pixels at a 4:1 aspect ratio. LinkedIn displays this image behind your profile photo and name. The safe zone is roughly the center-right 70% of the image — the bottom-left corner is always covered by your circular profile photo and the bottom portion may be cut off on mobile.</p>
                <p>This tool exports your banner at exactly 1584×396px — the correct size for LinkedIn with no re-sizing artifacts.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Why Your LinkedIn Banner Matters</h2>
                <p>Your LinkedIn banner is one of the most underused real estate on your profile. Most users leave the default blue gradient — which is a missed opportunity. A customized banner immediately differentiates your profile and signals professionalism. Recruiters and potential clients form an impression of your profile within seconds; a strong banner reinforces your personal brand before they read a single word of your experience.</p>
                <p>Studies show that LinkedIn profiles with custom banners get more profile views and connection requests than those with the default background. A well-designed banner that includes your role, company, and a clear value proposition acts as a silent pitch — visible every time someone lands on your profile.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">What to Put on Your LinkedIn Banner</h2>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li><strong className="text-text-main">Job seekers:</strong> Name, target role, &quot;Open to opportunities&quot;, key skills</li>
                  <li><strong className="text-text-main">Founders / freelancers:</strong> Company name, what you do, website URL</li>
                  <li><strong className="text-text-main">Professionals:</strong> Current company, specialization, years of experience</li>
                  <li><strong className="text-text-main">Thought leaders:</strong> Topic you write about, media features, speaking engagements</li>
                </ul>
                <p>Keep text in the center-right portion of the banner. The left side is partially obscured by your profile photo on both desktop and mobile. Use high contrast colors — dark background with white text or white background with dark text — for maximum readability.</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">Compress Your LinkedIn Banner</h2>
                <p>LinkedIn accepts banners up to 8MB. A 1584×396px JPG at 92% quality is typically 100–300KB — well within the limit. If you need to reduce the file size, use <Link href="https://compressimg.pro/compress-image-for-linkedin" className="text-primary hover:underline" target="_blank" rel="noopener">CompressImg — Compress for LinkedIn</Link> for lossless compression.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    {q:'What size is a LinkedIn banner?',a:'The LinkedIn profile banner is 1584×396 pixels (4:1 ratio). This tool exports at exactly this size.'},
                    {q:'Is this LinkedIn banner maker free?',a:'Yes, completely free. No account required, no watermark. Download instantly.'},
                    {q:'How do I upload my LinkedIn banner?',a:'LinkedIn profile → click the Edit pencil icon → Edit background photo → upload file → adjust crop → Apply.'},
                    {q:'What is the safe zone on a LinkedIn banner?',a:'Keep important content in the center-right 70% of the image. The bottom-left is covered by your profile photo. On mobile, the banner is cropped more aggressively — center your key message.'},
                    {q:'What format does LinkedIn accept?',a:'LinkedIn accepts JPG, PNG, and GIF (max 8MB). JPG is recommended for the best quality-to-size ratio.'},
                    {q:'Should I put my contact info on my LinkedIn banner?',a:'You can include your website or email, but LinkedIn\'s contact section already has this. Use the banner space for your role and value proposition — save contact details for the About section.'},
                    {q:'Can I use my own photo as background?',a:'Yes. Click Upload image to use a custom photo or branded background. Processing is entirely local — nothing is sent to a server.'},
                    {q:'How does the LinkedIn banner look on mobile?',a:'On mobile, LinkedIn crops the banner significantly — the visible area is roughly the center 50%. Always test your banner on a phone before publishing. Keep the most important text near the center.'},
                  ].map(item=><FAQItem key={item.q} question={item.q} answer={item.a}/>)}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">More Free Image Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[{href:'/youtube-thumbnail-maker',title:'YouTube Thumbnail Maker',desc:'1280×720px thumbnails with templates.'},{href:'/twitter-header-maker',title:'Twitter Header Maker',desc:'1500×500px Twitter/X header, free.'},{href:'/facebook-cover-maker',title:'Facebook Cover Maker',desc:'851×315px Facebook cover photo.'}].map(item=>(
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
