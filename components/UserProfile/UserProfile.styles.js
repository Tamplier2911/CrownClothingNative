import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const UserProfileView = styled.View`
  flex: 1;
`;

export const UserProfileScrollView = styled.ScrollView``;

export const UserProfileTopView = styled.View`
  flex: 1;
`;

export const UserProfileImageView = styled.View`
  height: ${({ width }) => width * 0.4}px;
  width: ${({ width }) => width * 0.4}px;
  align-self: center;

  border-radius: ${({ width }) => width + width}px;
  margin-vertical: 15px;

  shadow-opacity: 0.8;
  shadow-color: #333;
  shadow-radius: 2.84px;
  shadow-offset: 0.2px;
  elevation: 5;
`;

export const UserProfileImage = styled.Image`
  overflow: hidden;
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const UserProfileTextView = styled.View`
  margin-bottom: 5%;
`;

export const UserProfileText = styled.Text`
  text-align: center;
  font-family: "font";
  font-size: 22px;
  color: ${globalStyles.clBlack};
`;

export const UserProfileBottomView = styled.View``;
