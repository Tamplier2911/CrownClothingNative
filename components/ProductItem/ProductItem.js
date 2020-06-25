import React, { memo } from "react";

// redux
import { useSelector } from "react-redux";

// sc
import {
  ProductItemContainer,
  ProductItemTouchable,
  ProductItemImageWrapper,
  ProductItemImage,
  ProductItemTextWrapper,
  ProductItemTextView,
  ProductItemText,
} from "./ProductItem.styles";

const ProductItem = ({ action, item }) => {
  const { name, price, imgUrl } = item;

  const width = useSelector((state) => state.settings.width);

  return (
    <ProductItemContainer>
      <ProductItemTouchable onPress={action} activeOpacity={0.5}>
        <ProductItemImageWrapper width={width}>
          <ProductItemImage source={{ uri: imgUrl }} />
        </ProductItemImageWrapper>
        <ProductItemTextWrapper>
          <ProductItemTextView>
            <ProductItemText>{name}</ProductItemText>
          </ProductItemTextView>
          <ProductItemTextView>
            <ProductItemText>${price}</ProductItemText>
          </ProductItemTextView>
        </ProductItemTextWrapper>
      </ProductItemTouchable>
    </ProductItemContainer>
  );
};

export default memo(ProductItem);
