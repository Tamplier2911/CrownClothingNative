// redux
import { combineReducers } from "redux";

// reducers
import settingsReducer from "./settings/settings.reducer";
import productsReducer from "./products/products.reducer";
import categoriesReducer from "./categories/categories.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default rootReducer;
