export const createLocale = (locales, defaultLocales) => {
  let localesStore = { ...defaultLocales, ...locales };

  return {
    get(constantName = '') {
      return localesStore?.[constantName] || constantName;
    },
    setLocales(newLocales) {
      localesStore = newLocales;
    },
  };
};
