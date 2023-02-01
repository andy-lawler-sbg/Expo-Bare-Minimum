## App

This app uses `expo-router` for navigation so our index.tsx file is our launch point. We also have made use of `Stack`'s from expo-router which allows us to present views which will be presented within a Stack like you would expect in Native using a Navigation Controller. Below is the example of our `_layout.tsx` which specifies the layout for the index screen. We can use `_layout` files within any folder to specify what the layout of that folder is. You can use this approach to create `Tab` views and others.

<!--
<Stack
    initialRouteName="index"
    screenOptions={{
        headerStyle: {
            backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold",
        },
    }}
/>
-->

## Project Layout

Currently our layout looks like the below:

- Index
  - web
    - ExpoSearch
  - theming
    - NativeFunctions
  - banking
    - Account

Therefore, if we want to navigate from app start to our bank account we simply use a link and href to `banking/Account`.
