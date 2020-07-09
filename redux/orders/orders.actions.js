import orderTypes from "./orders.types";
const {
  FETCH_ALL_ORDERS_START,
  FETCH_ALL_ORDERS_SUCCESS,
  FETCH_ALL_ORDERS_FAILURE,
  CREATE_NEW_ORDER_START,
  CREATE_NEW_ORDER_SUCCESS,
  CREATE_NEW_ORDER_FAILURE,
} = orderTypes;

export const fetchAllOrdersSatrt = () => ({
  type: FETCH_ALL_ORDERS_START,
});

export const fetchAllOrdersSuccess = (allOrders) => ({
  type: FETCH_ALL_ORDERS_SUCCESS,
  payload: allOrders,
});

export const fetchAllOrdersFailure = (errMessage) => ({
  type: FETCH_ALL_ORDERS_FAILURE,
  payload: errMessage,
});

export const createNewOrderStart = (orderObject) => ({
  type: CREATE_NEW_ORDER_START,
  payload: orderObject,
});

export const createNewOrderSuccess = (orderObject) => ({
  type: CREATE_NEW_ORDER_SUCCESS,
  payload: orderObject,
});

export const createNewOrderFailure = (errMessage) => ({
  type: CREATE_NEW_ORDER_FAILURE,
  payload: errMessage,
});
