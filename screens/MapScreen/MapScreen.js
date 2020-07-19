import React from "react";

// components
import MapHolder from "../../components/MapHolder/MapHolder";

// sc
import { MapScreenView } from "./MapScreen.styles";

const MapScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <MapScreenView>
      <MapHolder navigate={navigate} />
    </MapScreenView>
  );
};

export default MapScreen;
