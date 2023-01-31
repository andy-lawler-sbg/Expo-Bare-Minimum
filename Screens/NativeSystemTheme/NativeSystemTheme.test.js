describe("NativeSystemTheme", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.openURL({ url: "myapp://theming/NativeFunctions" });
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  it("should render the system theme", async () => {});
});
