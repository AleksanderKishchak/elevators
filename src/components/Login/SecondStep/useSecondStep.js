import { useState } from 'react';
import { useFormik } from 'formik';

import { postAuthCode } from '../../../api';

export const useSecondStep = (onSuccess) => {
  const [isLoading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    postAuthCode(values.code).then(() => {
      setLoading(false);
      onSuccess();
    });
  };

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit,
  });

  return {
    formik,
    isLoading,
  };
};
