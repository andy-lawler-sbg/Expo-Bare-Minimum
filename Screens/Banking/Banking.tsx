import { View, FlatList } from "react-native";
import { H2, P } from "@expo/html-elements";

import { styles } from "../../utils";
import { AccountRow } from "./Banking.types";

// This example shows Expo-HTML-Elements working in a bare workflow app

const data: AccountRow[] = [
  { id: "1", price: 10 },
  { id: "2", price: 20 },
];

const Banking = () => (
  <View style={styles.container}>
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

export default Banking;
