import React from "react";

// sc
import {
  TextInputContainer,
  TextInputElement,
  TextInputLabelWrapper,
  TextInputErrorLabel,
  TextInputLabel,
  TextInputWrapper,
} from "./TextInput.styles";

const TextInput = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
  keyboardType = "default",
  secureTextEntry = false,
  label,
  error,
}) => {
  return (
    <TextInputContainer>
      <TextInputLabelWrapper>
        {error ? (
          <TextInputErrorLabel>{label}</TextInputErrorLabel>
        ) : (
          <TextInputLabel len={value.length}>{label}</TextInputLabel>
        )}
      </TextInputLabelWrapper>
      <TextInputWrapper>
        <TextInputElement
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          // fixes annoying password suggestions
          textContentType={"oneTimeCode"}
        />
      </TextInputWrapper>
    </TextInputContainer>
  );
};

export default TextInput;
