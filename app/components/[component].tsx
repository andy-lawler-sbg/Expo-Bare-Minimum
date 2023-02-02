import { View } from "react-native";
import * as Components from "../../components";
import { Stack, useSearchParams } from "expo-router";

const TestComponent = () => {
  const params = useSearchParams();
  const { component } = params;

  // @ts-ignore
  const DynamicComponent = Components[component];
  return (
    <>
      <Stack.Screen
        options={{
          title: component,
          headerStyle: { backgroundColor: "#ba64d9" },
        }}
      />
      <View>
        <DynamicComponent />
      </View>
    </>
  );
};

export default TestComponent;
