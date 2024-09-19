interface Window {
  ReactNativeWebView: {
    postMessage(message: string): void;
    onMessage(event: MessageEvent): void;
  };
}
