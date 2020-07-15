import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// components
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";
import CartIcon from "../../components/CartIcon/CartIcon";

// screens
import MapScreen from "../../screens/MapScreen/MapScreen";
import PathScreen from "../../screens/PathScreen/PathScreen";
import PickerScreen from "../../screens/PickerScreen/PickerScreen";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./MapStackNavigator.styles";

const MapStackNav = createStackNavigator();

const MapStackNavigator = () => {
  return (
    <MapStackNav.Navigator
      initialRouteName="MapWe"
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
      <MapStackNav.Screen
        name="MapWe"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Map",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
      />
      <MapStackNav.Screen
        name="MapPath"
        component={PathScreen}
        options={({ navigation }) => ({
          title: "Path",
        })}
      />
      <MapStackNav.Screen
        name="MapPicker"
        component={PickerScreen}
        options={({ navigation }) => ({
          title: "Image Picker",
        })}
      />
    </MapStackNav.Navigator>
  );
};

export default MapStackNavigator;
