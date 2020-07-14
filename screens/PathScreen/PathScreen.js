import React from "react";

// components
import Button from "../../components/Button/Button";

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
      <PathScreenScrollView>
        <PathScreenTextWrapper>
          <PathScreenText>Map Screen</PathScreenText>
          <PathScreenButtonWrapper>
            <Button title="Back" action={() => navigate("MapWe")} />
          </PathScreenButtonWrapper>
        </PathScreenTextWrapper>
      </PathScreenScrollView>
    </PathScreenView>
  );
};

export default PathScreen;
