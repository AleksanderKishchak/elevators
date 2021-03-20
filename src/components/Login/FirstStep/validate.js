export const validate = (values) => {
  const errors = {};

  if (values.password.length < 9) {
    errors.password = 'SHORT_PASS';
  }

  const recaptchaResult = window.grecaptcha?.getResponse?.();

  if (!recaptchaResult) {
    errors.isCaptchaCompleted = 'NEEDS_CAPTCHA';
  }

  return errors;
};
