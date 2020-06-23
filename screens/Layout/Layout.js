import React, { useEffect } from "react";
import { Dimensions } from "react-native";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrientation } from "../../redux/settings/settings.selectors";
import { getCurrentOrientation } from "../../redux/settings/settings.actions";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNavigation from "../../navigations/MainDrawerNavigation/MainDrawerNavigation";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";

// sc
import { RootLayout } from "./Layout.styles";

// temporary screens
// import CartScreen from "../CartScreen/CartScreen";
// import EditProductScreen from "../EditProductScreen/EditProductScreen";
// import OrdersScreen from "../OrdersScreen/OrdersScreen";
// import ProductDetailsScreen from "../ProductDetailsScreen/ProductDetailsScreen";
import ProductsOverviewScreen from "../ProductsOverviewScreen/ProductsOverviewScreen";
// import UserProductsScreen from "../UserProductsScreen/UserProductsScreen";

const Layout = ({ fontLoaded, getCurrentOrientation, orientation }) => {
  useEffect(() => {
    Dimensions.addEventListener("change", getCurrentOrientation);
    return () =>
      Dimensions.removeEventListener("change", getCurrentOrientation);
  }, []);

  console.log(orientation);

  return fontLoaded ? (
    <RootLayout>
      {orientation === "portrait" ? <StatusBar /> : null}
      <NavigationContainer>
        <MainDrawerNavigation />
      </NavigationContainer>
      {/* <ProductsOverviewScreen /> */}
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

const mapStateToProps = createStructuredSelector({
  orientation: selectOrientation,
});

export default connect(mapStateToProps, { getCurrentOrientation })(Layout);
