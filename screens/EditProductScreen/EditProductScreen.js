import React from "react";

// components
import Button from "../../components/Button/Button";
import EditIcon from "../../components/EditIcon/EditIcon";

// redux
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/modal.actions";
import {
  deleteOneProduct,
  updateOneProduct,
} from "../../redux/products/products.actions";

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
            <EditIcon
              action={() =>
                dispatch(
                  openModal({
                    text: category,
                    action: () => console.log("test action"),
                  })
                )
              }
              position={{ right: "5px", top: "5px" }}
            />
          </EditProductScreenCatWrap>
        </EditProductScreenCatView>

        <EditProductScreenImageView>
          <EditProductScreenImage source={{ uri: imgUrl }} width={width} />
          <EditIcon
            action={() =>
              dispatch(
                openModal({
                  text: imgUrl,
                  action: () => console.log("test action"),
                })
              )
            }
            position={{ alignSelf: "center", right: "5px", top: "5px" }}
          />
        </EditProductScreenImageView>

        <EditProductScreenTitleView>
          <EditProductScreenTitleWrapLeft>
            <EditProductScreenTitleText>{name}</EditProductScreenTitleText>
            <EditIcon
              action={() =>
                dispatch(
                  openModal({
                    text: `${name}, ${price}`,
                    action: () => console.log("test action"),
                  })
                )
              }
              position={{ alignSelf: "flex-end", top: "8px" }}
            />
          </EditProductScreenTitleWrapLeft>
          <EditProductScreenTitleWrapRight>
            <EditProductScreenTitleText>${price}</EditProductScreenTitleText>
          </EditProductScreenTitleWrapRight>
        </EditProductScreenTitleView>

        <EditProductScreenDescriptionView>
          <EditProductScreenDescriptionText>
            {description}
          </EditProductScreenDescriptionText>
          <EditIcon
            action={() =>
              dispatch(
                openModal({
                  text: description,
                  action: () => console.log("test action"),
                })
              )
            }
            position={{ alignSelf: "flex-end", bottom: "0px" }}
          />
        </EditProductScreenDescriptionView>
      </EditProductScreenWrapper>
      <EditProductScreenControlsView>
        <EditProductScreenButtonView>
          <Button
            title={"Edit"}
            disabled={true}
            action={() => console.log("editing")}
          />
        </EditProductScreenButtonView>
        <EditProductScreenButtonView>
          <Button
            title={"Delete"}
            action={() =>
              dispatch(
                openModal({
                  text: `Are you sure, that you want to delete "${name}" permanently?`,
                  action: () => {
                    // dispatch delete action on product
                    dispatch(deleteOneProduct(id));
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
