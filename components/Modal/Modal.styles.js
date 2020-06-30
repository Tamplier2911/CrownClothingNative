import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const ModalContainer = styled.Modal``;

export const ModalContentWrapper = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const ModalTextView = styled.View``;

export const ModalText = styled.Text`
  text-align: center;
  font-size: 28px;
  font-family: "font";
  color: ${globalStyles.clFont};
  margin-bottom: 20%;
`;

export const ModalButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButtonWrapper = styled.View`
  width: 48%;
`;
