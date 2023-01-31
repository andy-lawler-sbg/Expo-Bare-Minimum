import { View, Text, ActivityIndicator } from "react-native";
import { LoadingViewProps } from "./LoadingView.types";
import styles from "./LoadingView.styles";

const LoadingView = ({ isLoading }: LoadingViewProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={isLoading}
        color="#fff"
        style={styles.activityIndicator}
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingView;
