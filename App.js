import React from "react";
import { enableScreens } from "react-native-screens";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// fonts
import { useFonts } from "@use-expo/font";

// layout
import Layout from "./screens/Layout/Layout";

// optimize screens to be compiled to native widgets
enableScreens();

export default function App() {
  const [fontLoaded] = useFonts({
    font: require("./assets/Fonts/OpenSansCondensed-Light.ttf"),
    bold: require("./assets/Fonts/OpenSansCondensed-Bold.ttf"),
  });
  return (
    <Provider store={store}>
      <Layout fontLoaded={fontLoaded} />
    </Provider>
    // <Layout fontLoaded={fontLoaded} />
  );
}
