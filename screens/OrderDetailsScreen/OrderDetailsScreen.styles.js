import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

export const OrderDetailsScreenView = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${globalStyles.clPrimary};
`;

export const OrderDetailsScreenScrollView = styled.ScrollView`
  flex: 1;
`;

export const OrderDetailsScreenTopView = styled.View`
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const OrderDetailsScreenIconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid ${globalStyles.clBlack};
`;

export const OrderDetailsScreenBottomView = styled.View`
  flex: 1;
`;

export const OrderDetailsScreenBlock = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 5px;
`;

export const OrderDetailsScreenHeadlineView = styled.View`
  align-items: center;
`;

export const OrderDetailsScreenHeadlineText = styled.Text`
  font-family: "font";
  font-size: 26px;
  color: ${globalStyles.clBlack};
`;

export const OrderDetailsScreenTextView = styled.View`
  align-items: center;
`;

export const OrderDetailsScreenText = styled.Text`
  font-family: "font";
  font-size: 22px;
  color: ${globalStyles.clFontFaded};
`;

export const OrderDetailsScreenStatusText = styled.Text`
  font-family: "font";
  font-size: 22px;
  color: ${({ status }) =>
    status === "success"
      ? globalStyles.clSuccess
      : status === "declined"
      ? globalStyles.clDeclined
      : globalStyles.clStatus};
`;

export const OrderDetailsScreenProductsWrapper = styled.View``;
