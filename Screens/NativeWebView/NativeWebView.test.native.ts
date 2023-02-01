import { by, device, expect, element } from "detox";

describe("NativeWebView", () => {
  beforeEach(async () => {
    await device.launchApp({
      newInstance: true,
      url: "myapp://web/ExpoSearch",
    });
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  // Needs accessibilityIdentifier being added to the native web view as `NativeWebView.webView`

  it("should native web view and text input", async () => {
    await expect(element(by.id("NativeWebView"))).toBeVisible();
    await expect(element(by.id("NativeWebView.textInput"))).toBeVisible();
    // await expect(element(by.id("NativeWebView.webView"))).toBeVisible();
  });
});
