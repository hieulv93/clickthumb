export interface Platform {
  id: string
  name: string
  width: number
  height: number
  route: string
}

export const PLATFORMS: Record<string, Platform> = {
  youtube: { id: 'youtube', name: 'YouTube Thumbnail', width: 1280, height: 720, route: '/youtube-thumbnail-maker' },
  instagram: { id: 'instagram', name: 'Instagram Post', width: 1080, height: 1080, route: '/instagram-post-maker' },
  instagram_story: { id: 'instagram_story', name: 'Instagram Story', width: 1080, height: 1920, route: '/instagram-post-maker' },
  twitter: { id: 'twitter', name: 'Twitter Header', width: 1500, height: 500, route: '/twitter-header-maker' },
  linkedin: { id: 'linkedin', name: 'LinkedIn Banner', width: 1584, height: 396, route: '/linkedin-banner-maker' },
  facebook: { id: 'facebook', name: 'Facebook Cover', width: 851, height: 315, route: '/facebook-cover-maker' },
  og: { id: 'og', name: 'OG Image', width: 1200, height: 630, route: '/og-image-generator' },
  gaming: { id: 'gaming', name: 'Gaming Thumbnail', width: 1280, height: 720, route: '/gaming-thumbnail-maker' },
  minecraft: { id: 'minecraft', name: 'Minecraft Thumbnail', width: 1280, height: 720, route: '/minecraft-thumbnail-maker' },
  youtube_banner: { id: 'youtube_banner', name: 'YouTube Banner', width: 2560, height: 1440, route: '/youtube-banner-maker' },
}

export const CANVAS_DISPLAY_WIDTH = 640
export function getDisplayHeight(platform: Platform): number {
  return Math.round((CANVAS_DISPLAY_WIDTH / platform.width) * platform.height)
}
