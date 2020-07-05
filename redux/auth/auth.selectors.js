import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectUserObject = createSelector(
  [selectAuth],
  (auth) => auth.currentUser
);

export const selectIsLogged = createSelector(
  [selectAuth],
  (auth) => auth.isLogged
);
