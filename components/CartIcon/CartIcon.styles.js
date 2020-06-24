import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const CartIconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100px;
  justify-content: flex-end;
`;

export const CartIconTouchable = styled.TouchableOpacity``;

export const CartIconWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 30px;
  margin-right: 8px;
`;

export const CartIconBadgeView = styled.View`
  position: absolute;
  top: 5px;
  left: -5px;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${globalStyles.clBadge};
  border-radius: 15px;
`;

export const CartIconBadgeText = styled.Text`
  padding: 1px;
  font-family: "bold";
  color: ${globalStyles.clWhite};
`;
