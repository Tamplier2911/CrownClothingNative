import React from "react";

// components
import Button from "../Button/Button";
import MapView from "../MapView/MapView";

// sc
import {
  MapHolderView,
  MapHolderScrollView,
  MapHolderTextWrapper,
  MapHolderText,
  MapHolderButtonWrapper,
  MapHolderMapWrapper,
} from "./MapHolder.styles";

// constants
import { mapHolderMarkers } from "../MapHolder/MapHolder.constants";

const MapHolder = ({ navigate }) => {
  return (
    <MapHolderView>
      <MapHolderTextWrapper>
        <MapHolderText>Map Screen</MapHolderText>
      </MapHolderTextWrapper>
      <MapHolderScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <MapHolderMapWrapper>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            markers={mapHolderMarkers}
          />
        </MapHolderMapWrapper>
      </MapHolderScrollView>
      <MapHolderButtonWrapper>
        <Button title="Show Location" action={() => navigate("MapPath")} />
      </MapHolderButtonWrapper>
    </MapHolderView>
  );
};

export default MapHolder;
