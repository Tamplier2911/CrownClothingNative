import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const CreateProductScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const CreateProductScreenScrollView = styled.ScrollView``;

export const CreateProductScreenTouchable = styled.TouchableWithoutFeedback``;

export const CreateProductScreenWrapper = styled.View`
  flex: 1;
  padding-horizontal: 10px;
`;

export const CreateProductScreenAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;

export const CreateProductScreenInputBlock = styled.View``;

export const CreateProductScreenTextView = styled.View``;

export const CreateProductScreenText = styled.Text`
  font-family: "font";
  font-size: 20px;
  color: ${({ len }) =>
    len >= 1 ? globalStyles.clDisabled : globalStyles.clBlack};
`;

export const CreateProductScreenInputWrapper = styled.View``;

export const CreateProductScreenTextInput = styled.TextInput`
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clBlack};
  border-color: ${globalStyles.clBlack};
  border-bottom-width: 2px;
  height: 30px;
  margin-bottom: 4px;
`;

export const CreateProductScreenControlls = styled.View`
  padding-horizontal: 10px;
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreateProductScreenButtonView = styled.View`
  width: 48%;
`;
