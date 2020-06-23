import React from "react";

// iconinc
import { MaterialCommunityIcons } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  DrawerIconContainer,
  DrawerIconTouchable,
  DrawerIconWrapper,
} from "./DrawerIcon.styles";

const DrawerIcon = ({ action }) => {
  return (
    <DrawerIconContainer>
      <DrawerIconTouchable onPress={action}>
        <DrawerIconWrapper>
          <MaterialCommunityIcons
            name="menu"
            size={28}
            color={globalStyles.clWhite}
          />
        </DrawerIconWrapper>
      </DrawerIconTouchable>
    </DrawerIconContainer>
  );
};

export default DrawerIcon;
