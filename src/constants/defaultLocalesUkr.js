const firstStepLogin = {
  SIGN_IN: 'Увійти',
  LOG_OUT: 'Вийти',
  EMAIL_ADDRESS_LABEL: 'Електронна адреса',
  PASSWORD_LABEL: 'Пароль',
  FORGOT_PASSWORD: 'Вiдновити пароль',
  GO_TO_SIGN_UP: 'Зареєструватись',
  /* Error Messages */
  SHORT_PASS: 'Ваш пароль повинен мати щонайменше 8 символів',
  NEEDS_CAPTCHA: 'Будь ласка, пройдiть reCAPTCHA',
};

const secondStepLogin = {
  SECOND_STEP_LABEL: 'Код підтвердження',
  SEND_CODE: 'Надіслати код підтвердження',
  REQUEST_ERROR: 'Щось пішло не так. Будь ласка спробуйте ще раз.',
  RELOAD_PAGE: 'Перезавантажити',
  LANGS_ENG: 'АНГЛ',
  LANGS_UKR: 'УКР',
};

const generalInfo = {
  APP_NAME: 'Лифти',
  SWITCH_THEME: 'Переключити світлу/темну тему',
  GO_TO_MY_ACC: 'Особистий кабінет',
  GO_TO_MY_BUILDINGS: 'Мої Будівлі',
  NOT_FOUND_PAGE_TITLE: 'Сторінку не знайдено :(',
  NOT_FOUND_PAGE_SUBTITLE: 'Можливо, сторінку, яку ви шукаєте, видалено або ви ввели неправильну URL-адресу',
};

const myAccTable = {
  ROW_NAME: 'Ім\'я',
  ROW_ADDRESS_STREET: 'Вулиця',
  ROW_ADDRESS_ENTRANCE: 'Під\'їзд №',
  ROW_ADDRESS_FLAT: 'Квартира №',
  ROW_ADDRESS_FLOOR: 'Поверх',
  ROW_STATUS_IS_PAID: 'Статус оплати',
  ROW_ADDRESS_PEOPLE_LIVE: 'Людей проживає',
  STATUS_PAID: 'Сплачено',
  STATUS_UNPAID: 'Не сплачено',
};

const buildingsTable = {
  BUILDINGS_LIST_NAME: 'Список будівель',
  BUILDINGS_STREET_TITLE: 'Вулиця',
  BUILDINGS_POST_CODE_TITLE: 'Поштовий індекс',
  BUILDINGS_GO_TO_ENTRANCES: 'Переглянути під\'їзди',
};

const entrancesTable = {
  ENTRANCE_TABLE_NAME: 'Список під’їздів та квартир',
  ENTRANCE_TABLE_ENTRANCE_COLUMN: 'Номер під’їзду',
  ENTRANCE_TABLE_APARTMENTS: 'Квартири в цьому під’їзді',

  APARTMENTS_TABLE_FLOOR: 'Поверх',
  APARTMENTS_TABLE_NUMBER: 'Номер квартири',
  APARTMENTS_TABLE_PEOPLE_LIVE: 'Кількість людей',
  APARTMENTS_TABLE_STATUS: 'Статус оплати',
  EMPTY_APARTMENTS_LIST: 'У цьому під’їзді немає квартир',
  EMPTY_ENTRANCES_LIST: 'У цієї будівлі немає під’їздів',
};

export default {
  ...firstStepLogin,
  ...secondStepLogin,
  ...generalInfo,
  ...myAccTable,
  ...buildingsTable,
  ...entrancesTable,
};
