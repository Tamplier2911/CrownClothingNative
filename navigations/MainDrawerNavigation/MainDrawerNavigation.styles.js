import React from "react";
import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

// iconic
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const renderAppropriateIcon = (route, config) => {
  const { name } = route;
  const { color, focused, size } = config;
  if (name === "Shop") {
    return focused ? (
      <MaterialCommunityIcons
        name="shopping-search"
        size={size}
        color={color}
      />
    ) : (
      <MaterialCommunityIcons
        name="shopping-search"
        size={24}
        size={size}
        color={globalStyles.clFaded}
      />
    );
  } else if (name === "Orders") {
    return focused ? (
      <Fontisto name="shopping-bag-1" size={size} color={color} />
    ) : (
      <Fontisto
        name="shopping-bag-1"
        size={size}
        color={globalStyles.clFaded}
      />
    );
  } else if (name === "Manage") {
    return focused ? (
      <Entypo name="user" size={size} color={color} />
    ) : (
      <Entypo name="user" size={size} color={globalStyles.clFaded} />
    );
  } else if (name === "Login") {
    return focused ? (
      <Entypo name="login" size={size} color={color} />
    ) : (
      <Entypo name="login" size={size} color={globalStyles.clFaded} />
    );
  } else if (name === "Logout") {
    return focused ? (
      <Entypo name="log-out" size={size} color={color} />
    ) : (
      <Entypo name="log-out" size={size} color={globalStyles.clFaded} />
    );
  } else if (name === "Map") {
    return focused ? (
      <MaterialCommunityIcons name="map-marker" size={size} color={color} />
    ) : (
      <MaterialCommunityIcons
        name="map-marker"
        size={size}
        color={globalStyles.clFaded}
      />
    );
  }
};
