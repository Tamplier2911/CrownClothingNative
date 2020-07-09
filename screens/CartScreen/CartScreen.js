import React, { Fragment } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { cleanUpCart } from "../../redux/cart/cart.actions";
import { createNewOrderStart } from "../../redux/orders/orders.actions";
import { openModal } from "../../redux/modal/modal.actions";

// components
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";

// sc
import {
  CartScreenView,
  CartScreenFlatList,
  CartScreenPurchaseView,
  CartScreenPurchaseButton,
  CartScreenIsEmptyView,
  CartScreenIsEmptyText,
} from "./CartScreen.styles";

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartIsLoading = useSelector((state) => state.cart.isLoading);
  const user = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();

  const totalSum = cartItems.reduce(
    (acc, obj) => acc + obj.price * obj.quantity,
    0
  );

  const { navigate } = navigation;

  return (
    <CartScreenView>
      {cartIsLoading ? (
        <Spinner />
      ) : cartItems.length ? (
        <Fragment>
          <CartScreenFlatList
            data={cartItems}
            keyExtractor={(obj) => obj.id}
            renderItem={(data) => <CartItem item={data.item} />}
          />
          <CartScreenPurchaseView>
            <CartScreenPurchaseButton>
              {user ? (
                <Button
                  title={`purchase for only $${totalSum}`}
                  action={() => {
                    dispatch(
                      openModal({
                        text: `Purchase an order for $${totalSum}?`,
                        action: () => {
                          // dispatch new order
                          dispatch(
                            createNewOrderStart({
                              totalSum: totalSum,
                              status:
                                "processing" /* sent, arrived, success, declined */,
                              orderedItems: cartItems,
                              userInfo: {
                                email: user?.email || null,
                                uid: user?.uid || null,
                                phone: user?.phone || null,
                                cardDetails: {
                                  number: user?.card?.num || null,
                                  date: user?.card?.expireData || null,
                                  cvv: user?.card?.cvv || null,
                                },
                              },
                            })
                          );
                          // clean up cart
                          dispatch(cleanUpCart());
                          // navigate to Orders screen
                          navigate("Orders");
                        },
                      })
                    );
                  }}
                />
              ) : (
                <Button title={"Log in"} action={() => navigate("Login")} />
              )}
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
