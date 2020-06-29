/**
 * @function toLocaleString - function takes date, converts it to human readeble format.
 * @param {number} date - e.g. Date.now()
 * @param {string} locale - OPTIONAL, by default asigns current browser localization, else
 * can be passed shorters "en-GB", "ru-RU"
 */

export const toLocaleString = (date, locale) => {
  return new Date(date).toLocaleString(locale, {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
