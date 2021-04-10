import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AUTH_STEPS } from '../../constants';

import { useAppState } from '../../hooks/useAppState';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';

export const LogInForm = () => {
  const [step, setStep] = useState(AUTH_STEPS.FIRST);
  const history = useHistory();
  const { setUser, setAccessAllowed, user } = useAppState();

  const onSuccessFirstStep = (userData) => {
    setStep(AUTH_STEPS.SECOND);
    setUser(userData);
  };

  const onSuccessSecondStep = () => {
    setAccessAllowed(true);
    const newLocation = user.isAdmin
      ? '/buildings'
      : '/my-account';

    history.push(newLocation);
  };

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
