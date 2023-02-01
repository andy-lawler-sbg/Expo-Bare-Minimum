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

  it("should should three buttons with text", async () => {
    await expect(element(by.id("AccountButton"))).toBeVisible();
    await expect(element(by.text("Go to Bank"))).toBeVisible();

    await expect(element(by.id("NativeFunctionsButton"))).toBeVisible();
    await expect(element(by.text("Go to Native Module"))).toBeVisible();

    await expect(element(by.id("ExpoSearchButton"))).toBeVisible();
    await expect(element(by.text("Go to Native Web View"))).toBeVisible();
  });
});
