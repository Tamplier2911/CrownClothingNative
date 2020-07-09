import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import ProductItem from "../../components/ProductItem/ProductItem";
import Spinner from "../../components/Spinner/Spinner";

// sc
import {
  UserProductsScreenView,
  UserProductsFlatList,
} from "./UserProductsScreen.styles";

const UserProductsScreen = ({ navigation }) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const isProductsLoading = useSelector((state) => state.products.isLoading);
  const userID = useSelector((state) => state.auth.currentUser.uid);
  const filteredProducts = allProducts.filter((obj) => obj.ownerId === userID);

  const { navigate } = navigation;

  return (
    <UserProductsScreenView>
      {isProductsLoading ? (
        <Spinner />
      ) : (
        <UserProductsFlatList
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
      )}
    </UserProductsScreenView>
  );
};

export default UserProductsScreen;
