import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const ButtonTouchable = styled.TouchableOpacity`
  flex: 1;
`;

export const ButtonTitleWrapper = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clWhite};
  border: 1px solid ${globalStyles.clBlack};
`;

export const ButtonIconView = styled.View``;

export const ButtonTitleText = styled.Text`
  text-align: center;
  font-family: "font";
  text-transform: uppercase;
  font-size: 22px;
  color: ${globalStyles.clFont};
`;
