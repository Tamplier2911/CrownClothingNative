import React from "react";

// components
import ImagePicker from "../../components/ImagePicker/ImagePicker";

// sc
import { PickerScreenView } from "./PickerScreen.styles";

const PickerScreen = () => {
  return (
    <PickerScreenView>
      <ImagePicker />
    </PickerScreenView>
  );
};

export default PickerScreen;
