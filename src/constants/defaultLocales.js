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
  RELOAD_PAGE: 'Reload Page',
};

const generalInfo = {
  APP_NAME: 'Elevators',
  SWITCH_THEME: 'Toggle light/dark theme',
};

const myAccTable = {
  ROW_NAME: 'Name',
  ROW_ADDRESS_STREET: 'Street',
  ROW_ADDRESS_ENTRANCE: 'Entrance №',
  ROW_ADDRESS_FLAT: 'Flat №',
  ROW_STATUS_IS_PAID: 'Status',
  STATUS_PAID: 'Paid',
  STATUS_UNPAID: 'Not Paid',
};

export default {
  ...firstStepLogin,
  ...secondStepLogin,
  ...generalInfo,
  ...myAccTable,
};
