import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  updateOneProductStart,
  createOneProductStart,
} from "../../redux/products/products.actions";

// components
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

import { inputValidator } from "./ProductForm.validator";

// sc
import {
  ProductFormView,
  ProductFormScrollView,
  ProductFormTouchable,
  ProductFormWrapper,
  ProductFormAvoidingView,
  ProductFormControlls,
  ProductFormButtonsView,
} from "./ProductForm.styles";

const ProductForm = ({ goBack, navigate, edit, item }) => {
  const platform = useSelector((state) => state.settings.platform);
  const userID = useSelector((state) => state.auth.currentUser.uid);
  const dispatch = useDispatch();

  // state
  const [category, setCategory] = useState(edit ? item.category : "");
  const [imgUrl, setImgUrl] = useState(edit ? item.imgUrl : "");
  const [name, setName] = useState(edit ? item.name : "");
  const [description, setDescription] = useState(edit ? item.description : "");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({
    categoryError: "",
    imgUrlError: "",
    nameError: "",
    descriptionError: "",
    priceError: "",
    isValid: false,
  });

  const {
    categoryError,
    imgUrlError,
    nameError,
    descriptionError,
    priceError,
    isValid,
  } = errors;

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
      createdAt: item.createdAt,
    };

    // update product
    dispatch(updateOneProductStart(product));

    // navigate to Manage Screen
    navigate("Manage");
  };

  const validateAndCreateNewProduct = () => {
    // perform validation here
    const product = {
      category: category.toLowerCase().trim(),
      imgUrl: imgUrl.toLowerCase().trim(),
      name: name.trim(),
      description: description.trim(),
      price: Number(price),
      ownerId: userID,
    };

    // create product
    dispatch(createOneProductStart(product));

    // navigate to Manage Screen
    navigate("Manage");
  };

  const disabledButtonValidatorCreate = () =>
    !category || !imgUrl || !name || !description || !price || !isValid
      ? true
      : false;

  const disabledButtonValidatorEdit = () =>
    !category || !imgUrl || !name || !description || !isValid ? true : false;

  return (
    <ProductFormView>
      <ProductFormScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <ProductFormTouchable onPress={Keyboard.dismiss}>
          <ProductFormWrapper>
            <ProductFormAvoidingView
              behavior={platform === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={100}
            >
              <TextInput
                onChangeText={(text) => setCategory(text)}
                onBlur={() =>
                  setErrors({ ...inputValidator(errors, category, "category") })
                }
                value={category}
                placeholder="Product category"
                label={categoryError ? categoryError : "Category:"}
                error={categoryError ? true : false}
              />

              <TextInput
                onChangeText={(text) => setImgUrl(text)}
                onBlur={() =>
                  setErrors({ ...inputValidator(errors, imgUrl, "imgUrl") })
                }
                value={imgUrl}
                placeholder="Product image"
                label={imgUrlError ? imgUrlError : "Image URL:"}
                error={imgUrlError ? true : false}
              />

              <TextInput
                onChangeText={(text) => setName(text)}
                onBlur={() =>
                  setErrors({ ...inputValidator(errors, name, "name") })
                }
                value={name}
                placeholder="Product name"
                label={nameError ? nameError : "Name:"}
                error={nameError ? true : false}
              />

              <TextInput
                onChangeText={(text) => setDescription(text)}
                onBlur={() =>
                  setErrors({
                    ...inputValidator(errors, description, "description"),
                  })
                }
                value={description}
                placeholder="Product description"
                label={descriptionError ? descriptionError : "Description:"}
                error={descriptionError ? true : false}
              />

              {edit ? null : (
                <TextInput
                  onChangeText={(text) => setPrice(text)}
                  onBlur={() =>
                    setErrors({ ...inputValidator(errors, price, "price") })
                  }
                  value={price}
                  keyboardType="number-pad"
                  placeholder="Product price"
                  label={priceError ? priceError : "Price:"}
                  error={priceError ? true : false}
                />
              )}
            </ProductFormAvoidingView>
          </ProductFormWrapper>
        </ProductFormTouchable>
      </ProductFormScrollView>
      <ProductFormControlls>
        <ProductFormButtonsView>
          <Button title={"Back"} action={goBack} />
        </ProductFormButtonsView>
        <ProductFormButtonsView>
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
        </ProductFormButtonsView>
      </ProductFormControlls>
    </ProductFormView>
  );
};

export default ProductForm;
