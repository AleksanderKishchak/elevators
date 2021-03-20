import { createLocale } from './utils/locale';
import defaultLocales from './constants/defaultLocales';

export const locale = createLocale(defaultLocales);

export const i18n = locale.get;
