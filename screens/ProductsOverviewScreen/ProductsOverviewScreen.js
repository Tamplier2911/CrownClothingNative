import React, { useEffect, useCallback } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loadMoreProducts } from "../../redux/products/products.actions";

// components
import ProductItem from "../../components/ProductItem/ProductItem";

// sc
import {
  ProductsOverviewScreenView,
  // ProductsOverviewScreenFlatList,
  ProductsOverviewScreenScrollView,
} from "./ProductsOverviewScreen.styles";

const ProductsOverviewScreen = ({ route, navigation }) => {
  let allProducts = useSelector((state) => state.products.allProducts);
  let loadedProducts = useSelector((state) => state.products.loadedProducts);

  const dispatch = useDispatch();

  const memoizedLoader = useCallback(() => {
    dispatch(loadMoreProducts());
  }, []);

  useEffect(() => {
    if (!loadedProducts.length) memoizedLoader();
  }, [loadedProducts.length]);

  const { navigate } = navigation;

  const filter = route?.params?.filter;
  if (filter)
    allProducts = allProducts.filter(
      (obj) => obj.category === filter.toLowerCase()
    );

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
  };

  return (
    <ProductsOverviewScreenView>
      <ProductsOverviewScreenScrollView
        // onMomentumScrollBegin
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            if (allProducts.length > 0) memoizedLoader();
            // console.log("Near bottom.");
          }
        }}
        scrollEventThrottle={0}
      >
        {loadedProducts.map((obj) => (
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
        initialNumToRender={100}
        onEndReached={({ distanceFromEnd }) => {
          console.log(distanceFromEnd, "end is reached!");
          allProducts.length > 0 ? dispatch(loadMoreProducts()) : null;
        }}
        onEndReachedThreshold={0.1}
        keyExtractor={(obj) => obj.id}
        data={loadedProducts}
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
