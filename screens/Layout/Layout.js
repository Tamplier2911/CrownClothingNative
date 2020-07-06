import React, { useEffect } from "react";
import { Dimensions } from "react-native";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrientation } from "../../redux/settings/settings.selectors";
import { selectIsAuthLoading } from "../../redux/auth/auth.selectors";
import { getCurrentOrientation } from "../../redux/settings/settings.actions";
import { checkUserSessionStart } from "../../redux/auth/auth.actions";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNavigation from "../../navigations/MainDrawerNavigation/MainDrawerNavigation";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";

// modal
import Modal from "../../components/Modal/Modal";

// sc
import { RootLayout } from "./Layout.styles";

const Layout = ({
  fontLoaded,
  getCurrentOrientation,
  checkUserSessionStart,
  orientation,
  isAuthLoading,
}) => {
  useEffect(() => {
    Dimensions.addEventListener("change", getCurrentOrientation);
    checkUserSessionStart();
    return () =>
      Dimensions.removeEventListener("change", getCurrentOrientation);
  }, []);

  console.log(orientation);

  // return fontLoaded && !isAuthLoading ?
  return fontLoaded ? (
    <RootLayout>
      {orientation === "portrait" ? <StatusBar /> : null}
      <NavigationContainer>
        <MainDrawerNavigation />
      </NavigationContainer>
      <Modal />
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

const mapStateToProps = createStructuredSelector({
  orientation: selectOrientation,
  isAuthLoading: selectIsAuthLoading,
});

export default connect(mapStateToProps, {
  getCurrentOrientation,
  checkUserSessionStart,
})(Layout);
