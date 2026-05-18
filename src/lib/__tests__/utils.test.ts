import {
  formatBytes,
  generateFilename,
  MAX_FILE_SIZE_MB,
  MAX_FILE_SIZE_BYTES,
} from "../utils";

describe("formatBytes", () => {
  it('returns "0 B" for 0', () => {
    expect(formatBytes(0)).toBe("0 B");
  });

  it("returns bytes for values under 1024", () => {
    expect(formatBytes(1)).toBe("1 B");
    expect(formatBytes(500)).toBe("500 B");
    expect(formatBytes(1023)).toBe("1023 B");
  });

  it("returns KB for values between 1024 and 1MB", () => {
    expect(formatBytes(1024)).toBe("1.0 KB");
    expect(formatBytes(1536)).toBe("1.5 KB");
    expect(formatBytes(1024 * 1024 - 1)).toBe("1024.0 KB");
  });

  it("returns MB for values 1MB and above", () => {
    expect(formatBytes(1024 * 1024)).toBe("1.00 MB");
    expect(formatBytes(1.5 * 1024 * 1024)).toBe("1.50 MB");
    expect(formatBytes(20 * 1024 * 1024)).toBe("20.00 MB");
  });
});

describe("generateFilename", () => {
  it("strips the original extension and appends .jpg", () => {
    expect(generateFilename("photo.jpg")).toBe("studio-photo.jpg");
    expect(generateFilename("image.png")).toBe("studio-image.jpg");
    expect(generateFilename("clip.webp")).toBe("studio-clip.jpg");
  });

  it("replaces spaces and special characters with hyphens", () => {
    expect(generateFilename("my photo.jpg")).toBe("studio-my-photo.jpg");
    expect(generateFilename("hello world (1).png")).toBe(
      "studio-hello-world--1-.jpg",
    );
  });

  it("uses a custom suffix when provided", () => {
    expect(generateFilename("image.png", "yt")).toBe("yt-image.jpg");
    expect(generateFilename("banner.jpg", "linkedin")).toBe(
      "linkedin-banner.jpg",
    );
  });

  it("handles filenames with no extension", () => {
    expect(generateFilename("noext")).toBe("studio-noext.jpg");
  });

  it("handles filenames with multiple dots", () => {
    expect(generateFilename("my.file.name.png")).toBe(
      "studio-my.file.name.jpg",
    );
  });
});

describe("MAX_FILE_SIZE constants", () => {
  it("MAX_FILE_SIZE_MB is 20", () => {
    expect(MAX_FILE_SIZE_MB).toBe(20);
  });

  it("MAX_FILE_SIZE_BYTES equals 20MB in bytes", () => {
    expect(MAX_FILE_SIZE_BYTES).toBe(20 * 1024 * 1024);
    expect(MAX_FILE_SIZE_BYTES).toBe(20971520);
  });
});
