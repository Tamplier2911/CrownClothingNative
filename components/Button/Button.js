import React from "react";

// sc
import {
  ButtonTouchable,
  ButtonTitleWrapper,
  ButtonDisabledTitleWrapper,
  ButtonTitleText,
  ButtonIconView,
} from "./Button.styles";

const Button = ({ title, action, icon, disabled }) => {
  return disabled ? (
    <ButtonTouchable onPress={() => {}} activeOpacity={1}>
      <ButtonDisabledTitleWrapper>
        {icon ? (
          <ButtonIconView>{icon}</ButtonIconView>
        ) : (
          <ButtonTitleText>{title}</ButtonTitleText>
        )}
      </ButtonDisabledTitleWrapper>
    </ButtonTouchable>
  ) : (
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
