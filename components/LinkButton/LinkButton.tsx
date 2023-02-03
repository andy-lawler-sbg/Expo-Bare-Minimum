import { View } from "react-native";
import { Link } from "expo-router";
import { P } from "@expo/html-elements";
import { ButtonProps } from "./LinkButton.types";
import styles from "./LinkButton.styles";

export const LinkButton = ({
  href,
  testID,
  bgColor = "pink",
  text,
  a11y,
}: ButtonProps) => {
  return (
    <Link href={href} testID={testID} accessibilityLabel={a11y}>
      <View style={[styles.button, { backgroundColor: bgColor }]}>
        <P style={styles.buttonText}>{text}</P>
      </View>
    </Link>
  );
};
