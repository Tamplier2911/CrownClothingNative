import React from "react";

// global styles
import globalStyles from "../../constants/globalStyles";

// sc
import { SpinnerElement, SpinnerView } from "./Spinner.styles";

export const Spinner = ({ size }) => {
  const spinnerColor = globalStyles.clBlack;
  return (
    <SpinnerView>
      <SpinnerElement size={size} color={spinnerColor} />
    </SpinnerView>
  );
};

export default Spinner;
