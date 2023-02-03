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

## Flipper

This project is setup so that Flipper works out of the box. To install Flipper simply use `brew install --cask flipper`. To use Flipper, run the app using `npx expo run:ios` or `npx expo run:android` and then open Flipper. Once open, select the Simulator/AVD and App from the menu in the top left of Flipper. You then should see the plugins available to you. You may notice some plugins are available but disabled, simply tap the `+` symbol to enable those.

Flipper should work with both the AVD and iOS Simulator and should allow you to see things such as:

- Layout preview (Native Stack showing RCTViews and also Native Views)
- Console logging
- Shared Preferences (UserDefaults and file stores)
  - This works especially well with the Native Functions demo with iOS launched. You can see the event logs within this plugin when we change our stored theme in UserDefaults.
- Images (Android Only)
- Database (Android Only)

Things such as React-Dev Tools should also work so we can work on getting that integrated.

Another cool benefit of Flipper is that we can add Plugins for other metrics and usages as we need them!

## Testing

To run Detox tests simply open two terminals in the root folder. Then:

- Run `npx expo run:ios` OR `npx expo run:android` in one terminal to start the app.
- Run `npm run detox-ios-debug` in the other terminal. This script then runs all ios scripts in a debug environment and stores any failing tests as screenshots in `./artifacts/ios-debug`. The same works for release. `npm run detox-ios-release` and also for android eg: `npm run detox-android-debug` etc...

**Note: If you have different Simulators/AVD setup edit the .detoxrc file to specify that. Currently we expect iPhone 14 Pro & Pixel 4 to be open.**

### File Naming [Testing]

- To get testing to work we have speific jest configs for android/ios which we then use when we run the npm scripts. These configs allow us to name tests as `[filename].test.ios.ts` or `[filename].test.android.ts` or even `[filename].test.native.ts`.
- To test the entire app before a PR you should:
  - Follow the steps in testing above but for both platforms.
    - eg: Run `npx expo run:ios` then `npm run detox-ios-debug` then press `a` to launch Android then run `npm run detox-android-debug`.
    - This approach will run all iOS tests on a iOS simulator, all android tests on an AVD and also will run the shared tests on both devices also.

### Routing [Testing]

- Since we use Expo-Router, to test we must route to the screen we want before we perform any assertions. To do this do the following:
  - if on an iOS specific test, in `beforeEach` use `openURL({ url: "myapp://[route]})` route being the page you want to navigate to.
    - Be sure to add a `beforeAll` with the default `launchApp()` comamnd to launch the simulator.
- if on a native test (both platforms) or Android specific test instead in `beforeAll` use `launchApp({ url: "myapp://[route]})`. This is due to `openURL({ url: url })` causing issues on Android.

### Component [Testing]

- Using Detox to test components is something which isn't heavily documented. For this to work, we have created a component screen which we can host any component in.
  - This component screen is not accessible via the app in any way currently so the user cannot reach it via any buttons, but us as developers can route to it.
  - Using a dynamic route simple route to `myapp://components/ComponentName` in any tests. To make this easier, a helper method has been created. So at the beginning of a test suite, in the `beforeEach` method simply call `await RenderComponent(ComponentName)` and you will navigate to that component to test it.

**Note: You currently cannot pass props to the RenderComponent, this is something we are working on.**

## App Screenshots

This is what the app currently looks like with a few different screenshots of all the screens.

### Login & Auth

- Expo-Local-Authentication

<img src="/assets/Screenshots/Login.png" width="200">
<img src="/assets/Screenshots/Auth.png" width="200">

### Welcome Page

<img src="/assets/Screenshots/LoggedIn.png" width="200">

#### Bank Account

- Uses Expo HTML Elements

<img src="/assets/Screenshots/ExpoHTMLElements.png" width="200">

#### Native Functions

- Uses Expo Module which contains Native Functions

<img src="/assets/Screenshots/NativeFunctions.png" width="200">

#### Native View (Web View)

- Uses Expo Module which contains a Native Web View

<img src="/assets/Screenshots/NativeWebView.png" width="200">

#### Dynamic Routing

- Uses dynamic routing to present any component via it's string name

<img src="/assets/Screenshots/DynamicRouting.png" width="200">
