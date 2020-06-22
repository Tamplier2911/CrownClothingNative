// redux
import { combineReducers } from "redux";

// reducers
import settingsReducer from "./settings/settings.reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
