import React from "react";

// sc
import {
  ButtonTouchable,
  ButtonTitleWrapper,
  ButtonTitleText,
  ButtonIconView,
} from "./Button.styles";

const Button = ({ title, action, icon }) => {
  return (
    <ButtonTouchable onPress={action} activeOpacity={0.5}>
      <ButtonTitleWrapper>
        {icon ? (
          <ButtonIconView>{icon}</ButtonIconView>
        ) : (
          <ButtonTitleText>{title}</ButtonTitleText>
        )}
      </ButtonTitleWrapper>
    </ButtonTouchable>
  );
};

export default Button;
