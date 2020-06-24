import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const ProductDetailsScreenView = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const ProductDetailsScreenWrapper = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const ProductDetailsScreenImage = styled.Image`
  width: 100%;
  height: ${({ width }) => width * 0.6}px;
  resize-mode: cover;
`;

export const ProductDetailsScreenTitleView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const ProductDetailsScreenTitleWrapLeft = styled.View`
  flex: 1;
`;

export const ProductDetailsScreenTitleWrapRight = styled.View`
  justify-content: center;
`;

export const ProductDetailsScreenTitleText = styled.Text`
  font-family: "font";
  text-transform: uppercase;
  font-size: 30px;
  color: ${globalStyles.clFont};
`;

export const ProductDetailsScreenDescriptionView = styled.View`
  margin-bottom: 20px;
`;

export const ProductDetailsScreenDescriptionText = styled.Text`
  font-family: "font";
  font-size: 20px;
  color: ${globalStyles.clFont};
`;

export const ProductDetailsScreenButtonView = styled.View`
  flex: 1;
`;
