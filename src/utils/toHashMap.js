export const toHashMap = (list, uniqueField) => (list || []).reduce((acc, el) => {
  acc[el[uniqueField]] = el;

  return acc;
}, {});
