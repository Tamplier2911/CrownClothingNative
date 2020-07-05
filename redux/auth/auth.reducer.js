import authTypes from "./auth.types";

const {
  FORM_SIGN_UP_START,
  FORM_SIGN_UP_SUCCESS,
  FORM_SIGN_UP_FAILURE,
  FORM_LOG_IN_START,
  FORM_LOG_IN_SUCCESS,
  FORM_LOG_IN_FAILURE,
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  CHECK_USER_SESSION_START,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
} = authTypes;

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  isLogged: false,
  errorMessage: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_SIGN_UP_START:
    case FORM_LOG_IN_START:
    case LOG_OUT_START:
    case CHECK_USER_SESSION_START:
      return { ...state, isLoading: true };

    case FORM_LOG_IN_SUCCESS:
    case CHECK_USER_SESSION_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        isLogged: action.payload ? true : false,
        errorMessage: "",
      };

    case LOG_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        isLogged: false,
        errorMessage: "",
      };

    case FORM_SIGN_UP_SUCCESS:
      return { ...state, isLoading: false };

    case FORM_SIGN_UP_FAILURE:
    case FORM_LOG_IN_FAILURE:
    case LOG_OUT_FAILURE:
    case CHECK_USER_SESSION_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default authReducer;
