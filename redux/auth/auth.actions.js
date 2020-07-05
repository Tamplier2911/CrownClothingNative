import authTypes from "./auth.types";

const {
  FORM_SIGN_UP_START,
  FORM_SIGN_UP_SUCCESS,
  FORM_SIGN_UP_FAILURE,
  FORM_LOG_IN_START,
  FORM_LOG_IN_SUCCESS,
  FORM_LOG_IN_FAILURE,
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  CHECK_USER_SESSION_START,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
} = authTypes;

export const formSignUpStart = (userCredentials) => ({
  type: FORM_SIGN_UP_START,
  payload: userCredentials,
});

export const formSignUpSuccess = () => ({
  type: FORM_SIGN_UP_SUCCESS,
});

export const formSignUpFailure = (errorMessage) => ({
  type: FORM_SIGN_UP_FAILURE,
  payload: errorMessage,
});

export const formLogInStart = (userCredentials) => ({
  type: FORM_LOG_IN_START,
  payload: userCredentials,
});

export const formLogInSuccess = (user) => ({
  type: FORM_LOG_IN_SUCCESS,
  payload: user,
});

export const formLogInFailure = (errorMessage) => ({
  type: FORM_LOG_IN_FAILURE,
  payload: errorMessage,
});

export const logOutStart = () => ({
  type: LOG_OUT_START,
});

export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS,
});

export const logOutFailure = (errorMessage) => ({
  type: LOG_OUT_FAILURE,
  pyaload: errorMessage,
});

export const checkUserSessionStart = () => ({
  type: CHECK_USER_SESSION_START,
});

export const checkUserSessionSuccess = (user) => ({
  type: CHECK_USER_SESSION_SUCCESS,
  payload: user,
});

export const checkUserSessionFailure = (errorMessage) => ({
  type: CHECK_USER_SESSION_FAILURE,
  payload: errorMessage,
});
