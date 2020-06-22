import { Dimensions, Platform } from "react-native";

import settingsTypes from "./settings.types";
const { GET_CURRENT_ORIENTATION } = settingsTypes;

const INITIAL_STATE = {
  platform: Platform.OS,
  version: Platform.Version,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  orientation:
    Dimensions.get("window").width > Dimensions.get("window").height
      ? "landscape"
      : "portrait",
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_ORIENTATION:
      return {
        ...state,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        orientation:
          Dimensions.get("window").width > Dimensions.get("window").height
            ? "landscape"
            : "portrait",
      };
    default:
      return state;
  }
};

export default settingsReducer;
