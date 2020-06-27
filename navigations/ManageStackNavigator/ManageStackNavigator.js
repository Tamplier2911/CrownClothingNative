import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import UserProductsScreen from "../../screens/UserProductsScreen/UserProductsScreen";
import EditProductScreen from "../../screens/EditProductScreen/EditProductScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";

// components
import CartIcon from "../../components/CartIcon/CartIcon";
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./ManageStackNavigator.styles";

const ManageStackNav = createStackNavigator();

const ManageStackNavigator = () => {
  return (
    <ManageStackNav.Navigator
      initialRouteName="Manage"
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
      <ManageStackNav.Screen
        name="Manage"
        component={UserProductsScreen}
        options={({ navigation }) => ({
          title: "Manage",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
      />
      <ManageStackNav.Screen
        name="Edit"
        component={EditProductScreen}
        options={({ route }) => ({
          title:
            route?.params?.title?.length > 25 ? "Edit" : route.params.title,
          headerStyle: {
            backgroundColor: globalStyles.clBlack,
            // shadowOpacity:0,
            // elevation: 0,
          },
        })}
      />
      <ManageStackNav.Screen
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
    </ManageStackNav.Navigator>
  );
};

export default ManageStackNavigator;
