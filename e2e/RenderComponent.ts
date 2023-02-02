import { device } from "detox";

export const RenderComponent = (componentName: string) =>
  device.launchApp({
    newInstance: true,
    url: `myapp://components/${componentName}`,
  });
