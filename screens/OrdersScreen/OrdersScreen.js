import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import OrderItem from "../../components/OrderItem/OrderItem";

// sc
import { OrdersScreenView, OrdersScreenFlatList } from "./OrdersScreen.styles";

const OrdersScreen = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.allOrders);
  const { navigate } = navigation;

  return (
    <OrdersScreenView>
      <OrdersScreenFlatList
        data={orders}
        keyExtractor={(data) => data.id}
        renderItem={(data) => (
          <OrderItem
            item={data.item}
            action={() => navigate("Order Details", { item: data.item })}
          />
        )}
      />
    </OrdersScreenView>
  );
};

export default OrdersScreen;
