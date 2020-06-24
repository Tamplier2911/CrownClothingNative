import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import CategoriesScreen from "../../screens/CategoriesScreen/CategoriesScreen";
import ProductsOverviewScreen from "../../screens/ProductsOverviewScreen/ProductsOverviewScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";

// components
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";
import CartIcon from "../../components/CartIcon/CartIcon";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./CategoriesStackNavigator.styles";

const CategoriesStackNav = createStackNavigator();

const CategoriesStackNavigator = () => {
  return (
    <CategoriesStackNav.Navigator
      initialRouteName="Categories"
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
      <CategoriesStackNav.Screen
        name="Categories"
        options={({ navigation }) => ({
          title: "Categories",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
        component={CategoriesScreen}
      />
      <CategoriesStackNav.Screen
        name="Category"
        component={ProductsOverviewScreen}
        options={({ route }) => ({
          title:
            route?.params?.title?.length > 25 ? "Category" : route.params.title,
          headerStyle: {
            backgroundColor: globalStyles.clBlack,
            // shadowOpacity:0,
            // elevation: 0,
          },
        })}
      />
      <CategoriesStackNav.Screen
        name="Description"
        component={ProductDetailsScreen}
        options={({ route }) => ({
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
      <CategoriesStackNav.Screen
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
    </CategoriesStackNav.Navigator>
  );
};

export default CategoriesStackNavigator;
