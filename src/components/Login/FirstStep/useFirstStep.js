import { useState } from 'react';
import { useFormik } from 'formik';

import { postLogin } from '../../../api';
import { validate } from './validate';

export const useFirstStep = (onSuccess) => {
  const [isLoading, setLoading] = useState(false);

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    postLogin(email, password).then(() => {
      setLoading(false);
      onSuccess();
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

  return {
    formik,
    isLoading,
  };
};