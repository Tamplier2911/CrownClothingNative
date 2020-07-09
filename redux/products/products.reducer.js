// import { temporaryProducts } from "./products.constants";
// import { loadMoreProducts } from "./products.utils";

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
  CREATE_ONE_PRODUCT_START,
  CREATE_ONE_PRODUCT_SUCCESS,
  CREATE_ONE_PRODUCT_FAILURE,
} = productsTypes;

const INITIAL_STATE = {
  // allProducts: temporaryProducts,
  allProducts: [],
  isLoading: false,
  errorMessage: "",
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_START:
    case UPDATE_ONE_PRODUCT_START:
    case DELETE_ONE_PRODUCT_START:
    case CREATE_ONE_PRODUCT_START:
      return { ...state, isLoading: true };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return { ...state, allProducts: action.payload, isLoading: false };
    case UPDATE_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: state.allProducts.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        isLoading: false,
      };
    case DELETE_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (product) => product.id !== action.payload
        ),
        isLoading: false,
      };
    case CREATE_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: [...state.allProducts],
        isLoading: false,
      };
    case FETCH_ALL_PRODUCTS_FAILURE:
    case UPDATE_ONE_PRODUCT_FAILURE:
    case DELETE_ONE_PRODUCT_FAILURE:
    case CREATE_ONE_PRODUCT_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default productsReducer;
