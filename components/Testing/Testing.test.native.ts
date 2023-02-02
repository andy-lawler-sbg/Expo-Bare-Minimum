import { by, device, expect, element } from "detox";

describe("NativeWebView", () => {
  beforeEach(async () => {
    await device.launchApp({
      newInstance: true,
      url: "myapp://components/Testing",
    });
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  // Needs accessibilityIdentifier being added to the native web view as `NativeWebView.webView`

  it("should render a testing component", async () => {
    await expect(element(by.text("Hello World"))).toBeVisible();
  });
});
