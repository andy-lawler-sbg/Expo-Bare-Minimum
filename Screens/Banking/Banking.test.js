describe("Banking", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.openURL({ url: "myapp://banking/Account" });
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  it("should show transactions text", async () => {
    await expect(element(by.text("Transactions"))).toBeVisible();

    await expect(element(by.text("1: $10"))).toBeVisible();
    await expect(element(by.text("2: $20"))).toBeVisible();
  });
});
