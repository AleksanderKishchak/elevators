export const validate = (values) => {
  const errors = {};
  const countryCodeReg = /\+?380/;
  const numRegExp = /\d{12}/;

  if (!countryCodeReg.test(values.email)) {
    errors.email = 'SHOULD_HAVE_COUNTRY_CODE';
  }

  if (!numRegExp.test(values.email)) {
    errors.email = 'SHOULD_BE_12_CHAR_LONG';
  }

  if (values.password.length < 8) {
    errors.password = 'SHORT_PASS';
  }

  if (!values.isCaptchaCompleted) {
    errors.isCaptchaCompleted = 'NEEDS_CAPTCHA';
  }

  return errors;
};
