import { by, device, expect, element } from "detox";

describe("HomeScreen", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  it("should show login button and text", async () => {
    await expect(element(by.id("LoginButton"))).toBeVisible();
    await expect(
      element(by.text("Please login by pressing the button below"))
    ).toBeVisible();
  });
});
