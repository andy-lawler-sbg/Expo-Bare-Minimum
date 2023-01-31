import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  activityIndicator: {
    marginRight: 10,
  },
  text: {
    color: "#fff",
  },
});
