import { WebView as NativeWebView } from "expo-web-view";
import styles from "./WebView.styles";
import { WebViewProps } from "./WebView.types";

const WebView = ({ url, setLoading }: WebViewProps) => (
  <NativeWebView
    url={
      url.startsWith("https://") || url.startsWith("http://")
        ? url
        : `https://${url}`
    }
    onLoad={() => setLoading()}
    style={styles.webView}
  />
);

export default WebView;
