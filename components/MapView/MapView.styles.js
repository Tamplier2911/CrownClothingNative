import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";
import MapView, { Marker, Polyline } from "react-native-maps";

export const MapViewContainer = styled.View`
  flex: 1;
  border: 1px solid ${globalStyles.clBlack};
`;

export const MapViewElement = styled(MapView)`
  flex: 1;
`;

export const MapViewMarker = styled(Marker)``;

export const MapViewPolyline = styled(Polyline)``;
