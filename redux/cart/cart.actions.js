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
