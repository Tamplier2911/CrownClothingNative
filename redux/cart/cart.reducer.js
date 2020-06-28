import {
  addItemToCart,
  removeItemFromCart,
  addItemOrIncrementQuantity,
  decrementQuantityOrRemove,
} from "./cart.utils";

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

const INITIAL_STATE = {
  cartItems: [],
  isLoading: false,
  errorMessage: "",
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: addItemOrIncrementQuantity(state.cartItems, action.payload),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: decrementQuantityOrRemove(state.cartItems, action.payload),
      };
    case CLEAN_UP_CART:
      return {
        ...state,
        cartItems: [],
        isLoading: false,
        errorMessage: "",
      };
    case FETCH_CART_CONTENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CART_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartItems: action.payload,
      };
    case FETCH_CART_CONTENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
