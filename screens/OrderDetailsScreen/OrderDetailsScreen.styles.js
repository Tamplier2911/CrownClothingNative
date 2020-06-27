import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const OrderDetailsScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const OrderDetailsScreenText = styled.Text`
  font-family: "font";
  font-size: 18px;
  color: ${globalStyles.clFont};
`;
