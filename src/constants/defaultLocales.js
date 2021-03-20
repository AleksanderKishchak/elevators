const firstStepLogin = {
  SIGN_IN: 'Sign in',
  EMAIL_ADDRESS_LABEL: 'Email Address',
  PASSWORD_LABEL: 'Password',
  REMEMBER_ME_LABEL: 'Remember me',
  FORGOT_PASSWORD: 'Forgot password?',
  GO_TO_SIGN_UP: 'Don\'t have an account? Sign Up',
  /* Error Messages */
  SHORT_PASS: 'Your password must be at least 8 symbols long',
};

const secondStepLogin = {
  SECOND_STEP_LABEL: 'Confirmation code',
  SEND_CODE: 'Send confirmation code',
};

export default {
  ...firstStepLogin,
  ...secondStepLogin,
};
