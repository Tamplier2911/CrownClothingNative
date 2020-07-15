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
      <MapScreenTextWrapper>
        <MapScreenText>Map Screen</MapScreenText>
      </MapScreenTextWrapper>
      <MapScreenScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <MapScreenTextWrapper>
          <MapScreenText>placeholder</MapScreenText>
        </MapScreenTextWrapper>
      </MapScreenScrollView>
      <MapScreenButtonWrapper>
        <Button title="Show Path" action={() => navigate("MapPath")} />
      </MapScreenButtonWrapper>
    </MapScreenView>
  );
};

export default MapScreen;
