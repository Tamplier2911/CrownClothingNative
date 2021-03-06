// import React, { useEffect, useCallback } from "react";
import React from "react";

// utils
// import { isCloseToBottom } from "../../utils/isCloseToBottom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { refreshProductsList } from "../../redux/products/products.actions";

// components
import ProductItem from "../../components/ProductItem/ProductItem";
import Spinner from "../../components/Spinner/Spinner";

// sc
import {
  ProductsOverviewScreenView,
  ProductsOverviewScreenFlatList,
  // ProductsOverviewScreenScrollView,
} from "./ProductsOverviewScreen.styles";

const ProductsOverviewScreen = ({ route, navigation }) => {
  let allProducts = useSelector((state) => state.products.allProducts);
  const isProductsLoading = useSelector((state) => state.products.isLoading);

  const dispatch = useDispatch();

  // let loadedProducts = useSelector((state) => state.products.loadedProducts);

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
      (obj) => obj.category.toLowerCase() === filter.toLowerCase()
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
      {isProductsLoading ? (
        <Spinner />
      ) : (
        <ProductsOverviewScreenFlatList
          numColumns={1}
          onRefresh={() => dispatch(refreshProductsList())}
          refreshing={isProductsLoading}
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
              index={data.index}
              action={() =>
                navigate("Description", {
                  title: data.item.name,
                  item: data.item,
                })
              }
            />
          )}
        />
      )}
    </ProductsOverviewScreenView>
  );
};

export default ProductsOverviewScreen;
