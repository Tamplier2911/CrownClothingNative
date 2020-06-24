import cartTypes from "./cart.types";

const {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  FETCH_CART_CONTENT_START,
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

export const fetchCartContentStart = () => ({
  type: FETCH_CART_CONTENT_START,
});
