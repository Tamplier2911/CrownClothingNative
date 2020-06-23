import { AsyncStorage } from "react-native";

/**
 * @function storeData - async function, accepts any arbitrary value, serializes it to JSON,
 * performs locally data persistence.
 * @param {any} value - pice of data we want to store.
 * @param {string} key - key, at which we want to store pice of data.
 */

export const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("Data saved successfuly!");
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};

/**
 * @function getData - async function, retreives locally stored pice of data, perform deserialization
 * and returns data as it is.
 * * @param {string} key - key, from which we want to retrieve pice of data.
 */

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log("Data retrieved successfuly!");
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};
