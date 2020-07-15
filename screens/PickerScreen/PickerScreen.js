import React from "react";

// components
import ImagePicker from "../../components/ImagePicker/ImagePicker";

// sc
import {
  PickerScreenView,
  PickerScreenScrollView,
} from "./PickerScreen.styles";

const PickerScreen = () => {
  return (
    <PickerScreenView>
      {/* <PickerScreenScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      > */}
      <ImagePicker />
      {/* </PickerScreenScrollView> */}
    </PickerScreenView>
  );
};

export default PickerScreen;
