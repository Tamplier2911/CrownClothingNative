import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const PathScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const PathScreenScrollView = styled.ScrollView``;

export const PathScreenTextWrapper = styled.View`
  margin-bottom: 20px;
`;

export const PathScreenText = styled.Text`
  text-align: center;
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clBlack};
`;

export const PathScreenButtonWrapper = styled.View``;
