import { temporaryProducts } from "./products.constants";

import { loadMoreProducts } from "./products.utils";

import productsTypes from "./products.types";
const {
  FETCH_ALL_PRODUCTS_START,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS,
} = productsTypes;

const INITIAL_STATE = {
  allProducts: temporaryProducts,
  loadedProducts: [],
  isLoading: false,
  errorMessage: "",
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_MORE_PRODUCTS:
      return {
        ...state,
        ...loadMoreProducts(state.allProducts, state.loadedProducts),
      };
    default:
      return state;
  }
};

export default productsReducer;
