import React from "react";

// components
import Button from "../../components/Button/Button";

// sc
import {
  MapScreenView,
  MapScreenScrollView,
  MapScreenTextWrapper,
  MapScreenText,
  MapScreenButtonWrapper,
} from "./MapScreen.styles";

const MapScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <MapScreenView>
      <MapScreenScrollView>
        <MapScreenTextWrapper>
          <MapScreenText>Map Screen</MapScreenText>
          <MapScreenButtonWrapper>
            <Button title="Show Path" action={() => navigate("MapPath")} />
          </MapScreenButtonWrapper>
        </MapScreenTextWrapper>
      </MapScreenScrollView>
    </MapScreenView>
  );
};

export default MapScreen;
