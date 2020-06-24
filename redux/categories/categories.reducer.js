import { constantCategories } from "./categories.constants.js";

const INITIAL_STATE = {
  allCategories: constantCategories,
  isLoading: false,
  errorMessage: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
