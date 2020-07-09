import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import CategoryItem from "../../components/CategoryItem/CategoryItem";

// sc
import {
  CategoriesScreenView,
  CategoriesScreenFlatList,
} from "./CategoriesScreen.styles";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.allCategories);

  const { navigate } = navigation;

  return (
    <CategoriesScreenView>
      <CategoriesScreenFlatList
        numColumns={1}
        data={categories}
        renderItem={(data) => (
          <CategoryItem
            category={data.item}
            index={data.index}
            action={() =>
              navigate("Category", {
                title: data.item.title,
                filter: data.item.title,
              })
            }
          />
        )}
      />
    </CategoriesScreenView>
  );
};

export default CategoriesScreen;
