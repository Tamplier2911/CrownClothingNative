import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import ProductItem from "../../components/ProductItem/ProductItem";

// sc
import {
  ProductsOverviewScreenView,
  ProductsOverviewScreenFlatList,
  ProductsOverviewScreenScrollView,
} from "./ProductsOverviewScreen.styles";

const ProductsOverviewScreen = ({ route, navigation }) => {
  let allProducts = useSelector((state) => state.products.allProducts);

  const { navigate } = navigation;

  const filter = route?.params?.filter;
  if (filter)
    allProducts = allProducts.filter(
      (obj) => obj.category === filter.toLowerCase()
    );

  return (
    <ProductsOverviewScreenView>
      <ProductsOverviewScreenScrollView>
        {allProducts.map((obj) => (
          <ProductItem
            key={obj.id}
            item={obj}
            action={() =>
              navigate("Description", {
                title: obj.name,
                item: obj,
              })
            }
          />
        ))}
      </ProductsOverviewScreenScrollView>
      {/* FIX FLATLIST WEIRD BEHAVIOUR */}
      {/* <ProductsOverviewScreenFlatList
        numColumns={1}
        // initialNumToRender={40}
        // onEndReached={ function }
        // onEndReachedThreshold={ number }
        keyExtractor={(obj) => obj.id}
        data={allProducts}
        renderItem={(data) => (
          <ProductItem
            item={data.item}
            action={() =>
              navigate("Description", {
                title: data.item.name,
                item: data.item,
              })
            }
          />
        )}
      /> */}
    </ProductsOverviewScreenView>
  );
};

export default ProductsOverviewScreen;
