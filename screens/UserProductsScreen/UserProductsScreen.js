import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import ProductItem from "../../components/ProductItem/ProductItem";

// sc
import {
  UserProductsScreenView,
  UserProductsFlatList,
} from "./UserProductsScreen.styles";

const UserProductsScreen = ({ navigation }) => {
  // temporary dummy userID
  const userID = "crwn-clothing-shop";

  const allProducts = useSelector((state) => state.products.allProducts);
  const filteredProducts = allProducts.filter((obj) => obj.ownerId === userID);

  const { navigate } = navigation;

  return (
    <UserProductsScreenView>
      <UserProductsFlatList
        data={filteredProducts}
        keyExtractor={(obj) => obj.id}
        renderItem={(data) => (
          <ProductItem
            item={data.item}
            action={() =>
              navigate("Edit", {
                title: data.item.name,
                item: data.item,
              })
            }
          />
        )}
      />
    </UserProductsScreenView>
  );
};

export default UserProductsScreen;
