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

export const loadMoreProducts = () => ({
  type: LOAD_MORE_PRODUCTS,
});

export const deleteOneProduct = (productId) => ({
  type: DELETE_ONE_PRODUCT,
  payload: productId,
});

export const updateOneProduct = (product) => ({
  type: UPDATE_ONE_PRODUCT,
  payload: product,
});
