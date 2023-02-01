import { useEffect, useState } from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { Link } from "expo-router";
import { H5, P } from "@expo/html-elements";
import * as LocalAuthentication from "expo-local-authentication";

import { styles as defaultStyles } from "../../utils";
import styles from "./HomeScreen.styles";
import { HomeScreenProps } from "./HomeScreen.types";

// This example shows Expo-Router links and also Expo-local-authentication working

const Home = ({ didLogin }: HomeScreenProps) => {
  const [isBiometricSupported, setIsBiometricSupported] =
    useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Touch ID",
      fallbackLabel: "Enter Password",
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
      didLogin();
    });
  };

  return (
    <View style={defaultStyles.container}>
      {isAuthenticated || Platform.OS === "android" ? (
        <>
          <Link href="/banking/Account" testID="AccountButton">
            <View style={styles.button}>
              <P style={styles.buttonText}>Go to Bank</P>
            </View>
          </Link>
          <View style={{ margin: 5 }} />
          <Link href="/theming/NativeFunctions" testID="NativeFunctionsButton">
            <View style={[styles.button, { backgroundColor: "red" }]}>
              <P style={styles.buttonText}>Go to Native Module</P>
            </View>
          </Link>
          <View style={{ margin: 5 }} />
          <Link href="/web/ExpoSearch" testID="ExpoSearchButton">
            <View style={[styles.button, { backgroundColor: "blue" }]}>
              <P style={styles.buttonText}>Go to Native Web View</P>
            </View>
          </Link>
        </>
      ) : (
        <>
          <H5>Please login by pressing the button below</H5>
          <TouchableOpacity onPress={onAuthenticate} testID="LoginButton">
            <View style={styles.buttonContainer}>
              <P style={styles.buttonText}>Login</P>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Home;
