import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LinkedIn Banner Size Guide 2026 — Dimensions, Design Tips & Examples',
  description: 'The exact LinkedIn banner size is 1584×396 pixels. Learn the safe zones, what to include, design tips by profession, and how to upload. Free LinkedIn banner maker included.',
  alternates: { canonical: 'https://click-thumb.com/blog/linkedin-banner-size-guide/' },
}

export default function LinkedInBannerSizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">LinkedIn Banner Size Guide 2026</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-07">May 7, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            LinkedIn Banner Size Guide 2026 — Dimensions, Design Tips & Examples
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Your LinkedIn background banner is one of the most underutilized profile elements.
            Most professionals leave the default blue gradient — which means anyone who upgrades
            theirs immediately stands out. Here are the exact dimensions, safe zones, and design
            principles to make your LinkedIn banner work for you.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">LinkedIn Banner Size: Exact Specifications</h2>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-2">
              <p className="font-semibold text-text-main mb-3">LinkedIn background banner specifications (2026)</p>
              {[
                ['Recommended size', '1584 × 396 pixels'],
                ['Aspect ratio', '4:1 (very wide landscape)'],
                ['Minimum size', '1192 × 220 pixels'],
                ['File format', 'JPG or PNG'],
                ['Max file size', '8 MB'],
                ['Mobile crop', 'Sides cropped — center ~60% safe on mobile'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-text-muted">
                  <span className="font-medium text-text-main w-44 shrink-0">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Safe Zones: What Gets Cropped</h2>
            <p className="text-text-muted">
              LinkedIn displays the banner differently on desktop and mobile — both the profile
              picture overlap and the mobile crop create areas where content should not be placed.
            </p>
            <div className="space-y-3">
              {[
                {
                  zone: 'Bottom-left corner (profile picture)',
                  risk: 'High',
                  desc: 'Your circular profile picture overlaps the bottom-left of the banner. On desktop, this covers roughly a 170×170px area. Keep all logos, text, and key visuals away from the bottom-left quadrant.',
                },
                {
                  zone: 'Left and right edges (~200px each side)',
                  risk: 'Medium',
                  desc: "On mobile, LinkedIn crops the banner horizontally, showing only the center portion. Any content in the outer ~200px on each side may be invisible to mobile visitors — which is a large portion of LinkedIn's traffic.",
                },
                {
                  zone: 'Center 60% of the banner',
                  risk: 'Safe',
                  desc: 'The center 950px (roughly) is safe on both desktop and mobile. Place all critical content — name, tagline, logo, CTA — in this zone.',
                },
              ].map(({ zone, risk, desc }) => (
                <div key={zone} className="border border-border rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-text-main text-sm">{zone}</p>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${risk === 'High' ? 'bg-red-50 text-red-600' : risk === 'Medium' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>
                      {risk === 'Safe' ? '✅ Safe' : `⚠️ Risk: ${risk}`}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Personal Profile Banner vs. LinkedIn Company Page Banner</h2>
            <p className="text-text-muted">
              LinkedIn banners serve different purposes on personal profiles versus company pages.
              The dimensions are identical (1584×396), but the safe zones and content strategy
              differ based on where the profile photo appears and how each profile type is used.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  type: 'Personal Profile Banner',
                  points: [
                    'Profile photo: circular avatar overlaps bottom-left corner',
                    'Safe zone: center-right 70% of the banner',
                    'Primary purpose: personal branding — who you are and what you do',
                    'Content: name, title, value proposition, website or LinkedIn URL',
                    'Update when: role, project, or professional status changes',
                    'Audience: recruiters, peers, potential clients, collaborators',
                  ],
                },
                {
                  type: 'Company Page Banner',
                  points: [
                    'Profile photo: company logo, left-centered at the bottom',
                    'Safe zone: center-right 60% — slightly more overlap than personal',
                    'Primary purpose: brand visibility and recruitment marketing',
                    'Content: product tagline, current campaign, career CTA, company values',
                    'Update when: campaigns, product launches, or major company news',
                    'Audience: potential hires, customers, investors, media, partners',
                  ],
                },
              ].map(({ type, points }) => (
                <div key={type} className="border border-border rounded-xl p-4 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{type}</p>
                  <ul className="space-y-1">
                    {points.map((p) => (
                      <li key={p} className="text-xs text-text-muted flex gap-1.5">
                        <span className="text-primary shrink-0 mt-0.5">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-text-muted">
              For personal profiles, design around your professional narrative — who you are and
              what value you bring. For company pages, align the banner with current marketing
              initiatives and update it with each major campaign. Both benefit from any
              customization over the default blue gradient — the bar is low.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What to Put in Your LinkedIn Banner</h2>
            <p className="text-text-muted">
              LinkedIn is a professional context — the banner should reinforce your credibility
              and communicate your value proposition quickly. Here is what works by profile type:
            </p>
            <div className="space-y-3">
              {[
                { type: 'Job seeker / professional', content: 'Your title and industry, a brief value statement ("10 years building enterprise SaaS products"), and optionally a link to your portfolio. Clean, minimal, professional color.' },
                { type: 'Founder / CEO', content: 'Company logo, product tagline, and current status. "We help [target customer] do [outcome]." Treat it like a pitch deck header slide.' },
                { type: 'Freelancer / consultant', content: 'What you do, who you do it for, and how to hire you. "UX Designer for B2B SaaS → Available for projects → email@domain.com". Specific and actionable.' },
                { type: 'Content creator / thought leader', content: 'Publication name or newsletter, posting frequency, and the topics you cover. "Writing about AI, startups, and product — every Tuesday."' },
              ].map(({ type, content }) => (
                <div key={type} className="border border-border rounded-xl p-4 space-y-1">
                  <p className="font-semibold text-text-main text-sm">{type}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Design Principles for LinkedIn Banners</h2>
            <div className="space-y-3">
              {[
                { tip: 'Professional color palette', desc: "LinkedIn's audience expects professionalism. Avoid neon colors, loud gradients, or heavily stylized graphics unless your brand is explicitly creative. Navy, slate, deep green, and charcoal perform well. Match your company's or personal brand colors." },
                { tip: 'Minimal, readable text', desc: 'The banner is very wide and not very tall. Text must be large enough to read at 600px width (mobile). Stick to one headline and one supporting line maximum. Smaller text is invisible at mobile size.' },
                { tip: 'Coordinate with your profile photo', desc: "Your profile photo sits against the bottom-left of the banner. A solid color background that contrasts with your photo's background makes the avatar pop. This small detail significantly improves profile aesthetics." },
                { tip: 'Include a clear purpose signal', desc: 'Anyone visiting your LinkedIn should understand what you do within 3 seconds. The banner is your first impression — use it to confirm your specialization rather than leaving it generic.' },
              ].map(({ tip, desc }) => (
                <div key={tip} className="flex gap-3">
                  <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                  <div>
                    <p className="font-semibold text-text-main text-sm">{tip}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Step-by-Step: Make a LinkedIn Banner Free</h2>
            <p className="text-text-muted">
              <Link href="/linkedin-banner-maker" className="text-primary underline">
                ClickThumb&apos;s LinkedIn Banner Maker
              </Link>{' '}
              opens at 1584×396 — the exact LinkedIn banner dimensions — with professional
              templates already designed around the safe zones.
            </p>
            <div className="space-y-3">
              {[
                { step: 'Step 1', title: 'Open LinkedIn Banner Maker', desc: 'Canvas loads at 1584×396. Choose a template that matches your professional context — minimal, corporate, or creative.' },
                { step: 'Step 2', title: 'Edit your headline', desc: 'Replace the template headline with your name, title, or value statement. Position text in the center-right of the canvas, away from the profile picture zone on the bottom-left.' },
                { step: 'Step 3', title: 'Set background', desc: 'Choose a solid professional color or upload a subtle background image. Ensure strong contrast between the background and your text.' },
                { step: 'Step 4', title: 'Download and upload to LinkedIn', desc: "Export as JPG (1584×396). On LinkedIn, go to your profile → Edit (pencil icon on the banner) → Upload photo. LinkedIn previews the crop before saving." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="border border-border rounded-xl p-5 space-y-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">{step}</p>
                  <p className="font-semibold text-text-main">{title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the LinkedIn banner size in 2026?', a: '1584×396 pixels (4:1 aspect ratio). This is the recommended size for LinkedIn background photos. Design at this resolution to ensure the banner displays at full quality on desktop.' },
                { q: 'What part of the LinkedIn banner is safe from cropping?', a: "The center 60% of the banner (~950px wide) is safe on both desktop and mobile. Avoid placing important content in the bottom-left corner (profile picture zone) and the outer edges (~200px on each side) which are cropped on mobile." },
                { q: 'Does the LinkedIn banner affect profile visibility?', a: "The banner doesn't affect LinkedIn's search algorithm directly. However, a professional banner improves first impressions, which increases connection acceptance rates, InMail response rates, and recruiter credibility." },
                { q: 'How often should I update my LinkedIn banner?', a: 'Update it when your role, focus, or status changes significantly — new job, new product launch, new specialization. Also update it when you have a major announcement (speaking at a conference, new book, product launch).' },
                { q: 'What file format is best for LinkedIn banners?', a: "PNG for banners with text, logos, or sharp graphics — it preserves edges without compression artifacts. JPG for photo-based banners. Both formats are accepted up to 8MB, but aim for under 2MB for faster loading." },
                { q: 'How do I make my LinkedIn banner stand out from the default?', a: "LinkedIn's default is a flat blue gradient. Any non-default banner immediately stands out. For maximum differentiation, use a dark background (navy, charcoal, dark green) with bold white text, or a professional brand-color design. Avoid generic stock photo backgrounds — they blend in with other attempted custom banners. The most effective banners are simple and specific." },
                { q: 'Should I include my contact information on my LinkedIn banner?', a: "Include your website URL if you have one — it is the only place on LinkedIn where clicking a link takes someone directly off LinkedIn to your site. Avoid putting your email address directly on the banner; use the Contact section in your profile for that. A website URL in the banner is actionable and can serve as an indirect conversion tracker for profile traffic." },
                { q: 'Can I use the same banner design across LinkedIn, Twitter, and other social profiles?', a: "The dimensions differ across platforms (LinkedIn 1584×396, Twitter 1500×500, Facebook 851×315), so you cannot reuse the same image directly. However, use the same design system — same colors, same font, same core message — and adapt it to each platform's dimensions. Brand consistency across profiles strengthens recognition and signals professional attention to detail." },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{q}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-surface border border-border p-6 space-y-3">
            <h2 className="text-xl font-bold text-text-main">Make Your LinkedIn Banner Now</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Free, no signup, no watermark. Canvas pre-set to 1584×396 with professional
              templates. Design your banner and download in under two minutes.
            </p>
            <Link href="/linkedin-banner-maker" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Open LinkedIn Banner Maker →
            </Link>
          </section>

          <div className="border-t border-border pt-6 text-sm text-text-muted">
            <p>More guides: <Link href="/blog" className="text-primary hover:underline">ClickThumb Blog →</Link></p>
          </div>
        </div>
      </article>
    </main>
  )
}
