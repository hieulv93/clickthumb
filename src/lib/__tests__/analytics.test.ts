import { analytics } from "../analytics";

function setupGtag() {
  const gtag = jest.fn();
  Object.defineProperty(window, "gtag", {
    value: gtag,
    writable: true,
    configurable: true,
  });
  return gtag;
}

function removeGtag() {
  Object.defineProperty(window, "gtag", {
    value: undefined,
    writable: true,
    configurable: true,
  });
}

afterEach(() => {
  removeGtag();
});

describe("analytics.imageUploaded", () => {
  it("calls gtag with correct event and params", () => {
    const gtag = setupGtag();
    analytics.imageUploaded("image/jpeg", 512.7);
    expect(gtag).toHaveBeenCalledWith("event", "image_uploaded", {
      file_type: "image/jpeg",
      file_size_kb: 513,
    });
  });

  it("rounds fileSizeKb", () => {
    const gtag = setupGtag();
    analytics.imageUploaded("image/png", 100.1);
    expect(gtag).toHaveBeenCalledWith("event", "image_uploaded", {
      file_type: "image/png",
      file_size_kb: 100,
    });
  });

  it("does not throw when gtag is not defined", () => {
    removeGtag();
    expect(() => analytics.imageUploaded("image/webp", 200)).not.toThrow();
  });
});

describe("analytics.thumbnailExported", () => {
  it("calls gtag with correct event and params", () => {
    const gtag = setupGtag();
    analytics.thumbnailExported("youtube", "dark-gaming", 245.9);
    expect(gtag).toHaveBeenCalledWith("event", "thumbnail_exported", {
      platform: "youtube",
      template: "dark-gaming",
      output_kb: 246,
    });
  });

  it("rounds outputKb", () => {
    const gtag = setupGtag();
    analytics.thumbnailExported("instagram", "minimal", 99.4);
    expect(gtag).toHaveBeenCalledWith("event", "thumbnail_exported", {
      platform: "instagram",
      template: "minimal",
      output_kb: 99,
    });
  });

  it("does not throw when gtag is not defined", () => {
    expect(() =>
      analytics.thumbnailExported("youtube", "template-1", 100),
    ).not.toThrow();
  });
});

describe("analytics.templateSelected", () => {
  it("calls gtag with correct event and params", () => {
    const gtag = setupGtag();
    analytics.templateSelected("linkedin", "professional-blue");
    expect(gtag).toHaveBeenCalledWith("event", "template_selected", {
      platform: "linkedin",
      template_id: "professional-blue",
    });
  });

  it("does not throw when gtag is not defined", () => {
    expect(() => analytics.templateSelected("twitter", "dark")).not.toThrow();
  });
});

describe("analytics.exportError", () => {
  it("calls gtag with correct event and error_type", () => {
    const gtag = setupGtag();
    analytics.exportError("canvas_render_failed");
    expect(gtag).toHaveBeenCalledWith("event", "export_error", {
      error_type: "canvas_render_failed",
    });
  });

  it("does not throw when gtag is not defined", () => {
    expect(() => analytics.exportError("unknown_error")).not.toThrow();
  });
});
