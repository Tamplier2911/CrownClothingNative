import React from "react";

// iconic
import { MaterialCommunityIcons } from "@expo/vector-icons";

// globalStyles
import globalStyles from "../../constants/globalStyles";

// sc
import {
  EditIconContainer,
  EditIconTouchable,
  EditIconWrapper,
} from "./EditIcon.styles";

const EditIcon = ({ action }) => {
  return (
    <EditIconContainer>
      <EditIconTouchable onPress={action} activeOpacity={0.5}>
        <EditIconWrapper>
          <MaterialCommunityIcons
            name="circle-edit-outline"
            size={28}
            color={globalStyles.clWhite}
          />
        </EditIconWrapper>
      </EditIconTouchable>
    </EditIconContainer>
  );
};

export default EditIcon;
