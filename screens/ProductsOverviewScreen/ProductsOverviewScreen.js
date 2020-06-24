import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import ProductItem from "../../components/ProductItem/ProductItem";

// sc
import {
  ProductsOverviewScreenView,
  ProductsOverviewScreenFlatList,
} from "./ProductsOverviewScreen.styles";

const ProductsOverviewScreen = ({ route, navigation }) => {
  let sneakers = useSelector((state) => state.products.allProducts);

  const { navigate } = navigation;

  const filter = route?.params?.filter;
  if (filter)
    sneakers = sneakers.filter((obj) => obj.category === filter.toLowerCase());

  return (
    <ProductsOverviewScreenView>
      {/* FIX FLATLIST WEIRD BEHAVIOUR */}
      <ProductsOverviewScreenFlatList
        numColumns={1}
        // onEndReached={ function }
        // onEndReachedThreshold={ number }
        data={sneakers}
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
      />
    </ProductsOverviewScreenView>
  );
};

export default ProductsOverviewScreen;
