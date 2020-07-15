import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const PickerScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const PickerScreenScrollView = styled.ScrollView``;

export const PickerScreenTextWrapper = styled.View`
  margin-bottom: 20px;
`;

export const PickerScreenText = styled.Text`
  text-align: center;
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clBlack};
`;

export const PickerScreenButtonWrapper = styled.View``;
