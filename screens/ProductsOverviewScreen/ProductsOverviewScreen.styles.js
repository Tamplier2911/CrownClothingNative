import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

export const ProductsOverviewScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const ProductsOverviewScreenText = styled.Text`
  font-family: "font";
  font-size: 18px;
  color: ${globalStyles.clFont};
`;

export const ProductsOverviewScreenFlatList = styled(FlatList)`
  flex: 1;
`;
