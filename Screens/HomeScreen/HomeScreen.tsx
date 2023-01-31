import { View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles as defaultStyles } from "../../utils";
import styles from "./HomeScreen.styles";
import { H5, P } from "@expo/html-elements";
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect, useState } from "react";

// This example shows Expo-Router links and also Expo-local-authentication working

type HomeScreenProps = {
  didLogin: () => void;
};

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
      {isAuthenticated ? (
        <>
          <Link href="/banking/Account">
            <View style={styles.button}>
              <P style={styles.buttonText}>Go to Bank</P>
            </View>
          </Link>
          <View style={{ margin: 5 }} />
          <Link href="/theming/NativeFunctions">
            <View style={[styles.button, { backgroundColor: "red" }]}>
              <P style={styles.buttonText}>Go to Native Module</P>
            </View>
          </Link>
          <View style={{ margin: 5 }} />
          <Link href="/web/ExpoSearch">
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
