import { View } from "react-native";
import * as Components from "../../components";
import { Stack, useSearchParams } from "expo-router";
import styles from "./[component].styles";
import React, { useEffect, useState } from "react";

const TestComponent = () => {
  const { component } = useSearchParams();
  const [isReady, setIsReady] = useState<boolean | null>(null);
  const DynamicComponent = Components[component];

  useEffect(() => (component ? setIsReady(true) : setIsReady(false)));

  return (
    <>
      <Stack.Screen
        options={{
          title: component,
          headerStyle: { backgroundColor: "#ba64d9" },
        }}
      />
      <View style={styles.container}>
        {isReady ? <DynamicComponent /> : null}
      </View>
    </>
  );
};

export default TestComponent;
