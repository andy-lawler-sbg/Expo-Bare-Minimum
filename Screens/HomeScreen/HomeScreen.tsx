import { useEffect, useState } from "react";
import { View, TouchableOpacity, Platform, Image } from "react-native";
import { H5, P } from "@expo/html-elements";
import * as LocalAuthentication from "expo-local-authentication";
import LinkButton from "../../components/LinkButton/LinkButton";
import Spacer from "../../components/Spacer/Spacer";

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
        <View style={styles.loginContainer}>
          <Image
            source={
              Platform.OS === "android"
                ? require("../../assets/GooglePlay.png")
                : require("../../assets/Apple.png")
            }
            style={styles.image}
          />
          <LinkButton
            href="/banking/Account"
            testID="AccountButton"
            text="Go to Bank"
          />
          <Spacer />
          <LinkButton
            href="/theming/NativeFunctions"
            testID="NativeFunctionsButton"
            bgColor="red"
            text="Go to Native Module"
          />
          <Spacer />
          <LinkButton
            href="/web/ExpoSearch"
            testID="ExpoSearchButton"
            bgColor="blue"
            text="Go to Native Web View"
          />
        </View>
      ) : (
        <View style={styles.loginContainer}>
          <H5>Please login by pressing the button below</H5>
          <TouchableOpacity
            onPress={onAuthenticate}
            testID="LoginButton"
            style={styles.loginButtonContainer}
          >
            <P style={styles.loginButtonText}>Login</P>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Home;
