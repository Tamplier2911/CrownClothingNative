import * as SQLite from "expo-sqlite";

// initialize db or return db object if initialized
// expects - name, version, description, size
// const db = SQLite.openDatabase(name, version, description, size);
const db = SQLite.openDatabase("CRWNClothing");
// console.log("DB", db);

// Could as well promisify all this goods, leaving as callbacks for study purposes
// In order of promisifing, resolve resultObject, reject errorObject
/*
new Promise((resolve, reject) => {
    resolve(resultObj);
    reject(errorObj);
})
*/

/**
 * @param {string} tableName - string of table name
 * @param {function} action - action triggers with argument of successful or unsuccessful
 * transaction result.
 */

export const initializeTable = (tableName, action) => {
  // perform db transaction - expects cb, error and success

  const cb = (tx) => {
    // expects transaction object - tx
    // transaction object has executeSql method
    // which expects sqlStatement, arguments, success, error

    // sql string
    const sqlStatement = `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL);`;

    // arguments
    const args = [];

    // on success
    const success = (transactionObj, resultObj) => {
      console.log(transactionObj);
      console.log(resultObj);
    };

    // on failure
    const error = (transactionObj, errorObj) => {
      console.log(transactionObj);
      console.log(errorObj);
    };

    // execute sql query
    tx.executeSql(sqlStatement, args, success, error);
  };

  // on failure
  const error = (err) => {
    action(err.message);
  };

  // on success
  const success = () => {
    action(`Table "${tableName}" successfuly created!`);
  };

  // perform transaction
  db.transaction(cb, error, success);
};

/**
 * @param {string} tableName - which table we wanna insert data to
 * @param {array} data - array of argumens consists on order
 * @param {function} action - callback to executed with success or error objects
 */

// store data in SQLite
export const insertToDB = (tableName, data = [], action) => {
  // perform db transaction - expects cb, error and success
  const cb = (tx) => {
    // expects transaction object - tx
    // transaction object has executeSql method
    // which expects sqlStatement, arguments, success, error

    // sql string
    const sqlStatement = `INSERT INTO ${tableName} (title, imageUri) VALUES (?, ?);`;

    // arguments
    const args = [...data];

    // on success
    const success = (transactionObj, resultObj) => {
      console.log(transactionObj);
      console.log(resultObj);
    };

    // on failure
    const error = (transactionObj, errorObj) => {
      console.log(transactionObj);
      console.log(errorObj);
    };

    // execute sql query
    tx.executeSql(sqlStatement, args, success, error);
  };

  // on failure
  const error = (err) => action(err.message);

  // on success
  const success = () => action(`Data successfuly stored in "${tableName}"!`);

  // perform transaction
  db.transaction(cb, error, success);
};

/**
 * @param {string} tableName - from which table we want to fetch data
 * @param {function} action - callback to executed with success or error objects
 */

// store data in SQLite
export const fetchFromDB = (tableName, action) => {
  // perform db transaction - expects cb, error and success
  const cb = (tx) => {
    // expects transaction object - tx
    // transaction object has executeSql method
    // which expects sqlStatement, arguments, success, error

    // sql string
    const sqlStatement = `SELECT * FROM ${tableName};`;

    // arguments
    const args = [];

    // on success
    const success = (transactionObj, resultObj) => {
      console.log(transactionObj);
      console.log(resultObj);
    };

    // on failure
    const error = (transactionObj, errorObj) => {
      console.log(transactionObj);
      console.log(errorObj);
    };

    // execute sql query
    tx.executeSql(sqlStatement, args, success, error);
  };

  // on failure
  const error = (err) => action(err.message);

  // on success
  const success = () => action(`Data successfuly fetched from "${tableName}"!`);

  // perform transaction
  db.transaction(cb, error, success);
};
