import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import OrderItem from "../../components/OrderItem/OrderItem";
import Spiner from "../../components/Spinner/Spinner";

// sc
import {
  OrdersScreenView,
  OrdersScreenFlatList,
  OrdersScreenIsEmptyView,
  OrdersScreenIsEmptyText,
} from "./OrdersScreen.styles";

const OrdersScreen = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.allOrders).sort(
    (a, b) => b.createdAt - a.createdAt
  );
  const ordersIsLoading = useSelector((state) => state.orders.isLoading);
  const { navigate } = navigation;

  return (
    <OrdersScreenView>
      {ordersIsLoading ? (
        <Spiner />
      ) : orders.length ? (
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
      ) : (
        <OrdersScreenIsEmptyView>
          <OrdersScreenIsEmptyText>
            Your orders list is empty!
          </OrdersScreenIsEmptyText>
        </OrdersScreenIsEmptyView>
      )}
    </OrdersScreenView>
  );
};

export default OrdersScreen;
