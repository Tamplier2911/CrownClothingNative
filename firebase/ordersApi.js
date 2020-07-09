import firebase from "./firebaseConfig";

export const saveOrderInDB = async (userId, orderObject) => {
  // get orders collection reference
  const ordersRef = firebase.database().ref("orders").child(userId);

  // get new order id
  const id = ordersRef.push().key;

  // append missing properties to order object
  // (sent, arrived, success, declined) <- for update
  orderObject.id = id;
  orderObject.createdAt = firebase.database.ServerValue.TIMESTAMP;

  // save order object to orders collection
  await ordersRef.push(orderObject);

  // return order object to update state
  return orderObject;
};

export const fetchOrdersContentFromDB = async (userId) => {
  // define collection to store items
  const data = [];

  // get orders collection reference
  const ordersRef = firebase.database().ref("orders").child(userId);

  // promisified function that checks if user have some orders
  const isOrdersAlreadyExists = () => {
    let isOrdersExists = false;
    return new Promise((resolve, reject) => {
      ordersRef.once(
        "value",
        (snap) => {
          // if orders collection is initialized turn flag to true
          if (snap.exists()) isOrdersExists = true;
          // else return as it is aka false
          resolve(isOrdersExists);
        },
        reject
      );
    });
  };

  // invoke is order exists checkout
  const isOrdersExists = await isOrdersAlreadyExists();

  // if order exists
  if (isOrdersExists) {
    // promisify on child-added - return fulfilled data
    return new Promise((resolve, reject) => {
      ordersRef.on(
        "child_added",
        (snap) => {
          data.push(snap.val());
          resolve(data);
        },
        reject
      );
    });
  } else {
    // or return empty array
    return data;
  }
};
