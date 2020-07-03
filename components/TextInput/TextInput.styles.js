import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const TextInputContainer = styled.View``;

export const TextInputLabelWrapper = styled.View``;

export const TextInputErrorLabel = styled.Text`
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clDeclined};
`;

export const TextInputLabel = styled.Text`
  font-family: "font";
  font-size: 20px;
  color: ${({ len }) =>
    len >= 1 ? globalStyles.clDisabled : globalStyles.clBlack};
`;

export const TextInputWrapper = styled.View``;

export const TextInputElement = styled.TextInput`
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clBlack};
  border-color: ${globalStyles.clBlack};
  border-bottom-width: 2px;
  height: 30px;
  margin-bottom: 4px;
`;
