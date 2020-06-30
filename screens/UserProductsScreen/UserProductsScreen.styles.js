import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

export const UserProductsScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const UserProductsFlatList = styled(FlatList)``;
