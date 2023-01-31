import * as Settings from "expo-settings";
import { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import styles from "./NativeSystemTheme.styles";

// This example shows an Expo Module with Native Functions working

const NativeSystemTheme = () => {
  const [theme, setTheme] = useState<string>(Settings.getTheme());

  useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  const updateTheme = () => {
    const theme = nextTheme;
    Settings.setTheme(theme);
    // For some reason the EventEmitter was not called so I had to force an app re-render using setTheme
    setTheme(theme);
  };

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <View style={styles.container}>
      <Text>Theme: {Settings.getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={updateTheme} />
    </View>
  );
};

export default NativeSystemTheme;
