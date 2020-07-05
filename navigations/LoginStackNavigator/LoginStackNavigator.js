import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// components
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";

// screens
import SignupScreen from "../../screens/SignupScreen/SignupScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./LoginStackNavigator.styles";

const LoginStackNav = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <LoginStackNav.Navigator
      initialRouteName="AppSignup"
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
      <LoginStackNav.Screen
        name="AppSignup"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: "Sign up",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
      />
      <LoginStackNav.Screen
        name="AppLogin"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: "Log in",
        })}
      />
    </LoginStackNav.Navigator>
  );
};

export default LoginStackNavigator;
