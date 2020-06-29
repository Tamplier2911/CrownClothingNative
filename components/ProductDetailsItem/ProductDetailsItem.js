import React from "react";

// sc
import {
  ProductDetailsItemContainer,
  ProductDetailsItemView,
  ProductDetailsItemTextView,
  ProductDetailsItemText,
} from "./ProductDetailsItem.styles";

const ProductDetailsItem = ({ item }) => {
  const { name, price, quantity } = item;
  return (
    <ProductDetailsItemContainer>
      <ProductDetailsItemView>
        <ProductDetailsItemTextView>
          <ProductDetailsItemText>{name}</ProductDetailsItemText>
        </ProductDetailsItemTextView>
      </ProductDetailsItemView>
      <ProductDetailsItemView>
        <ProductDetailsItemTextView>
          <ProductDetailsItemText>
            ${price.toFixed(2)} x {quantity}
          </ProductDetailsItemText>
        </ProductDetailsItemTextView>
      </ProductDetailsItemView>
    </ProductDetailsItemContainer>
  );
};

export default ProductDetailsItem;
