import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

export const ProductsOverviewScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const ProductsOverviewScreenFlatList = styled(FlatList)``;

export const ProductsOverviewScreenScrollView = styled.ScrollView``;
