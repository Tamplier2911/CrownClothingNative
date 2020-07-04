import validator from "validator";
// validator.escape()
// validator.isURL()

/**
 * @function inputValidator - checks certain fil validity
 * @param {object} initialData - object to initialize validator.
 * @param {any} data - any type of value that we want to validate.
 * @param {string} field - field name to perform specific validation for.
 * @returns - object with errors, as well isValid property.
 */

export const inputValidator = (initialData, data, field) => {
  const errors = {
    ...initialData,
  };

  // category
  if (field === "category") {
    if (data.length <= 0) {
      (errors.categoryError = "Category is required.") &&
        (errors.isValid = false);
    } else if (data.length > 26) {
      (errors.categoryError = "Category is too long.") &&
        (errors.isValid = false);
    } else {
      errors.categoryError = "";
    }
  }

  // imgUrl
  if (field === "imgUrl") {
    if (data.length <= 0) {
      (errors.imgUrlError = "Image is required.") && (errors.isValid = false);
    } else if (!validator.isURL(data)) {
      (errors.imgUrlError = "Image must be a valid URL.") &&
        (errors.isValid = false);
    } else {
      errors.imgUrlError = "";
    }
  }

  // name
  if (field === "name") {
    if (data.length <= 0) {
      (errors.nameError = "Name is required.") && (errors.isValid = false);
    } else if (data.length > 26) {
      (errors.nameError = "Name is too long.") && (errors.isValid = false);
    } else {
      errors.nameError = "";
    }
  }

  // description
  if (field === "description") {
    if (data.length <= 0) {
      (errors.descriptionError = "Description is required.") &&
        (errors.isValid = false);
    } else if (data.length > 400) {
      (errors.descriptionError = "Description is too long.") &&
        (errors.isValid = false);
    } else {
      errors.descriptionError = "";
    }
  }

  // price
  if (field === "price") {
    if (data.length <= 0) {
      (errors.priceError = "Price is required.") && (errors.isValid = false);
    } else if (Number(data) <= 0) {
      (errors.priceError = "Price cannot be less than 1.") &&
        (errors.isValid = false);
    } else {
      errors.priceError = "";
    }
  }

  if (
    !errors.categoryError &&
    !errors.imgUrlError &&
    !errors.nameError &&
    !errors.descriptionError &&
    !errors.priceError
  )
    errors.isValid = true;

  return errors;
};
