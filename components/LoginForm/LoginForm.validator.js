import validator from "validator";
// validator.escape()
// validator.isURL()

/**
 * @function inputValidator - checks certain fil validity
 * @param {object} initialData - object to initialize validator.
 * @param {any} data - any type of value that we want to validate.
 * @param {string} field - field name to perform specific validation for.
 * @param {any} add - additational data we want to compare, for example passwords.
 * @returns - object with errors, as well isValid property.
 */

export const inputValidator = (initialData, data, field, add) => {
  const errors = {
    ...initialData,
  };

  // userEmail
  if (field === "userEmail") {
    if (data.length <= 0) {
      (errors.userEmailError = "Email is required.") &&
        (errors.isValid = false);
    } else if (data.length > 100) {
      (errors.userEmailError = "Email is too long.") &&
        (errors.isValid = false);
    } else if (!validator.isEmail(data)) {
      (errors.userEmailError = "Must be a valid email.") &&
        (errors.isValid = false);
    } else {
      errors.userEmailError = "";
    }
  }

  // userPassword
  if (field === "userPassword") {
    if (data.length <= 0) {
      (errors.userPasswordError = "Password is required.") &&
        (errors.isValid = false);
    } else if (data.length > 100) {
      (errors.userPasswordError = "Password is too long.") &&
        (errors.isValid = false);
    } else if (data.length < 5) {
      (errors.userPasswordError = "Password is not strong enough.") &&
        (errors.isValid = false);
    } else {
      errors.userPasswordError = "";
    }
  }

  if (!errors.userEmailError && !errors.userPasswordError)
    errors.isValid = true;

  return errors;
};
