import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import userMock from '../mocks/user.json';
import { AppStateContext } from './AppStateContext';
import { themeKeys, themes } from '../themes';

export const AppStateProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem('theme') || themeKeys.light;
  const [user, setUser] = useState(userMock);
  const [theme, setTheme] = useState(defaultTheme);

  const value = {
    user,
    theme,
    /* ----- */
    setUser,
    setTheme,
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
  children: PropTypes.element.isRequired,
};
