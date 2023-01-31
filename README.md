# Expo Bare Minimum Project

This project uses the bare minimum workflow and has some expo packages & other libraries imported.

At the moment we have:

- Expo-Router
- Expo-HTML-Elements
- Expo-Local-Authentication
- Expo Native Modules (both functions & views)
- Detox
- Jest

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

## Linking

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

- Run `npx expo run:ios` in one terminal to start the app.
- Run `npm run detox-ios-debug` in the other terminal. This script then runs all ios scripts in a debug environment and stores any failing tests as screenshots in `./artifacts/ios-debug`. The same works for release. `npm run detox-ios-release`.

**Note: Ensure iPhone 14 Pro simulator is open, the detoxrc is expecting this device for iOS**
