import { temporaryProducts } from "./products.constants";

import { loadMoreProducts } from "./products.utils";

import productsTypes from "./products.types";
const {
  FETCH_ALL_PRODUCTS_START,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  DELETE_ONE_PRODUCT_START,
  DELETE_ONE_PRODUCT_SUCCESS,
  DELETE_ONE_PRODUCT_FAILURE,
  UPDATE_ONE_PRODUCT_START,
  UPDATE_ONE_PRODUCT_SUCCESS,
  UPDATE_ONE_PRODUCT_FAILURE,
  LOAD_MORE_PRODUCTS,
  DELETE_ONE_PRODUCT,
  UPDATE_ONE_PRODUCT,
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
    case DELETE_ONE_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    case UPDATE_ONE_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
