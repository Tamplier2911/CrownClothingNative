import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const CartItemContainer = styled.View`
  flex: 1;
  width: 100%;
  height: ${({ width }) => width * 0.32}px;
  padding: 10px;
  flex-direction: row;

  padding-bottom: 0px;
`;

export const CartItemLeftView = styled.View`
  width: 25%;
  height: 100%;

  border-bottom-width: 1px;
  border-bottom-color: black;
  border-top-width: 1px;
  border-top-color: black;
  border-left-width: 1px;
  border-left-color: black;
`;

export const CartItemImageWrapper = styled.View`
  flex: 1;
`;

export const CartItemImage = styled.Image`
  flex: 1;
  width: undefined;
  height: undefined;
  resize-mode: cover;
`;

export const CartItemRightView = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px;

  border-bottom-width: 1px;
  border-bottom-color: black;
  border-top-width: 1px;
  border-top-color: black;
  border-right-width: 1px;
  border-right-color: black;
`;

export const CartItemDescView = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const CartItemTextView = styled.View``;

export const CartItemQuantityView = styled.View`
  flex-direction: row;
`;

export const CartItemText = styled.Text`
  font-family: "font";
  font-size: ${({ orientation }) =>
    orientation === "portrait" ? "20" : "25"}px;
  color: ${globalStyles.clFont};
`;

export const CartItemTextWrapper = styled.View``;

export const CartItemIconsWrapper = styled.View`
  flex-direction: row;
`;

export const CartItemRemoveView = styled.View`
  justify-content: center;
`;

export const CartItemIconTouchable = styled.TouchableOpacity`
  justify-content: center;
`;
