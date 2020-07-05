import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

// animatable
import * as Animatable from "react-native-animatable";

// iconic
import { Entypo } from "@expo/vector-icons";

// utils
import { inputValidator } from "./SignupForm.validator";

// sc
import {
  SignupFormView,
  SignupFormScrollView,
  SignupFormTouchable,
  SignupFormWrapper,
  SignupFormAvoidingView,
  SignupFormRedirectView,
  SignupFormRedirectText,
  SignupFormRedirectTouchable,
  SignupFormControlls,
  SignupFormButtonsView,
} from "./SignupForm.styles";
import globalStyles from "../../constants/globalStyles";

const SignupForm = ({ goBack, navigate }) => {
  const platform = useSelector((state) => state.settings.platform);

  const [userDisplayName, setUserDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({
    userDisplayNameError: "",
    userEmailError: "",
    userPasswordError: "",
    userPasswordConfirmError: "",
    isValid: false,
  });

  const {
    userDisplayNameError,
    userEmailError,
    userPasswordError,
    userPasswordConfirmError,
    isValid,
  } = errors;

  // validate and create new user
  // this will be action call - signUpWithEmailAndPassStart
  const validateAndCreateUser = () => {
    // logs
    console.log({
      userDisplayName,
      userEmail,
      userPassword,
      userPasswordConfirm,
    });

    // temporary - in reality this component will be dismounted
    // we replace it with another component such as profile
    setUserDisplayName("");
    setUserEmail("");
    setUserPassword("");
    setUserPasswordConfirm("");
    setErrors({
      userEmailError: "",
      userPasswordError: "",
      userPasswordConfirmError: "",
      isValid: false,
    });

    navigate("Shop");
  };

  const disabledButtonValidatorLogin = () =>
    !userEmail || !userPassword || !userPasswordConfirm || !isValid
      ? true
      : false;

  return (
    <SignupFormView>
      <SignupFormScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <SignupFormTouchable onPress={Keyboard.dismiss}>
          <SignupFormWrapper>
            <SignupFormAvoidingView
              behavior={platform === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={100}
            >
              <SignupFormRedirectView>
                <SignupFormRedirectText>
                  Already have an account?
                </SignupFormRedirectText>

                <SignupFormRedirectTouchable
                  activeOpacity={0.5}
                  onPress={() => navigate("AppLogin")}
                >
                  <Animatable.View
                    animation={"fadeInLeft"}
                    duration={2000}
                    iterationCount={Infinity}
                    direction={"normal"}
                  >
                    <Entypo
                      name="arrow-bold-right"
                      size={28}
                      color={globalStyles.clBlack}
                    />
                  </Animatable.View>
                </SignupFormRedirectTouchable>
              </SignupFormRedirectView>

              <TextInput
                onChangeText={(text) => setUserDisplayName(text)}
                onBlur={() =>
                  setErrors({
                    ...inputValidator(
                      errors,
                      userDisplayName,
                      "userDisplayName"
                    ),
                  })
                }
                value={userDisplayName}
                placeholder="Name"
                label={
                  userDisplayNameError ? userDisplayNameError : "Display Name:"
                }
                error={userDisplayNameError ? true : false}
              />

              <TextInput
                onChangeText={(text) => setUserEmail(text)}
                onBlur={() =>
                  setErrors({
                    ...inputValidator(errors, userEmail, "userEmail"),
                  })
                }
                keyboardType="email-address"
                value={userEmail}
                placeholder="Email"
                label={userEmailError ? userEmailError : "Email Address:"}
                error={userEmailError ? true : false}
              />

              <TextInput
                onChangeText={(text) => setUserPassword(text)}
                onBlur={() =>
                  setErrors({
                    ...inputValidator(
                      errors,
                      userPassword,
                      "userPassword",
                      userPasswordConfirm
                    ),
                  })
                }
                value={userPassword}
                placeholder="Password"
                secureTextEntry={true}
                label={userPasswordError ? userPasswordError : "Password:"}
                error={userPasswordError ? true : false}
              />

              <TextInput
                onChangeText={(text) => setUserPasswordConfirm(text)}
                onBlur={() =>
                  setErrors({
                    ...inputValidator(
                      errors,
                      userPasswordConfirm,
                      "userPasswordConfirm",
                      userPassword
                    ),
                  })
                }
                value={userPasswordConfirm}
                placeholder="Password"
                secureTextEntry={true}
                label={
                  userPasswordConfirmError
                    ? userPasswordConfirmError
                    : "Confirm Password:"
                }
                error={userPasswordConfirmError ? true : false}
              />
            </SignupFormAvoidingView>
          </SignupFormWrapper>
        </SignupFormTouchable>
      </SignupFormScrollView>
      <SignupFormControlls>
        <SignupFormButtonsView>
          <Button
            title={"Log in"}
            disabled={disabledButtonValidatorLogin()}
            action={() => {
              Alert.alert("Attention!", "Register new user?", [
                {
                  text: "Cancel",
                  style: "cancel",
                  onPress: () => {},
                },
                {
                  text: "Yes",
                  style: "default",
                  onPress: validateAndCreateUser,
                },
              ]);
            }}
          />
        </SignupFormButtonsView>
      </SignupFormControlls>
    </SignupFormView>
  );
};

export default SignupForm;
