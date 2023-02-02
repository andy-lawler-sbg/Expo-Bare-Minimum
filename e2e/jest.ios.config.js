/** @type {import('@jest/types').Config.InitialOptions} */
import { ModuleDefaults, TestMatchers } from "./ModuleDefaults";

module.exports = {
  testMatch: [TestMatchers.ios, TestMatchers.native],
  ...ModuleDefaults,
};
