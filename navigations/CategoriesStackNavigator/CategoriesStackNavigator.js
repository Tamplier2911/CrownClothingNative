import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
// categories screen
// category screen
// cart screen
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";

// components
import DrawerIcon from "../../components/DrawerIcon/DrawerIcon";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {} from "./CategoriesStackNavigator.styles";

// temp
import { View, Text, Button } from "react-native";

const TempCategoriesScreen = ({ navigation }) => (
  <View>
    <Text>Categories</Text>
    <Button title="category" onPress={() => navigation.navigate("Category")} />
  </View>
);
const TempCategory = ({ navigation }) => (
  <View>
    <Text>Text</Text>
    <Button
      title="details"
      onPress={() => navigation.navigate("Product Details")}
    />
  </View>
);

const CategoriesStackNav = createStackNavigator();

const CategoriesStackNavigator = () => {
  return (
    <CategoriesStackNav.Navigator
      initialRouteName="Categories"
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
      <CategoriesStackNav.Screen
        name="Categories"
        options={({ navigation }) => ({
          title: "Categories",
          headerLeft: () => <DrawerIcon action={navigation.openDrawer} />,
        })}
        component={TempCategoriesScreen}
      />
      <CategoriesStackNav.Screen
        name="Category"
        component={TempCategory}
        options={({ route }) => ({
          title: "Category",
          // route.params.title.length > 25 ? "Category" : route.params.title,
          headerStyle: {
            backgroundColor: globalStyles.clBlack,
            // shadowOpacity:0,
            // elevation: 0,
          },
        })}
      />
      <CategoriesStackNav.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          title: "Description",
          // route.params.title.length > 25 ? "Description" : route.params.title,
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
