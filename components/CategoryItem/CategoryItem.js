import React from "react";

// redux
import { useSelector } from "react-redux";

// animatable
import * as Animatable from "react-native-animatable";

// sc
import {
  CategoryItemContainer,
  CategoryItemTouchable,
  CategoryItemBackground,
  CategoryItemTextWrapper,
  CategoryItemText,
} from "./CategoryItem.styles";

const CategoryItem = ({ action, category, index }) => {
  const { title, imageUrl } = category;
  const width = useSelector((state) => state.settings.width);

  return (
    <Animatable.View
      animation={index % 2 === 0 ? "slideInRight" : "slideInLeft"}
      duration={1000}
      iterationCount={1}
      direction={"normal"}
    >
      <CategoryItemContainer>
        <CategoryItemTouchable
          onPress={action}
          activeOpacity={0.5}
          width={width}
        >
          <CategoryItemBackground source={{ uri: imageUrl }}>
            <CategoryItemTextWrapper width={width}>
              <CategoryItemText>{title}</CategoryItemText>
            </CategoryItemTextWrapper>
          </CategoryItemBackground>
        </CategoryItemTouchable>
      </CategoryItemContainer>
    </Animatable.View>
  );
};

export default CategoryItem;
