import React from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  MapViewContainer,
  MapViewElement,
  MapViewMarker,
  MapViewPolyline,
} from "./MapView.styles";

// constants
import { mapStyle } from "./MapView.constants";

const MapView = (props) => {
  const { markers } = props;

  return (
    <MapViewContainer>
      <MapViewElement
        {...props}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
      >
        {markers
          ? markers.map((marker) => {
              return (
                <MapViewMarker
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                  key={marker.key}
                />
              );
            })
          : null}
        {markers && markers.length === 2 ? (
          <MapViewPolyline
            coordinates={[
              {
                latitude: markers[0].latlng.latitude,
                longitude: markers[0].latlng.longitude,
              },
              {
                latitude: markers[1].latlng.latitude,
                longitude: markers[1].latlng.longitude,
              },
            ]}
            strokeColor={globalStyles.clMapPolyline}
            strokeWidth={4}
          />
        ) : null}
      </MapViewElement>
    </MapViewContainer>
  );
};

export default MapView;
