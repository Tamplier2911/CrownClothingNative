import { all, call } from "redux-saga/effects";

// sagas
import { authSagas } from "./auth/auth.sagas";
import { productsSagas } from "./products/products.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { ordersSagas } from "./orders/orders.sagas";

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(productsSagas),
    call(cartSagas),
    call(ordersSagas),
  ]);
}
