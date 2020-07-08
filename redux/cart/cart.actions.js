import cartTypes from "./cart.types";

const {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAN_UP_CART,
  FETCH_CART_CONTENT_START,
  FETCH_CART_CONTENT_SUCCESS,
  FETCH_CART_CONTENT_FAILURE,
  INITIALIZE_CART_IN_DB_START,
  INITIALIZE_CART_IN_DB_SUCCESS,
  INITIALIZE_CART_IN_DB_FAILURE,
  UPDATE_CART_IN_DB_START,
  UPDATE_CART_IN_DB_SUCCESS,
  UPDATE_CART_IN_DB_FAILURE,
} = cartTypes;

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: id,
});

export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});

export const cleanUpCart = () => ({
  type: CLEAN_UP_CART,
});

export const fetchCartContentStart = () => ({
  type: FETCH_CART_CONTENT_START,
});

export const fetchCartContentSuccess = (cartItems) => ({
  type: FETCH_CART_CONTENT_SUCCESS,
  payload: cartItems,
});

export const fetchCartContentFailure = (errorMessage) => ({
  type: FETCH_CART_CONTENT_FAILURE,
  payload: errorMessage,
});

export const initializeCartInDbStart = () => ({
  type: INITIALIZE_CART_IN_DB_START,
});

export const initializeCartInDbSuccess = () => ({
  type: INITIALIZE_CART_IN_DB_SUCCESS,
});

export const initializeCartInDbFailure = () => ({
  type: INITIALIZE_CART_IN_DB_FAILURE,
});

export const updateCartInDbStart = () => ({ type: UPDATE_CART_IN_DB_START });

export const updateCartInDbSuccess = () => ({
  type: UPDATE_CART_IN_DB_SUCCESS,
});

export const updateCartInDbFailure = () => ({
  type: UPDATE_CART_IN_DB_FAILURE,
});
