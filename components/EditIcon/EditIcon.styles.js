import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const EditIconTouchableView = styled.TouchableOpacity`
  position: absolute;
 ${({ position }) => position}
  background-color: ${globalStyles.clWhite};
  padding: 4px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const EditIconWrapper = styled.View``;
