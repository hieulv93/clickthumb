import {
  PLATFORMS,
  CANVAS_DISPLAY_WIDTH,
  CANVAS_DISPLAY_HEIGHT_MAX,
  getDisplayDimensions,
  getDisplayHeight,
  type Platform,
} from "../platforms";

describe("PLATFORMS", () => {
  it("contains all expected platform keys", () => {
    const keys = Object.keys(PLATFORMS);
    expect(keys).toContain("youtube");
    expect(keys).toContain("instagram");
    expect(keys).toContain("instagram_story");
    expect(keys).toContain("twitter");
    expect(keys).toContain("linkedin");
    expect(keys).toContain("facebook");
    expect(keys).toContain("og");
    expect(keys).toContain("gaming");
    expect(keys).toContain("youtube_banner");
    expect(keys).toContain("tiktok");
    expect(keys).toContain("twitch");
  });

  it("every platform has required fields: id, name, width, height, route", () => {
    for (const [key, platform] of Object.entries(PLATFORMS)) {
      expect(platform.id).toBe(key);
      expect(typeof platform.name).toBe("string");
      expect(platform.width).toBeGreaterThan(0);
      expect(platform.height).toBeGreaterThan(0);
      expect(platform.route).toMatch(/^\//);
    }
  });

  it("has correct dimensions for YouTube thumbnail", () => {
    expect(PLATFORMS.youtube.width).toBe(1280);
    expect(PLATFORMS.youtube.height).toBe(720);
  });

  it("has correct dimensions for Instagram story (portrait)", () => {
    expect(PLATFORMS.instagram_story.width).toBe(1080);
    expect(PLATFORMS.instagram_story.height).toBe(1920);
  });
});

describe("CANVAS_DISPLAY constants", () => {
  it("CANVAS_DISPLAY_WIDTH is 640", () => {
    expect(CANVAS_DISPLAY_WIDTH).toBe(640);
  });

  it("CANVAS_DISPLAY_HEIGHT_MAX is 500", () => {
    expect(CANVAS_DISPLAY_HEIGHT_MAX).toBe(500);
  });
});

describe("getDisplayDimensions", () => {
  it("landscape 16:9 — scales by width (YouTube 1280×720)", () => {
    expect(getDisplayDimensions(PLATFORMS.youtube)).toEqual({ w: 640, h: 360 });
  });

  it("square — falls into portrait path when h > 500 (Instagram 1080×1080)", () => {
    expect(getDisplayDimensions(PLATFORMS.instagram)).toEqual({
      w: 500,
      h: 500,
    });
  });

  it("portrait — caps by height, derives width (Instagram Story 1080×1920)", () => {
    expect(getDisplayDimensions(PLATFORMS.instagram_story)).toEqual({
      w: 281,
      h: 500,
    });
  });

  it("wide banner — very short height (Twitter Header 1500×500)", () => {
    expect(getDisplayDimensions(PLATFORMS.twitter)).toEqual({ w: 640, h: 213 });
  });

  it("very wide banner (LinkedIn 1584×396)", () => {
    expect(getDisplayDimensions(PLATFORMS.linkedin)).toEqual({
      w: 640,
      h: 160,
    });
  });

  it("Facebook cover (851×315)", () => {
    expect(getDisplayDimensions(PLATFORMS.facebook)).toEqual({
      w: 640,
      h: 237,
    });
  });

  it("OG Image (1200×630)", () => {
    expect(getDisplayDimensions(PLATFORMS.og)).toEqual({ w: 640, h: 336 });
  });

  it("large landscape (YouTube Banner 2560×1440)", () => {
    expect(getDisplayDimensions(PLATFORMS.youtube_banner)).toEqual({
      w: 640,
      h: 360,
    });
  });

  it("portrait — TikTok same as Instagram Story (1080×1920)", () => {
    expect(getDisplayDimensions(PLATFORMS.tiktok)).toEqual({ w: 281, h: 500 });
  });

  it("landscape (Twitch 1920×1080)", () => {
    expect(getDisplayDimensions(PLATFORMS.twitch)).toEqual({ w: 640, h: 360 });
  });

  it("output width never exceeds CANVAS_DISPLAY_WIDTH", () => {
    for (const platform of Object.values(PLATFORMS)) {
      const { w } = getDisplayDimensions(platform);
      expect(w).toBeLessThanOrEqual(CANVAS_DISPLAY_WIDTH);
    }
  });

  it("output height never exceeds CANVAS_DISPLAY_HEIGHT_MAX", () => {
    for (const platform of Object.values(PLATFORMS)) {
      const { h } = getDisplayDimensions(platform);
      expect(h).toBeLessThanOrEqual(CANVAS_DISPLAY_HEIGHT_MAX);
    }
  });

  it("custom platform object — not from PLATFORMS dict", () => {
    const custom: Platform = {
      id: "custom",
      name: "Custom",
      width: 800,
      height: 600,
      route: "/custom",
    };
    // scaleByWidth = 640/800 = 0.8, hByWidth = Math.round(600*0.8) = 480 ≤ 500
    expect(getDisplayDimensions(custom)).toEqual({ w: 640, h: 480 });
  });
});

describe("getDisplayHeight", () => {
  it("returns the h value from getDisplayDimensions", () => {
    expect(getDisplayHeight(PLATFORMS.youtube)).toBe(360);
    expect(getDisplayHeight(PLATFORMS.instagram_story)).toBe(500);
    expect(getDisplayHeight(PLATFORMS.linkedin)).toBe(160);
  });
});
