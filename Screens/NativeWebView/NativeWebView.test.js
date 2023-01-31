describe("NativeWebView", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.openURL({ url: "myapp://web/ExpoSearch" });
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
