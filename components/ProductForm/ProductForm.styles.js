import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const ProductFormView = styled.View`
  flex: 1;
  background-color: ${globalStyles.clPrimary};
`;

export const ProductFormScrollView = styled.ScrollView``;

export const ProductFormTouchable = styled.TouchableWithoutFeedback``;

export const ProductFormWrapper = styled.View`
  flex: 1;
  padding-horizontal: 10px;
`;

export const ProductFormAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;

export const ProductFormControlls = styled.View`
  padding-horizontal: 10px;
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductFormButtonsView = styled.View`
  width: 48%;
`;
