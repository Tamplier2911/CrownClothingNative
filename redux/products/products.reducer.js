import productsTypes from "./products.types";

import { temporaryProducts } from "./products.constants";

const INITIAL_STATE = {
  allProducts: temporaryProducts,
  isLoading: false,
  errorMessage: "",
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
