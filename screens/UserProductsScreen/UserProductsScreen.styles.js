import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

export const UserProductsScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const UserProductsFlatList = styled(FlatList)``;

export const UserProductsScreenNoProductsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const UserProductsScreenNoProductsText = styled.Text`
  font-family: "font";
  font-size: 25px;
  color: ${globalStyles.clFont};
`;
