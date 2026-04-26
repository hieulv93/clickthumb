# PROJECT: ClickThumb (Content Studio)

## 🎯 GOAL
Free online thumbnail & social media image creator targeting global creators.
- High SEO ranking for thumbnail/social image keywords
- High retention (creators come back weekly)
- Monetize via AdSense + SaaS subscription ($8/month)

## 🌐 SITES IN ECOSYSTEM
- **This site:** clickthumb.pro — Thumbnail & Social Image Maker
- **Sister site:** compressimg.pro — Image Compressor
- Cross-link between both sites where relevant

## 🧠 CORE PRINCIPLES
1. Speed > everything (PageSpeed > 90)
2. Platform-correct sizing (each tool exports exact platform dimensions)
3. Template-first UX (users pick template, not blank canvas)
4. Browser-side only (no server processing)

## 🚫 NON-NEGOTIABLE RULES
- NO login required for free tier
- NO backend image processing
- NO slow canvas rendering (use requestAnimationFrame)
- NO Fabric.js SSR (always dynamic import with ssr: false)

## ⚡ CANVAS TECH STACK
- Library: Fabric.js v5 (dynamic import, client-only)
- Export: canvas.toBlob() → Blob → triggerDownload()
- Platform sizes: defined in src/lib/platforms.ts

## 📐 PLATFORM SIZES
| Platform | Width | Height |
|---|---|---|
| YouTube Thumbnail | 1280 | 720 |
| Instagram Post | 1080 | 1080 |
| Instagram Story | 1080 | 1920 |
| Twitter Header | 1500 | 500 |
| LinkedIn Banner | 1584 | 396 |
| Facebook Cover | 851 | 315 |
| OG Image | 1200 | 630 |

## 🔍 SEO RULE
- Priority keyword per page: 1000+ words content
- Schema: WebApplication + FAQPage on every tool page
- Internal linking: cross-link to compressimg.pro where relevant

## 💰 MONETIZATION
- Phase 1: AdSense (same publisher ID as compressimg.pro: ca-pub-5429920062430374)
- Phase 2: SaaS — Clerk auth + Supabase + Stripe $8/month
  - Free: 10 exports/day, watermark, 10 templates
  - Pro: unlimited, no watermark, 50+ templates, save history
