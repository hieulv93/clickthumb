import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — ClickThumb',
  description: 'Terms of Service for ClickThumb.com — free browser-based thumbnail and social media image maker.',
  alternates: { canonical: 'https://click-thumb.com/terms/' },
}

export default function TermsPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-main mb-2">Terms of Service</h1>
        <p className="text-text-muted text-sm mb-8">Last updated: May 2026</p>

        <div className="space-y-8 text-sm text-text-muted leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ClickThumb.com (&quot;the Service&quot;), you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use the
              Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">2. Description of Service</h2>
            <p>
              ClickThumb.com provides a free, browser-based toolkit for creating thumbnails and
              social media images. Tools include YouTube thumbnail makers, gaming thumbnail makers,
              Instagram post makers, Twitter header makers, LinkedIn banner makers, and more. All
              canvas editing and image export occurs locally in your web browser — no images are
              uploaded to any server.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">3. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes. You must not use the Service to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Create images using content you do not own or have the right to use</li>
              <li>Attempt to reverse-engineer, disrupt, or overload the Service</li>
              <li>Use automated scripts or bots to abuse the Service</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">4. Intellectual Property</h2>
            <p>
              You retain full ownership of all thumbnails and images you create using this Service.
              We make no claim to any content you produce through ClickThumb.com. The Service
              software, design, templates, and code are owned by ClickThumb.com and protected by
              applicable intellectual property laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">5. No Warranty — Browser-Only Processing</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind. Because all
              canvas editing and export occurs in your browser, the quality and performance of results
              may vary depending on your device, browser version, and image content. We do not
              guarantee specific output quality or compatibility with third-party platforms.
            </p>
            <p>
              We are not responsible for any data loss or other issues arising from use of the
              Service. Always keep a backup of your original assets.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ClickThumb.com shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including loss of
              data, arising from your use of or inability to use the Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">7. Advertising</h2>
            <p>
              The Service is free and supported by advertising through Google AdSense. Ads are
              displayed after you receive value from the Service (after exporting an image). We
              comply with Google AdSense program policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes take effect when
              posted on this page. Continued use of the Service after changes are posted constitutes
              your acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">9. Governing Law</h2>
            <p>
              These Terms are governed by applicable law. Any disputes will be resolved in the
              appropriate jurisdiction.
            </p>
          </section>

        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/youtube-thumbnail-maker" className="text-primary text-sm hover:underline">
            ← Back to YouTube Thumbnail Maker
          </Link>
        </div>
      </div>
    </main>
  )
}
