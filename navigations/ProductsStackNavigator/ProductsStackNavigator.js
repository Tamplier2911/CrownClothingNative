import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// components
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";
import CartIcon from "../../components/CartIcon/CartIcon";

// screens
import ProductsOverviewScreen from "../../screens/ProductsOverviewScreen/ProductsOverviewScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import { headerSharedTitleValueProperties } from "./ProductsStackNavigator.styles";

const ProductsStackNav = createStackNavigator();

const ProductsStackNavigator = () => {
  return (
    <ProductsStackNav.Navigator
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
      <ProductsStackNav.Screen
        name="All Products"
        options={({ navigation }) => ({
          title: "Products",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
        component={ProductsOverviewScreen}
      />
      <ProductsStackNav.Screen
        name="Description"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          // title: "Description",
          title:
            route?.params?.title?.length > 25
              ? "Description"
              : route.params.title,
          headerStyle: {
            backgroundColor: globalStyles.clBlack,
            // shadowOpacity:0,
            // elevation: 0,
          },
        })}
      />
      <ProductsStackNav.Screen
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
    </ProductsStackNav.Navigator>
  );
};

export default ProductsStackNavigator;
