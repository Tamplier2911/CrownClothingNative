import React, { useEffect } from "react";
import { Dimensions } from "react-native";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrientation } from "../../redux/settings/settings.selectors";
import { getCurrentOrientation } from "../../redux/settings/settings.actions";

// navigation
import { NavigationContainer } from "@react-navigation/native";

// components
import StatusBar from "../../components/StatusBar/StatusBar";
import Spinner from "../../components/Spinner/Spinner";

// sc
import { RootLayout, LayoutTemporaryText } from "./Layout.styles";

const Layout = ({ fontLoaded, getCurrentOrientation, orientation }) => {
  useEffect(() => {
    Dimensions.addEventListener("change", getCurrentOrientation);
    return () =>
      Dimensions.removeEventListener("change", getCurrentOrientation);
  }, []);

  return fontLoaded ? (
    <RootLayout>
      {orientation === "portrait" ? <StatusBar /> : null}
      <NavigationContainer>
        {/* main drawer navigator ****************/}
      </NavigationContainer>
      <LayoutTemporaryText>Temporary</LayoutTemporaryText>
    </RootLayout>
  ) : (
    <Spinner size="large" />
  );
};

const mapStateToProps = createStructuredSelector({
  orientation: selectOrientation,
});

export default connect(mapStateToProps, { getCurrentOrientation })(Layout);
