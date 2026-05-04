import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — ClickThumb',
  description:
    'Privacy Policy for ClickThumb.com — learn how we handle your data. Your images are never uploaded to any server. All canvas editing happens 100% in your browser.',
  alternates: { canonical: 'https://click-thumb.com/privacy-policy/' },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-main mb-2">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-8">Last updated: May 2026</p>

        <div className="space-y-8 text-sm text-text-muted leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">Overview</h2>
            <p>
              ClickThumb.com (&quot;we&quot;, &quot;our&quot;, or &quot;the Service&quot;) is a free,
              browser-based thumbnail and social media image creator available at{' '}
              <Link href="https://click-thumb.com" className="text-primary hover:underline">
                click-thumb.com
              </Link>
              . Your privacy is important to us. This policy explains what data we collect and how we use it.
            </p>
            <p className="font-medium text-text-main">
              Core principle: your images are never uploaded to any server. All canvas editing and
              image export happens 100% in your browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">1. Image Data</h2>
            <p>
              We do <strong>not</strong> collect, store, transmit, or process any images, backgrounds,
              or canvas exports you create using this tool. All canvas rendering and image export is
              performed locally in your browser using JavaScript and the HTML5 Canvas API. Your image
              files never leave your device.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">2. Analytics Data (Google Analytics 4)</h2>
            <p>
              We use Google Analytics 4 (GA4) to understand how visitors use our site. GA4 collects
              anonymized usage data including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Pages visited and time spent</li>
              <li>Country and language (not precise location)</li>
              <li>Device type and browser</li>
              <li>Custom events: tool opened, template selected, thumbnail exported (tool name and
              file size only — no image content)</li>
            </ul>
            <p>
              GA4 data is processed by Google LLC under their{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>
              . We have enabled IP anonymization. No personally identifiable information is collected
              through analytics.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">3. Advertising (Google AdSense)</h2>
            <p>
              We display advertisements provided by Google AdSense. Google may use cookies and similar
              technologies to show personalized ads based on your interests. You can opt out of
              personalized advertising via{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Ad Settings
              </a>
              .
            </p>
            <p>
              Advertisements are only shown after you have used a tool and exported an image
              (post-value delivery). We do not place ads near download buttons to prevent accidental
              clicks.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">4. Cookies</h2>
            <p>
              We do not set any first-party cookies. Third-party cookies may be set by Google
              Analytics and Google AdSense for analytics and advertising purposes. You can manage
              cookie preferences through your browser settings or via{' '}
              <a
                href="https://optout.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                aboutads.info
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">5. Data Retention</h2>
            <p>
              Since we do not collect personal data or image data, there is no user data for us to
              retain or delete. Analytics data is retained in Google Analytics for 14 months (GA4
              default), after which it is automatically deleted.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">6. Children&apos;s Privacy</h2>
            <p>
              ClickThumb.com is not directed at children under 13. We do not knowingly collect any
              personal information from children. If you believe a child has provided personal
              information through our service, please contact us.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated date. Continued use of the Service after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-text-main">8. Contact</h2>
            <p>
              For privacy-related questions, contact us at{' '}
              <a href="mailto:support@click-thumb.com" className="text-primary hover:underline">
                support@click-thumb.com
              </a>{' '}
              or via our{' '}
              <Link href="/contact" className="text-primary hover:underline">
                Contact page
              </Link>
              .
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
