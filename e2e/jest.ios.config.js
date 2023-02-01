/** @type {import('@jest/types').Config.InitialOptions} */

// Specific config ran in detoxrc which only searches for native and ios tests

module.exports = {
  rootDir: "..",
  testMatch: ["<rootDir>/**/*.test.native.ts", "<rootDir>/**/*.test.ios.ts"],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: "detox/runners/jest/globalSetup",
  globalTeardown: "detox/runners/jest/globalTeardown",
  reporters: ["detox/runners/jest/reporter"],
  testEnvironment: "detox/runners/jest/testEnvironment",
  verbose: true,
};
