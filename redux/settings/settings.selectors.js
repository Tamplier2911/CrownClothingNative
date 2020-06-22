import { createSelector } from "reselect";

const selectSettings = (state) => state.settings;

export const selectOrientation = createSelector(
  [selectSettings],
  (settings) => settings.orientation
);
