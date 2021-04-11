const firstStepLogin = {
  SIGN_IN: 'Sign in',
  LOG_OUT: 'Log out',
  EMAIL_ADDRESS_LABEL: 'Email Address',
  PASSWORD_LABEL: 'Password',
  REMEMBER_ME_LABEL: 'Remember me',
  FORGOT_PASSWORD: 'Forgot password?',
  GO_TO_SIGN_UP: 'Don\'t have an account? Sign Up',
  /* Error Messages */
  SHORT_PASS: 'Your password must be at least 8 symbols long',
  NEEDS_CAPTCHA: 'Please, complete the reCAPTCHA',
};

const secondStepLogin = {
  SECOND_STEP_LABEL: 'Confirmation code',
  SEND_CODE: 'Send confirmation code',
  REQUEST_ERROR: 'Oops, something went wrong. Please try again.',
  RELOAD_PAGE: 'Reload',
};

const generalInfo = {
  APP_NAME: 'Elevators',
  SWITCH_THEME: 'Toggle light/dark theme',
  GO_TO_MY_ACC: 'My Account',
  GO_TO_MY_BUILDINGS: 'My Buildings',
  NOT_FOUND_PAGE_TITLE: 'Page not found :(',
  NOT_FOUND_PAGE_SUBTITLE: 'Maybe the page you are looking for has been removed, or you typed in the wrong URL',
};

const myAccTable = {
  ROW_NAME: 'Name',
  ROW_ADDRESS_STREET: 'Street',
  ROW_ADDRESS_ENTRANCE: 'Entrance №',
  ROW_ADDRESS_FLAT: 'Flat №',
  ROW_ADDRESS_FLOOR: 'Floor',
  ROW_STATUS_IS_PAID: 'Status',
  ROW_ADDRESS_PEOPLE_LIVE: 'Persons registered',
  STATUS_PAID: 'Paid',
  STATUS_UNPAID: 'Not Paid',
};

const buildingsTable = {
  BUILDINGS_LIST_NAME: 'Buildings',
  BUILDINGS_STREET_TITLE: 'Street',
  BUILDINGS_POST_CODE_TITLE: 'Post code',
  BUILDINGS_GO_TO_ENTRANCES: 'See entrances',
};

const entrancesTable = {
  ENTRANCE_TABLE_NAME: 'Entrances and apartments list',
  ENTRANCE_TABLE_ENTRANCE_COLUMN: 'Entrance number',
  ENTRANCE_TABLE_APARTMENTS: 'Apartments in this entrance',

  APARTMENTS_TABLE_FLOOR: 'Floor',
  APARTMENTS_TABLE_NUMBER: 'Apartment number',
  APARTMENTS_TABLE_PEOPLE_LIVE: 'Number of People',
  APARTMENTS_TABLE_STATUS: 'Payment status',
  EMPTY_APARTMENTS_LIST: 'There is no apartments in this entrance',
  EMPTY_ENTRANCES_LIST: 'There is no entrances in this building',
};

export default {
  ...firstStepLogin,
  ...secondStepLogin,
  ...generalInfo,
  ...myAccTable,
  ...buildingsTable,
  ...entrancesTable,
};
