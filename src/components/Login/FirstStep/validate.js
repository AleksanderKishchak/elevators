export const validate = (values) => {
  const errors = {};

  if (values.password.length < 9) {
    errors.password = 'SHORT_PASS';
  }

  return errors;
};
