import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";
import { FlatList } from "react-native";

export const CartScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const CartScreenFlatList = styled(FlatList)``;

export const CartScreenPurchaseView = styled.View`
  height: 65px;
  padding: 10px 10px 0px 10px;
`;

export const CartScreenPurchaseButton = styled.View`
  flex: 1;
`;

export const CartScreenIsEmptyView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartScreenIsEmptyText = styled.Text`
  font-family: "font";
  font-size: 25px;
  color: ${globalStyles.clFont};
`;
