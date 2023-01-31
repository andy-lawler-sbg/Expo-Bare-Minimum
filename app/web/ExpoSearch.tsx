import NativeWebView from "../../Screens/NativeWebView/NativeWebView";
import { Stack } from "expo-router";

const ExpoSearch = () => (
  <>
    <Stack.Screen
      options={{
        title: "Explore Web",
        headerStyle: { backgroundColor: "#d96477" },
      }}
    />
    <NativeWebView />
  </>
);

export default ExpoSearch;
