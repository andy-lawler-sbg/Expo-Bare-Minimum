import { by, device, expect, element } from "detox";
import { RenderComponent } from "../../e2e/RenderComponent";

describe("Testing", () => {
  beforeEach(async () => {
    await RenderComponent("Testing");
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  it("should render a testing component", async () => {
    await expect(element(by.id("TestingView"))).toBeVisible();
    await expect(element(by.text("Hello World"))).toBeVisible();
    await expect(element(by.id("TestingView.image"))).toBeVisible();
  });
});
