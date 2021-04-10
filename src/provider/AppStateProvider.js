import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import userMock from '../mocks/user.json';
import { AppStateContext } from './AppStateContext';
import { themeKeys, themes } from '../themes';

export const AppStateProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem('theme') || themeKeys.light;
  const [user, setUser] = useState(userMock);
  // для двухфакторки временное решение
  const [accessAllowed, setAccessAllowed] = useState(false);
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
