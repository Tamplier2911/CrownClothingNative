import { takeLatest, put, all, call } from "redux-saga/effects";

// firebase
import { auth } from "../../firebase/firebaseConfig";

// actions
import {
  formSignUpSuccess,
  formSignUpFailure,
  formLogInSuccess,
  formLogInFailure,
  logOutSuccess,
  logOutFailure,
  checkUserSessionStart,
  checkUserSessionSuccess,
  checkUserSessionFailure,
} from "./auth.actions";

import { openModal } from "../modal/modal.actions";

/** other actions... */

// types
import authTypes from "./auth.types";
const {
  FORM_SIGN_UP_START,
  FORM_LOG_IN_START,
  LOG_OUT_START,
  CHECK_USER_SESSION_START,
} = authTypes;

export function* formSignUp() {}

export function* formLogIn() {}

export function* logOut() {}

export function* checkUserSession() {}

export function* onFormSignUpStart() {
  yield takeLatest(FORM_SIGN_UP_START, formSignUp);
}

export function* onFormLogInStart() {
  yield takeLatest(FORM_LOG_IN_START, formLogIn);
}

export function* onLogOutStart() {
  yield takeLatest(LOG_OUT_START, logOut);
}

export function* onCheckUserSessionStart() {
  yield takeLatest(CHECK_USER_SESSION_START, checkUserSession);
}

export function* authSagas() {
  yield all([
    call(onFormSignUpStart),
    call(onFormLogInStart),
    call(onLogOutStart),
    call(onCheckUserSessionStart),
  ]);
}
