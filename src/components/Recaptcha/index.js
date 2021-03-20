import { memo } from 'react';

export const Recaptcha = memo(() => (
  <div
    className="g-recaptcha"
    data-sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
  />
));
