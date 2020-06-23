import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// components
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";

// screens
import ProductsOverviewScreen from "../../screens/ProductsOverviewScreen/ProductsOverviewScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";
// cart screen

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
      screenOptions={{
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
        //   headerRight: () => <CartIcon />
      }}
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
        name="Product Details"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          title: headerSharedTitleValueProperties(route),
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
