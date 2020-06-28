import React from "react";

// redux
import { useSelector } from "react-redux";

// iconinc
import { Entypo } from "@expo/vector-icons";

// sc
import {
  OrderItemContainer,
  OrderItemWrapper,
  OrderItemTop,
  OrderItemStatusView,
  OrderItemStatusConstantText,
  OrderItemStatusText,
  OrderItemBottom,
  OrderItemTextView,
  OrderItemDateText,
  OrderItemSumText,
  OrderItemTouchableCircle,
  OrderItemTouchableView,
} from "./OrderItem.styles";

const OrderItem = ({ item, action }) => {
  const { createdAt, status, totalSum } = item;
  const width = useSelector((state) => state.settings.width);
  const orientation = useSelector((state) => state.settings.orientation);

  return (
    <OrderItemContainer>
      <OrderItemWrapper width={width} orientation={orientation}>
        <OrderItemTop>
          <OrderItemStatusView>
            <OrderItemStatusConstantText>Status: </OrderItemStatusConstantText>
            <OrderItemStatusText status={status}>{status}</OrderItemStatusText>
          </OrderItemStatusView>
        </OrderItemTop>
        <OrderItemBottom>
          <OrderItemTextView>
            <OrderItemDateText>
              {new Date(createdAt).toLocaleDateString().replaceAll(".", "/")}
            </OrderItemDateText>
          </OrderItemTextView>
          <OrderItemTextView>
            <OrderItemSumText>${totalSum}</OrderItemSumText>
          </OrderItemTextView>
        </OrderItemBottom>
        <OrderItemTouchableCircle activeOpacity={0.9} onPress={action}>
          <OrderItemTouchableView>
            <Entypo name="chevron-down" size={24} color="black" />
          </OrderItemTouchableView>
        </OrderItemTouchableCircle>
      </OrderItemWrapper>
    </OrderItemContainer>
  );
};

export default OrderItem;
