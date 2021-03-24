import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

export const themeKeys = {
  light: 'light',
  dark: 'dark',
};

export const themes = {
  [themeKeys.light]: lightTheme,
  [themeKeys.dark]: darkTheme,
};
