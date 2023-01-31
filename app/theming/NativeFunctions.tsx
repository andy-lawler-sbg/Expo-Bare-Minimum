import NativeSystemTheme from "../../Screens/NativeSystemTheme/NativeSystemTheme";
import { Stack } from "expo-router";

const NativeFunctions = () => (
  <>
    <Stack.Screen
      options={{
        title: "Change System Theme",
        headerStyle: { backgroundColor: "#ba64d9" },
      }}
    />
    <NativeSystemTheme />
  </>
);

export default NativeFunctions;
