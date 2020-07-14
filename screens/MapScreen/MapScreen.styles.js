import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const MapScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const MapScreenScrollView = styled.ScrollView``;

export const MapScreenTextWrapper = styled.View`
  margin-bottom: 20px;
`;

export const MapScreenText = styled.Text`
  text-align: center;
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clBlack};
`;

export const MapScreenButtonWrapper = styled.View``;
