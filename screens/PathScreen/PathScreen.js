import React from "react";

// components
import Button from "../../components/Button/Button";
import ImagePicker from "../../components/ImagePicker/ImagePicker";

// sc
import {
  PathScreenView,
  PathScreenScrollView,
  PathScreenTextWrapper,
  PathScreenText,
  PathScreenButtonWrapper,
} from "./PathScreen.styles";

const PathScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <PathScreenView>
      <PathScreenTextWrapper>
        <PathScreenText>Path Screen</PathScreenText>
      </PathScreenTextWrapper>
      <PathScreenScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <PathScreenTextWrapper>
          <PathScreenText>Placeholder</PathScreenText>
        </PathScreenTextWrapper>
      </PathScreenScrollView>
      <PathScreenButtonWrapper>
        <Button title="Picker Reference" action={() => navigate("MapPicker")} />
      </PathScreenButtonWrapper>
    </PathScreenView>
  );
};

export default PathScreen;
