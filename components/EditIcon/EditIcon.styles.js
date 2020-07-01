import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const EditIconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100px;
  justify-content: flex-end;
`;

export const EditIconTouchable = styled.TouchableOpacity``;

export const EditIconWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 30px;
  margin-right: 8px;
`;

/*

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

*/
