import PropTypes from 'prop-types';

import { useLangs } from '../../hooks/useLangs';

export const T9n = ({ t }) => {
  const { locale } = useLangs();

  return (
    <>
      {locale.get(t) || ''}
    </>
  );
};

T9n.propTypes = {
  t: PropTypes.string.isRequired,
};
