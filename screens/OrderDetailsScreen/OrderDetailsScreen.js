import React from "react";

// iconinc
import { Fontisto } from "@expo/vector-icons";

// components
import ProductDetailsItem from "../../components/ProductDetailsItem/ProductDetailsItem";

// global styles
import globalStyles from "../../constants/globalStyles";

// utils
import { toLocaleString } from "../../utils/toLocaleString";

// sc
import {
  OrderDetailsScreenView,
  OrderDetailsScreenScrollView,
  OrderDetailsScreenTopView,
  OrderDetailsScreenIconWrapper,
  OrderDetailsScreenBottomView,
  OrderDetailsScreenBlock,
  OrderDetailsScreenHeadlineView,
  OrderDetailsScreenHeadlineText,
  OrderDetailsScreenTextView,
  OrderDetailsScreenText,
  OrderDetailsScreenStatusText,
  OrderDetailsScreenProductsWrapper,
} from "./OrderDetailsScreen.styles";

const OrderDetailsScreen = ({ route }) => {
  const {
    id,
    createdAt,
    status,
    totalSum,
    orderedItems,
    userInfo,
  } = route.params.item;

  return (
    <OrderDetailsScreenView>
      <OrderDetailsScreenScrollView>
        <OrderDetailsScreenTopView>
          <OrderDetailsScreenIconWrapper>
            <Fontisto
              name="shopping-bag-1"
              size={60}
              color={globalStyles.clFont}
              style={{ marginTop: -5, marginRight: -2 }}
            />
          </OrderDetailsScreenIconWrapper>
        </OrderDetailsScreenTopView>
        <OrderDetailsScreenBottomView>
          <OrderDetailsScreenBlock>
            <OrderDetailsScreenHeadlineView>
              <OrderDetailsScreenHeadlineText>
                ID:
              </OrderDetailsScreenHeadlineText>
            </OrderDetailsScreenHeadlineView>
            <OrderDetailsScreenTextView>
              <OrderDetailsScreenText>{id}</OrderDetailsScreenText>
            </OrderDetailsScreenTextView>
          </OrderDetailsScreenBlock>
          <OrderDetailsScreenBlock>
            <OrderDetailsScreenHeadlineView>
              <OrderDetailsScreenHeadlineText>
                Status:
              </OrderDetailsScreenHeadlineText>
            </OrderDetailsScreenHeadlineView>
            <OrderDetailsScreenTextView>
              <OrderDetailsScreenStatusText status={status}>
                {status}
              </OrderDetailsScreenStatusText>
            </OrderDetailsScreenTextView>
          </OrderDetailsScreenBlock>
          <OrderDetailsScreenBlock>
            <OrderDetailsScreenHeadlineView>
              <OrderDetailsScreenHeadlineText>
                Created at:
              </OrderDetailsScreenHeadlineText>
            </OrderDetailsScreenHeadlineView>
            <OrderDetailsScreenTextView>
              <OrderDetailsScreenText>
                {toLocaleString(createdAt, "en-GB")}
              </OrderDetailsScreenText>
            </OrderDetailsScreenTextView>
          </OrderDetailsScreenBlock>
          <OrderDetailsScreenBlock>
            <OrderDetailsScreenHeadlineView>
              <OrderDetailsScreenHeadlineText>
                User:
              </OrderDetailsScreenHeadlineText>
            </OrderDetailsScreenHeadlineView>
            <OrderDetailsScreenTextView>
              <OrderDetailsScreenText>{userInfo.email}</OrderDetailsScreenText>
            </OrderDetailsScreenTextView>
          </OrderDetailsScreenBlock>
          <OrderDetailsScreenBlock>
            <OrderDetailsScreenHeadlineView>
              <OrderDetailsScreenHeadlineText>
                Order Included:
              </OrderDetailsScreenHeadlineText>
            </OrderDetailsScreenHeadlineView>

            <OrderDetailsScreenProductsWrapper>
              {orderedItems.map((item) => (
                <ProductDetailsItem key={item.id} item={item} />
              ))}
            </OrderDetailsScreenProductsWrapper>
          </OrderDetailsScreenBlock>
          <OrderDetailsScreenBlock>
            <OrderDetailsScreenHeadlineView>
              <OrderDetailsScreenHeadlineText>
                Total:
              </OrderDetailsScreenHeadlineText>
            </OrderDetailsScreenHeadlineView>
            <OrderDetailsScreenTextView>
              <OrderDetailsScreenText>
                ${totalSum.toFixed(2)}
              </OrderDetailsScreenText>
            </OrderDetailsScreenTextView>
          </OrderDetailsScreenBlock>
          <OrderDetailsScreenBlock>
            <OrderDetailsScreenHeadlineView>
              <OrderDetailsScreenHeadlineText>
                Thank you for your purchase!
              </OrderDetailsScreenHeadlineText>
            </OrderDetailsScreenHeadlineView>
          </OrderDetailsScreenBlock>
        </OrderDetailsScreenBottomView>
      </OrderDetailsScreenScrollView>
    </OrderDetailsScreenView>
  );
};

export default OrderDetailsScreen;
