import React from "react";

// iconinc
import { Ionicons } from "@expo/vector-icons";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  CreateIconContainer,
  CreateIconTouchable,
  CreateIconWrapper,
} from "./CreateIcon.styles";

export const CreateIcon = ({ action }) => {
  return (
    <CreateIconContainer>
      <CreateIconTouchable onPress={action} activeOpacity={0.5}>
        <CreateIconWrapper>
          <Ionicons
            name="ios-add-circle-outline"
            size={28}
            color={globalStyles.clWhite}
          />
        </CreateIconWrapper>
      </CreateIconTouchable>
    </CreateIconContainer>
  );
};

export default CreateIcon;
