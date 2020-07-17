import React from "react";

// components
import Button from "../../components/Button/Button";
import MapHolder from "../../components/MapHolder/MapHolder";

// sc
import {
  MapScreenView,
  MapScreenScrollView,
  MapScreenTextWrapper,
  MapScreenText,
  MapScreenButtonWrapper,
} from "./MapScreen.styles";

const MapScreen = ({ navigation }) => {
  return (
    <MapScreenView>
      <MapHolder navigation={navigation} />
    </MapScreenView>
  );
};

export default MapScreen;
