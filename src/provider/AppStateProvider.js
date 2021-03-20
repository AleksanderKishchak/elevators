import { useState } from 'react';
import PropTypes from 'prop-types';

import { AppStateContext } from './AppStateContext';

export const AppStateProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    /* ----- */
    setUser,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
