import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const LoginFormView = styled.View`
  flex: 1;
  background-color: ${globalStyles.clPrimary};
`;

export const LoginFormScrollView = styled.ScrollView``;

export const LoginFormTouchable = styled.TouchableWithoutFeedback``;

export const LoginFormWrapper = styled.View`
  flex: 1;
  padding-horizontal: 10px;
`;

export const LoginFormAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;

export const LoginFormRedirectView = styled.View`
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const LoginFormRedirectText = styled.Text`
  font-family: "font";
  font-size: 24px;
  color: ${globalStyles.clBlack};
`;

export const LoginFormRedirectTouchable = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  width: 35px;
  height: 35px;
`;

export const LoginFormControlls = styled.View`
  padding-horizontal: 10px;
  padding-top: 10px;
`;

export const LoginFormButtonsView = styled.View`
  width: 100%;
`;
