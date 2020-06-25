import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/cart/cart.actions";

// iconinc
import { Entypo } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  CartItemContainer,
  CartItemLeftView,
  CartItemImageWrapper,
  CartItemImage,
  CartItemRightView,
  CartItemDescView,
  CartItemTextView,
  CartItemQuantityView,
  CartItemTextWrapper,
  CartItemText,
  CartItemIconsWrapper,
  CartItemRemoveView,
  CartItemIconTouchable,
} from "./CartItem.styles";

const CartItem = ({ item }) => {
  const { id, name, imgUrl, price, quantity } = item;

  const width = useSelector((state) => state.settings.width);
  const orientation = useSelector((state) => state.settings.orientation);
  const dispatch = useDispatch();

  return (
    <CartItemContainer width={width}>
      <CartItemLeftView>
        <CartItemImageWrapper>
          <CartItemImage source={{ uri: imgUrl }} />
        </CartItemImageWrapper>
      </CartItemLeftView>

      <CartItemRightView>
        <CartItemDescView>
          <CartItemTextView>
            <CartItemText orientation={orientation} numberOfLines={1}>
              Name: {name}
            </CartItemText>
          </CartItemTextView>
          <CartItemQuantityView>
            <CartItemTextWrapper>
              <CartItemText orientation={orientation} numberOfLines={1}>
                Quantity:
              </CartItemText>
            </CartItemTextWrapper>
            <CartItemIconsWrapper>
              <CartItemIconTouchable
                onPress={() => dispatch(decrementQuantity(id))}
                activeOpacity={0.5}
              >
                <Entypo
                  name="chevron-left"
                  size={28}
                  color={globalStyles.clFont}
                />
              </CartItemIconTouchable>
              <CartItemTextWrapper>
                <CartItemText orientation={orientation} numberOfLines={1}>
                  {quantity}
                </CartItemText>
              </CartItemTextWrapper>
              <CartItemIconTouchable
                onPress={() => dispatch(incrementQuantity(id))}
                activeOpacity={0.5}
              >
                <Entypo
                  name="chevron-right"
                  size={28}
                  color={globalStyles.clFont}
                />
              </CartItemIconTouchable>
            </CartItemIconsWrapper>
          </CartItemQuantityView>
          <CartItemTextView numberOfLines={1}>
            <CartItemText orientation={orientation}>
              Price: ${price}
            </CartItemText>
          </CartItemTextView>
        </CartItemDescView>

        <CartItemRemoveView>
          <CartItemIconTouchable
            onPress={() => dispatch(removeItemFromCart(id))}
            activeOpacity={0.5}
          >
            <Entypo name="cross" size={28} color={globalStyles.clFont} />
          </CartItemIconTouchable>
        </CartItemRemoveView>
      </CartItemRightView>
    </CartItemContainer>
  );
};

export default CartItem;
