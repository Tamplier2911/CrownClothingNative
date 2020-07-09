import { takeLatest, all, call, put, select } from "redux-saga/effects";

// firebase
import {
  initializeCartInDB,
  fetchCartContentFromDB,
  updateCartInDB,
} from "../../firebase/cartApi";

// actions
import {
  cleanUpCart,
  fetchCartContentStart,
  fetchCartContentSuccess,
  fetchCartContentFailure,
  initializeCartInDbStart,
  initializeCartInDbSuccess,
  initializeCartInDbFailure,
  updateCartInDbStart,
  updateCartInDbSuccess,
  updateCartInDbFailure,
} from "./cart.actions";
import { openModal } from "../modal/modal.actions";

// types
import authTypes from "../auth/auth.types";
const {
  FORM_SIGN_UP_SUCCESS,
  FORM_LOG_IN_SUCCESS,
  CHECK_USER_SESSION_SUCCESS,
  LOG_OUT_SUCCESS,
} = authTypes;
import cartTypes from "./cart.types";
const {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAN_UP_CART,
} = cartTypes;

const userIdExtractor = (state) => state.auth.currentUser;
const cartContentExtractor = (state) => state.cart.cartItems;

export function* initializeCartInDataBase() {
  yield put(initializeCartInDbStart());
  try {
    const user = yield select(userIdExtractor);
    const currentCartContent = yield select(cartContentExtractor);

    if (user) yield call(initializeCartInDB, user.uid, currentCartContent);

    yield put(initializeCartInDbSuccess());
  } catch (err) {
    yield put(initializeCartInDbFailure(err.message));
  }
}

export function* fetchCartContent() {
  yield put(fetchCartContentStart());
  try {
    const user = yield select(userIdExtractor);
    const currentCartContent = yield select(cartContentExtractor);

    if (user) {
      const cartItems = yield call(
        fetchCartContentFromDB,
        user.uid,
        currentCartContent
      );

      yield put(fetchCartContentSuccess(cartItems));
    } else {
      yield put(fetchCartContentSuccess([]));
    }
  } catch (err) {
    yield put(fetchCartContentFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}
export function* cleanUpCartOnSignOut() {
  yield put(cleanUpCart());
}

export function* updateCartInDataBase() {
  yield put(updateCartInDbStart());
  try {
    const user = yield select(userIdExtractor);
    const currentCartContent = yield select(cartContentExtractor);

    if (user) yield call(updateCartInDB(user.uid, currentCartContent));
    yield put(updateCartInDbSuccess());
  } catch (err) {
    yield put(updateCartInDbFailure(err.message));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(FORM_SIGN_UP_SUCCESS, initializeCartInDataBase);
}

export function* onLogInSuccess() {
  yield takeLatest(
    [FORM_LOG_IN_SUCCESS, CHECK_USER_SESSION_SUCCESS],
    fetchCartContent
  );
}

export function* onSignOutSuccess() {
  yield takeLatest(LOG_OUT_SUCCESS, cleanUpCartOnSignOut);
}

export function* onCartManipulation() {
  yield takeLatest(
    [
      ADD_ITEM_TO_CART,
      REMOVE_ITEM_FROM_CART,
      INCREMENT_QUANTITY,
      DECREMENT_QUANTITY,
      CLEAN_UP_CART,
    ],
    updateCartInDataBase
  );
}

export function* cartSagas() {
  yield all([
    call(onSignUpSuccess),
    call(onLogInSuccess),
    call(onSignOutSuccess),
    call(onCartManipulation),
  ]);
}
