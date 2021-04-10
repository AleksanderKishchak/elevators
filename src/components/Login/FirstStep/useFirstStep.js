import { useState } from 'react';
import { useFormik } from 'formik';

import { postLogin } from '../../../api';
import { validate } from './validate';

export const useFirstStep = (onSuccess) => {
  const [isLoading, setLoading] = useState(false);

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    postLogin(email, password).then((user) => {
      setLoading(false);
      onSuccess(user);
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // Is not actually used
      isCaptchaCompleted: false,
    },
    onSubmit,
    validate,
  });

  const onRecaptchaChange = (token) => {
    formik.setFieldValue('isCaptchaCompleted', Boolean(token));
  };

  return {
    formik,
    isLoading,
    onRecaptchaChange,
  };
};
