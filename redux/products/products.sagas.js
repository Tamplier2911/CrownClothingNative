import { takeLatest, all, call, put } from "redux-saga/effects";

// firebase
import {
  fetchAllProductsFromDB,
  updateProductInDB,
  deleteProductFromDB,
  saveProductToDB,
} from "../../firebase/productsApi";

// actions
import {
  fetchAllProductsSuccess,
  fetchAllProductsFailure,
  updateOneProductSuccess,
  updateOneProductFailure,
  deleteOneProductSuccess,
  deleteOneProductFailure,
  createOneProductSuccess,
  createOneProductFailure,
} from "./products.actions";
import { openModal } from "../modal/modal.actions";

// types
import productsTypes from "./products.types";
const {
  FETCH_ALL_PRODUCTS_START,
  UPDATE_ONE_PRODUCT_START,
  DELETE_ONE_PRODUCT_START,
  CREATE_ONE_PRODUCT_START,
} = productsTypes;

export function* fetchAllProducts() {
  try {
    const allProducts = yield call(fetchAllProductsFromDB);
    yield put(fetchAllProductsSuccess(allProducts));
  } catch (err) {
    yield put(fetchAllProductsFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}

export function* updateOneProduct({ payload }) {
  try {
    const productObj = yield call(updateProductInDB, payload);
    yield put(updateOneProductSuccess(productObj));
  } catch (err) {
    yield put(updateOneProductFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}

export function* deleteOneProduct({ payload }) {
  try {
    const productId = yield call(deleteProductFromDB, payload);
    yield put(deleteOneProductSuccess(productId));
  } catch (err) {
    yield put(deleteOneProductFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}

export function* createOneProduct({ payload }) {
  try {
    const productObj = yield call(saveProductToDB, payload);
    yield put(createOneProductSuccess(productObj));
  } catch (err) {
    yield put(createOneProductFailure(err.message));
    yield put(openModal({ text: `${err.message}`, action: () => {} }));
  }
}

export function* onFetchAllProductsStart() {
  yield takeLatest(FETCH_ALL_PRODUCTS_START, fetchAllProducts);
}

export function* onUpdateOneProductStart() {
  yield takeLatest(UPDATE_ONE_PRODUCT_START, updateOneProduct);
}

export function* onDeleteOneProductStart() {
  yield takeLatest(DELETE_ONE_PRODUCT_START, deleteOneProduct);
}

export function* onCreateOneProductStart() {
  yield takeLatest(CREATE_ONE_PRODUCT_START, createOneProduct);
}

export function* productsSagas() {
  yield all([
    call(onFetchAllProductsStart),
    call(onUpdateOneProductStart),
    call(onDeleteOneProductStart),
    call(onCreateOneProductStart),
  ]);
}
