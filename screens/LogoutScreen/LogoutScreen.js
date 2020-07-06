import React from "react";

// components
import UserProfile from "../../components/UserProfile/UserProfile";

// sc
import { LogoutScreenScreenView } from "./LogoutScreen.styles";

const LogoutScreen = ({ navigation }) => {
  const { goBack, navigate } = navigation;

  return (
    <LogoutScreenScreenView>
      <UserProfile goBack={goBack} navigate={navigate} />
    </LogoutScreenScreenView>
  );
};

export default LogoutScreen;
