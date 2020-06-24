import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

export const CategoriesScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
  padding-bottom: 10px;
`;

export const CategoriesScreenFlatList = styled(FlatList)`
  flex: 1;
`;
