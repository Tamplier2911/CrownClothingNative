import React from "react";

// components
import ProductForm from "../../components/ProductForm/ProductForm";

// sc
import { CreateProductScreenView } from "./CreateProductScreen.styles";

const CreateProductScreen = ({ navigation, route }) => {
  const { goBack, navigate } = navigation;
  const { edit, item } = route?.params;

  return (
    <CreateProductScreenView>
      <ProductForm
        goBack={goBack}
        navigate={navigate}
        edit={edit}
        item={item}
      />
    </CreateProductScreenView>
  );
};

export default CreateProductScreen;
