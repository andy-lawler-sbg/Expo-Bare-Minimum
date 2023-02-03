import { useState } from "react";
import { TextInput, View } from "react-native";
import { WebView } from "../../components/WebView/WebView";
import { LoadingView } from "../../components/LoadingView/LoadingView";

import styles from "./NativeWebView.styles";

// This example shows an Expo Module with a Native View working

const NativeWebView = () => {
  const [inputUrl, setInputUrl] = useState("https://m.skybet.com");
  const [url, setUrl] = useState(inputUrl);
  const [isLoading, setIsLoading] = useState(true);

  const setLoadingState = () => setIsLoading(false);

  const testID = "NativeWebView";

  return (
    <View
      style={styles.container}
      testID={testID}
      accessibilityLabel="Native Web View Container"
    >
      <TextInput
        accessibilityLabel="Native Web View Text Input"
        testID={`${testID}.textInput`}
        value={inputUrl}
        onChangeText={setInputUrl}
        returnKeyType="go"
        autoCapitalize="none"
        onSubmitEditing={() => {
          if (inputUrl !== url) {
            setUrl(inputUrl);
            setIsLoading(true);
          }
        }}
        keyboardType="url"
        style={styles.textInput}
      />
      <WebView url={inputUrl} setLoading={setLoadingState} />
      <LoadingView isLoading={isLoading} testID="WebViewLoader" />
    </View>
  );
};

export default NativeWebView;
