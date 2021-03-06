// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./auth/auth.reducer";
import settingsReducer from "./settings/settings.reducer";
import productsReducer from "./products/products.reducer";
import categoriesReducer from "./categories/categories.reducer";
import cartReducer from "./cart/cart.reducer";
import ordersReducer from "./orders/orders.reducer";
import modalReducer from "./modal/modal.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  orders: ordersReducer,
  modal: modalReducer,
});

export default rootReducer;
