describe("HomeScreen", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should show login button and text", async () => {
    await expect(element(by.id("LoginButton"))).toBeVisible();
    await expect(
      element(by.text("Please login by pressing the button below"))
    ).toBeVisible();
  });

  it("should show auth screen on login tap", async () => {});
});
