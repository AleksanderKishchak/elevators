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
};

const generalInfo = {
  APP_NAME: 'Elevators',
  SWITCH_THEME: 'Toggle light/dark theme',
};

export default {
  ...firstStepLogin,
  ...secondStepLogin,
  ...generalInfo,
};
