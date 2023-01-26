import { View, Text } from "react-native";
import styles from "../../utils/GenericStyling";
import { H2 } from "@expo/html-elements";

const Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <H2
        onPress={() => {
          navigation.goBack();
        }}
      >
        Details Screen
      </H2>
    </View>
  );
};

export default Details;
