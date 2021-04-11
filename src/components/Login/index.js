import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { AUTH_STEPS } from '../../constants';

import { useAppState } from '../../hooks/useAppState';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';
import { useIsLoggedIn } from '../../hooks/config.hooks';

export const LogInForm = () => {
  const [step, setStep] = useState(AUTH_STEPS.FIRST);
  const history = useHistory();
  const { setUser, setAccessAllowed, user } = useAppState();
  const isLoggedIn = useIsLoggedIn();

  const redirect = useCallback(() => {
    const newLocation = user?.isAdmin
      ? '/buildings'
      : '/my-account';

    history.push(newLocation);
  }, [history, user?.isAdmin]);

  const onSuccessFirstStep = (userData) => {
    setStep(AUTH_STEPS.SECOND);
    setUser(userData);
  };

  const onSuccessSecondStep = () => {
    setAccessAllowed(true);
    redirect();
  };

  useEffect(() => {
    if (isLoggedIn) {
      redirect();
    }
  }, [isLoggedIn, redirect]);

  return (
    <>
      {step === AUTH_STEPS.FIRST && (
        <FirstStep onSuccess={onSuccessFirstStep} />
      )}
      {step === AUTH_STEPS.SECOND && (
        <SecondStep onSuccess={onSuccessSecondStep} />
      )}
    </>
  );
};
