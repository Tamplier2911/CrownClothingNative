import React from "react";

// iconinc
import { Feather } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  CartIconContainer,
  CartIconTouchable,
  CartIconWrapper,
  CartIconBadgeView,
  CartIconBadgeText,
} from "./CartIcon.styles";

const CartIcon = ({ action }) => {
  // temporarty
  const productsAmount = 9;

  return (
    <CartIconContainer>
      <CartIconTouchable onPress={action} activeOpacity={0.5}>
        <CartIconWrapper>
          <Feather name="shopping-bag" size={28} color={globalStyles.clWhite} />
        </CartIconWrapper>
        <CartIconBadgeView>
          <CartIconBadgeText>{productsAmount}</CartIconBadgeText>
        </CartIconBadgeView>
      </CartIconTouchable>
    </CartIconContainer>
  );
};

export default CartIcon;
