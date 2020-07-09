// some weirdo things
// import { temporaryProducts } from "../../redux/products/products.constants";
// import { saveProductToDB } from "../../firebase/productsApi";

// console.log(temporaryProducts);
// console.log(saveProductToDB);

const fillDbWithConstantData = async (
  userId,
  constantData,
  dbSaverFunction
) => {
  const productObjects = [];
  constantData.forEach((obj) => {
    const productObject = {};
    productObject.category = obj.category;
    productObject.imgUrl = obj.imgUrl;
    productObject.name = obj.name;
    productObject.description = obj.description;
    productObject.price = obj.price;
    productObject.ownerId = userId;

    productObjects.push(productObject);
  });

  const successfulOperations = [];
  productObjects.forEach(async (obj) => {
    const data = await dbSaverFunction(obj);
    if (data) successfulOperations.push(true);
  });

  return {
    successfulOperations,
    length: successfulOperations.length,
  };
};

// fillDbWithConstantData(userObject.uid, temporaryProducts, saveProductToDB);
