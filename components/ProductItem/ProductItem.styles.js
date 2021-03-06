import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

// flex: 1 on container item seems f@cking up flatlist re-rendering
export const ProductItemContainer = styled.View`
  padding: 10px;
  width: 100%;
`;

// flex: 1 on container item seems f@cking up flatlist re-rendering
export const ProductItemTouchable = styled.TouchableOpacity`
  width: 100%;
`;

export const ProductItemImageWrapper = styled.View`
  height: ${({ width }) => width * 0.4}px;
  width: 100%;
`;

export const ProductItemImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const ProductItemTextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductItemTextView = styled.View``;

export const ProductItemText = styled.Text`
  font-family: "font";
  text-transform: uppercase;
  font-size: 20px;
  color: ${globalStyles.clFont};
`;
