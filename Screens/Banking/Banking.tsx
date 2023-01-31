import { View, Text, FlatList } from "react-native";
import styles from "../../utils/GenericStyling";
import { H1, H2, P } from "@expo/html-elements";

// This example shows Expo-HTML-Elements working in a bare workflow app

const Banking = () => {
  const data = [
    { id: "1", price: "10" },
    { id: "2", price: "20" },
  ];
  return (
    <View style={styles.container}>
      <H1> Welcome to my bank</H1>
      <H2>Transactions</H2>
      <FlatList
        style={{ margin: 20 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <P>
              {item.id}: ${item.price}
            </P>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Banking;
