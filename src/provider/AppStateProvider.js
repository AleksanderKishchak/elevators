import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import { AppStateContext } from './AppStateContext';
import { themeKeys, themes } from '../themes';

/* {
    id: 1,
    isAdmin: true,
    buildingId: [
      0,
      1,
      2,
    ],
    firstName: 'Ivan 1',
    lastName: 'Ivanov 1',
    apartmentId: 1,
    status: {
      isPaid: true,
    },
  } */

export const AppStateProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem('theme') || themeKeys.light;
  const [user, setUser] = useState(null); // TODO change to null
  // для двухфакторки временное решение
  const [accessAllowed, setAccessAllowed] = useState(false); // TODO change to false
  const [theme, setTheme] = useState(defaultTheme);

  const value = {
    user,
    theme,
    accessAllowed,
    /* ----- */
    setUser,
    setTheme,
    setAccessAllowed,
  };

  return (
    <AppStateContext.Provider value={value}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
