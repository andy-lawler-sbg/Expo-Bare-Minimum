import { View, StyleSheet, Button, Text } from "react-native";
import { Link } from "expo-router";
import defaultStyles from "../utils/GenericStyling";
import { P } from "@expo/html-elements";
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "pink",
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});

const Home = () => {
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
      console.log(result);
    });
  };

  return (
    <View style={defaultStyles.container}>
      {isAuthenticated ? (
        <Link href="/banking">
          <View style={styles.button}>
            <P style={styles.buttonText}>Go to Bank</P>
          </View>
        </Link>
      ) : (
        <Button onPress={onAuthenticate} title="Login" />
      )}
    </View>
  );
};

export default Home;
