import { View, Image } from "react-native";
import { H4 } from "@expo/html-elements";
import styles from "./Testing.styles";

export const Testing = () => {
  return (
    <View testID="TestingView" style={styles.container}>
      <Image source={require("../../assets/Apple.png")} style={styles.image} />
      <H4 style={styles.text}>Hello World</H4>
    </View>
  );
};
