import cartTypes from "./cart.types";

const {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  FETCH_CART_CONTENT_START,
  FETCH_CART_CONTENT_SUCCESS,
  FETCH_CART_CONTENT_FAILURE,
} = cartTypes;

const INITIAL_STATE = {
  cartItems: [],
  isLoading: false,
  errorMessage: "",
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
