export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ClickThumb.pro',
}

export default function TermsPage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-sm text-text-muted leading-relaxed">
        <h1 className="text-2xl font-bold text-text-main">Terms of Service</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          By using ClickThumb.pro, you agree to these terms. The service is provided free of
          charge for personal and commercial use.
        </p>
        <h2 className="text-base font-semibold text-text-main pt-2">Acceptable Use</h2>
        <p>
          You may use the tools for lawful purposes only. You retain full ownership of any images
          you create using this tool.
        </p>
        <h2 className="text-base font-semibold text-text-main pt-2">No Warranty</h2>
        <p>
          The service is provided as-is without any warranty. We are not liable for any loss of
          data or damages resulting from use of this service.
        </p>
        <h2 className="text-base font-semibold text-text-main pt-2">Contact</h2>
        <p>For questions, contact us at hello@clickthumb.pro</p>
      </div>
    </main>
  )
}
