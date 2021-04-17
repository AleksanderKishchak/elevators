import engLocales from './defaultLocales';
import ukrLocales from './defaultLocalesUkr';

export const AUTH_STEPS = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
};

export const ZP = {
  alt: 47.8213229,
  lgt: 35.1034041,
};

export const LANGS = {
  ENG: 'ENG',
  UKR: 'UKR',
};

export const LOCALES = {
  [LANGS.ENG]: engLocales,
  [LANGS.UKR]: ukrLocales,
};
