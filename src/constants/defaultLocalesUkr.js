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
  RELOAD_PAGE: 'Перезавантажити сторінку',
};

const generalInfo = {
  APP_NAME: 'Лифти',
  SWITCH_THEME: 'Переключити світлу/темну тему',
};

const myAccTable = {
  ROW_NAME: 'Ім\'я',
  ROW_ADDRESS_STREET: 'Вулиця',
  ROW_ADDRESS_ENTRANCE: 'Під\'їзд №',
  ROW_ADDRESS_FLAT: 'Квартира №',
  ROW_STATUS_IS_PAID: 'Статус оплати',
  STATUS_PAID: 'Сплачено',
  STATUS_UNPAID: 'Не сплачено',
};

const buildingsTable = {
  BUILDINGS_LIST_NAME: 'Список будівель',
};

export default {
  ...firstStepLogin,
  ...secondStepLogin,
  ...generalInfo,
  ...myAccTable,
  ...buildingsTable,
};
