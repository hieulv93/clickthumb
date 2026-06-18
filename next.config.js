/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    const COMPRESSIMG = "https://compressimg.pro";

    // All compress/resize/convert paths that are 404 on click-thumb but live on compressimg.pro.
    // Paths are identical on both domains — only the domain changes.
    const movedPaths = [
      // Compress — core
      "/compress-image/",
      "/compress-images/",
      "/compress-jpeg/",
      "/compress-jpg-online/",
      "/compress-png-online/",
      "/compress-gif-online/",
      "/thumbnail-compressor/",
      "/photo-compressor/",
      "/png-compressor/",

      // Compress — by size
      "/compress-image-to-20kb/",
      "/compress-image-to-30kb/",
      "/compress-image-to-50kb/",
      "/compress-image-to-100kb/",
      "/compress-image-to-150kb/",
      "/compress-image-to-200kb/",
      "/compress-image-to-300kb/",
      "/compress-image-to-400kb/",
      "/compress-image-to-500kb/",
      "/compress-image-to-800kb/",
      "/compress-image-to-1mb/",
      "/compress-image-to-2mb/",
      "/compress-image-to-3mb/",
      "/compress-image-to-4mb/",
      "/compress-image-to-5mb/",
      "/compress-image-to-10mb/",

      // Compress — by platform
      "/compress-image-for-slack/",
      "/compress-image-for-teams/",
      "/compress-image-for-discord/",
      "/compress-image-for-whatsapp/",
      "/compress-image-for-facebook/",
      "/compress-image-for-instagram/",
      "/compress-image-for-linkedin/",
      "/compress-image-for-twitter/",
      "/compress-image-for-youtube/",
      "/compress-image-for-tiktok/",
      "/compress-image-for-pinterest/",
      "/compress-image-for-email/",
      "/compress-image-for-resume/",
      "/compress-image-for-passport/",
      "/compress-image-for-wix/",
      "/compress-image-for-wordpress/",
      "/compress-image-for-squarespace/",
      "/compress-image-for-shopify/",
      "/compress-image-for-website/",

      // Resize — core
      "/resize-image/",
      "/resize-images/",
      "/image-resizer/",
      "/resize-jpg/",
      "/resize-png/",
      "/resize-webp/",
      "/resize-gif/",
      "/resize-heic/",
      "/resize-signature/",
      "/make-image-smaller/",
      "/enlarge-image/",
      "/resize-image-without-losing-quality/",
      "/resize-image-in-kb/",

      // Resize — by size (KB)
      "/resize-image-to-20kb/",
      "/resize-image-to-30kb/",
      "/resize-image-to-50kb/",
      "/resize-image-to-100kb/",
      "/resize-image-to-150kb/",
      "/resize-image-to-200kb/",
      "/resize-image-to-300kb/",
      "/resize-image-to-500kb/",

      // Resize — by pixel dimension
      "/resize-image-to-300x300/",
      "/resize-image-to-400x400/",
      "/resize-image-to-600x600/",
      "/resize-image-to-800x600/",
      "/resize-image-to-1080x1080/",
      "/resize-image-to-1280x720/",
      "/resize-image-to-1920x1080/",
      "/resize-image-to-2x2-inch/",
      "/resize-image-to-35x45mm/",
      "/resize-image-to-4x6/",
      "/resize-image-to-a4/",
      "/resize-image-to-cm/",
      "/resize-image-to-inches/",

      // Resize — by platform
      "/resize-image-for-facebook/",
      "/resize-image-for-instagram/",
      "/resize-image-for-linkedin/",
      "/resize-image-for-twitter/",
      "/resize-image-for-whatsapp/",
      "/resize-image-for-tiktok/",
      "/resize-image-for-pinterest/",
      "/resize-image-for-youtube-thumbnail/",
      "/resize-image-for-passport/",
      "/resize-image-for-resume/",
      "/resize-image-for-online-form/",

      // Convert — core
      "/convert-image/",
      "/image-converter/",
      "/webp-converter/",

      // Convert — to JPG
      "/png-to-jpg/",
      "/webp-to-jpg/",
      "/heic-to-jpg/",
      "/avif-to-jpg/",
      "/bmp-to-jpg/",
      "/gif-to-jpg/",
      "/tiff-to-jpg/",
      "/raw-to-jpg/",

      // Convert — to PNG
      "/jpg-to-png/",
      "/webp-to-png/",
      "/heic-to-png/",
      "/avif-to-png/",
      "/bmp-to-png/",
      "/gif-to-png/",
      "/tiff-to-png/",
      "/ico-to-png/",
      "/svg-to-png/",

      // Convert — to WebP
      "/jpg-to-webp/",
      "/png-to-webp/",
      "/avif-to-webp/",
      "/heic-to-webp/",

      // Convert — to GIF
      "/jpg-to-gif/",
      "/png-to-gif/",
      "/webp-to-gif/",

      // Convert — other formats
      "/png-to-ico/",
      "/image-to-pdf/",
      "/image-to-base64/",
      "/base64-to-image/",

      // Edit tools
      "/crop-image/",
      "/crop-image-to-square/",
      "/crop-image-to-ratio/",
      "/crop-image-circle/",
      "/rotate-image/",
      "/flip-image/",
      "/add-watermark/",
      "/exif-remover/",
      "/image-color-picker/",

      // Utility
      "/reduce-image-size/",
      "/photo-compressor/",
      "/passport-photo-maker/",

      // Blog — compress articles
      "/blog/how-to-compress-images-for-email/",
      "/blog/compress-images-for-shopify/",
      "/blog/how-messaging-apps-compress-images/",
      "/blog/how-to-compress-images-for-wordpress/",
      "/blog/how-to-compress-images-on-android/",
    ];

    const movedRedirects = movedPaths.map((p) => ({
      source: p,
      destination: `${COMPRESSIMG}${p}`,
      permanent: true,
    }));

    // Exception: /resize-svg/ has no equivalent on compressimg.pro (they have /svg-to-png/)
    const exceptions = [
      {
        source: "/resize-svg/",
        destination: `${COMPRESSIMG}/resize-image/`,
        permanent: true,
      },
    ];

    return [...movedRedirects, ...exceptions];
  },
};

module.exports = nextConfig;
