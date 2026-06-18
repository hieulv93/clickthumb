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
      // Compress — tool pages
      "/compress-image/",
      "/compress-images/",
      "/compress-jpg-online/",
      "/compress-png-online/",
      "/compress-gif-online/",
      "/thumbnail-compressor/",
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
      "/compress-image-to-5mb/",
      "/compress-image-to-10mb/",
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
      "/compress-image-for-email/",
      "/compress-image-for-resume/",
      "/compress-image-for-passport/",
      "/compress-image-for-wix/",

      // Resize — tool pages
      "/resize-image/",
      "/resize-images/",
      "/resize-jpg/",
      "/resize-png/",
      "/resize-webp/",
      "/resize-gif/",
      "/resize-signature/",
      "/resize-image-to-50kb/",
      "/resize-image-to-100kb/",
      "/resize-image-to-a4/",
      "/resize-image-to-cm/",
      "/resize-image-to-inches/",
      "/resize-image-to-1080x1080/",
      "/resize-image-for-online-form/",

      // Convert — tool pages
      "/convert-image/",
      "/image-converter/",

      // Reduce
      "/reduce-image-size/",

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
