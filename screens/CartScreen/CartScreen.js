import React, { Fragment } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { cleanUpCart } from "../../redux/cart/cart.actions";
import { createNewOrder } from "../../redux/orders/orders.actions";
import { openModal } from "../../redux/modal/modal.actions";

// components
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";

// utils
import { uuid } from "../../utils/uuid";

// sc
import {
  CartScreenView,
  CartScreenFlatList,
  CartScreenPurchaseView,
  CartScreenPurchaseButton,
  CartScreenIsEmptyView,
  CartScreenIsEmptyText,
} from "./CartScreen.styles";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalSum = cartItems.reduce(
    (acc, obj) => acc + obj.price * obj.quantity,
    0
  );

  return (
    <CartScreenView>
      {cartItems.length ? (
        <Fragment>
          <CartScreenFlatList
            data={cartItems}
            keyExtractor={(obj) => obj.id}
            renderItem={(data) => <CartItem item={data.item} />}
          />
          <CartScreenPurchaseView>
            <CartScreenPurchaseButton>
              <Button
                title={`purchase for only $${totalSum}`}
                action={() => {
                  dispatch(
                    openModal({
                      text: `Purchase an order for $${totalSum}?`,
                      action: () => {
                        // dispatch new order
                        dispatch(
                          createNewOrder({
                            id: uuid(),
                            createdAt: Date.now(),
                            totalSum: totalSum,
                            status:
                              "processing" /* sent, arrived, success, declined */,
                            orderedItems: cartItems,
                            userInfo: {
                              // temporary data
                              email: "artyom.nikolaiev@yahoo.com",
                              phone: "+380501301212",
                              cardDetails: {
                                number: "4242424242424242",
                                date: "10/20",
                                cvv: "123",
                              },
                            },
                          })
                        );
                        // clean up cart
                        dispatch(cleanUpCart());
                      },
                    })
                  );
                }}
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
