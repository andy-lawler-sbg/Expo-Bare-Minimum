import { View, Text, FlatList } from "react-native";
import styles from "../../utils/GenericStyling";
import { H2 } from "@expo/html-elements";

const Details = ({ navigation }) => {
  const data = [
    { id: "1", price: "10" },
    { id: "2", price: "20" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={{ margin: 20 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.id}: ${item.price}
            </Text>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Details;
