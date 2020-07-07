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

export const fetchAllProductsStart = () => ({
  type: FETCH_ALL_PRODUCTS_START,
});

export const fetchAllProductsSuccess = (allProducts) => ({
  type: FETCH_ALL_PRODUCTS_SUCCESS,
  payload: allProducts,
});

export const fetchAllProductsFailure = (errMessage) => ({
  type: FETCH_ALL_PRODUCTS_FAILURE,
  payload: errMessage,
});

export const deleteOneProductStart = (productId) => ({
  type: DELETE_ONE_PRODUCT_START,
  payload: productId,
});

export const deleteOneProductSuccess = (productId) => ({
  type: DELETE_ONE_PRODUCT_SUCCESS,
  payload: productId,
});

export const deleteOneProductFailure = (errMessage) => ({
  type: DELETE_ONE_PRODUCT_FAILURE,
  payload: errMessage,
});

export const updateOneProductStart = (product) => ({
  type: UPDATE_ONE_PRODUCT_START,
  payload: product,
});

export const updateOneProductSuccess = (product) => ({
  type: UPDATE_ONE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateOneProductFailure = (errMessage) => ({
  type: UPDATE_ONE_PRODUCT_FAILURE,
  payload: errMessage,
});

export const createOneProductStart = (product) => ({
  type: CREATE_ONE_PRODUCT_START,
  payload: product,
});

export const createOneProductSuccess = (product) => ({
  type: CREATE_ONE_PRODUCT_SUCCESS,
  payload: product,
});

export const createOneProductFailure = (errMessage) => ({
  type: CREATE_ONE_PRODUCT_FAILURE,
  payload: errMessage,
});
