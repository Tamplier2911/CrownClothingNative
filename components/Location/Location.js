import React, { useState, useEffect } from "react";
import * as ExpoLocation from "expo-location";
// import * as Permissions from "expo-permissions";
// import Constants from "expo-constants";

// components
import Button from "../Button/Button";
import MapView from "../MapView/MapView";
import Spinner from "../Spinner/Spinner";

// sc
import {
  LocationView,
  LocationScrollView,
  LocationTextWrapper,
  LocationText,
  LocationButtonWrapper,
  LocationMapViewBox,
} from "./Location.styles";

// constants
import { locationMarker } from "./Location.constants";

const Location = ({ navigate }) => {
  const [locationData, setLocationData] = useState(null);
  const { latitude, longitude } = locationData ? locationData.coords : {};

  // ask permission for using location once component landed
  const getPermissionAsync = async () => {
    try {
      // make sure Geolaction is turned on on device
      let { status } = await ExpoLocation.requestPermissionsAsync();

      // if Geolocation access is not granted
      if (status !== "granted") {
        alert("Sorry, we need location permissions to make this work!");
      }

      // else get geo data and save in state
      let location = await ExpoLocation.getCurrentPositionAsync({
        timeout: 5000,
      });
      setLocationData(location);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <LocationView>
      <LocationTextWrapper>
        <LocationText>Geolocation Reference:</LocationText>
      </LocationTextWrapper>
      <LocationScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {latitude && longitude ? (
          <LocationMapViewBox>
            <MapView
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              markers={locationMarker({ lat: latitude, lon: longitude })}
            />
          </LocationMapViewBox>
        ) : (
          <Spinner />
        )}
      </LocationScrollView>
      <LocationButtonWrapper>
        <Button title="Picker Reference" action={() => navigate("MapPicker")} />
      </LocationButtonWrapper>
    </LocationView>
  );
};

export default Location;
