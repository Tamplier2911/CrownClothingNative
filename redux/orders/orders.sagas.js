import { takeLatest, all, call, put, select } from "redux-saga/effects";

// firebase
import {
  saveOrderInDB,
  fetchOrdersContentFromDB,
} from "../../firebase/ordersApi";

// actions
import {
  fetchAllOrdersSatrt,
  fetchAllOrdersSuccess,
  fetchAllOrdersFailure,
  createNewOrderSuccess,
  createNewOrderFailure,
} from "./orders.actions";
import { openModal } from "../modal/modal.actions";

const userIdExtractor = (state) => state.auth.currentUser; // uid

// types
import authTypes from "../auth/auth.types";
const { FORM_LOG_IN_SUCCESS, CHECK_USER_SESSION_SUCCESS } = authTypes;
import orderTypes from "./orders.types";
const { CREATE_NEW_ORDER_START, CREATE_NEW_ORDER_SUCCESS } = orderTypes;

export function* fetchAllOrders() {
  yield put(fetchAllOrdersSatrt());
  try {
    const user = yield select(userIdExtractor);
    if (user) {
      const cartItems = yield call(fetchOrdersContentFromDB, user.uid);
      yield put(fetchAllOrdersSuccess(cartItems));
    } else {
      yield put(fetchAllOrdersSuccess([]));
    }
  } catch (err) {
    yield put(fetchAllOrdersFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}

export function* createNewOrder({ payload }) {
  // append id, createdAt, status "processing" further
  try {
    const user = yield select(userIdExtractor);
    if (user) {
      const orderObject = yield call(saveOrderInDB, user.uid, payload);
      yield put(createNewOrderSuccess(orderObject));
    } else {
      yield put(createNewOrderFailure("User object is not defined."));
    }
  } catch (err) {
    yield put(createNewOrderFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}

export function* onLoginSuccess() {
  yield takeLatest(
    [FORM_LOG_IN_SUCCESS, CHECK_USER_SESSION_SUCCESS, CREATE_NEW_ORDER_SUCCESS],
    fetchAllOrders
  );
}

export function* onCreateNewOrderStart() {
  yield takeLatest(CREATE_NEW_ORDER_START, createNewOrder);
}

export function* ordersSagas() {
  yield all([call(onLoginSuccess), call(onCreateNewOrderStart)]);
}
