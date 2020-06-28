import orderTypes from "./orders.types";
const {
  FETCH_ALL_ORDERS_START,
  FETCH_ALL_ORDERS_SUCCESS,
  FETCH_ALL_ORDERS_FAILURE,
  CREATE_NEW_ORDER,
} = orderTypes;

export const createNewOrder = (orderObject) => ({
  type: CREATE_NEW_ORDER,
  payload: orderObject,
});
