import React from "react";

// components
import Button from "../../components/Button/Button";

// redux
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/modal.actions";
import { deleteOneProductStart } from "../../redux/products/products.actions";

// sc
import {
  EditProductScreenView,
  EditProductScreenWrapper,
  EditProductScreenImageView,
  EditProductScreenImage,
  EditProductScreenTitleView,
  EditProductScreenTitleWrapLeft,
  EditProductScreenTitleWrapRight,
  EditProductScreenTitleText,
  EditProductScreenCatView,
  EditProductScreenCatWrap,
  EditProductScreenCatText,
  EditProductScreenDescriptionView,
  EditProductScreenDescriptionText,
  EditProductScreenControlsView,
  EditProductScreenButtonView,
} from "./EditProductScreen.styles";

const EditProductScreen = ({ route: { params }, navigation }) => {
  const { item } = params;
  const { navigate } = navigation;

  const width = useSelector((state) => state.settings.width);
  const dispatch = useDispatch();

  const { category, description, id, imgUrl, name, price } = item;

  return (
    <EditProductScreenView>
      <EditProductScreenWrapper>
        <EditProductScreenCatView>
          <EditProductScreenCatWrap>
            <EditProductScreenCatText>{category}</EditProductScreenCatText>
          </EditProductScreenCatWrap>
        </EditProductScreenCatView>

        <EditProductScreenImageView>
          <EditProductScreenImage source={{ uri: imgUrl }} width={width} />
        </EditProductScreenImageView>

        <EditProductScreenTitleView>
          <EditProductScreenTitleWrapLeft>
            <EditProductScreenTitleText>{name}</EditProductScreenTitleText>
          </EditProductScreenTitleWrapLeft>
          <EditProductScreenTitleWrapRight>
            <EditProductScreenTitleText>${price}</EditProductScreenTitleText>
          </EditProductScreenTitleWrapRight>
        </EditProductScreenTitleView>

        <EditProductScreenDescriptionView>
          <EditProductScreenDescriptionText>
            {description}
          </EditProductScreenDescriptionText>
        </EditProductScreenDescriptionView>
      </EditProductScreenWrapper>
      <EditProductScreenControlsView>
        <EditProductScreenButtonView>
          <Button
            title={"Delete"}
            action={() =>
              dispatch(
                openModal({
                  text: `Are you sure, that you want to delete "${name}" permanently?`,
                  action: () => {
                    // dispatch delete action on product
                    dispatch(deleteOneProductStart(id));
                    // navigate back to manage screen
                    navigate("Manage");
                  },
                })
              )
            }
          />
        </EditProductScreenButtonView>
      </EditProductScreenControlsView>
    </EditProductScreenView>
  );
};

export default EditProductScreen;
