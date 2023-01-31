import Banking from "../../Screens/Banking/Banking";
import { Stack } from "expo-router";

const Account = () => (
  <>
    <Stack.Screen
      options={{
        title: "My Bank Account",
        headerStyle: { backgroundColor: "#63d4c5" },
      }}
    />
    <Banking />
  </>
);

export default Account;
