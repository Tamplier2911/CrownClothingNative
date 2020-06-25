import React, { Fragment } from "react";

// redux
import { useSelector } from "react-redux";

// components
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";

// sc
import {
  CartScreenView,
  CartScreenScrollView,
  CartScreenPurchaseView,
  CartScreenPurchaseButton,
  CartScreenIsEmptyView,
  CartScreenIsEmptyText,
} from "./CartScreen.styles";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalSum = cartItems.reduce(
    (acc, obj) => acc + obj.price * obj.quantity,
    0
  );

  return (
    <CartScreenView>
      {cartItems.length ? (
        <Fragment>
          <CartScreenScrollView>
            {cartItems.map((obj) => (
              <CartItem key={obj.id} item={obj} />
            ))}
          </CartScreenScrollView>
          <CartScreenPurchaseView>
            <CartScreenPurchaseButton>
              <Button
                title={`purchase for only $${totalSum}`}
                action={() => console.log(`Purchased for ${totalSum}!`)}
              />
            </CartScreenPurchaseButton>
          </CartScreenPurchaseView>
        </Fragment>
      ) : (
        <CartScreenIsEmptyView>
          <CartScreenIsEmptyText>Your cart is empty!</CartScreenIsEmptyText>
        </CartScreenIsEmptyView>
      )}
    </CartScreenView>
  );
};

export default CartScreen;
