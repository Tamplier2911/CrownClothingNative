import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const ImagePickerView = styled.View`
  flex: 1;
`;

export const ImagePickerTextView = styled.View`
  margin-bottom: 10px;
`;

export const ImagePickerText = styled.Text`
  text-align: center;
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clBlack};
`;

export const ImagePickerScrollView = styled.ScrollView``;

export const ImagePickerImageView = styled.View`
  height: ${({ width }) => width * 0.6}px;
  width: 100%;
`;

export const ImagePickerImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const ImagePickerControllsView = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImagePickerButtonView = styled.View`
  width: 48%;
`;
