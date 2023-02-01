## E2E

### Introduction

This folder holds the jest config files which are used to run Detox tests within the project. Detox is a tool which allows you to write tests and run them on a Simulator or real device using Jest as a test runner.

### Config

Below is an example of one of the config files. The main difference between each config file is the `testMatch` array. For the main `jest.config.js` file we look for `.test.native.ts`, `.test.ios.ts` and `.test.android.ts` files. For the specific configs we simply remove the device we do not want tests to run on. ie: we do not look for `.test.android.ts` files when running iOS tests.

Below is an example showing testMatch.

<!--
module.exports = {
  rootDir: "..",
  testMatch: [
    "<rootDir>/**/*.test.native.ts",
    "<rootDir>/**/*.test.android.ts",
    "<rootDir>/**/*.test.ios.ts",
   ],
   ...
}; -->

### Configuration Links

These configs are then referenced within the `.detoxrc.js` file within the configurations object. We then have a specific test runner config for each configuration type. For example:

<!--
configurations: {
    "ios.sim.debug": {
        device: "simulator",
        app: "ios.debug",
        artifacts: {
            rootDir: "artifacts/ios-debug",
        },
        testRunner: {
            args: {
                config: "e2e/jest.ios.config.js",
            },
        }
    },
} -->

### Using the Configurations

The above example allows us to run `detox test --configuration ios.sim.debug` which then will use the iOS config which specifies we are looking for `.test.ios.ts` and `.test.native.ts` files. To simplify the command we simply have npm scripts which look like the following `npm run detox-android-debug`.
