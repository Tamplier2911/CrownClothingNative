import React from "react";
import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductsTabNavigatorIconsWrapper = styled.View`
  margin-top: 5px;
`;

export const renderRespectiveIconForTabNav = (
  route,
  focused,
  color,
  size,
  orientation
) => {
  size = orientation === "portrait" ? 28 : 25;

  return route.name === "Products" ? (
    <ProductsTabNavigatorIconsWrapper>
      <MaterialCommunityIcons name="hat-fedora" size={size} color={color} />
    </ProductsTabNavigatorIconsWrapper>
  ) : (
    <ProductsTabNavigatorIconsWrapper>
      <MaterialCommunityIcons
        name="shopping-search"
        size={size}
        color={color}
      />
    </ProductsTabNavigatorIconsWrapper>
  );
};
