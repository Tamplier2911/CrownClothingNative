import React from "react";

// components
import Location from "../../components/Location/Location";

// sc
import { PathScreenView } from "./PathScreen.styles";

const PathScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <PathScreenView>
      <Location navigate={navigate} />
    </PathScreenView>
  );
};

export default PathScreen;
