import React, { memo } from "react";

// redux
import { useSelector } from "react-redux";

// animatable
import * as Animatable from "react-native-animatable";

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

const ProductItem = ({ action, item, index }) => {
  const { name, price, imgUrl } = item;

  const width = useSelector((state) => state.settings.width);

  return (
    <Animatable.View
      animation={index % 2 === 0 ? "slideInRight" : "slideInLeft"}
      duration={1000}
      iterationCount={1}
      direction={"normal"}
    >
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
    </Animatable.View>
  );
};

export default memo(ProductItem);
