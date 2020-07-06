import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectUserAuthObject = createSelector(
  [selectAuth],
  (auth) => auth.currentUser
);

export const selectIsAuthLogged = createSelector(
  [selectAuth],
  (auth) => auth.isLogged
);

export const selectIsAuthLoading = createSelector(
  [selectAuth],
  (auth) => auth.isLoading
);
