import modalTypes from "./modal.types";

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

const INITIAL_STATE = {
  isHidden: true,
  modalText: "",
  modalAction: () => {},
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalText: action.payload.text,
        modalAction: action.payload.action,
        isHidden: false,
      };
    case CLOSE_MODAL:
      return { ...state, modalText: "", modalAction: () => {}, isHidden: true };
    default:
      return state;
  }
};

export default modalReducer;
