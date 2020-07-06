import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// components
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";

// screens
import LogoutScreen from "../../screens/LogoutScreen/LogoutScreen";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./LogoutStackNavigator.styles";

const LogoutStackNav = createStackNavigator();

const LogoutStackNavigator = () => {
  return (
    <LogoutStackNav.Navigator
      initialRouteName="AppLogout"
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
      })}
    >
      <LogoutStackNav.Screen
        name="AppLogout"
        component={LogoutScreen}
        options={({ navigation }) => ({
          title: "Log out",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
      />
    </LogoutStackNav.Navigator>
  );
};

export default LogoutStackNavigator;
