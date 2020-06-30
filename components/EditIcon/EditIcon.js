import React from "react";

// iconic
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// globalStyles
import globalStyles from "../../constants/globalStyles";

// sc
import { EditIconTouchableView, EditIconWrapper } from "./EditIcon.styles";

const EditIcon = ({ action, position }) => {
  return (
    <EditIconTouchableView
      onPress={action}
      activeOpacity={0.5}
      position={position}
    >
      <EditIconWrapper>
        <MaterialIcons name="edit" size={20} color={globalStyles.clBlack} />
        {/* <FontAwesome name="edit" size={20} color={globalStyles.clWhite} /> */}
      </EditIconWrapper>
    </EditIconTouchableView>
  );
};

export default EditIcon;
