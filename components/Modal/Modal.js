import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/modal.actions";

// components
import Button from "../Button/Button";

// sc
import {
  ModalContainer,
  ModalContentWrapper,
  ModalTextView,
  ModalText,
  ModalButtonsWrapper,
  ModalButtonWrapper,
} from "./Modal.styles";

const Modals = () => {
  const { isHidden, modalText, modalAction } = useSelector(
    (state) => state.modal
  );

  const dispatch = useDispatch();

  return (
    <ModalContainer visible={!isHidden} animationType="slide">
      <ModalContentWrapper
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <ModalTextView>
          <ModalText>{modalText}</ModalText>
        </ModalTextView>
        <ModalButtonsWrapper>
          <ModalButtonWrapper>
            <Button title="Back" action={() => dispatch(closeModal())} />
          </ModalButtonWrapper>
          <ModalButtonWrapper>
            <Button
              title="Proceed"
              action={() => {
                modalAction();
                dispatch(closeModal());
              }}
            />
          </ModalButtonWrapper>
        </ModalButtonsWrapper>
      </ModalContentWrapper>
    </ModalContainer>
  );
};

export default Modals;
