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
  fortnite: { id: 'fortnite', name: 'Fortnite Thumbnail', width: 1280, height: 720, route: '/fortnite-thumbnail-maker' },
  roblox: { id: 'roblox', name: 'Roblox Thumbnail', width: 1280, height: 720, route: '/roblox-thumbnail-maker' },
  youtube_banner: { id: 'youtube_banner', name: 'YouTube Banner', width: 2560, height: 1440, route: '/youtube-banner-maker' },
  valorant: { id: 'valorant', name: 'Valorant Thumbnail', width: 1280, height: 720, route: '/valorant-thumbnail-maker' },
  among_us: { id: 'among_us', name: 'Among Us Thumbnail', width: 1280, height: 720, route: '/among-us-thumbnail-maker' },
  apex_legends: { id: 'apex_legends', name: 'Apex Legends Thumbnail', width: 1280, height: 720, route: '/apex-legends-thumbnail-maker' },
  cod: { id: 'cod', name: 'Call of Duty Thumbnail', width: 1280, height: 720, route: '/call-of-duty-thumbnail-maker' },
  gta: { id: 'gta', name: 'GTA Thumbnail', width: 1280, height: 720, route: '/gta-thumbnail-maker' },
  cs2: { id: 'cs2', name: 'CS2 Thumbnail', width: 1280, height: 720, route: '/cs2-thumbnail-maker' },
  pubg: { id: 'pubg', name: 'PUBG Thumbnail', width: 1280, height: 720, route: '/pubg-thumbnail-maker' },
  tiktok: { id: 'tiktok', name: 'TikTok Cover', width: 1080, height: 1920, route: '/tiktok-thumbnail-maker' },
  twitch: { id: 'twitch', name: 'Twitch Banner', width: 1920, height: 1080, route: '/twitch-banner-maker' },
}

export const CANVAS_DISPLAY_WIDTH = 640
export const CANVAS_DISPLAY_HEIGHT_MAX = 640

export function getDisplayDimensions(platform: Platform): { w: number; h: number } {
  const scaleByWidth = CANVAS_DISPLAY_WIDTH / platform.width
  const hByWidth = Math.round(platform.height * scaleByWidth)
  if (hByWidth <= CANVAS_DISPLAY_HEIGHT_MAX) {
    return { w: CANVAS_DISPLAY_WIDTH, h: hByWidth }
  }
  // Portrait/tall: cap by height, derive width
  const scaleByHeight = CANVAS_DISPLAY_HEIGHT_MAX / platform.height
  return { w: Math.round(platform.width * scaleByHeight), h: CANVAS_DISPLAY_HEIGHT_MAX }
}

export function getDisplayHeight(platform: Platform): number {
  return getDisplayDimensions(platform).h
}
