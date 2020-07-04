import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

// utils
import { inputValidator } from "./LoginForm.validator";

// sc
import {
  LoginFormView,
  LoginFormScrollView,
  LoginFormTouchable,
  LoginFormWrapper,
  LoginFormAvoidingView,
  LoginFormControlls,
  LoginFormButtonsView,
} from "./LoginForm.styles";

const LoginForm = ({ goBack, navigate }) => {
  const platform = useSelector((state) => state.settings.platform);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({
    userEmailError: "",
    userPasswordError: "",
    userPasswordConfirmError: "",
    isValid: false,
  });

  const {
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
      userEmail,
      userPassword,
      userPasswordConfirm,
    });

    // temporary - in reality this component will be dismounted
    // we replace it with another component such as profile
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
    <LoginFormView>
      <LoginFormScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <LoginFormTouchable onPress={Keyboard.dismiss}>
          <LoginFormWrapper>
            <LoginFormAvoidingView
              behavior={platform === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={100}
            >
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
            </LoginFormAvoidingView>
          </LoginFormWrapper>
        </LoginFormTouchable>
      </LoginFormScrollView>
      <LoginFormControlls>
        <LoginFormButtonsView>
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
        </LoginFormButtonsView>
      </LoginFormControlls>
    </LoginFormView>
  );
};

export default LoginForm;
