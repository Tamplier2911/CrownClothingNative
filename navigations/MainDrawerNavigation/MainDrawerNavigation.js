import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// redux
import { useSelector } from "react-redux";

// navigations
import ProductsTabNavigation from "../ProductsTabNavigation/ProductsTabNavigation";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./MainDrawerNavigation.styles";

import { View, Text, Button } from "react-native";
const Shop = ({ navigation }) => {
  return (
    <View>
      <Text>Shop</Text>
      <Button title="nav" onPress={navigation.openDrawer} />
    </View>
  );
};
const Orders = ({ navigation }) => (
  <View>
    <Text>Orders</Text>
    <Button title="nav" onPress={navigation.openDrawer} />
  </View>
);

const Manage = ({ navigation }) => (
  <View>
    <Text>Manage</Text>
    <Button title="nav" onPress={navigation.openDrawer} />
  </View>
);

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
        itemStyle: { alignItems: "flex-end" },
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
      <MainDrawerNav.Screen name="Shop" component={ProductsTabNavigation} />
      <MainDrawerNav.Screen name="Orders" component={Orders} />
      <MainDrawerNav.Screen name="Manage" component={Manage} />
    </MainDrawerNav.Navigator>
  );
};

export default MainDrawerNavigation;
