/** @type {import('@jest/types').Config.InitialOptions} */
import { ModuleDefaults, TestMatchers } from "./ModuleDefaults";

module.exports = {
  testMatch: [TestMatchers.ios, TestMatchers.android, TestMatchers.native],
  ...ModuleDefaults,
};
