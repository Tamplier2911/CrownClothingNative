import { takeLatest, put, all, call } from "redux-saga/effects";

// firebase
import { auth } from "../../firebase/firebaseConfig";
import { saveUserToDB, getCurrentUser } from "../../firebase/authApi";

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

export function* formSignUp({ payload }) {
  const { userEmail, userPassword, userDisplayName } = payload;

  try {
    // create user with email and password
    // returns auth object which I picking user from
    const { user } = yield auth.createUserWithEmailAndPassword(
      userEmail,
      userPassword
    );

    // update user profile with name and photo
    yield user.updateProfile({
      displayName: userDisplayName,
      photoURL: `http://picsum.photos/400/400`,
    });

    // save user to DB
    yield call(saveUserToDB, user);

    // update user session
    yield put(checkUserSessionStart());

    // user successfuly signed up
    yield put(formSignUpSuccess());

    // let user know that sign up succeeded
    yield put(
      openModal({
        text: "New user was successfuly created!",
        action: () => {},
      })
    );
  } catch (err) {
    yield put(formSignUpFailure(err.message));

    // let user know that somethign went wrong
    yield put(
      openModal({
        text: `${err.message}`,
        action: () => {},
      })
    );
  }
}

export function* formLogIn({ payload }) {
  const { userEmail, userPassword } = payload;

  try {
    const { user } = yield auth.signInWithEmailAndPassword(
      userEmail,
      userPassword
    );
    if (!user) {
      yield put(formLogInSuccess(user));
    } else {
      const { uid, email, displayName, photoURL } = user;
      yield put(formLogInSuccess({ uid, email, displayName, photoURL }));
    }
  } catch (err) {
    yield put(formLogInFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}

export function* logOut() {
  try {
    yield auth.signOut();
    yield put(logOutSuccess());
  } catch (err) {
    yield put(logOutFailure(err.message));
  }
}

export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      yield put(checkUserSessionSuccess(userAuth));
    } else {
      const { uid, email, displayName, photoURL } = userAuth;
      yield put(checkUserSessionSuccess({ uid, email, displayName, photoURL }));
    }
  } catch (err) {
    yield put(checkUserSessionFailure(err.message));
  }
}

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
