import React from "react";

// components
import LoginForm from "../../components/LoginForm/LoginForm";

// sc
import { LoginScreenScreenView } from "./LoginScreen.styles";

const LoginScreen = ({ navigation }) => {
  const { goBack, navigate } = navigation;
  return (
    <LoginScreenScreenView>
      <LoginForm goBack={goBack} navigate={navigate} />
    </LoginScreenScreenView>
  );
};

export default LoginScreen;
