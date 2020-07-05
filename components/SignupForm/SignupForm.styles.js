import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const SignupFormView = styled.View`
  flex: 1;
  background-color: ${globalStyles.clPrimary};
`;

export const SignupFormScrollView = styled.ScrollView``;

export const SignupFormTouchable = styled.TouchableWithoutFeedback``;

export const SignupFormWrapper = styled.View`
  flex: 1;
  padding-horizontal: 10px;
`;

export const SignupFormAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;

export const SignupFormRedirectView = styled.View`
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const SignupFormRedirectText = styled.Text`
  flex: 1;
  font-family: "font";
  font-size: 24px;
  color: ${globalStyles.clBlack};
`;

export const SignupFormRedirectTouchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
`;

export const SignupFormControlls = styled.View`
  padding-horizontal: 10px;
  padding-top: 10px;
`;

export const SignupFormButtonsView = styled.View`
  width: 100%;
`;
