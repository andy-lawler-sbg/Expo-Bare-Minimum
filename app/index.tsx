import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import defaultStyles from "../utils/GenericStyling";
import { P } from "@expo/html-elements";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
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
  return (
    <View style={defaultStyles.container}>
      <Link href="/details">
        <View style={styles.button}>
          <P style={styles.buttonText}>Go to details</P>
        </View>
      </Link>
    </View>
  );
};

export default Home;
