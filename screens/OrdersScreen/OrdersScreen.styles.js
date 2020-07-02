import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { FlatList } from "react-native";

export const OrdersScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const OrdersScreenFlatList = styled(FlatList)``;

export const OrdersScreenIsEmptyView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const OrdersScreenIsEmptyText = styled.Text`
  font-family: "font";
  font-size: 25px;
  color: ${globalStyles.clFont};
`;
