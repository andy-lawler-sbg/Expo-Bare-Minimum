/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: "jest",
      config: "e2e/jest.config.js",
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    "ios.debug": {
      type: "ios.app",
      binaryPath: "ios/build/Build/Products/Debug-iphonesimulator/ExpoBare.app",
      build:
        "xcodebuild -workspace ios/ExpoBare.xcworkspace -scheme ExpoBare -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
    },
    "ios.release": {
      type: "ios.app",
      binaryPath:
        "ios/build/Build/Products/Release-iphonesimulator/ExpoBare.app",
      build:
        "xcodebuild -workspace ios/ExpoBare.xcworkspace -scheme ExpoBare -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
    },
    "android.debug": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      testBinaryPath:
        "android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk",
      build:
        "cd android && ./gradlew :app:assembleDebug :app:assembleAndroidTest -DtestBuildType=debug && cd ..",
      reversePorts: [8081],
    },
    "android.release": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      testBinaryPath:
        "android/app/build/outputs/apk/androidTest/release/app-release-androidTest.apk",
      build:
        "cd android && ./gradlew :app:assembleRelease :app:assembleAndroidTest -DtestBuildType=release && cd ..",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 14 Pro",
      },
    },
    attached: {
      type: "android.attached",
      device: {
        adbName: ".*",
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_4_API_33",
      },
    },
  },
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
      },
    },
    "ios.sim.release": {
      device: "simulator",
      app: "ios.release",
      artifacts: {
        rootDir: "artifacts/ios-release",
      },
      testRunner: {
        args: {
          config: "e2e/jest.ios.config.js",
        },
      },
    },
    "android.att.debug": {
      device: "attached",
      app: "android.debug",
      artifacts: {
        rootDir: "artifacts/android-att-debug",
      },
      testRunner: {
        args: {
          config: "e2e/jest.android.config.js",
        },
      },
    },
    "android.att.release": {
      device: "attached",
      app: "android.release",
      artifacts: {
        rootDir: "artifacts/android-att-release",
      },
      testRunner: {
        args: {
          config: "e2e/jest.android.config.js",
        },
      },
    },
    "android.emu.debug": {
      device: "emulator",
      app: "android.debug",
      artifacts: {
        rootDir: "artifacts/android-emu-debug",
      },
      testRunner: {
        args: {
          config: "e2e/jest.android.config.js",
        },
      },
    },
    "android.emu.release": {
      device: "emulator",
      app: "android.release",
      artifacts: {
        rootDir: "artifacts/android-emu-release",
      },
      testRunner: {
        args: {
          config: "e2e/jest.android.config.js",
        },
      },
    },
  },
};
