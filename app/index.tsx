import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import { Stack } from "expo-router";
import { useState } from "react";

const Index = () => {
  const [headerStyle, setHeaderStyle] = useState<{
    title: string;
    color: string;
  }>({ title: "Login", color: "#63d4c5" });

  const didLogin = () => {
    setHeaderStyle({ title: "Welcome", color: "#64d975" });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: headerStyle.title,
          headerStyle: { backgroundColor: headerStyle.color },
        }}
      />
      <HomeScreen didLogin={didLogin} />
    </>
  );
};

export default Index;
