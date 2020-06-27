import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import OrdersScreen from "../../screens/OrdersScreen/OrdersScreen";
import OrderDetailsScreen from "../../screens/OrderDetailsScreen/OrderDetailsScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";

// components
import CartIcon from "../../components/CartIcon/CartIcon";
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./OrdersStackNavigator.styles";

const OrdersStackNav = createStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStackNav.Navigator
      initialRouteName="Orders"
      // mode="modal"
      // stack shared options
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: globalStyles.clBlack,
          // shadowOpacity:0,
          // elevation: 0,
        },
        headerTintColor: globalStyles.clWhite,
        headerTitleStyle: {
          fontFamily: "font",
          fontSize: 22,
          color: globalStyles.clWhite,
        },
        headerBackTitleStyle: {
          fontFamily: "font",
          fontSize: 16,
        },
        headerRight: () => (
          <CartIcon action={() => navigation.navigate("Cart")} />
        ),
      })}
    >
      <OrdersStackNav.Screen
        name="Orders"
        component={OrdersScreen}
        options={({ navigation }) => ({
          title: "Orders",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
      />
      <OrdersStackNav.Screen
        name="Order Details"
        component={OrderDetailsScreen}
        options={({ route }) => ({
          title:
            route?.params?.title?.length > 25
              ? "Order Details"
              : route.params.title,
          headerStyle: {
            backgroundColor: globalStyles.clBlack,
            // shadowOpacity:0,
            // elevation: 0,
          },
        })}
      />
      <OrdersStackNav.Screen
        name="Cart"
        component={CartScreen}
        options={({ route }) => ({
          title: "Cart",
          headerStyle: {
            backgroundColor: globalStyles.clBlack,
            // shadowOpacity:0,
            // elevation: 0,
          },
        })}
      />
    </OrdersStackNav.Navigator>
  );
};

export default OrdersStackNavigator;
