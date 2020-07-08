import firebase from "./firebaseConfig";

export const initializeCartInDB = async (userId, currentCartContent) => {
  // get carts collection reference
  const cartsRef = firebase.database().ref("carts");

  // initialize cart in db as an empty array
  await cartsRef.child(userId).set(currentCartContent);
};

export const updateCartInDB = async (userId, currentCartContent) => {
  // get carts collection reference
  const cartsRef = firebase.database().ref("carts");

  // update cart in db using current cartItems array
  await cartsRef.child(userId).set(currentCartContent);
};

export const fetchCartContentFromDB = async (userId, currentCartContent) => {
  // define collection to store items
  const data = [];

  // get carts collection reference
  const cartsRef = firebase.database().ref("carts").child(userId);

  const isCartAlreadyExists = (userId, currentCartContent) => {
    let isCartExists = false;

    return new Promise((resolve, reject) => {
      cartsRef.once(
        "value",
        async (snap) => {
          if (!snap.exists()) {
            if (currentCartContent.length) {
              await initializeCartInDB(userId, currentCartContent);
              isCartExists = true;
            } else isCartExists = false;
          } else isCartExists = true;
          resolve(isCartExists);
        },
        reject
      );
    });
  };

  const isCartExists = await isCartAlreadyExists(userId, currentCartContent);

  if (isCartExists) {
    // promisify on child-added - return fulfilled data
    return new Promise((resolve, reject) => {
      cartsRef.on(
        "child_added",
        (snap) => {
          data.push(snap.val());
          resolve(data);
        },
        reject
      );
    });
  } else {
    return [];
  }
};
