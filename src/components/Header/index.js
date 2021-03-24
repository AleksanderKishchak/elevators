import { makeStyles/* , useTheme */ } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
// import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
// import Tooltip from '@material-ui/core/Tooltip';

import { useAppState } from '../../hooks/useAppState';
import { i18n } from '../../appConfig';
// import { themeKeys } from '../../themes';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.info.dark,
  },
  title: {
    flexGrow: 1,
  },
}));

export const MenuAppBar = () => {
  const classes = useStyles();

  const {
    user,
    // theme,
    setUser,
    // setTheme,
  } = useAppState();

  const logOut = () => {
    setUser(null);
  };

  // const toggleTheme = () => {
  //   const newTheme = theme === themeKeys.light ? themeKeys.dark : themeKeys.light;
  //   localStorage.setItem('theme', newTheme);
  //   setTheme(newTheme);
  // };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {i18n('APP_NAME')}
        </Typography>
        {/* <Tooltip title={i18n('SWITCH_THEME')} arrow>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
          >
            {
              theme === 'light'
                ? <Brightness4Icon />
                : <BrightnessHighIcon />
            }
          </IconButton>
        </Tooltip> */}
        {user && (
          <Button color="inherit" onClick={logOut}>
            {i18n('LOG_OUT')}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
