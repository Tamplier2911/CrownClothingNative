import ordersTypes from "./orders.types";

const {
  FETCH_ALL_ORDERS_START,
  FETCH_ALL_ORDERS_SUCCESS,
  FETCH_ALL_ORDERS_FAILURE,
  CREATE_NEW_ORDER,
} = ordersTypes;

const INITIAL_STATE = {
  allOrders: [],
  isLoading: false,
  errorMessage: "",
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_ORDERS_START:
      return { ...state, isLoading: true };
    case FETCH_ALL_ORDERS_SUCCESS:
      return { ...state, isLoading: false, allOrders: action.payload };
    case FETCH_ALL_ORDERS_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    case CREATE_NEW_ORDER:
      return { ...state, allOrders: [...state.allOrders, action.payload] };
    default:
      return state;
  }
};

export default ordersReducer;
