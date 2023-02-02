import { View } from "react-native";
import { Link } from "expo-router";
import { P } from "@expo/html-elements";
import { ButtonProps } from "./LinkButton.types";
import styles from "./LinkButton.styles";

const LinkButton = ({ href, testID, bgColor = "pink", text }: ButtonProps) => {
  return (
    <Link href={href} testID={testID}>
      <View style={[styles.button, { backgroundColor: bgColor }]}>
        <P style={styles.buttonText}>{text}</P>
      </View>
    </Link>
  );
};

export default LinkButton;
