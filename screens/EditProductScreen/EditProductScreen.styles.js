import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const EditProductScreenView = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const EditProductScreenWrapper = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 10px;
  padding-top: 0px;
  background-color: ${globalStyles.clPrimary};
`;

export const EditProductScreenImageView = styled.View``;

export const EditProductScreenImage = styled.Image`
  width: 100%;
  height: ${({ width }) => width * 0.6}px;
  resize-mode: cover;
`;

export const EditProductScreenTitleView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const EditProductScreenCatView = styled.View`
  flex: 1;
  padding: 5px 0;
`;

export const EditProductScreenTitleWrapLeft = styled.View`
  flex: 1;
`;

export const EditProductScreenTitleWrapRight = styled.View`
  justify-content: center;
`;

export const EditProductScreenCatWrap = styled.View`
  align-items: center;
`;

export const EditProductScreenTitleText = styled.Text`
  font-family: "font";
  text-transform: uppercase;
  font-size: 30px;
  color: ${globalStyles.clFont};
`;

export const EditProductScreenCatText = styled.Text`
  font-family: "font";
  text-transform: uppercase;
  font-size: 25px;
  color: ${globalStyles.clFont};
`;

export const EditProductScreenDescriptionView = styled.View`
  margin-bottom: 20px;
`;

export const EditProductScreenDescriptionText = styled.Text`
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clFont};
`;

export const EditProductScreenControlsView = styled.View`
  padding-horizontal: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditProductScreenButtonView = styled.View`
  width: 48%;
`;
