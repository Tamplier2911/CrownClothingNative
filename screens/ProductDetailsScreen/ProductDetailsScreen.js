import React from "react";

// redux
import { useSelector } from "react-redux";

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

// id: "14c570cb-9f31-4410-bd39-614ee12091b6",
// ownerId: "crwn-clothing-shop",
// category: "hats",
// name: "Brown Brim",
// description: "",
// price: 25,
// imgUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",

const ProductDetailsScreen = ({ route }) => {
  const {
    params: { item },
  } = route;
  const { id, name, description, price, imgUrl } = item;

  const width = useSelector((state) => state.settings.width);

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
          <Button title={"Add to Cart"} action={() => console.log("clicked")} />
        </ProductDetailsScreenButtonView>
      </ProductDetailsScreenWrapper>
    </ProductDetailsScreenView>
  );
};

export default ProductDetailsScreen;
