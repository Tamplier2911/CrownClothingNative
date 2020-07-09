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

  // promisified function that check if user cart already exists
  const isCartAlreadyExists = (userId, currentCartContent) => {
    let isCartExists = false;

    return new Promise((resolve, reject) => {
      cartsRef.once(
        "value",
        async (snap) => {
          // if no value
          if (!snap.exists()) {
            // check if we have current content
            if (currentCartContent.length) {
              // if so initialize cart with current content user added
              await initializeCartInDB(userId, currentCartContent);
              isCartExists = true;
              // else let cart existance to be false
            } else isCartExists = false;
          } else isCartExists = true;
          resolve(isCartExists);
        },
        reject
      );
    });
  };

  // invoke existance checker function
  const isCartExists = await isCartAlreadyExists(userId, currentCartContent);

  // if cart indeed exists, fetch all items initialized in there
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
    // else return empty array
    return [];
  }
};
