import { createLocale } from './utils/locale';
// import defaultLocales from './constants/defaultLocales';
import defaultLocalesUKR from './constants/defaultLocalesUkr';

export const locale = createLocale(defaultLocalesUKR);

export const i18n = locale.get;
