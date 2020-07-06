import firebase from "./firebaseConfig";

export const saveUserToDB = async (userObj) => {
  // destructure required values from userObj
  const { uid, email, displayName, photoURL } = userObj;

  // get user collection reference
  const usersRef = firebase.database().ref("users");

  // write document into users collection
  await usersRef.child(uid).set({
    displayName,
    email,
    photoURL,
  });
};

export const getCurrentUser = async () => {
  // return a promise

  return new Promise((resolve, reject) => {
    // subscribe form onAuthStateChange

    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
