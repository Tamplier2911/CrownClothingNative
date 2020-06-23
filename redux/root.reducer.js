// redux
import { combineReducers } from "redux";

// reducers
import settingsReducer from "./settings/settings.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  products: productsReducer,
});

export default rootReducer;
