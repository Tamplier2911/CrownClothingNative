import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const ButtonTouchable = styled.TouchableOpacity``;

export const ButtonTitleWrapper = styled.View`
  padding: 10px;
  background-color: ${globalStyles.clBlack};
  border: 1px solid ${globalStyles.clBlack};
`;

export const ButtonIconView = styled.View``;

export const ButtonTitleText = styled.Text`
  text-align: center;
  font-family: "font";
  text-transform: uppercase;
  font-size: 22px;
  color: ${globalStyles.clWhite};
`;
