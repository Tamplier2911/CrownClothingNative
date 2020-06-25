import React from "react";

// redux
import { useSelector } from "react-redux";

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
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <CartIconContainer>
      <CartIconTouchable onPress={action} activeOpacity={0.5}>
        <CartIconWrapper>
          <Feather name="shopping-bag" size={28} color={globalStyles.clWhite} />
        </CartIconWrapper>
        {cartItems.length ? (
          <CartIconBadgeView>
            <CartIconBadgeText>
              {cartItems.reduce((acc, el) => acc + el.quantity, 0)}
            </CartIconBadgeText>
          </CartIconBadgeView>
        ) : null}
      </CartIconTouchable>
    </CartIconContainer>
  );
};

export default CartIcon;
