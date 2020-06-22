import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const SpinnerView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: ${globalStyles.clPrimary};
`;
export const SpinnerElement = styled.ActivityIndicator``;
