import { makeStyles/* , useTheme */ } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import { Menu, MenuItem } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
// import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
// import Tooltip from '@material-ui/core/Tooltip';

import { i18n } from '../../appConfig';
import { useHeader } from './useHeader';
import { useIsLoggedIn } from '../../hooks/config.hooks';
// import { themeKeys } from '../../themes';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.info.dark,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const isLoggedIn = useIsLoggedIn();
  const {
    shouldShowGoToMyAccBtn,
    showMyBuildingsBtn,
    goToMyAcc,
    goToMyBuildings,
    handleMenu,
    handleClose,
    anchorEl,
    open,
    logOut,
  } = useHeader();

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
        {isLoggedIn && (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {shouldShowGoToMyAccBtn && (
                <MenuItem onClick={goToMyAcc}>
                  {i18n('GO_TO_MY_ACC')}
                </MenuItem>
              )}
              {showMyBuildingsBtn && (
                <MenuItem onClick={goToMyBuildings}>
                  {i18n('GO_TO_MY_BUILDINGS')}
                </MenuItem>
              )}
              {isLoggedIn && (
                <MenuItem onClick={logOut}>
                  {i18n('LOG_OUT')}
                </MenuItem>
              )}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
