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
