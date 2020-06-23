import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const ProductDetailsScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const ProductDetailsScreenText = styled.Text`
  font-family: "font";
  font-size: 18px;
  color: ${globalStyles.clFont};
`;
