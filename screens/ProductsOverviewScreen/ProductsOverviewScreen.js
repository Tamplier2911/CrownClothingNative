import React from "react";

// redux
import { useSelector } from "react-redux";

// sc
import {
  ProductsOverviewScreenView,
  ProductsOverviewScreenText,
  ProductsOverviewScreenFlatList,
} from "./ProductsOverviewScreen.styles";

// tempo
import { View, Text } from "react-native";

const ProductsOverviewScreen = () => {
  const sneakers = useSelector((state) => state.products.allProducts);

  return (
    <ProductsOverviewScreenView>
      <ProductsOverviewScreenText>
        Product Overview Screen
      </ProductsOverviewScreenText>
      <ProductsOverviewScreenFlatList
        numColumns={1}
        data={sneakers}
        renderItem={(data) => {
          const { name, price } = data.item;

          return (
            <View>
              <Text>{`${name}, ${price}`}</Text>
            </View>
          );
        }}
      />
    </ProductsOverviewScreenView>
  );
};

export default ProductsOverviewScreen;
