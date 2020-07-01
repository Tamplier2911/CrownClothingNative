import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import UserProductsScreen from "../../screens/UserProductsScreen/UserProductsScreen";
import EditProductScreen from "../../screens/EditProductScreen/EditProductScreen";
import CreateProductScreen from "../../screens/CreateProductScreen/CreateProductScreen";

// components
import CreateIcon from "../../components/CreateIcon/CreateIcon";
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";
import EditIcon from "../../components/EditIcon/EditIcon";

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
          <CreateIcon
            action={() => navigation.navigate("Create", { edit: false })}
          />
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
        options={({ route, navigation }) => ({
          title:
            route?.params?.title?.length > 25 ? "Edit" : route.params.title,
          headerStyle: {
            backgroundColor: globalStyles.clBlack,
            // shadowOpacity:0,
            // elevation: 0,
          },
          headerRight: () => (
            <EditIcon
              action={() =>
                navigation.navigate("Create", {
                  edit: true,
                  item: route.params.item,
                })
              }
            />
          ),
        })}
      />
      <ManageStackNav.Screen
        name="Create"
        component={CreateProductScreen}
        options={({ route }) => ({
          title: "Create Product",
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
