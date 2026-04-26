export interface TextPreset {
  text: string
  fontSize: number
  fontFamily: string
  fill: string
  stroke?: string
  strokeWidth?: number
  fontWeight: string
  left: number
  top: number
  originX: 'left' | 'center' | 'right'
  originY: 'top' | 'center' | 'bottom'
  textAlign: 'left' | 'center' | 'right'
  width: number
}

export interface Template {
  id: string
  name: string
  platform: string
  bgColor: string
  bgGradient?: { from: string; to: string; angle: number }
  texts: TextPreset[]
}

export const YOUTUBE_TEMPLATES: Template[] = [
  {
    id: 'yt-dark',
    name: 'Dark Impact',
    platform: 'youtube',
    bgColor: '#0a0a0a',
    texts: [
      {
        text: 'YOUR TITLE HERE',
        fontSize: 96,
        fontFamily: 'Impact',
        fill: '#ffffff',
        stroke: '#ff0000',
        strokeWidth: 3,
        fontWeight: 'bold',
        left: 640,
        top: 300,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        width: 1100,
      },
      {
        text: 'Subtitle text here',
        fontSize: 52,
        fontFamily: 'Arial',
        fill: '#cccccc',
        fontWeight: 'normal',
        left: 640,
        top: 430,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        width: 1000,
      },
    ],
  },
  {
    id: 'yt-bright',
    name: 'Bright & Bold',
    platform: 'youtube',
    bgColor: '#FFD700',
    texts: [
      {
        text: 'YOUR TITLE',
        fontSize: 110,
        fontFamily: 'Arial',
        fill: '#111111',
        fontWeight: 'bold',
        left: 640,
        top: 280,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        width: 1100,
      },
      {
        text: 'click to edit subtitle',
        fontSize: 48,
        fontFamily: 'Arial',
        fill: '#333333',
        fontWeight: 'normal',
        left: 640,
        top: 430,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        width: 1000,
      },
    ],
  },
  {
    id: 'yt-minimal',
    name: 'Clean Minimal',
    platform: 'youtube',
    bgColor: '#1a1a2e',
    texts: [
      {
        text: 'TITLE',
        fontSize: 130,
        fontFamily: 'Arial',
        fill: '#e94560',
        fontWeight: 'bold',
        left: 640,
        top: 260,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        width: 1100,
      },
      {
        text: 'your subtitle goes here',
        fontSize: 50,
        fontFamily: 'Arial',
        fill: '#ffffff',
        fontWeight: 'normal',
        left: 640,
        top: 430,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        width: 900,
      },
    ],
  },
]

// ─── Instagram (1080×1080) ───────────────────────────────────────────────────
export const INSTAGRAM_TEMPLATES: Template[] = [
  {
    id: 'ig-vibrant',
    name: 'Vibrant',
    platform: 'instagram',
    bgColor: '#7C3AED',
    texts: [
      { text: 'YOUR MESSAGE', fontSize: 120, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 540, top: 440, originX: 'center', originY: 'center', textAlign: 'center', width: 960 },
      { text: 'tap to edit subtitle', fontSize: 52, fontFamily: 'Arial', fill: '#e9d5ff', fontWeight: 'normal', left: 540, top: 600, originX: 'center', originY: 'center', textAlign: 'center', width: 900 },
    ],
  },
  {
    id: 'ig-minimal',
    name: 'Clean Minimal',
    platform: 'instagram',
    bgColor: '#ffffff',
    texts: [
      { text: 'YOUR TITLE', fontSize: 110, fontFamily: 'Arial', fill: '#111827', fontWeight: 'bold', left: 540, top: 420, originX: 'center', originY: 'center', textAlign: 'center', width: 920 },
      { text: 'subtitle text here', fontSize: 48, fontFamily: 'Arial', fill: '#6B7280', fontWeight: 'normal', left: 540, top: 570, originX: 'center', originY: 'center', textAlign: 'center', width: 860 },
    ],
  },
  {
    id: 'ig-dark',
    name: 'Dark Mood',
    platform: 'instagram',
    bgColor: '#0a0a0a',
    texts: [
      { text: 'TITLE', fontSize: 140, fontFamily: 'Impact', fill: '#FFD700', stroke: '#000000', strokeWidth: 2, fontWeight: 'bold', left: 540, top: 400, originX: 'center', originY: 'center', textAlign: 'center', width: 960 },
      { text: 'your subtitle', fontSize: 52, fontFamily: 'Arial', fill: '#cccccc', fontWeight: 'normal', left: 540, top: 580, originX: 'center', originY: 'center', textAlign: 'center', width: 860 },
    ],
  },
]

// ─── Facebook Cover (851×315) ────────────────────────────────────────────────
export const FACEBOOK_TEMPLATES: Template[] = [
  {
    id: 'fb-professional',
    name: 'Professional',
    platform: 'facebook',
    bgColor: '#1e3a5f',
    texts: [
      { text: 'YOUR PAGE NAME', fontSize: 72, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 425, top: 130, originX: 'center', originY: 'center', textAlign: 'center', width: 780 },
      { text: 'Your tagline or description here', fontSize: 36, fontFamily: 'Arial', fill: '#93c5fd', fontWeight: 'normal', left: 425, top: 210, originX: 'center', originY: 'center', textAlign: 'center', width: 740 },
    ],
  },
  {
    id: 'fb-bold',
    name: 'Bold & Bright',
    platform: 'facebook',
    bgColor: '#FFD700',
    texts: [
      { text: 'PAGE TITLE', fontSize: 80, fontFamily: 'Impact', fill: '#111827', fontWeight: 'bold', left: 425, top: 130, originX: 'center', originY: 'center', textAlign: 'center', width: 780 },
      { text: 'Your slogan goes here', fontSize: 38, fontFamily: 'Arial', fill: '#374151', fontWeight: 'normal', left: 425, top: 220, originX: 'center', originY: 'center', textAlign: 'center', width: 720 },
    ],
  },
  {
    id: 'fb-minimal',
    name: 'Clean Minimal',
    platform: 'facebook',
    bgColor: '#f9fafb',
    texts: [
      { text: 'Your Brand', fontSize: 76, fontFamily: 'Arial', fill: '#111827', fontWeight: 'bold', left: 425, top: 125, originX: 'center', originY: 'center', textAlign: 'center', width: 780 },
      { text: 'tagline • website.com', fontSize: 36, fontFamily: 'Arial', fill: '#6B7280', fontWeight: 'normal', left: 425, top: 215, originX: 'center', originY: 'center', textAlign: 'center', width: 720 },
    ],
  },
]

// ─── Twitter/X Header (1500×500) ─────────────────────────────────────────────
export const TWITTER_TEMPLATES: Template[] = [
  {
    id: 'tw-dark',
    name: 'Dark Minimal',
    platform: 'twitter',
    bgColor: '#0f172a',
    texts: [
      { text: 'YOUR NAME / BRAND', fontSize: 96, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 750, top: 190, originX: 'center', originY: 'center', textAlign: 'center', width: 1360 },
      { text: 'your tagline or what you do', fontSize: 50, fontFamily: 'Arial', fill: '#94a3b8', fontWeight: 'normal', left: 750, top: 305, originX: 'center', originY: 'center', textAlign: 'center', width: 1200 },
    ],
  },
  {
    id: 'tw-purple',
    name: 'Purple Gradient',
    platform: 'twitter',
    bgColor: '#4c1d95',
    texts: [
      { text: 'YOUR BRAND', fontSize: 110, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 750, top: 185, originX: 'center', originY: 'center', textAlign: 'center', width: 1360 },
      { text: 'building in public • creator • developer', fontSize: 48, fontFamily: 'Arial', fill: '#ddd6fe', fontWeight: 'normal', left: 750, top: 310, originX: 'center', originY: 'center', textAlign: 'center', width: 1200 },
    ],
  },
  {
    id: 'tw-light',
    name: 'Clean Light',
    platform: 'twitter',
    bgColor: '#f8fafc',
    texts: [
      { text: 'Your Name', fontSize: 110, fontFamily: 'Arial', fill: '#0f172a', fontWeight: 'bold', left: 750, top: 185, originX: 'center', originY: 'center', textAlign: 'center', width: 1360 },
      { text: 'what you do • your niche • website.com', fontSize: 48, fontFamily: 'Arial', fill: '#64748b', fontWeight: 'normal', left: 750, top: 310, originX: 'center', originY: 'center', textAlign: 'center', width: 1200 },
    ],
  },
]

// ─── LinkedIn Banner (1584×396) ──────────────────────────────────────────────
export const LINKEDIN_TEMPLATES: Template[] = [
  {
    id: 'li-navy',
    name: 'Corporate Navy',
    platform: 'linkedin',
    bgColor: '#0a2540',
    texts: [
      { text: 'YOUR NAME / ROLE', fontSize: 90, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 792, top: 155, originX: 'center', originY: 'center', textAlign: 'center', width: 1440 },
      { text: 'Company • Specialization • Location', fontSize: 46, fontFamily: 'Arial', fill: '#93c5fd', fontWeight: 'normal', left: 792, top: 255, originX: 'center', originY: 'center', textAlign: 'center', width: 1360 },
    ],
  },
  {
    id: 'li-modern',
    name: 'Modern Purple',
    platform: 'linkedin',
    bgColor: '#581c87',
    texts: [
      { text: 'YOUR NAME', fontSize: 100, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 792, top: 150, originX: 'center', originY: 'center', textAlign: 'center', width: 1440 },
      { text: 'Job Title • Company • Open to Opportunities', fontSize: 46, fontFamily: 'Arial', fill: '#e9d5ff', fontWeight: 'normal', left: 792, top: 255, originX: 'center', originY: 'center', textAlign: 'center', width: 1360 },
    ],
  },
  {
    id: 'li-minimal',
    name: 'Clean Minimal',
    platform: 'linkedin',
    bgColor: '#f1f5f9',
    texts: [
      { text: 'Your Name', fontSize: 96, fontFamily: 'Arial', fill: '#0f172a', fontWeight: 'bold', left: 792, top: 148, originX: 'center', originY: 'center', textAlign: 'center', width: 1440 },
      { text: 'Role • Company • website.com', fontSize: 46, fontFamily: 'Arial', fill: '#475569', fontWeight: 'normal', left: 792, top: 255, originX: 'center', originY: 'center', textAlign: 'center', width: 1360 },
    ],
  },
]

// ─── Gaming Thumbnail (1280×720) ─────────────────────────────────────────────
export const GAMING_TEMPLATES: Template[] = [
  {
    id: 'gm-neon',
    name: 'Neon Gaming',
    platform: 'gaming',
    bgColor: '#0a0a0a',
    texts: [
      { text: 'GAME TITLE', fontSize: 110, fontFamily: 'Impact', fill: '#00ff88', stroke: '#00aa55', strokeWidth: 3, fontWeight: 'bold', left: 640, top: 270, originX: 'center', originY: 'center', textAlign: 'center', width: 1150 },
      { text: 'epic gameplay • world record', fontSize: 50, fontFamily: 'Arial', fill: '#00ccff', fontWeight: 'normal', left: 640, top: 430, originX: 'center', originY: 'center', textAlign: 'center', width: 1050 },
    ],
  },
  {
    id: 'gm-fire',
    name: 'Fire Red',
    platform: 'gaming',
    bgColor: '#0d0000',
    texts: [
      { text: 'YOUR TITLE HERE', fontSize: 100, fontFamily: 'Impact', fill: '#ff4400', stroke: '#ff0000', strokeWidth: 4, fontWeight: 'bold', left: 640, top: 270, originX: 'center', originY: 'center', textAlign: 'center', width: 1150 },
      { text: 'click to edit subtitle', fontSize: 52, fontFamily: 'Arial', fill: '#ffaa00', fontWeight: 'bold', left: 640, top: 425, originX: 'center', originY: 'center', textAlign: 'center', width: 1050 },
    ],
  },
  {
    id: 'gm-cyber',
    name: 'Cyberpunk',
    platform: 'gaming',
    bgColor: '#0d001a',
    texts: [
      { text: 'THUMBNAIL TITLE', fontSize: 96, fontFamily: 'Arial', fill: '#f0e040', stroke: '#ff00ff', strokeWidth: 3, fontWeight: 'bold', left: 640, top: 265, originX: 'center', originY: 'center', textAlign: 'center', width: 1150 },
      { text: 'level up • season 5 • insane plays', fontSize: 50, fontFamily: 'Arial', fill: '#cc88ff', fontWeight: 'normal', left: 640, top: 430, originX: 'center', originY: 'center', textAlign: 'center', width: 1050 },
    ],
  },
]

// ─── YouTube Banner / Channel Art (2560×1440) ─────────────────────────────────
export const YOUTUBE_BANNER_TEMPLATES: Template[] = [
  {
    id: 'yb-dark',
    name: 'Dark Channel',
    platform: 'youtube_banner',
    bgColor: '#0a0a0a',
    texts: [
      { text: 'CHANNEL NAME', fontSize: 200, fontFamily: 'Impact', fill: '#ffffff', stroke: '#ff0000', strokeWidth: 4, fontWeight: 'bold', left: 1280, top: 580, originX: 'center', originY: 'center', textAlign: 'center', width: 2300 },
      { text: 'New videos every week • Subscribe now', fontSize: 88, fontFamily: 'Arial', fill: '#cccccc', fontWeight: 'normal', left: 1280, top: 820, originX: 'center', originY: 'center', textAlign: 'center', width: 2100 },
    ],
  },
  {
    id: 'yb-minimal',
    name: 'Clean Minimal',
    platform: 'youtube_banner',
    bgColor: '#ffffff',
    texts: [
      { text: 'Your Channel Name', fontSize: 210, fontFamily: 'Arial', fill: '#111111', fontWeight: 'bold', left: 1280, top: 570, originX: 'center', originY: 'center', textAlign: 'center', width: 2300 },
      { text: 'your niche • upload schedule • tagline', fontSize: 88, fontFamily: 'Arial', fill: '#555555', fontWeight: 'normal', left: 1280, top: 820, originX: 'center', originY: 'center', textAlign: 'center', width: 2100 },
    ],
  },
  {
    id: 'yb-gaming',
    name: 'Gaming Channel',
    platform: 'youtube_banner',
    bgColor: '#050510',
    texts: [
      { text: 'CHANNEL NAME', fontSize: 200, fontFamily: 'Impact', fill: '#00ff88', stroke: '#006633', strokeWidth: 4, fontWeight: 'bold', left: 1280, top: 565, originX: 'center', originY: 'center', textAlign: 'center', width: 2300 },
      { text: 'Gaming • Tutorials • Highlights', fontSize: 92, fontFamily: 'Arial', fill: '#00ccff', fontWeight: 'bold', left: 1280, top: 820, originX: 'center', originY: 'center', textAlign: 'center', width: 2100 },
    ],
  },
]

// ─── OG Image (1200×630) ─────────────────────────────────────────────────────
export const OG_TEMPLATES: Template[] = [
  {
    id: 'og-blog',
    name: 'Blog Post',
    platform: 'og',
    bgColor: '#ffffff',
    texts: [
      { text: 'Your Blog Post Title Goes Here', fontSize: 80, fontFamily: 'Arial', fill: '#111827', fontWeight: 'bold', left: 600, top: 240, originX: 'center', originY: 'center', textAlign: 'center', width: 1080 },
      { text: 'yoursite.com', fontSize: 44, fontFamily: 'Arial', fill: '#6B7280', fontWeight: 'normal', left: 600, top: 390, originX: 'center', originY: 'center', textAlign: 'center', width: 1000 },
    ],
  },
  {
    id: 'og-dark',
    name: 'Dark Tech',
    platform: 'og',
    bgColor: '#0f172a',
    texts: [
      { text: 'Article or Product Title', fontSize: 84, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 600, top: 235, originX: 'center', originY: 'center', textAlign: 'center', width: 1080 },
      { text: 'yoursite.com • category', fontSize: 44, fontFamily: 'Arial', fill: '#94a3b8', fontWeight: 'normal', left: 600, top: 385, originX: 'center', originY: 'center', textAlign: 'center', width: 1000 },
    ],
  },
  {
    id: 'og-brand',
    name: 'Branded',
    platform: 'og',
    bgColor: '#7C3AED',
    texts: [
      { text: 'Your Page Title', fontSize: 90, fontFamily: 'Arial', fill: '#ffffff', fontWeight: 'bold', left: 600, top: 230, originX: 'center', originY: 'center', textAlign: 'center', width: 1080 },
      { text: 'yoursite.com', fontSize: 48, fontFamily: 'Arial', fill: '#ddd6fe', fontWeight: 'normal', left: 600, top: 385, originX: 'center', originY: 'center', textAlign: 'center', width: 1000 },
    ],
  },
]
