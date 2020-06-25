export const addItemToCart = (cartItems, item) => {
  const includes = cartItems.find((obj) => obj.id === item.id);
  if (includes)
    return cartItems.map((obj) =>
      obj.id === item.id ? { ...obj, quantity: obj.quantity + 1 } : obj
    );
  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemId) =>
  cartItems.filter((obj) => obj.id !== itemId);

export const addItemOrIncrementQuantity = (cartItems, itemId) => {
  const includes = cartItems.find((obj) => obj.id === itemId);
  if (includes)
    return cartItems.map((obj) =>
      obj.id === itemId ? { ...obj, quantity: obj.quantity + 1 } : obj
    );
  return [...cartItems, { ...item, quantity: 1 }];
};

export const decrementQuantityOrRemove = (cartItems, itemId) => {
  const includes = cartItems.find((obj) => obj.id === itemId);
  if (includes)
    return includes.quantity > 1
      ? cartItems.map((obj) =>
          obj.id === itemId ? { ...obj, quantity: obj.quantity - 1 } : obj
        )
      : cartItems.filter((obj) => obj.id !== itemId);
};
