export const createLocale = (locales) => {
  let localesStore = locales;

  return {
    get(constantName = '') {
      return localesStore?.[constantName] || constantName;
    },
    setLocales(newLocales) {
      localesStore = newLocales;
    },
  };
};
