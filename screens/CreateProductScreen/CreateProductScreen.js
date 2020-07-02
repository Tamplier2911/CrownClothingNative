import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  createOneProduct,
  updateOneProduct,
} from "../../redux/products/products.actions";

// components
import Button from "../../components/Button/Button";

// utils
import { uuid } from "../../utils/uuid";

// sc
import {
  CreateProductScreenView,
  CreateProductScreenScrollView,
  CreateProductScreenTouchable,
  CreateProductScreenWrapper,
  CreateProductScreenAvoiding,
  CreateProductScreenInputBlock,
  CreateProductScreenTextView,
  CreateProductScreenText,
  CreateProductScreenInputWrapper,
  CreateProductScreenTextInput,
  CreateProductScreenControlls,
  CreateProductScreenButtonView,
} from "./CreateProductScreen.styles";

const CreateProductScreen = ({ navigation, route }) => {
  const platform = useSelector((state) => state.settings.platform);
  const dispatch = useDispatch();

  const { goBack, navigate } = navigation;
  const { edit, item } = route?.params;

  // temporary dummy userID
  const userID = "crwn-clothing-shop";

  const [category, setCategory] = useState(edit ? item.category : "");
  const [imgUrl, setImgUrl] = useState(edit ? item.imgUrl : "");
  const [name, setName] = useState(edit ? item.name : "");
  const [description, setDescription] = useState(edit ? item.description : "");
  const [price, setPrice] = useState("");

  const validateAndUpdateProduct = () => {
    // perform validation here
    const product = {
      category: category.trim(),
      imgUrl: imgUrl.trim(),
      name: name.trim(),
      description: description.trim(),
      price: Number(item.price),
      ownerId: item.ownerId,
      id: item.id,
    };

    // update product
    dispatch(updateOneProduct(product));

    // navigate to Manage Screen
    navigate("Manage");
  };

  const validateAndCreateNewProduct = () => {
    // perform validation here
    const product = {
      category: category.trim(),
      imgUrl: imgUrl.toLowerCase().trim(),
      name: name.trim(),
      description: description.trim(),
      price: Number(price),
      ownerId: userID,
      id: uuid(),
    };

    // create product
    dispatch(createOneProduct(product));

    // navigate to Manage Screen
    navigate("Manage");
  };

  const disabledButtonValidatorCreate = () =>
    !category || !imgUrl || !name || !description || !price ? true : false;

  const disabledButtonValidatorEdit = () =>
    !category || !imgUrl || !name || !description ? true : false;

  return (
    <CreateProductScreenView>
      <CreateProductScreenScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <CreateProductScreenTouchable onPress={Keyboard.dismiss}>
          <CreateProductScreenWrapper>
            <CreateProductScreenAvoiding
              behavior={platform === "ios" ? "padding" : "height"}
            >
              <CreateProductScreenInputBlock>
                <CreateProductScreenTextView>
                  <CreateProductScreenText len={category.length}>
                    Category:
                  </CreateProductScreenText>
                </CreateProductScreenTextView>
                <CreateProductScreenInputWrapper>
                  <CreateProductScreenTextInput
                    onChangeText={(text) => setCategory(text)}
                    value={category}
                    placeholder="Product category"
                  />
                </CreateProductScreenInputWrapper>
              </CreateProductScreenInputBlock>

              <CreateProductScreenInputBlock>
                <CreateProductScreenTextView>
                  <CreateProductScreenText len={imgUrl.length}>
                    Image URL:
                  </CreateProductScreenText>
                </CreateProductScreenTextView>
                <CreateProductScreenInputWrapper>
                  <CreateProductScreenTextInput
                    onChangeText={(text) => setImgUrl(text)}
                    value={imgUrl}
                    placeholder="Product image"
                  />
                </CreateProductScreenInputWrapper>
              </CreateProductScreenInputBlock>

              <CreateProductScreenInputBlock>
                <CreateProductScreenTextView>
                  <CreateProductScreenText len={name.length}>
                    Name:
                  </CreateProductScreenText>
                </CreateProductScreenTextView>
                <CreateProductScreenInputWrapper>
                  <CreateProductScreenTextInput
                    onChangeText={(text) => setName(text)}
                    value={name}
                    placeholder="Product name"
                  />
                </CreateProductScreenInputWrapper>
              </CreateProductScreenInputBlock>

              <CreateProductScreenInputBlock>
                <CreateProductScreenTextView>
                  <CreateProductScreenText len={description.length}>
                    Description:
                  </CreateProductScreenText>
                </CreateProductScreenTextView>
                <CreateProductScreenInputWrapper>
                  <CreateProductScreenTextInput
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    placeholder="Product description"
                  />
                </CreateProductScreenInputWrapper>
              </CreateProductScreenInputBlock>

              {edit ? null : (
                <CreateProductScreenInputBlock>
                  <CreateProductScreenTextView>
                    <CreateProductScreenText len={price.length}>
                      Price:
                    </CreateProductScreenText>
                  </CreateProductScreenTextView>
                  <CreateProductScreenInputWrapper>
                    <CreateProductScreenTextInput
                      onChangeText={(text) => setPrice(text)}
                      value={price}
                      keyboardType="number-pad"
                      placeholder="Product price"
                    />
                  </CreateProductScreenInputWrapper>
                </CreateProductScreenInputBlock>
              )}
            </CreateProductScreenAvoiding>
          </CreateProductScreenWrapper>
        </CreateProductScreenTouchable>
      </CreateProductScreenScrollView>
      <CreateProductScreenControlls>
        <CreateProductScreenButtonView>
          <Button title={"Back"} action={goBack} />
        </CreateProductScreenButtonView>
        <CreateProductScreenButtonView>
          {edit ? (
            <Button
              title={"Edit"}
              disabled={disabledButtonValidatorEdit()}
              action={() =>
                Alert.alert("Attention!", "Save changes?", [
                  {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => {},
                  },
                  {
                    text: "Yes",
                    style: "destructive",
                    onPress: validateAndUpdateProduct,
                  },
                ])
              }
            />
          ) : (
            <Button
              title={"Create"}
              disabled={disabledButtonValidatorCreate()}
              action={() =>
                Alert.alert("Attention!", "Create new product?", [
                  {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => {},
                  },
                  {
                    text: "Yes",
                    style: "default",
                    onPress: validateAndCreateNewProduct,
                  },
                ])
              }
            />
          )}
        </CreateProductScreenButtonView>
      </CreateProductScreenControlls>
    </CreateProductScreenView>
  );
};

export default CreateProductScreen;
