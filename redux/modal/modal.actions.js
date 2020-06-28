import modalTypes from "./modal.types";

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

export const openModal = (modalObject) => ({
  type: OPEN_MODAL,
  payload: modalObject,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
