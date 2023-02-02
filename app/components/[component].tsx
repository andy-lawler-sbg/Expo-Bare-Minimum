import { View } from "react-native";
import * as Components from "../../components";
import { Stack, useSearchParams } from "expo-router";
import styles from "./[component].styles";

const TestComponent = () => {
  const { component } = useSearchParams();
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
      <View style={styles.container}>
        <DynamicComponent />
      </View>
    </>
  );
};

export default TestComponent;
