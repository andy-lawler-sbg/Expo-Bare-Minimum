# Expo Bare Minimum Project

This project uses the bare minimum workflow and has some expo packages & other libraries imported.

At the moment we have:

- Expo-Router
- Expo-HTML-Elements
- Expo-Local-Authentication
- Expo Native Modules (both functions & views)
- Detox
- Jest
- Typescript

The aim of this project is to see exactly what expo bare minimum can do.

## Installation

- Clone the repository
- You will also need access to the Native Modules repo's to build this. They are private so request access:
  - https://github.com/andy-lawler-sbg/expo-web-view
  - https://github.com/andy-lawler-sbg/expo-settings
- Run `yarn`
- Run `npx pod-install`
- Run `npx expo start` to then pick what device to use.

**Note: If the app doesn't build, you may need to link the Native Modules again. Follow the linking instructions below**

## Expo Module Linking

Follow these steps if the app doesn't build with the Native Modules after a yarn.

- Delete `yarn.lock` `package.lock` `node_modules`
- Make sure this repository is stored locally in a folder and make sure both `expo-web-view` & `expo-settings` are in the same folder eg:
  MainFolder/
  ExpoBare/
  expo-web-view
  expo-settings
- Link the module by going into each module folder and run `npm link`. Then in the `ExpoBare` folder run `npm link module_name` eg: npm link expo-web-view. Then inside ExpoBare run `yarn` again.

## Testing

To run Detox tests simply open two terminals in the root folder. Then:

- Run `npx expo run:ios` OR `npx expo run:android` in one terminal to start the app.
- Run `npm run detox-ios-debug` in the other terminal. This script then runs all ios scripts in a debug environment and stores any failing tests as screenshots in `./artifacts/ios-debug`. The same works for release. `npm run detox-ios-release` and also for android eg: `npm run detox-android-debug` etc...

**Note: If you have different Simulators/AVD setup edit the .detoxrc file to specify that. Currently we expect iPhone 14 Pro & Pixel 4 to be open.**

### File Naming

- To get testing to work we have speific jest configs for android/ios which we then use when we run the npm scripts. These configs allow us to name tests as `[filename].test.ios.ts` or `[filename].test.android.ts` or even `[filename].test.native.ts`.
- To test the entire app before a PR you should:
  - Follow the steps in testing above but for both platforms.
    - eg: Run `npx expo run:ios` then `npm run detox-ios-debug` then press `a` to launch Android then run `npm run detox-android-debug`.
    - This approach will run all iOS tests on a iOS simulator, all android tests on an AVD and also will run the shared tests on both devices also.

### Routing

- Since we use Expo-Router, to test we must route to the screen we want before we perform any assertions. To do this do the following:
  - if on an iOS specific test, in `beforeEach` use `openURL({ url: "myapp://[route]})` route being the page you want to navigate to.
    - Be sure to add a `beforeAll` with the default `launchApp()` comamnd to launch the simulator.
- if on a native test (both platforms) or Android specific test instead in `beforeAll` use `launchApp({ url: "myapp://[route]})`. This is due to `openURL({ url: url })` causing issues on Android.
