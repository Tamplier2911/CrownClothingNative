import settingsTypes from "./settings.types";
const { GET_CURRENT_ORIENTATION } = settingsTypes;

export const getCurrentOrientation = (dimensions) => ({
  type: GET_CURRENT_ORIENTATION,
  payload: dimensions,
});
