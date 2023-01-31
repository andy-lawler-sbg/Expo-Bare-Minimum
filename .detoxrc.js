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
      build:
        "cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -",
      reversePorts: [8081],
    },
    "android.release": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build:
        "cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -",
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
        avdName: "Pixel_4_API_33_x86",
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
    },
    "ios.sim.release": {
      device: "simulator",
      app: "ios.release",
      artifacts: {
        rootDir: "artifacts/ios-release",
      },
    },
    "android.att.debug": {
      device: "attached",
      app: "android.debug",
      artifacts: {
        rootDir: "artifacts/android-att-debug",
      },
    },
    "android.att.release": {
      device: "attached",
      app: "android.release",
      artifacts: {
        rootDir: "artifacts/android-att-release",
      },
    },
    "android.emu.debug": {
      device: "emulator",
      app: "android.debug",
      artifacts: {
        rootDir: "artifacts/android-emu-debug",
      },
    },
    "android.emu.release": {
      device: "emulator",
      app: "android.release",
      artifacts: {
        rootDir: "artifacts/android-emu-release",
      },
    },
  },
};
