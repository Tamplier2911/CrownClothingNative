// import React, { useEffect, useCallback } from "react";
import React from "react";

// utils
// import { isCloseToBottom } from "../../utils/isCloseToBottom";

// redux
// import { useSelector, useDispatch } from "react-redux";
// import { loadMoreProducts } from "../../redux/products/products.actions";
import { useSelector } from "react-redux";

// components
import ProductItem from "../../components/ProductItem/ProductItem";

// sc
import {
  ProductsOverviewScreenView,
  ProductsOverviewScreenFlatList,
  // ProductsOverviewScreenScrollView,
} from "./ProductsOverviewScreen.styles";

const ProductsOverviewScreen = ({ route, navigation }) => {
  let allProducts = useSelector((state) => state.products.allProducts);
  // let loadedProducts = useSelector((state) => state.products.loadedProducts);
  // const dispatch = useDispatch();

  /*

  const memoizedLoader = useCallback(() => {
    dispatch(loadMoreProducts());
  }, []);

  useEffect(() => {
    if (!loadedProducts.length) memoizedLoader();
  }, [loadedProducts.length]);

  */
  const { navigate } = navigation;

  const filter = route?.params?.filter;
  if (filter)
    allProducts = allProducts.filter(
      (obj) => obj.category === filter.toLowerCase()
    );

  return (
    <ProductsOverviewScreenView>
      {/* Reference to on end reached triggers for ScrollView */}
      {/* <ProductsOverviewScreenScrollView
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
      </ProductsOverviewScreenScrollView> */}
      <ProductsOverviewScreenFlatList
        numColumns={1}
        initialNumToRender={5}
        // reference to on end reached triggers
        // onEndReached={({ distanceFromEnd }) => {
        //   console.log(distanceFromEnd, "end is reached!");
        //   allProducts.length > 0 ? dispatch(loadMoreProducts()) : null;
        // }}
        // onEndReachedThreshold={0.1}
        data={allProducts}
        keyExtractor={(obj) => obj.id}
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
