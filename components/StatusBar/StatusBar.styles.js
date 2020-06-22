import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const GetStatusBarHeight = ({ height }) =>
  height ? `height: ${height}px;` : `height: 10%;`;

export const StatusBarView = styled.View`
  background-color: ${globalStyles.clBlack};
  ${GetStatusBarHeight}
`;
