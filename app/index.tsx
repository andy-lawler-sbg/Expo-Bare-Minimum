import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import { Stack } from "expo-router";
import { useState } from "react";

type HeaderStyle = {
  title: string;
  color: string;
};

const Index = () => {
  const [headerStyle, setHeaderStyle] = useState<HeaderStyle>({
    title: "Login",
    color: "#63d4c5",
  });

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
