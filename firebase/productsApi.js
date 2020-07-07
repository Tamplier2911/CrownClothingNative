import firebase from "./firebaseConfig";

export const saveProductToDB = async (productObj) => {
  // get products collection reference
  const productsRef = firebase.database().ref("products");

  // get id of current doc
  const id = productsRef.push().key;

  // enhance product with missing fields
  productObj.id = id;
  productObj.createdAt = firebase.database.ServerValue.TIMESTAMP;

  // save product to products collection
  await productsRef.child(id).update(productObj);

  // return product object to update state
  return productObj;
};

export const deleteProductFromDB = async (productId) => {
  // get products collection reference
  const productsRef = firebase.database().ref("products");

  // remove product with specific id from db
  await productsRef.child(productId).remove();

  // return product id to update state
  return productId;
};

export const updateProductInDB = async (productObj) => {
  // get products collection reference
  const productsRef = firebase.database().ref("products");

  // update product with specific id in db
  await productsRef.child(productObj.id).update(productObj);

  // return product object to update state
  return productObj;
};

export const fetchAllProductsFromDB = async () => {
  // define collection to store data
  const data = [];

  // get products collection reference
  const productsRef = firebase.database().ref("products");

  // promisify on child_added - return fulfilled data
  return new Promise((resolve, reject) => {
    productsRef.on(
      "child_added",
      (snap) => {
        data.push(snap.val());
        resolve(data);
      },
      reject
    );
  });
};
