import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// redux
import { useSelector } from "react-redux";

// navigations
import ProductsTabNavigation from "../ProductsTabNavigation/ProductsTabNavigation";
import OrdersStackNavigator from "../OrdersStackNavigator/OrdersStackNavigator";
import ManageStackNavigator from "../ManageStackNavigator/ManageStackNavigator";
import LoginStackNavigator from "../LoginStackNavigator/LoginStackNavigator";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import { renderAppropriateIcon } from "./MainDrawerNavigation.styles";

const MainDrawerNav = createDrawerNavigator();

const MainDrawerNavigation = () => {
  const orientation = useSelector((state) => state.settings.orientation);

  return (
    <MainDrawerNav.Navigator
      initialRouteName="Shop"
      drawerPosition="left"
      drawerType="front"
      drawerStyle={{
        width: orientation === "portrait" ? "60%" : "30%",
        backgroundColor: globalStyles.clWhite,
      }}
      overlayColor={globalStyles.clOverlay}
      edgeWidth={100}
      drawerContentOptions={{
        style: {},
        itemStyle: {
          alignItems: "flex-start",
        },
        labelStyle: {
          fontFamily: "font",
          fontSize: 22,
        },
        contentContainerStyle: {},
        activeTintColor: globalStyles.clBlack,
        inactiveTintColor: globalStyles.clFaded,
        activeBackgroundColor: "transparent",
        inactiveBackgroundColor: "transparent",
      }}
    >
      <MainDrawerNav.Screen
        name="Shop"
        component={ProductsTabNavigation}
        options={({ route }) => ({
          drawerIcon: (config) => renderAppropriateIcon(route, config),
        })}
      />
      <MainDrawerNav.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={({ route }) => ({
          drawerIcon: (config) => renderAppropriateIcon(route, config),
        })}
      />
      <MainDrawerNav.Screen
        name="Manage"
        component={ManageStackNavigator}
        options={({ route }) => ({
          drawerIcon: (config) => renderAppropriateIcon(route, config),
        })}
      />
      <MainDrawerNav.Screen
        name="Login"
        component={LoginStackNavigator}
        options={({ route }) => ({
          drawerIcon: (config) => renderAppropriateIcon(route, config),
        })}
      />
    </MainDrawerNav.Navigator>
  );
};

export default MainDrawerNavigation;
