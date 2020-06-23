import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// redux
import { useSelector } from "react-redux";

// navigators
import ProductsStackNavigator from "../ProductsStackNavigator/ProductsStackNavigator";
import CategoriesStackNavigator from "../CategoriesStackNavigator/CategoriesStackNavigator";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import { renderRespectiveIconForTabNav } from "./ProductsTabNavigation.styles";

const ProductsTabNav = createBottomTabNavigator();

const ProductsTabNavigation = () => {
  const orientation = useSelector((state) => state.settings.orientation);

  return (
    <ProductsTabNav.Navigator
      initialRouteName="Products"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          renderRespectiveIconForTabNav(
            route,
            focused,
            color,
            size,
            orientation
          ),
      })}
      tabBarOptions={{
        style: {
          height: 55,
          // borderTopWidth: 0, // removes shadow
          backgroundColor: globalStyles.clBlack,
        },
        tabStyle: {},
        labelStyle: {
          fontFamily: "font",
          fontSize: 16,
        },
        activeTintColor: globalStyles.clWhite,
        inactiveTintColor: globalStyles.clInactive,
      }}
    >
      <ProductsTabNav.Screen
        name="Products"
        component={ProductsStackNavigator}
      />
      <ProductsTabNav.Screen
        name="Categories"
        component={CategoriesStackNavigator}
      />
    </ProductsTabNav.Navigator>
  );
};

export default ProductsTabNavigation;
