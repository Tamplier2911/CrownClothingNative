import productsTypes from "./products.types";

const {
  FETCH_ALL_PRODUCTS_START,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS,
} = productsTypes;

export const loadMoreProducts = () => ({
  type: LOAD_MORE_PRODUCTS,
});
