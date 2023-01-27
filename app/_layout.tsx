import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerLargeTitle: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default Layout;
