import React from "react";

// sc
import {
  OrderDetailsScreenView,
  OrderDetailsScreenText,
} from "./OrderDetailsScreen.styles";

const OrderDetailsScreen = ({ route }) => {
  const {
    id,
    createdAt,
    status,
    totalSum,
    orderedItems,
    userInfo,
  } = route.params.item;

  return (
    <OrderDetailsScreenView>
      {orderedItems.map((item) => (
        <OrderDetailsScreenText key={item.id}>
          {item.name}
        </OrderDetailsScreenText>
      ))}
    </OrderDetailsScreenView>
  );
};

export default OrderDetailsScreen;
