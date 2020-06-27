import { createSelector } from "reselect";

const selectOrders = (state) => state.orders;

export const allOrders = () =>
  createSelector([selectOrders], (orders) => orders.allOrders);
