import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const CategoryItemContainer = styled.View`
  flex: 1;
  padding: 10px;
  width: 100%;
`;

export const CategoryItemTouchable = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: ${({ width }) => width * 0.4}px;
`;

export const CategoryItemBackground = styled.ImageBackground`
  flex: 1;

  align-items: center;
  justify-content: center;

  overflow: hidden;
  width: undefined;
  height: undefined;
  resize-mode: cover;

  border: 1px solid ${globalStyles.clBlack};
`;

export const CategoryItemTextWrapper = styled.View`
  align-items: center;
  background-color: ${globalStyles.clCategory};
  width: ${({ width }) => width * 0.5}px;
  border: 1px solid ${globalStyles.clBlack};
`;

export const CategoryItemText = styled.Text`
  font-family: "font";
  text-transform: uppercase;
  font-size: 40px;
  color: ${globalStyles.clFont};
`;
