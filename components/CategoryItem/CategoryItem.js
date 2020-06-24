import React from "react";

// redux
import { useSelector } from "react-redux";

// sc
import {
  CategoryItemContainer,
  CategoryItemTouchable,
  CategoryItemBackground,
  CategoryItemTextWrapper,
  CategoryItemText,
} from "./CategoryItem.styles";

const CategoryItem = ({ action, category }) => {
  const { title, imageUrl } = category;
  const width = useSelector((state) => state.settings.width);
  return (
    <CategoryItemContainer>
      <CategoryItemTouchable onPress={action} activeOpacity={0.5} width={width}>
        <CategoryItemBackground source={{ uri: imageUrl }}>
          <CategoryItemTextWrapper width={width}>
            <CategoryItemText>{title}</CategoryItemText>
          </CategoryItemTextWrapper>
        </CategoryItemBackground>
      </CategoryItemTouchable>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
