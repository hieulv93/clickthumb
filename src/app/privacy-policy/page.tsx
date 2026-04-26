export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ClickThumb.com',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-sm text-text-muted leading-relaxed">
        <h1 className="text-2xl font-bold text-text-main">Privacy Policy</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          ClickThumb.com processes all images entirely in your browser. No image data is ever
          uploaded to our servers. We use Google Analytics to collect anonymized usage statistics
          and Google AdSense to display advertisements.
        </p>
        <h2 className="text-base font-semibold text-text-main pt-2">Data We Collect</h2>
        <p>
          We do not collect personal data. Google Analytics collects anonymized data including pages
          visited, time on site, and device type. Google AdSense may use cookies to serve relevant
          ads.
        </p>
        <h2 className="text-base font-semibold text-text-main pt-2">Your Images</h2>
        <p>
          All image processing happens locally in your browser using JavaScript. Your images are
          never sent to any server and are not stored anywhere outside your device.
        </p>
        <h2 className="text-base font-semibold text-text-main pt-2">Contact</h2>
        <p>For privacy questions, contact us at privacy@click-thumb.com</p>
      </div>
    </main>
  )
}
