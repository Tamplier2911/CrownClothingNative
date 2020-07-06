import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";

// redux
import { useSelector, useDispatch } from "react-redux";
import { formLogInStart } from "../../redux/auth/auth.actions";

// components
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

// animatable
import * as Animatable from "react-native-animatable";

// iconics
import { Entypo } from "@expo/vector-icons";

// utils
import { inputValidator } from "./LoginForm.validator";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  LoginFormView,
  LoginFormScrollView,
  LoginFormTouchable,
  LoginFormWrapper,
  LoginFormAvoidingView,
  LoginFormRedirectView,
  LoginFormRedirectText,
  LoginFormRedirectTouchable,
  LoginFormControlls,
  LoginFormButtonsView,
} from "./LoginForm.styles";

const LoginForm = ({ goBack, navigate }) => {
  const platform = useSelector((state) => state.settings.platform);
  const loading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [errors, setErrors] = useState({
    userEmailError: "",
    userPasswordError: "",
    isValid: false,
  });

  const { userEmailError, userPasswordError, isValid } = errors;

  // validate and create new user
  // this will be action call - signUpWithEmailAndPassStart
  const validateAndCreateUser = () => {
    dispatch(
      formLogInStart({
        userEmail: userEmail.trim(),
        userPassword,
      })
    );

    // temporary - in reality this component will be dismounted
    // we replace it with another component such as profile
    setUserEmail("");
    setUserPassword("");
    setErrors({
      userEmailError: "",
      userPasswordError: "",
      isValid: false,
    });

    navigate("Shop");
  };

  const disabledButtonValidatorLogin = () =>
    !userEmail || !userPassword || !isValid ? true : false;

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
              <LoginFormRedirectView>
                <LoginFormRedirectTouchable
                  activeOpacity={0.5}
                  onPress={() => navigate("AppSignup")}
                >
                  <Animatable.View
                    animation={"fadeInRight"}
                    duration={2000}
                    iterationCount={Infinity}
                    direction={"normal"}
                  >
                    <Entypo
                      name="arrow-bold-left"
                      size={28}
                      color={globalStyles.clBlack}
                    />
                  </Animatable.View>
                </LoginFormRedirectTouchable>

                <LoginFormRedirectText>
                  Create new account
                </LoginFormRedirectText>
              </LoginFormRedirectView>

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
                    ...inputValidator(errors, userPassword, "userPassword"),
                  })
                }
                value={userPassword}
                placeholder="Password"
                secureTextEntry={true}
                label={userPasswordError ? userPasswordError : "Password:"}
                error={userPasswordError ? true : false}
              />
            </LoginFormAvoidingView>
          </LoginFormWrapper>
        </LoginFormTouchable>
      </LoginFormScrollView>
      <LoginFormControlls>
        <LoginFormButtonsView>
          <Button
            title={loading ? "Processing..." : "Log in"}
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
