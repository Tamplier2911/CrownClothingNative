import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

// components
import Button from "../../components/Button/Button";

// sc
import {
  ProductDetailsScreenView,
  ProductDetailsScreenWrapper,
  ProductDetailsScreenImage,
  ProductDetailsScreenTitleView,
  ProductDetailsScreenTitleWrapLeft,
  ProductDetailsScreenTitleWrapRight,
  ProductDetailsScreenTitleText,
  ProductDetailsScreenDescriptionView,
  ProductDetailsScreenDescriptionText,
  ProductDetailsScreenButtonView,
} from "./ProductDetailsScreen.styles";

const ProductDetailsScreen = ({ route }) => {
  const {
    params: { item },
  } = route;
  const { id, name, description, price, imgUrl } = item;

  const width = useSelector((state) => state.settings.width);
  const dispatch = useDispatch();

  return (
    <ProductDetailsScreenView>
      <ProductDetailsScreenWrapper>
        <ProductDetailsScreenImage source={{ uri: imgUrl }} width={width} />
        <ProductDetailsScreenTitleView>
          <ProductDetailsScreenTitleWrapLeft>
            <ProductDetailsScreenTitleText>
              {name}
            </ProductDetailsScreenTitleText>
          </ProductDetailsScreenTitleWrapLeft>
          <ProductDetailsScreenTitleWrapRight>
            <ProductDetailsScreenTitleText>
              {price}$
            </ProductDetailsScreenTitleText>
          </ProductDetailsScreenTitleWrapRight>
        </ProductDetailsScreenTitleView>
        <ProductDetailsScreenDescriptionView>
          <ProductDetailsScreenDescriptionText>
            {description}
          </ProductDetailsScreenDescriptionText>
        </ProductDetailsScreenDescriptionView>
        <ProductDetailsScreenButtonView>
          <Button
            title={"Add to Cart"}
            action={() => dispatch(addItemToCart(item))}
          />
        </ProductDetailsScreenButtonView>
      </ProductDetailsScreenWrapper>
    </ProductDetailsScreenView>
  );
};

export default ProductDetailsScreen;
