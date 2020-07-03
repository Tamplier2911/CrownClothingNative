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
  label,
  error,
}) => (
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
      />
    </TextInputWrapper>
  </TextInputContainer>
);

export default TextInput;
