import React from "react";

// component
import SignupForm from "../../components/SignupForm/SignupForm";

// sc
import { SignupScreenView } from "./SignupScreen.styles";

const SignupScreen = ({ navigation }) => {
  const { goBack, navigate } = navigation;
  return (
    <SignupScreenView>
      <SignupForm goBack={goBack} navigate={navigate} />
    </SignupScreenView>
  );
};

export default SignupScreen;
