import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { refreshProductsList } from "../../redux/products/products.actions";

// components
import ProductItem from "../../components/ProductItem/ProductItem";
import Spinner from "../../components/Spinner/Spinner";

// sc
import {
  UserProductsScreenView,
  UserProductsFlatList,
  UserProductsScreenNoProductsView,
  UserProductsScreenNoProductsText,
} from "./UserProductsScreen.styles";

const UserProductsScreen = ({ navigation }) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const isProductsLoading = useSelector((state) => state.products.isLoading);
  const userID = useSelector((state) => state.auth.currentUser.uid);
  const filteredProducts = allProducts.filter((obj) => obj.ownerId === userID);

  const dispatch = useDispatch();

  const { navigate } = navigation;

  return (
    <UserProductsScreenView>
      {isProductsLoading ? (
        <Spinner />
      ) : filteredProducts.length ? (
        <UserProductsFlatList
          onRefresh={() => dispatch(refreshProductsList())}
          refreshing={isProductsLoading}
          data={filteredProducts}
          keyExtractor={(obj) => obj.id}
          renderItem={(data) => (
            <ProductItem
              item={data.item}
              index={data.index}
              action={() =>
                navigate("Edit", {
                  title: data.item.name,
                  item: data.item,
                })
              }
            />
          )}
        />
      ) : (
        <UserProductsScreenNoProductsView>
          <UserProductsScreenNoProductsText>
            Your don't have products yet.
          </UserProductsScreenNoProductsText>
        </UserProductsScreenNoProductsView>
      )}
    </UserProductsScreenView>
  );
};

export default UserProductsScreen;
