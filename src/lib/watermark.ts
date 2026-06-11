export async function applyWatermark(
  blob: Blob,
  width: number,
  height: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error("Canvas 2D not available"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);

      // Scale font with image width, cap relative to height (prevents oversized on wide-short banners)
      const fontSize = Math.max(
        14,
        Math.min(Math.round(width * 0.022), Math.round(height * 0.09)),
      );
      const padding = Math.round(Math.min(width, height) * 0.018);
      const text = "click-thumb.com";

      ctx.font = `bold ${fontSize}px Arial, sans-serif`;
      const metrics = ctx.measureText(text);
      const x = width - metrics.width - padding;
      const y = height - padding;

      // Shadow so text is legible on both dark and light backgrounds
      ctx.shadowColor = "rgba(0,0,0,0.50)";
      ctx.shadowBlur = Math.round(fontSize * 0.4);
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;

      ctx.globalAlpha = 0.4;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(text, x, y);

      ctx.globalAlpha = 1;
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;

      const mimeType = blob.type || "image/jpeg";
      canvas.toBlob(
        (result) => {
          if (result) resolve(result);
          else reject(new Error("Watermark blob conversion failed"));
        },
        mimeType,
        mimeType === "image/jpeg" ? 0.95 : undefined,
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image for watermarking"));
    };

    img.src = url;
  });
}
