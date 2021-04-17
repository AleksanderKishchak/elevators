import { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { LangContext } from './LangContext';
import { LANGS, LOCALES } from '../constants';
import { createLocale } from '../utils/locale';

const langKey = 'lang';

export const LangProvider = ({ children }) => {
  const defaultLang = localStorage.getItem(langKey) || LANGS.ENG;
  const [lang, _setLang] = useState(defaultLang);

  const setLang = useCallback((lang) => {
    localStorage.setItem(langKey, lang);
    _setLang(lang);
  }, [_setLang]);

  const locale = useMemo(() => createLocale(LOCALES[lang], LOCALES.ENG), [lang]);

  const value = useMemo(() => ({
    lang, setLang, locale,
  }), [lang, setLang, locale]);

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
