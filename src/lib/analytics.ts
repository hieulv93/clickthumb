declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean>

function track(event: string, params?: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, params)
  }
}

export const analytics = {
  imageUploaded: (fileType: string, fileSizeKb: number) =>
    track('image_uploaded', { file_type: fileType, file_size_kb: Math.round(fileSizeKb) }),

  thumbnailExported: (platform: string, template: string, outputKb: number) =>
    track('thumbnail_exported', { platform, template, output_kb: Math.round(outputKb) }),

  templateSelected: (platform: string, templateId: string) =>
    track('template_selected', { platform, template_id: templateId }),

  exportError: (errorType: string) => track('export_error', { error_type: errorType }),
}
