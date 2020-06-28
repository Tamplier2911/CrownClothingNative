import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const OrderItemContainer = styled.View`
  width: 100%;
  padding: 10px;
`;

export const OrderItemWrapper = styled.View`
  width: 100%;
  height: ${({ width, orientation }) =>
    orientation === "portrait" ? width * 0.38 : width * 0.2}px;
  border: 1px solid ${globalStyles.clBlack};

  background-color: ${globalStyles.clWhite};
  shadow-offset: 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 5;
`;

export const OrderItemTop = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const OrderItemBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OrderItemStatusView = styled.View`
  flex-direction: row;
`;

export const OrderItemStatusText = styled.Text`
  font-size: 28px;
  font-family: "font";
  color: ${({ status }) =>
    status === "success"
      ? globalStyles.clSuccess
      : status === "declined"
      ? globalStyles.clDeclined
      : globalStyles.clStatus};
`;

export const OrderItemStatusConstantText = styled.Text`
  font-size: 28px;
  font-family: "font";
  color: ${globalStyles.clFont};
`;

export const OrderItemTextView = styled.View`
  width: 48%;
`;

export const OrderItemDateText = styled.Text`
  font-size: 24px;
  font-family: "font";
  color: ${globalStyles.clFont};
  padding-left: 10px;
  padding-bottom: 5px;
`;

export const OrderItemSumText = styled.Text`
  font-size: 24px;
  font-family: "font";
  color: ${globalStyles.clFont};
  padding-right: 10px;
  padding-bottom: 5px;
  text-align: right;
`;

export const OrderItemTouchableCircle = styled.TouchableOpacity`
  background-color: white;
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 30px;

  align-self: center;
  bottom: -12%;

  align-items: center;
  justify-content: center;

  border: 1px solid ${globalStyles.clBlack};

  shadow-offset: 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 5;
`;

export const OrderItemTouchableView = styled.View`
  align-items: center;
  justify-content: center;
`;
