export const ModuleDefaults = {
  rootDir: "..",
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: "detox/runners/jest/globalSetup",
  globalTeardown: "detox/runners/jest/globalTeardown",
  reporters: ["detox/runners/jest/reporter"],
  testEnvironment: "detox/runners/jest/testEnvironment",
  verbose: true,
};

export const TestMatchers = {
  ios: "<rootDir>/**/*.test.ios.ts",
  android: "<rootDir>/**/*.test.android.ts",
  native: "<rootDir>/**/*.test.native.ts",
};
